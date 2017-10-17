# DnD without levels

This system deals with DnD style attributes, skills, etc.,  but without the
class/level system. 

The idea is that each gain in level in a general skill gets a higher die roll
(1d4 goes to 1d6 to 1d8, ....). Then a specialization in a skill lowers the
die in exchange for a bonus, e.g., 1d20 becomes 1d12 + 8. 

This sets all of that up. 

We have a variety of tools. 

Our file structure is fairly simple. Right now, we just have a single html
file that handles this: 

* [index.html](#html "save:")

We also load in from the data.md file

* [data](data.md "load:")


## TODO

add in spells, features, feats (maybe they are all the same mechanism?)

equipment and their effects

create server to store characters

create locks on hours to prevent changes, add in amounts to add along with
which skills progress bars? 

better print view, summary of important and commonly referred stuff

magic items/spells: bonus directly or hour upping or level upping? probably
bonus for simplicity. 

## JSON reader compute hours

To get a basic setup going, we start with code that takes in two objects: the
core setup data with the hour rules and another object that has various
levels. It then gets computed. 

 
### Convert Skills

We create a single (flat) object with keys `general:school:skill`, `general:school`,
`general`. This allows us to know the associations and have non-unique names
for either school or skill and yet still get there. We can also do direct
lookups with this. 


This should parse the above and return an object of the form 
`General : School :  skill 1, skill 2, ...`

For now, we use a limited option. 

For each physical

    function (input) {
        const lines = input.split("\n");
        const skills = {};
        let cur =[]; 
        let general = '';
        let school = '';


        lines.forEach(function (line) {
            
This matches the general category that consists of a single word and a colon. 

            let m = line.match(/^(\w+)\:/);
            // General category found
            if (m) {
                general = m[1];
                skills[general] = 0;
                return;
            } 


This matches the school and all its skills. It has the form
(spaces)(1 attribute) (2 school): (3 skill, skill, ...)
We ignore the attribute in this object.


            m = line.match(/^\s+([A-Z]{3})\s+([^:]+)\:(.*)/);
            if (m) {
                school = general + ":" + m[2].trim();
                skills[school] = 0;
                let raw = m[3].split(",").map( w => w.trim() );
                raw.forEach( (val) => {skills[school+":"+val] = 0});
                return;
            }

Any line that does not match, we ignore.

        });
        
        return JSON.stringify(skills);

    }

[convert-skills](# "define: ")



### Convert Use of Attribute Bonus

This is similar to convert skills, but this extracts the attribute. This is
needed when computing the bonus. 

    function (input) {
        const lines = input.split("\n");
        const schools = {};
        let cur =[]; 
        let general = '';
        let school = '';

        lines.forEach(function (line) {
            
This matches the general category that consists of a single word and a colon. 

            let m = line.match(/^(\w+)\:/);
            // General category found
            if (m) {
                general = m[1];
                return;
            } 


This matches the school and all its skills. It has the form
(spaces)(1 attribute) (2 school): (3 skill, skill, ...)
We ignore the attribute in this object.


            m = line.match(/^\s+([A-Z]{3})\s+([^:]+)\:(.*)/);
            if (m) {
                school = general + ":" + m[2].trim();
                schools[school] = m[1];
                return;
            }

Any line that does not match, we ignore.

        });
        
        return JSON.stringify(schools);

    }

[convert-att-bonus](# "define:")



## Load Spell Data

There is a spell data file that I have which can be loaded up to produce a
spell list. Need to modify it for the elements. 


## HTML Form

This will have all the attributes, skills, etc. Plug in the total number and
it computes the hours, putting that next to the label. 

   

## State

This is the state of the modifier object for a character. Once computed using
the hours, then native state is added. 


    const Char = function (obj) {
        if (obj) {
            this.data = obj;
        } else {
            this.data = this.base();
        }
        this.derived = this.base();
        return this;
    };

    Object.assign(Char.prototype, (function () {
        const ret =  {
            derive : _"derive",
            level : _"level",
            hours : _"hours",
            rolls : _"rolls",
            attBonus : _"data::skills |convert-att-bonus ",
            base : _"base",
            presentAtt : [ "STR", "DEX", "CON", "INT", "WIS", "CHA"],
            presentPoints : [ "LP", "SP", "MP" ],
        };
        return ret;
        })()
    );







### Base
    
This is the base object with all the stuff that goes into a character. 




    function () {
        return { race : 'human',
            name : 'jd',
            attributes : {
                    "STR": 0,
                    "DEX": 0,
                    "CON": 0,
                    "INT": 0,
                    "WIS": 0,
                    "CHA": 0
            },
            points : {
                "LP" : 0,
                "SP" : 0,
                "MP" : 0,
            },
            skills : _"data::skills|convert-skills ",
            custom : ''
        };
    }


### Derive

This is a function that uses the data and constructs the derived object's
values.

    function () {
        let char = this;
        let computeLevel = this.level;
        let hours = this.hours;
        let data = char.data;
        let der = char.derived;
        der.hours = 0;
        der.skillTree = { '' : []}; // general goes here
        der.name = data.name;
        der.race = data.race.toLowerCase();
        _":attributes"
        _":points"
        _":skills"

    }


[attributes]()

This constructs the attributes bonus from the attributes hours. 

We also add in the racial abilities.

    char.presentAtt.forEach( 
        function (att, ind) { 
            const dh = data.attributes[att];
            const race = char.hours.races.hasOwnProperty(der.race) ?
                der.race : "human";
            der.attributes[att] = computeLevel(hours.attributes, dh+ 
                char.hours.races[race][ind]); 
            der.hours += dh;
        }
    );


[points]()

Points from hours. Each point has constant cost. 

     char.presentPoints.forEach( 
        function (att) { 
            let dh = data.points[att];
            der.points[att] = computeLevel(hours.points[att], dh); 
            der.hours += dh;
        }
     );
 
[skills]()

We will travel down the skills in both data and derive. For each skill, we get
levels for each of them and then add the levels together. Since we only record
the dice rolls, we have no cache for the levels already computed. Wasteful,
probably, but should be insignificant. 

We look at the hours and use the levels. We
multiply the hours by factors of 3 to make them easier in the lower school,
skill, specialty, whatever. The category skill level is at the top. 

We sort on the length of the keys to aid our efforts in making the skill tree
which allows us to create the skill structure in the Dom. 

    let sk = der.skills;
    let skh = data.skills;
    Object.keys(skh).sort().forEach( function (key) {
        let parts = key.split(":");
        der.skillTree[parts.slice(0,-1).join(":")].push(key);
        let level = 0;
        let cur = '';
        let factor = 1;
        let bonus = 0;
        while (parts.length) {
            cur += parts.shift();
            level += computeLevel(hours.skills, skh[cur]*factor);
            // bonus comes from attributes; often not listed
            bonus += der.attributes[char.attBonus[cur]] || 0;
            cur += ':'; //to make sure key is ready for name next round
            factor *= 3; 
        }
        level = Math.min(level, char.rolls.skills.length-1);
        sk[key] = char.rolls.skills[level].
            map( (v,i) => ( (i === 0) ? v : v + bonus));
        der.skillTree[key] = [];
    });



### Level

This computes the level based on being greater than the value in the array. 

    function (arr, val) {
        return arr.reduce( function (acc, cur) {
            return (val >= cur ) ? acc + 1 : acc;
        }, 0);
    }




### Hours

This is the object that handles the hour computations. We use the dnd levels
data from the data object as source, but we create the raw object here.         

    _"data::dnd levels |  make-hours |log "


[make hours]()

This takes in the levels from DnD, parses them into numbers, dividing by 10%.

We create the object based on: 

* Base. `1/12` of the level difference is the base skill level difference. 
* Schools cost 3 times a skill, General costs three times the school except it
  starts at 0 (so it is shifted a bit). The idea is that it is more efficient
  if one wants all the different skills in a school or general. Also, as the
  skill gets higher, it might be better to spend it on school or general
  learning to advance. Kind of like realizing more generalities from diving
  into specifics. 
* The attributes cost every 3rd level amount, averaged. So 30+60+180 = 270 /3
  = 90 for first attribute level.  The next would be about 670. 
* LP points satisfy 10 points for 10% of the level. 
* 1 SP is 10% of a level (Surge, adrenaline).
* 5 MP per 10% level. 
* Spells. The spells leveling requires the average of the next two levels. So
  30 for 1st level, (60 + 180)/2 = 120, and so on. 
* Class feature progression, if used, is based on the levels and the skill
  costs, times 2.
* Feats have a fixed cost of 3 attribute levels. 

---

    function (input) {
        const ret = {};
        const dnd = input.split("\n").map( l => Math.round(parseInt(l.trim(), 10)/12 ) );
        let prev = 0;
        const diff = dnd.map( v => { const r = v-prev; prev = v; return r;} );
        ret.skills =  dnd.map( v => v*9);
        ret.attributes = dnd.map(v=> v*20).slice(0,8); 
        ret.races = {_"data::races | .split \n | .map
            function(`( r) => {r=r.split(":");
                r[0] = r[0].trim();
                r[1] = r[1].trim(); 
                return '"'+r[0] +'":[' + r[1] +']';
            }`) | .join echo(',') "};
        Object.keys(ret.races).forEach(function (race) {

We want to translate the attribute bonuses of races into hours. Each unit
represents half an attribute level. So we look in the dnd table at v/2,
rounded up then down so 1 and 2 go to 0. A 0 value is just 0. We then multiply by the same factor as in the attributes, but we divide it in half for odds. 

            ret.races[race] = ret.races[race].map( v =>  (v === 0) ? 0 : 
                dnd[ Math.ceil(v/2)-1 ]*20*(1 -(v%2)/2 ) )
        });
        ret.points = {};
        let runsum = 0;
        ret.points.LP = _":multiple sum | sub NUM, 5";
        runsum = 0;
        ret.points.SP = _":multiple sum | sub NUM, 1";
        runsum = 0;
        ret.points.MP = _":multiple sum | sub NUM, 3";
        return JSON.stringify(ret);
    }


[make-hours](# "define: ")


[skip avg]()

This goes over the values of the skill levels, doing every Nth one and then divides by N; it starts,
however, at the first one.

    Array(LEN).fill(0).map( (v, i) => Math.floor(dnd[NUM*i]/NUM) )


[old skip avg]()

    
    dnd.filter( (v,ind) =>  (ind) % N).
        map ( v => Math.floor(v/N) )


[multiple sum]()


This is a bit of a complicated piece  of code. It creates an array with
repeated values but with sum being totalled at the same time. 

So we create an 0 array of NUM items. Then we iterate over the difference of
levels array with each one creating an array of NUM items with the diffed
value divided by NUM, then we do a running sum mapping. 


    Array.prototype.concat.apply(Array(NUM).fill(0), 
        diff.map( (v => Array(NUM).fill(0).map( () => Math.floor(v/NUM)).
                        map( (dv) => (runsum += dv) )
                  )
        )
    )



### Rolls

This translates the hours into the benefits (vice versa) 

    {
        
This will create an array by splitting the dice levels on the commas,
trimming, then creating for each pair an array of the dice roll and the bonus. 

        skills : _"data::dice levels | arrayify echo(','), echo('\'), true() |
             .map function(`(t) => {let arr = t.split('+'); 
                arr[1] = parseInt(arr[1],10);
                arr[0] = arr[0].replace("d0", "d");
                return arr;
            }`) | toJSON | log ",
        spells : _"data::magic | arrayify echo(','), echo('\'), true() |
            .map function(`(t) => parseInt(t, 10)`) |
            toJSON"
    }



## Main

This is the main setup.


    let char;



    _"state"

    char = new Char();
    
    _"name"
    _"race"
    _"attributes"
    _"points"
    _"skills"
    _"extra"

spells, feats, features

    _"total hours"


    char.derive();
    
    const Input = { _"input | view" };

`const Output = { _"output | view" };
const Json = { _"json output | view" };`

    let id;
    const history = [];
    history.add = _"save:add";
    history.get = _"save:get";
    let cur = 0;
    const Save = { _"save | view" };

    const toggleInputListener = _"toggle input:listener";

    const root = document.body;
    m.mount(root, { 
        _":main| view " 
    });


[main]() 

This is the main split at the top level between the input form and the output
character. 

    [ m(Input), m(Save) ] 

## Input 

This is the input component. 

    m("#input", [
            m("h1", "Character Creation", _"toggle input"),
            m(iName),
            m(iRace),
            m(oHours),
            m(iAttributes),
            m(iPoints),
            m(recurseSkill, {lower:char.derived.skillTree[''], level:0}),
            m(Extra)

    ])
        
   
## toggle input

This toggles the input boxes and eliminates skills that have no extra
attributes. 

    m("button", {onclick: toggleInputListener}, "Toggle Input")


[listener]()

This will be an ife returning the listener function to maintain the inner
state of on or off. It starts on. The listener when toggled to off will hide
all inputs and skills, etc, that are not relevant. 

    (function () {
        let showInput = true;
        return function () {
            showInput = !showInput;
            if (showInput) {
                document.querySelectorAll(".hide").
                    forEach( el => el.classList.remove("hide")
                );
            } else {
                document.querySelectorAll("input").
                    forEach( el => el.classList.add("hide") );
                document.querySelectorAll(".out").
                    forEach( function (el) {
                        if (el.textContent === '') {
                            el.parentElement.classList.add("hide");
                        }
                    });
            }
            
        };

    })() 

    


## Save

This handles the loading and saving of the character.

    m("#save", 
        m("h1", "Saving and Loading"),
        m("label", "Unique Identifier:"),
        m("input.long[type=text]", {oninput: m.withAttr("value", _":id"), value : id}),
        m("button", {onclick: _":save"}, "Save"),
        m("button", {onclick: _":load"}, "Load"),
        m("button", {onclick: _":back"}, "Back"),
        m("button", {onclick: _":forward"}, "Forward"),
        m("button", {onclick: _":new"}, "New")
    )

[save]()

Saves the data object into local storage and into the state history. 

    function () {
        let str = history.add(char.data);
        cur = history.length;
        let old = localStorage.getItem(id);
        if (old) {
           history.add(old); 
        }
        localStorage.setItem(id, str);
    }

[load]()

Loads id object

    function () {
        history.add(char.data);
        let str = localStorage.getItem(id);
        if (str) {
            char.data = JSON.parse(str);
            history.add(char.data);
            char.derive();
        } else {
            console.log("no such item");
        }
    }

[back]()

Goes to the previous history object

    function () {
        if (cur > 0) {
            cur -= 1;
            history.add(char.data);
            char.data = history.get(cur);
            char.derive();
        }
    }


[forward]()

    function () {
        if (cur < (history.length-1) ) {
            cur += 1;
            history.add(char.data);
            char.data = history.get(cur);
            char.derive();
        }
    }

[new]() 


    function () {
        history.push(JSON.stringify(char.data));
        cur = history.length;
        char.data = char.base();
        char.derive();
    }

[id]() 

This updates the id

    function (val) {
        id = val;
        document.querySelector("title").text = val;
    }

[get]()

This gets an entry from history. 

    function (cur) {
        let str = this[cur];
        return JSON.parse(str);
    }
        

[add]()

This adds an entry. It checks for it first. 

    function (obj) {
        let str = JSON.stringify(obj);
        if (history.indexOf(str) === -1) {
            history.push(str);
        }
        return str;
    }


## Output 


This shows the compiled data. 

    m(".output", [
        m("h1", "Actual"),
        m(oName),
        m(oRace),
        m(oAttributes),
        m(oPoints)
    ])


### Name

This handles the name field

    let iName = { _":input| view" };
    let oName = { _":output | view" };
    const setName = function (value) {
        this.data.name = value;
        this.derive();
    };



[input]()

     m("#iname.input", [
         m("label", "Name"),
         m("input.long[type=text]", {oninput: m.withAttr("value", setName , char), value: char.data.name}),
         m("span.out", char.data.name)
     ])
          
         
[output]()

    m("#oname", "Name: " +char.data.name)

### Race

This handles the race field

    let iRace = { _":input| view" };
    let oRace = { _":output | view" };
    const setRace = function (value) {
        this.data.race = value;
        this.derive();
    };



[input]()

     m("#irace.input", [
        m("label", "Race"),
        m("input.long[type=text]", {oninput: m.withAttr("value", setRace , char), value: char.data.race}),
        m("span.out", char.data.race)
     ])
          
         
[output]()

    m("#orace", "Race: " + char.data.race)


### Attributes

We create inputs for the attribute hours. Then we translate those into the
defined attributes. 



    const setAtt = _":set attributes";
    const iAttributes = { _":input | view" };
    const oAttributes = {_":output | view" };


[input]()

    m("ul#iAtt", 
       char.presentAtt.map(function (att, ind) {
         return m("li.input",  
            m("label", att+": "),
            m("input[type=text]", {oninput: m.withAttr("value", setAtt[ind]), 
                value:char.data.attributes[att]
            }),
            m("span.out",  "+" + char.derived.attributes[att])
         );
        })
    )


[set attributes]()

This creates six functions that will be used in the handlers. It takes in the
present Attributes array and returns an array with those attributes as
functions calling them. 

    char.presentAtt.map(function (att) {
        return function (val) {
            val = char.data.attributes[att] = parseInt(val, 10) || 0;
            char.derive();
        };
    })

 
[output]() 

    m("ul#oAtt", 
       char.presentAtt.map(function (att) {
         return m("li", char.derived.attributes[att]);  
        })
    )    




### Points

This deals with increasing life points, stamina points, and magic points.


    const setPoints = _":set points";
    const iPoints = { _":input | view" };
    const oPoints = {_":output | view" };


[input]()

    m("ul#iPoint", 
      char.presentPoints.map(function (att, ind) {
         return m("li.input",  
            m("label", att+": "),
            m("input[type=text]", {oninput: m.withAttr("value", setPoints[ind]), 
                value:char.data.points[att]
            }),
            m("span.out", char.derived.points[att])
         );
        })
    )


[set points]()

This creates three functions that will be used in the handlers. It takes in the
present points array and returns an array with those attributes as
functions calling them. 

    char.presentPoints.map(function (att) {
        return function (val) {
            val = char.data.points[att] = parseInt(val, 10) || 0;
            char.derive();
        };
    })

 
[output]() 

    m("ul#oPoint", 
       char.presentPoints.map(function (att) {
         return m("li", att + ": +" + char.derived.points[att]);  
        })
    )    



### Skills

This creates the skills inputs and outputs. 

    const listener = function (val) { 
        char.data.skills[this] = parseInt(val, 10) || 0; 
        char.derive();
    };
    const getOutLevel = _":get out level";
    const addSkill = { _":add skill | view vnode "};
    const recurseSkill = { _":recurse skills | view vnode" };
    const skillView = {_":skill | view vnode"};


[recurse skills]()

Here we start the skill list by iterating over the general categories stored
in the empty key. 

Note we use the level for easy targeting of the level for CSS. But CSS does
not like leading numbers. So we use an L in front.

    m("ul.skills"+".L"+vnode.attrs.level, vnode.attrs.lower.map(
        function (skill) {
            const children = [];
            
            children.push(m(skillView, {name: skill}));
            const lower = char.derived.skillTree[skill];
            if (lower.length) {
                children.push( m(recurseSkill, {lower:lower,
                level:vnode.attrs.level+1}) );
            }
            return m("li", children);
        }
    ) )

[add skill]()

This adds a skill. It will be a skill right below the level of the parent. 

    m("button.addSkill", "+Skill")


[skill]()

We have the name in the vnode attributes and we use it as the this. 

We also allow for the addition of subskills. This is the addSkill.

We could also add buttons that add or subtract a skill amount with the default
being the amount to add/subtract to change levels???

    m(".skill", 
        m("label", vnode.attrs.name.split(":").pop()),
        m("input[type=text]", {
            oninput: m.withAttr("value", listener, vnode.attrs.name),
            value: char.data.skills[vnode.attrs.name] }),
        m("span.out", getOutLevel(vnode.attrs.name)),
        m(addSkill, {name:vnode.attrs.names})
    )
        


[get out level]()

This takes in a skill name and returns a string to display the level, if
different from previous level.
       
    function (skill) {
        const skills = char.derived.skills;
        const ind = skill.lastIndexOf(":");
        let lvl;
        if (ind === -1) {
            lvl = skills[skill];
        } else {
            const parent = skill.slice(0,ind);
            
            if ( skills[parent].join("") === skills[skill].join("") ) {
                return '';
            } else {
                lvl = skills[skill];
            }
        }
        return (lvl[1] ===  0) ? lvl[0] : lvl.join("+");

    }



### Total Hours

This gives the total hours used so far. It runs through the character object
to compute it. 

    const oHours = {_":output | view"};


[output]() 

    m("#hours", "Hours Used: " + char.derived.hours )


### Extra

This is where we can record excess stuff. 

    const Extra = { _":input | view" };

[input]() 

Text input

    m("label", "Extra info"),
    m("textarea#Extra[rows=10][cols=50]", {
        onchange: m.withAttr("value", (val) => {console.log(val); char.data.extra  = val;}), 
            value: char.data.extra}
        )


## json output

this is a hack until a proper storage can be done. This displays a storage
output to save.

    m("#json", [
        m("h1", "json storage"),
        m("code", JSON.stringify(char))
    ])

## HTML

This is the html page that we save. 


    <!doctype html>
    <html>
        <head>
        <meta charset= "UTF-8">
        <title>Character Generation</title>
        <style>
            _"css"
        </style>
        </head>
        <body>
            <script src="mithril.js"></script>
            <script>
            _"main| jshint"
        </script>
        </body>
    </html>



### shoelace alt

    <!doctype html>
    <html>
        <head>
        <meta charset= "UTF-8">
        <title>Character Generation</title>
        <link rel="stylesheet" href="shoelace.css">
        <style>
            _"css"
        </style>
        </head>
        <body>
            <script src="mithril.js"></script>
            <script>
            _"main| jshint"
        </script>
        <script src="zepto.min.js"></script>
        <script src="shoelace.js"></script>
        </body>
    </html>

## CSS

This is the css for the page

    .schools li, ul.iskills {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    }
    
    input[type=text] {
        width: 30px;
        margin-left: 10px;
        margin-right: 10px;
        display:inline;
    }

    input.long[type=text] {
        width:120px;
    }

    li {
        margin-left:5px;
        margin-righ:5px;
    }

    .hide {
        display:none !important;
    }
    
    span.out {
        padding-left: 5px;
        padding-right: 10px;
    }

## view 

This cleans up some of the view stuff into a function that wraps the incoming
text 

    function (input, args) {
        return "view : function (" +
            args.join(",") + 
            ") {\n return " +
            input + 
            ";\n}";
    }

[view](# "define:")



