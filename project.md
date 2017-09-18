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


## JSON reader compute hours

To get a basic setup going, we start with code that takes in two objects: the
core setup data with the hour rules and another object that has various
levels. It then gets computed. 

 
### Convert Skills

This should parse the above and return an object of the form 
`General : School :  skill 1, skill 2, ...`

For now, we use a limited option. 

    function (input) {
        const lines = input.split("\n");
        const skills = [];
        let cur =[]; 

        lines.forEach(function (line) {
            
This matches the general category that consists of a single word and a colon. 

            let m = line.match(/^(\w+)\:/);
            // General category found
            if (m) {
                cur = [];
                skills.push([m[1], 0, cur]);
                return;
            } 


This matches the school and all its skills. It has the form
(spaces)(1 attribute) (2 school): (3 skill, skill, ...)
We ignore the attribute in this object.


            m = line.match(/^\s+([A-Z]{3})\s+([^:]+)\:(.*)/);
            if (m) {
                let raw = m[3].split(",").map( w => w.trim() );
               
We need to make these into pairs of skill name and 0.

                let interleaved = [];
                raw.forEach((val) => interleaved.push([val, 0]) );
                
                cur.push([m[2], 0, interleaved]);
                return;
            }
    
Problem if line does not match.

        });
        
        return JSON.stringify(skills);

    }

[convert-skills](# "define: ")


[example]()

This is a simple example of the desired structure. 

        var skills = [
            ["Physical", 0, [
               [ "Outdoor", 0, [
                    ["Swim", 0],
                    ["Climb", 0],
                    ["Run",  0]
                ] ]
               ] ]
            ];


### Convert Schools

This is similar to convert skills, but this extracts the attribute. This is
needed when computing the bonus. 

    function (input) {
        const lines = input.split("\n");
        const schools = {};
        let cur = {}; 

        lines.forEach(function (line) {
            
This matches the general category that consists of a single word and a colon. 

            let m = line.match(/^(\w+)\:/);
            // General category found
            if (m) {
                cur = {};
                schools[m[1]] = cur;
                return;
            } 


This matches the school and all its skills. It has the form
(spaces)(1 attribute) (2 school): (3 skill, skill, ...)
We ignore the skills in this object.


            m = line.match(/^\s+([A-Z]{3})\s+([^:]+)\:(.*)/);
            if (m) {
               
                cur[m[2]] = m[1]; 
                return;
            }
    
        });
       

        return JSON.stringify(schools);

    }

[convert-schools](# "define:")

[example]()

example object

        let schools = {
            Physical : {
                Outdoor : "STR"
            }
        };


## Other

    Attributes: STR, DEX, CON, INT, WIS, CHA 
    +1:100, +2:200, +3:400, +4:800, +5:1600, +6:3200, +7:6400, +8:12800
    Then add racial bonus

    1 LP +100, 1 SP +200, 1 MP +300

    Spells: You need to know at least one spell of lower level to get to
    learn one of the next. 
    Lvl 1: 25, Lvl 2:50, Lvl 3: 100, Lvl 4: 200, Lvl 5: 400, Lvl 6: 800, Lvl 7: 1600, Lvl 8: 3200, Lvl 9: 6400

    Feats: 300

    Class Features: One needs to follow the succession in the class.
    Lvl 1-5 features: 100*lvl. Lvl6-10: 200*lvl. Lvl11-15:
    300*lvl, Lvl16-20: 400*lvl. So to obtain a lvl 20 feature is 8000 hours,
    but it requires having mastered several earlier levels. 


## Load Spell Data

There is a spell data file that I have which can be loaded up to produce a
spell list. Need to modify it for the elements. 


## HTML Form

This will have all the attributes, skills, etc. Plug in the total number and
it computes the hours, putting that next to the label. 

   

## State

This is the state of the modifier object for a character. Once computed using
the hours, then native state (race based) is added. 


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
            schAtt : _"data::skills |convert-schools",
            base : _"base",
            presentAtt : [ "STR", "DEX", "CON", "INT", "WIS", "CHA"],
            presentPoints : [ "LP", "SP", "MP" ],
        };
        const hours = ret.hours;
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
            skills : _"data::skills|convert-skills",
            feats : {},
            features : {},
            extra : "Extra stuff"
        };
    }


