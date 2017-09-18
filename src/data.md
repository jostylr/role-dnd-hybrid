# Data

This is the data markdown file for data for the DnD hybrid game. 

## Conversions

These are the rules for converting DnD stuff into this system. Saving throws
are a big pain. 

* Dice rolls. For the most part, we convert these into constant numbers. We
  use the formula nDm becomes `(n*m/2)+(n-1)`. In words, we take 1 point for
  every d2 and then we also add in a point for each die roll. For example, 3d8
  becomes `14` because we have d24 and 3 dice so `12 + (3-1)`. 
* Advancement. Characters can learn and train skills, points, feats, class
  features by using time. All levels are set in terms of hours. Experience
  points from the DnD come in directly as "hours" which shows how much one can
  learn from the actual doing of a thing. 
* Levels. We set the levels based on the experience points in DnD.
  Specifically, we divide by 10, allowing for 10 skills to increase per level
  increase. For spells, we set the level costs based on 2 level increases. 
* Monsters. Use their challenge rating as the level for their primary actions,
  half that for secondary actions. 



## DnD Levels

    300
    900
    2700
    6500
    14000
    23000
    34000
    48000
    64000
    85000
    100000
    120000
    140000
    165000
    195000
    225000
    265000
    305000
    355000



## Dice levels

Basically, starts with 1d4, and we alternate between adding a bonus point and
upping the die roll. Once maxed at 1d12, we then go down gaining precision,
but not changing the upper limit of the range (so lower the d by 2, adding in
+2 bonus. At 1d4+13, we then repeat the previous process. 

    1d04+00, 1d04+01, 1d06+01, 1d06+02, 1d08+02, 
    1d08+03, 1d10+03, 1d10+04, 1d12+04, 1d12+05, 
    1d10+07, 1d08+09, 1d06+11, 1d04+13, 1d04+14,
    1d06+14, 1d06+15, 1d08+15, 1d08+16, 1d10+16, 
    1d10+17, 1d12+17, 1d12+18, 1d10+20, 1d08+22,
    1d06+24, 1d04+26, 1d04+28, 1d06+28, 1d08+30 


## Skills

We have general areas of learning, schools of learning, and skills. 


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
        STR Unarmed: Wrestling, Boxing, Martial Arts
        STR Slash: Handaxe , Sickle , Battleaxe , Glaive , Greataxe , Greatsword , Halberd , Longsword , Scimitar , Whip 
        STR Bludgeoning: Club , Greatclub , Light Hammer , Mace , Quarterstaff , Flail , Maul , Warhammer , 
        STR Piercing: Dagger , Spear , Lance , Morningstar , Pike , Rapier , Shortsword , Trident , War pick 
        DEX Ranged: Light Crossbow , Dart, Shortbow , Sling , Blowgun , Hand Crossbow , Heavy Crossbow , Longbow , Net 
        DEX Defense: Dodge, Parry, Shield 

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



## Spells

A spell needs a domain, a name, basic description, and a set of leveling abilities. 


### Fire

### Water

### Air 

### Earth

### Light

### Physical
    
### Life

    Cure Wounds, This cures the wounds of creatures (restores LP), 
    -Range : Touch + 5*lvl ft
    -Heals : [4, 16, 49, 81, 100, 200, 300, 400, 700] 
    -Targets : 1 creature + 1 per level; divide total amongst creatures
    -Cantrip : Stabilize dying creature with 100ft 

    Cure Conditions Can cure disease, poison
    -Range : Touch
    -Roll : The spell gives a resist disease, poison roll with level boost
    equivalent to spell level
    -Cantrip: Cures blemishes (acne, moles)


### Death

### Mental

### Space-Time

### Force

### Magic


## Equipment

### Weapons
    
Name, damage, gold, weight    
    
    Boxing, +2, 0 , 0 
    Martial Arts +4, 0,0
    Handaxe +3, 5,2
    Sickle +2, 1,2
    Battleaxe +4
    Glaive +5
    Greataxe +6
    Greatsword +6
    Halberd +5
    Longsword +4
    Scimitar +3
    Whip +2
    Club +2 
    Greatclub +4,
    Light Hammer +2,
    Mace +3,
    Quarterstaff +3,
    Flail +4,
    Maul +6,
    Warhammer +8,
    Dagger +2,
    Spear +3,
    Lance +6,
    Morningstar +4,
    Pike +5,
    Rapier +4,
    Shortsword +3,
    Trident +3,
    War pick +4
    Light Crossbow +4,
    Dart + 2,
    Shortbow +3,
    Sling +2,
    Blowgun +1,
    Hand Crossbow +3,
    Heavy Crossbow +5,
    Longbow +4,
    Net +0

    



## Points

A general area can be learned at the progression hours:die  100:1d4, 200:1d6, 400:1d8

A school can be learned at 150:1d10, 300:1d12, 600:1d20

A specialized skill can be learned after the first school level, but no higher
than the school+general level. It reduces the variability by going to the next lower
die level and adding in a bonus for that. The specialized levels are learned
at 100, 200, 400, 800, 1600, 3200. 

After mastering all those levels  (so no roll at this point, just +20),  one
could then add the dice back in at a cost of 500, 1000, 2000, 3000, 4000,
5000, respectively. This would be kind of insane but could get one up to 1d20+ 20. 



