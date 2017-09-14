# DnD without levels

This system deals with DnD style attributes, skills, etc.,  but without the
class/level system. 

The idea is that each gain in level in a general skill gets a higher die roll
(1d4 goes to 1d6 to 1d8, ....). Then a specialization in a skill lowers the
die in exchange for a bonus, e.g., 1d20 becomes 1d12 + 8. 

This sets all of that up. 

We have a variety of tools. 

## JSON reader compute hours

To get a basic setup going, we start with code that takes in two objects: the
core setup data with the hour rules and another object that has various
levels. It then gets computed. 


## Skill Data

A general area can be learned at the progression hours:die  100:1d4, 200:1d6, 400:1d8

A school can be learned at 150:1d10, 300:1d12, 600:1d20

A specialized skill can be learned after the first school level, but no higher
than the school+general level. It reduces the variability by going to the next lower
die level and adding in a bonus for that. The specialized levels are learned
at 100, 200, 400, 800, 1600, 3200. 

After mastering all those levels  (so no roll at this point, just +20),  one
could then add the dice back in at a cost of 500, 1000, 2000, 3000, 4000,
5000, respectively. This would be kind of insane but could get one up to 1d20+ 20. 


    Physical:
        STR Outdoor:  Swim, Climb, Run
        DEX Agility: Tumble, Escape Artist, Juggling
        CON Toughness: Resist Poison, Resist Disease

    Mental:
        INT Academic: History, Nature, Mathematics, Science, Law, Ancient
        INT Thinking: Strategy, Memory, Deduction, Engineering
        WIS Survival: Heal, Forage, Track, Knots, Herbalism Kit, Navigator's Kit
        INT Language: Common, Dwarvish, Elvish, Giant, Gnomish, Goblin, Halfling, Orc, Abyssal, Celestial, Draconic, Deep Speech, Infernal, Primordial, Sylvan, Undercommon
        
    Combat:
        STR Unarmed: Wrestling, Boxing +2, Martial Arts +4
        STR Slash: Handaxe +3, Sickle +2, Battleaxe +4, Glaive +5, Greataxe +6, Greatsword +6, Halberd +5, Longsword +4, Scimitar +3, Whip +2
        STR Bludgeoning: Club +2, Greatclub +4, Light Hammer +2, Mace +3, Quarterstaff +3, Flail +4, Maul +12, Warhammer +8, 
        STR Piercing: Dagger +2, Spear +3, Lance +6, Morningstar +4, Pike +5, Rapier +4, Shortsword +3, Trident +3, War pick +4
        DEX Ranged: Light Crossbow +4, Dart + 2, Shortbow +3, Sling +2, Blowgun +1, Hand Crossbow +3, Heavy Crossbow +5, Longbow +4, Net +0
        DEX Defense: Dodge, Parry, Shield +2

    Magic:  
        INT Elements: Fire, Water, Air, Earth, Light, Physical
        WIS Spirits: Life, Death, Mental, Space-Time, Force, Magic
        INT Defense Elements: Fire, Water, Air, Earth, Light, Physical
        WIS Defense Spirits:  Life, Death, Mental, Space-Time, Force, Magic

    Social: 
        CHA Communication: Deception, Persuasion, Intimidate, Bluff, Etiquette
        CHA Entertain: Singing, Dancing, Acting, Lute, Pan Flute, Lyre, Drum
        WIS Animals: Riding, Communicating, Training, Raising
        INT Gaming: Dice, Dragonchess, Playing Cards
        DEX Artisan: Alchemist, Brewer, Calligrapher, Carpenter, Cartogapher, Cobbler, Cook, Glassblower, Jeweler, Leatherworker, Mason, Painter, Potter, Smith, Tinker, Weaver, Woodcarver

    Awareness: 
        WIS Knowing: Search, Spot, Gather Information, Sense Motive
        WIS Hide: Background Camouflage, Disguise Kit, Hide Tracks
        DEX Movement: Move Silently, Precision Movements, Sleight of Hand
        DEX Mechanical: Thieve's Tools, Detect Traps, Disable Device
        INT Keen Eye: Decipher Script, Forgery Kit, Appraise, Poisoner's Kit
 
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
            schAtt : _"skill data|convert-schools",
            base : _"base",
            presentAtt : [ "STR", "DEX", "CON", "INT", "WIS", "CHA"],
            presentPoints : [ "LP", "SP", "MP" ],
            runsum : _"running sum"
        };
        const hours = ret.hours;
        const runsum = ret.runsum;
        runsum(hours.skills.general);
        runsum(hours.skills.school);
        runsum(hours.skills.skills);
        runsum(hours.attributes);
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
            skills : _"skill data|convert-skills",
            feats : {},
            features : {} 
        };
    }


### Derive

This is a function that uses the data and constructs the derived object's
values.

    function () {
        let char = this;
        let hours = this.hours;
        let data = char.data;
        let der = char.derived;

        der.name = data.name;
        der.race = data.race;
        _":attributes"
        _":points"
    }


[attributes]()

This constructs the attributes bonus from the attributes hours. 

    char.presentAtt.forEach( 
        (att) => { der.attributes[att] = 
            char.level(hours.attributes, data.attributes[att]); }
    );


[points]()

Points from hours. Each point has constant cost. 

     char.presentPoints.forEach( 
        (att) => { 
            der.points[att] = Math.floor(data.points[att]/hours.points[att]); 
        }
     );
 