### Derive

This is a function that uses the data and constructs the derived object's
values.

    function () {
        let char = this;
        let level = this.level;
        let hours = this.hours;
        let data = char.data;
        let der = char.derived;
        der.hours = 0;

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
            der.attributes[att] = level(hours.attributes, dh); 
            const race = char.rolls.races.hasOwnProperty(der.race) ?
                der.race : "human";
            der.attributes[att] += char.rolls.races[race][ind];
            der.hours += dh;
        }
    );


[points]()

Points from hours. Each point has constant cost. 

     char.presentPoints.forEach( 
        function (att) { 
            let dh = data.points[att];
            der.points[att] = level(hours.points[att], dh); 
            der.hours += dh;
        }
     );
 
[skills]()

We will travel down the skills in both data and derive. 

    let sk = der.skills;
    data.skills.forEach(function (gval, gind) {
        let gh = gval[1];
        der.hours += gh;
        let glevel = level(hours.skills.general, gh);
        _":school"
        sk[gind][1] = char.rolls.skills[glevel-1];
    });

[school]()

We use an if to do the schools only if the level is high enough to get school
benefits. 

    let skSch = sk[gind][2];
    gval[2].forEach(function (scval, scind) {
        let schr = scval[1];
        der.hours += schr;
        let sclvl = glevel + level(hours.skills.school, schr);
        const bonus = der.attributes[char.schAtt[gval[0]][scval[0]]];
        _":skill"
        skSch[scind][1] = (char.rolls.skills[sclvl-1] || '').
            map( (v,i) => ( (i === 0) ? v : v + bonus));
    });

[skill]()

