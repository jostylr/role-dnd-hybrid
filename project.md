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
5000, respectively. This would be kind of insane but could get one up to 1d20
+ 20. 


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

    function () {
        var skills = {
            Physical: {
                Outdoor : {
                 Swim : 0
                 Climb: 0,
                 Run : 0
                }
            }
        };
        return JSON.stringify(skills);

    }

[convert-skills](# "define:")

### Convert Schools

This is similar to convert skills, but this extracts the attribute


    function () {
        let schools = {
            Physical : 
                Outdoor : "STR"
            }
        };

        return JSON.stringify(schools);
    }

[convert-schools](# "define:")
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

   

### State

This is the state of the modifier object for a character. Once computed using
the hours, then native state (race based) is added. 

    this.race = 'human';
    this.name = 'jd';
    this.attributes = {
            str : 0,
            dex : 0,
            con : 0,
            int : 0,
            wis : 0,
            cha : 0
        };
        lp : 0,
        sp : 0,
        mp : 0
        skills : _"skill data|convert-skills",
        feats : {},
        features : {}
    }

### Hours

This is the object that handles the hour computations


    {
        attributes: [100, 200, 400, 800, 1600, 3200, 6400, 12800],
        lp : 100,
        sp : 200,
        mp : 300,
        skills : {
            general : [100, 200, 400],
            school : [150, 300, 600],
            skills : [100, 200, 400, 800, 1600, 3200, 500, 1000, 2000, 3000, 4000, 5000],
        },
        spells : [25,50,100, 200, 400,800,1600, 3200, 6400]
    }

### Benefits

This translates the hours into the benefits (vice versa) 

    {
        attributes : [1,2,3,4,5,6,7,8],
        lp : 1,
        sp : 1
        mp : 1
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


### Rendering

    //rules
    let hours = _"hours";
    let rolls = _"rolls";
    //state
    let char = _"state";

    let Name = _"name";
    let Race = _"race";
    let Attributes = _"attributes";
    let Points = _"points";
    let Skills = _"skills";
    let Spells = _"spells";

   m.mount(document.body, {
        view : function (vnode) {
            return [
                m("h1", "Character Creation"),
                m(Name),
                m(Race),
                m(Attributes),
                m(Points),
                m(Skills),
                m(Spells),
   }


### Name

    {
        view : function () {
            reuturn m(".name", [
                 m("input[type=text]", {oninput: m.withAttr("value", char.setname), value: char.name})
                 ]);
            }
    }
            

### Race

### Attributes

### Points

### Skills

### Spells