### Level

This computes the level based on being greater than the value in the array. 

    function (arr, val) {
        return arr.reduce( function (acc, cur) {
            return (val >= cur ) ? acc + 1 : acc;
        }, 0);
    }


### Hours

This is the object that handles the hour computations


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
            skills : [100, 200, 400, 800, 1600, 3200, 500, 1000, 2000, 3000, 4000, 5000],
        },
        spells : [25,50,100, 200, 400,800,1600, 3200, 6400]
    }

### Rolls

This translates the hours into the benefits (vice versa) 

    {
        attributes : [1,2,3,4,5,6,7,8],
        points : [1,1,1],
        skills : {
            general : ["1d4", "1d6", "1d8"],
            school : ["1d10", "1d12", "1d20"],
            skills : ["1d12+8", "1d10+10", "1d8+12", "1d6+14", "1d4+16",
            "+20", "1d4+20", "1d6+20", "1d8+20", "1d10+20", "1d12+20",
            "1d20+20"],
        },
        spells : ["Lvl 1", "Lvl 2", "Lvl 3", "Lvl 4", "Lvl 5", "Lvl 6", 
            "Lvl 7", "Lvl 8", "Lvl 9"]
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

skills, spells, feats, features

    _"total hours"


    
    const Input = { _"input | view" };
    const Output = { _"output | view" };
    const Json = { _"json output | view" };


    const root = document.body;
    m.mount(root, { 
        _":main| view " 
    });


[main]() 

This is the main split at the top level between the input form and the output
character. 

    [ m(Input), m(Output), m(Json) ] 

## Input 

This is the input component. 

    m("#input", [
            m("h1", "Character Creation"),
            m(iName),
            m(iRace),
            m(oHours),
            m(iAttributes),
            m(iPoints),
            m(iGeneral)

    ])
        
   

### Output 


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
        this.name = value;
        this.derive();
    };



[input]()

     m("#iname.input", [
         m("label", "Name"),
         m("input[type=text]", {oninput: m.withAttr("value", setName , char), value: char.data.name})
     ])
          
         
[output]()

    m("#oname", "Name: " +char.data.name)

### Race

This handles the race field

    let iRace = { _":input| view" };
    let oRace = { _":output | view" };
    const setRace = function (value) {
        this.race = value;
        this.derive();
    };



[input]()

     m("#irace.input", [
        m("label", "Race"),
         m("input[type=text]", {oninput: m.withAttr("value", setRace , char), value: char.data.race})
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
            })
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
         return m("li", att + ": +" + char.derived.attributes[att]);  
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
            })
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

    const listener = function (val) { this[1] = parseInt(val, 10); };
    const iSkills  = { _":iskills  | view vnode" };
    const iSchools = { _":ischools | view vnode" };
    const iGeneral = { _":igeneral | view" };

    const oSkills  = { _":oskills  | view vnode" };
    const oSchools = { _":oschools | view vnode" };
    const oGeneral = { _":ogeneral | view" };

[iskills]()

    m("ul.iskills", vnode.attrs.skills.map(
        function (skl) {
            return m("li.input", 
                m("label", skl[0]),
                m("input[type=text]", {
                oninput: m.withAttr("value", listener, skl),
                value:skl[1] })
            );
        }
    ))
        

[oskills]()


[ischools]()

This is given a list of schools of the form
`[ [school, #, [skills]]]`

This should be refactored to share with iGeneral.

    m("ul.schools", vnode.attrs.schools.map(
        function (sch) {
            return m("li.input", 
                m("label", sch[0]),
                m("input[type=text]", {
                oninput: m.withAttr("value", listener, sch),
                value:sch[1] }),
            m(iSkills, {skills: sch[2]})
        );}))
            

    

[oschools]()

[igeneral]()

The skills object is a bunch of nested arrays. The top array is of the form 
`general name, hours, schools`. We send the schools and the genind to the
ischools component. 

    m("ul#general", char.data.skills.map(function (gen) {
        return m("li.input", 
            m("label", gen[0]),
            m("input[type=text]", {
                oninput: m.withAttr("value", listener, gen),
                value:gen[1] }),
            m(iSchools, {schools: gen[2]})
        );
    }))


[ogeneral]()



### Spells


### Total Hours

This gives the total hours used so far. It runs through the character object
to compute it. 

    const computeHours = _":compute Hours";

    const oHours = {_":output | view"};


[output]() 

    m("#hours", "Hours Used: " + computeHours() )

[compute Hours]() 

    function () {
        let sum = 0;
        const at = char.data.attributes;
        sum = Object.keys(at).reduce( (acc, key) => acc + at[key], sum);
        const pt = char.data.points;
        sum = Object.keys(pt).reduce( (acc, key) => acc + pt[key], sum);
        return sum;
    }


## Nice little functions

This is where we keep some nice little functions to use. 


### Running sum

This is a little function that converts an array of numbers into a sum array.
For our purposes, it is convenient to do it in place. 

    function (arr) {
        var sum = 0;
        arr.forEach(function (val, ind) {
            sum += val;
            arr[ind] = sum;
        });
    }

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
        </head>
        <body>
            <script src="mithril.js"></script>
            <script>
            _"main| jshint"
        </script>
        </body>
    </html>

[index.html](# "save:")


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