Seriously need to refactor. 

    let skSk = skSch[scind][2];
    scval[2].forEach(function (skval, skind) {
        let skhr = skval[1];
        der.hours += skhr;
        let sklvl = sclvl + level(hours.skills.skill, skhr);
        skSk[skind][1] = (char.rolls.skills[sklvl-1] || '').
            map( (v,i) => ( (i === 0) ? v : v + bonus) );
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

    _"data::dnd levels |  make-hours "


[make hours]()

This takes in the levels from DnD, parses them into numbers, dividing by 10%.

We create the object based on: 

* Base. `1/10` of the level difference is the base skill level difference. 
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
        const dnd = input.split("\n").map( l => parseInt(l.trim(), 10)/10 );
        let prev = 0;
        const diff = dnd.map( v => { const r = v-prev; prev = v; return r;} );
        ret.skills = {
            general : dnd.map( v => v*9),
            school : dnd.map(v => v*3),
            skill : dnd.map(v => v)
        };
        ret.skills.general.unshift(0);
        ret.attributes = _":skip avg | sub N, 3";
        ret.points = {};
        let runsum = 0;
        ret.points.LP = _":multiple sum | sub NUM, 10";
        runsum = 0;
        ret.points.SP = _":multiple sum | sub NUM, 1";
        runsum = 0;
        ret.points.MP = _":multiple sum | sub NUM, 5";
        ret.spells = _":skip avg | sub N, 2";
        ret.features = dnd.map(v => v*2);
        ret.feats = ret.attributes[2];
        return JSON.stringify(ret);
    }


[make-hours](# "define:")


[skip avg]()

This goes over the values every Nth one and then divides by N. 

    dnd.filter( (v,ind) => !( (ind+1) % N) ).
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




[old example]()

    {
        attributes: [100, 200, 400, 800, 1600, 3200, 6400, 12800],
        points : {
            LP: 100,
            SP: 200,
            MP: 300
        },
        skills : {
            general : [100, 200, 400],
            school : [150, 300, 600],
            skill : [100, 200, 400, 800, 1600, 3200, 500, 1000, 2000, 3000, 4000, 5000],
                       
        },
        spells : [25,50,100, 200, 400,800,1600, 3200, 6400]
    }

### Rolls

This translates the hours into the benefits (vice versa) 

    {
        
This will create an array by splitting the dice levels on the commas,
trimming, then creating for each pair an array of the dice roll and the bonus. 

        skills : _"data::dice levels | arrayify echo(','), echo('\'), true() |
             .map function(`(t) => {let arr = t.split('+'); 
                arr[1] = parseInt(arr[1],10);
                return arr;
            }`) | toJSON ",
        spells : ["Lvl 1", "Lvl 2", "Lvl 3", "Lvl 4", "Lvl 5", "Lvl 6", 
            "Lvl 7", "Lvl 8", "Lvl 9"],
        races : {
            human : [1,1,1,1,1,1],
            elf : [0,2,0,0,0,0],
            gnome : [0,0,0,2,0,0],
            "rock gnome" : [0,0,1,0,0,0],
            "half-elf" : [0,1,1,0,0,2],
            tiefling : [0,0,1,0,0,2]
        }
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
            m("h1", "Character Creation"),
            m(iName),
            m(iRace),
            m(oHours),
            m(iAttributes),
            m(iPoints),
            m(iGeneral),
            m(Extra)

    ])
        
   
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
            m("label", att),
            m("input[type=text]", {oninput: m.withAttr("value", setAtt[ind]), 
                value:char.data.attributes[att]
            }),
            m("span.out",  char.derived.attributes[att])
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
            m("label", att),
            m("input[type=text]", {oninput: m.withAttr("value", setPoints[ind]), 
                value:char.data.points[att]
            }),
            m("span.out", att + ": +" + char.derived.points[att])
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

This is creates the skills inputs and outputs. 

    const listener = function (val) { 
        this[1] = parseInt(val, 10) || 0; 
        char.derive();
    };
    const iSkills  = { _":iskills  | view vnode" };
    const iSchools = { _":ischools | view vnode" };
    const iGeneral = { _":igeneral | view" };

[iskills]()

    m("ul.iskills", vnode.attrs.skills.map(
        function (skl, skind) {
            let gind = vnode.attrs.gind;
            let scind = vnode.attrs.scind;
            return m("li.input", 
                m("label", skl[0]),
                m("input[type=text]", {
                oninput: m.withAttr("value", listener, skl),
                value:skl[1] }),
                m("span.out", char.derived.skills[gind][2][scind][2][skind][1])
            );
        }
    ))
        

[ischools]()

This is given a list of schools of the form
`[ [school, #, [skills]]]`

This should be refactored to share with iGeneral.

    m("ul.schools", vnode.attrs.schools.map(
        function (sch, scind) {
            var gind = vnode.attrs.gind;
            return m("li.input",
                m(".group", 
                    m("label", sch[0]),
                    m("input[type=text]", {
                        oninput: m.withAttr("value", listener, sch),
                        value:sch[1] }),
                    m("span.out", char.derived.skills[gind][2][scind][1])
                ),
                m(iSkills, {skills: sch[2], gind:gind, scind: scind} )
        );}))
            

[igeneral]()

The skills object is a bunch of nested arrays. The top array is of the form 
`general name, hours, schools`. We send the schools and the genind to the
ischools component. 

    m("ul#general", char.data.skills.map(function (gen, ind) {
        return m("li.input", 
            m(".group", 
                m("label", gen[0]),
                m("input[type=text]", {
                    oninput: m.withAttr("value", listener, gen),
                    value:gen[1] }),
                m("span.out", char.derived.skills[ind][1])
            ),
            m(iSchools, {schools: gen[2], gind : ind })
        );
    }))



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
        justify-content: space-evenly;
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



