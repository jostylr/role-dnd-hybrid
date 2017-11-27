# Data

This is the data markdown file for data for the DnD hybrid game. 

## Some Rules

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
  Specifically, we divide by 12, allowing for 12 skills to increase per level
  increase. For spells, we set the level costs based on 2 level increases. The
  12 was chosen as we anticipate the magic defense skills to get used and
  added to and the two realms would by 6 slots, leaving 6 more for
  customization. Roughly speaking. 
* Monsters. Use their challenge rating as the level for their primary actions,
  half that for secondary actions. Scale some of their stuff to increase CR.
* Resistance (vulnerability) is like armor for physical attacks. It removes 
    10 (adds -10) to damage. 
* Shoving is a wrestling move
* Wrestling handles grappling. First attack to wrestle is to enter grapple.
  Once grappled, opposed wrestling to end it. Grappling someone allows next
  attack to pin them. 
* Healing kit. 10 uses. Gives double advantage to healing roll
* Life Points: When reduced to 0 or below, characters is knocked out; bleeding
  to death if lower than 0 and above -LP max; dead if below that. If bleeding
  to death, then the character has 10 rounds to use resist death to get to 0
  LP level before dying. Can use remaining surge points; no automatic failure.
* Magic Points: 1 MP per power level of spell
* Surge Points: 1 SP use gives 1d6 roll, 2SP 1d12, 3SP 1d20. With 1d20, 1 is
  automatic failure, 20 is automatic success. 6SP can be used for 1d100 with
  1-10 being automatic failure, 91-100 being automatic success. For auto
  success, remove opposing subtraction. Massive success. If SP reaches 0, then
  all rolls get disadvantage. 
* Advantage is a +4, disadvantage is a -4.
* Initiative is 1d10 + Dex + any bonus from initiative feature.
* Constitution. Should impact LP and SP somehow. Maybe +1 per 10LP, +1 per
  5SP?

Integrate: moving results in -1 per step for any rolls that turn. moving away
from an enemy allows them to use their attack action before you move. The move
penalty lasts from the start of turn to the start of next turn. 


### Combat

Basic combat is oppositional rolls. Choose an attack skill, roll it. Compare
to defender's skill (choosing their action). Add in weapon modifier and armor
modifier, respectively, before comparing. The difference is the damage. If 0
or negative, then none. If spell damage on weapon, add that in after hitting
(check for resistance to it). 


Armor with dex restriction limits gives half disadvantage to dodge, disadvantage if no dex allowed. No penalty on parry or shield. Other uses of dex
skills follow similarly as sensible. Penalty on stealth checks is double
disadvantage for the armors that have that property. Strength related skills get half disadvantage
for STR13 and disadvantage for STR15. 

Moving away leads to an opportunity attack (reaction). For every movement
square, -1 to all rolls until next turn. If in STR13, -2 to all rolls if more
than 10ft moved, if in STR15, -3 to all rolls beyond 20ft.

Ranged: Disadvantage on long-range attacks and close quarters.

Cover: Half cover advantage defense, 3/4 cover double advantage defense, total cover can't be
targeted. 

Being attacked by multiple opponents leads to a -1  per opponent to all rolls. 

If using two weapons to hit, -3 to hit on each weapon.

### Magic

The magic spells all have different levels, including cantrips. When casting a
spell at a certain level, the challenge to overcome is as follows.
Use the upper max at`2*lvl` skill level roll. So just within
that range. Cantrips have a 1 which is basically a pass unless there are
negative modifiers at work. 

    1, 5, 8, 11, 14, 17, 18, 19, 20, 21


    0, 1, 2, 3, 4, 5, 6, 7, 8
    3,06,08,11,15,18,22,25,30 


    
Failure to pass this results in a failed spell, but no expended MP. One gets a
+3 for next turn in trying to cast the same spell. 

Magic can use surge points or use magic points like surge points for doing or
defending against magic. 

One can use casting skill in an oppositional school to counter a magic spell;
this requires and uses an equivalent magic point total as the spell being
cast. It is countered if one gets a better skill roll. When being countered,
one has the chance to add in magic-as-surge bonus rolls and, if so, then
the counterer gets a chance to add in magic-as-surge as well. Each side can
feel how much extra is being done and decides on that. After back-and-forth is
done and all is decided, then roll the surge rolls.

All cantrips for a domain are known as soon as one level of the specific domain is
taken. This is how one starts to learn more advanced spells. Each cantrip
costs nothing to cast, but does requires at least one magic point available. 

Each individual that is possibly under the effect of a spell does get an
oppositional roll based on the relevant defense domain (same domain as spell).
The difference in favor of the caster is what is used for damage; if it favors
the defender, they take no damage. 

There may be other skills that could be used, such as dodge. Only one can be
used and that choice should be made before a roll is done. In other words,
resisting a spell takes the time and effort that prevents, say, a dodge. 

A lot of checks in spells may be directly replaced by this magical opposition.
For example, instead of a constitution check for petrification, this is an
Earth domain affect (whether from spell or not cause it is definitely magical)
and that is used to resist it. 


## Skill Levels

    30
    90
    270
    675
    1350
    2295
    3443
    5165
    6715
    8730
    10476
    12571
    13828
    15211
    16732
    18405
    20246
    22271
    24498
    26948
    29643
    32607
    35868
    39455
    43401
    47741
    52515
    57767
    63544
    69898

## Races

These are the race attributes from PHB. These numbers get translated as halves
of the relevant attribute levels. 

    human: 1,1,1,1,1,1
    elf: 0,2,0,0,0,0
    gnome: 0,0,0,2,0,0
    rock gnome: 0,0,1,0,0,0
    half-elf: 0,1,1,0,0,2
    tiefling: 0,0,1,0,0,2

[new stuff]()

This will replace the race stuff above. 

    Dwarf
    CON +2
    Size Med
    Speed 25
    Darkvision
    Resist Poison +2
    Weapons Battleaxe, handaxe, light hammer, warhammer
    Tool Choice (Smith, brewer, mason): +2
    Stonecunning +2 History for stone
    Langauges Dwarven, Common
    -Hill
    WIS +1
    LP +5
    -Mountain
    STR +2
    
    Elf
    DEX +2
    Size Med
    Speed 30
    Darkvision
    Proficiency +2
    Mental-Defense +2
    Languages Elven, Common
    -High
    INT +1
    Weapons Longsword, shortsword, shortbow, longbow
    Linguistics +2
    -Wood
    WIS +1
    Weapons Longsword, shortsword, shortbow, longbow
    Speed 35
    Hide +2 
    -Drow
    CHA +1
    Darkvision 120ft
    Sunlight perception penalty
    Magic Light +2
    Weapons rapiers, shortsword, hand crossbows
    
    Halfling
    DEX +2
    Size Small
    Speed 25
    Reroll on 1
    Brave +2
    Nimble
    Languages Common, Halfling
    -Lightfoot
    CHA +1
    Hide +2
    -Stout
    CON +1
    Resist Poison +2

    Human
    STR +1
    DEX +1
    CON +1
    INT +1
    WIS +1
    CHA +1
    Size Med
    Speed 30
    Languages Common, choice

    Dragonborn
    STR +2
    CHA +1
    Size Med
    Speed 30
    Languages Common, Draconic
    Ancestry. Resistance +4 to type, -2 to opposite, Breath weapon uses
    relevant magic type for attack 
    -Black
    Acid
    -Blue
    Lightning
    -Brass
    Fire
    -Bronze
    Lightning
    -Copper
    Acid
    -Gold
    Fire
    -Green
    Poison
    -Red
     Fire
     -Silver
     Cold
     -White
     Cold
    
     Gnome

     Half-elf

     Half-orc

     Tiefling

     Kenku






## Dice levels

Basically, starts with 1d4, and we alternate between adding a bonus point and
upping the die roll. Once maxed at 1d12, we then go down gaining precision,
but not changing the upper limit of the range (so lower the d by 2, adding in
+2 bonus. At 1d4+13, we then repeat the previous process. 

    _":option 5"


[option 1]()

    1d04+00, 1d04+01, 1d06+01, 1d06+02, 1d08+02, 
    1d08+03, 1d10+03, 1d10+04, 1d12+04, 1d12+05, 
    1d10+07, 1d08+09, 1d06+11, 1d04+13, 1d04+14,
    1d06+14, 1d06+15, 1d08+15, 1d08+16, 1d10+16, 
    1d10+17, 1d12+17, 1d12+18, 1d10+20, 1d08+22,
    1d06+24, 1d04+26, 1d04+28, 1d06+28, 1d08+30 

[option 2]()

This alternates between adding a bonus or adding die roll. 
It then decreases the die and increases the bonus. 

    1d04+00, 1d04+01, 1d06+01, 1d06+02, 1d08+02, 
    1d08+03, 1d10+03, 1d10+04, 1d12+04, 1d12+05, 
    1d10+08, 1d08+11, 1d06+13, 1d04+17, 1d04+20,
    1d06+20, 1d06+22, 1d08+22, 1d08+24, 1d10+24, 
    1d10+26, 1d12+26, 1d12+28, 1d10+30, 1d08+33,
    1d06+36, 1d04+39, 1d04+42, 1d06+45, 1d08+48 

    1-4, 2-5, 2-7,3-8, 3-10,
    4-11, 4-13, 5-14, 5-16, 6-17,
    9-18, 12-19, 14-19, 18-21

    2,3,4,5,6,7,8,9,10,11
    13,15


[option 3]()

Increase in dice for 5 levels with a +1 bonus as well. Then next level gets +2
bonus, same die. After that decrease dice with +3 bonus (+1 bonus and +2 to
compensate for loss of die). This makes fighting something 5 levels above very
diffifcult, but 3 levels above doable with help. 

Adjacent levels are too hard. 

    1d04+00, 1d06+01, 1d08+02, 1d10+03, 1d12+04,
    1d12+06, 1d10+09, 1d08+12, 1d06+15, 1d04+18,
    1d04+20, 1d06+21, 1d08+22, 1d10+23, 1d12+25,
    1d12+27, 1d10+30, 1d08+33, 1d06+36, 1d04+39,
    1d04+41, 1d06+42, 1d08+43, 1d10+46, 1d12+47,
    1d12+49, 1d10+52, 1d08+55, 1d06+58, 1d04+62

    1-4, 2-7, 3-10, 4-14, 5-16,
    7-18, 10-19, 13-20, 16-21, 19-22,
    21-24,  

[option 4]()

This alternates between adding a bonus or adding die roll. 
It then alternates between decreasing the die and increasing
the bonus. 

    1d04+00, 1d04+01, 1d06+01, 1d06+02, 1d08+02, 
    1d08+03, 1d10+03, 1d10+04, 1d12+04, 1d12+05, 
    1d10+07, 1d10+08, 1d08+10, 1d08+11, 1d06+13,
    1d06+14, 1d04+16, 1d04+17, 1d06+17, 1d06+18, 
    1d08+18, 1d08+19, 1d10+19, 1d10+20, 1d12+20,
    1d12+21, 1d10+23, 1d10+24, 1d08+26, 1d08+27 

[stats 4]()

    1-4, 2-5, 2-7, 3-8, 3-10,
    4-11, 4-13, 5-14, 5-16, 6-17,
    8-17, 9-18, 11-18, 12-19, 14-19,
    15-20, 17-20, 18-21, 18-23, 19-24,
    19-26, 20-27, 20-29, 21-30, 21-32, 
    22-33, 24-33, 25-34, 27-34, 28-35


[option 5]()

This alternates between adding a bonus or adding die roll. After d12, it does
d6+d8, d4+d12, d12+d6, d20, d12+d10, d20+d4, ...

    1d04+00, 1d04+01, 1d06+01, 1d06+02, 1d08+02, 
    1d08+03, 1d10+03, 1d10+04, 1d12+04, 1d12+05, 
    d6d8+05, d6d8+06,d12d4+06,d12d4+07,d12d6+07,
    d12d6+08,1d20+08, 1d20+09,d12d10+09,d12d10+10, 
    d20d4+10,d20d4+11,d20d6+11,d20d6+12,d20d8+12,
    d20d8+13,d20d10+13,d20d10+14,d20d12+14,d20d12+15 

[stats 5]()

    1-4, 2-5, 2-7, 3-8, 3-10,
    4-11, 4-13, 5-14, 5-16, 6-17,
    7-19, 8-20, 8-22, 9-23, 9-25,
    10-26,9-28, 10-29, 11-31, 12-32,
    12-34, 13-35, 13-37, 14-38, 14-40, 
    15-41, 15-43, 16-44, 16-46, 17-47

[middle take]()
    
    2, 3, 4, 5,6,
    7,8,9,10,11,
    12,13,14,15,16,
    17,18,19,20,21,
    22,23,24,25,26,
    27,28,29,30,31

[option 6]()

This alternates between adding a bonus or adding die roll. After d12, it does
d6+d8, d4+d12, d12+d6, d20. It stops at d20 and then we just add bonuses. 

    1d04+00, 1d04+01, 1d06+01, 1d06+02, 1d08+02, 
    1d08+03, 1d10+03, 1d10+04, 1d12+04, 1d12+05, 
    d6d8+05, d6d8+06,d12d4+06,d12d4+07,d12d6+07,
    d12d6+08,1d20+08, 1d20+09,1d20+10,1d20+11,
    1d20+12,1d20+13,1d20+14,1d20+15,1d20+16,
    1d20+17,1d20+18,1d20+19,1d20+20,1d20+21


[stats 6]()

    1-4, 2-5, 2-7, 3-8, 3-10,
    4-11, 4-13, 5-14, 5-16, 6-17,
    7-19, 8-20, 8-22, 9-23, 9-25,
    10-26,9-28, 10-29, 11-30, 12-31,
    13-32, 14-33, 15-34, 16-35, 17-36, 
    18-37, 19-38, 20-39, 21-40, 22-41

[middle take]()
    
    2, 3, 4, 5,6,
    7,8,9,10,11,
    12,13,14,15,16,
    17,18,19,20,21,
    22,23,24,25,26,
    27,28,29,30,31



## Skills

We have general areas of learning, schools of learning, and skills. 


    Physical:
        STR Outdoor:  Swim, Climb, Run
        DEX Agility: Tumble, Escape Artist, Juggling

    Mental:
        INT Academic: History, Nature, Mathematics, Science, Law, Ancient, Arcana 
        INT Thinking: Strategy, Memory, Deduction
        INT Steam Punk Engineering: Design, Build, Operate
        WIS Steamp Punk Tinkering: Fix, Sabotage, Enhance
        WIS Survival: Forage, Track, Herbalist, Navigate        

    Combat:
        STR Unarmed: Wrestling, Boxing, Martial Arts
        STR Melee: Simple, Hammers, Swords, Poles
        DEX Ranged: Crossbows, Bows, Sling, Thrown, Net
        DEX Defense: Dodge, Parry, Shield 
        DEX Swift: Disengage, First Strike, Motion

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
        WIS Knowing: Perception, Search, Gather Information, Sense Motive, Read Lips
        WIS Hide: Camouflage, Disguise, Hide Tracks
        DEX Movement: Move Silently, Precision Movements, Sleight of Hand, Knots
        DEX Mechanical: Lock Pick, Detect Traps, Disable Device
        INT Keen Eye: Encrypted Script, Forgery, Appraise, Poison

    Lingustics: 
        CHA Spoken: Common, Dwarvish, Elvish, Giant, Gnomish, Goblin, Halfling, Orc, Abyssal, Celestial, Draconic, Deep Speech, Infernal, Primordial, Sylvan, Undercommon        
        INT Written: Common, Dwarvish, Elvish, Giant, Gnomish, Goblin, Halfling, Orc, Abyssal, Celestial, Draconic, Deep Speech, Infernal, Primordial, Sylvan, Undercommon

### Some special uses

Hopefully, most of these are fairly obvious to use. But here are a few
comments that will no doubt grow over time. 

#### Mental

* Nature includes not only stuff about knowing plants, etc, but also the daytime cycles,
  etc, with a challenge of 5 for Nature roll to know the time, 10 for Nature
  roll to know north. 


#### Defense

* Parry. A successful defense allows one to add the difference to next attack
  against that opponent with same weapon. Melee only.
* Dodge. Always works if you can move.
* Shield. Advantage is shield adds an extra modifier to bonus to defend.

In melee, every reaction adds a -1 to subsequent (re)actions until end of
player's next turn. 

[alternate of ranged idea]()

There is no defense against ranged attacks. A ranged attack uses a fixed
target to hit calculated as follows: +1 per 5 ft, +2 per 25% cover (a person
in the way is 1 25%), doubles in dim light (no chance in dark) The long range
on a weapon applies -4 to their chance.

Due to the steady nature of ranged weapons, if using a defense reaction to an
attack, then -6 to range attack. 


## Using Magic

All magic has one roll to make sure it is cast successfully and how many extra
MP can be spent on it to enhance. 

Basically, there is a knowledge skill for each domain. When casting a spell,
roll that and that is the knowledge competency. Subtract the following
depending on the core level of the spell: 

    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    3,06,08,11,15,18,22,25,30,40 

(Level 9 has no effect listed. This is essentially full control of the domain
magic and anything related is possible; very few could ever hope to do this
without major problems). 

So if one rolls a total of 10 when casting a level 2 spell, that succeeds as
10>8 and there are 10-8=2 extra MP that can be spent on the spell, in addition
to the basic 2 MP for a second level spell. 

If failed, say the roll above was 5, then it drains the MP equal to the
difference as the caster tries to stop the magic going awry. If caster runs
out of MP (say the caster had only 2 in this example), then the caster takes
`(lvl of spell)*(left over points)` damage to LP.  So (8-5 = 3 MP to spend,
only have 2 so 1MP left and being 2 level, takes 2LP damage). 

An exact match casts the spell though with no option to modify. 

Some spells directly target creatures. 


Rethinking spells and such. New idea. Two skills to use: 1) power usage. This
is what is rolled to determine damage, etc. 2) Knowledge use. This is rolled
to see if succeed in casting. Each level for success should be such that it is
unlikely to succeed if not sufficiently advanced. Failure results in wasted MP
and potentially a backfire (if failure is half below the needed check). Number
above success is used for duration or range or some other attribute of spell
if applicable. 


`a+b` represents `a` as baseline level with `+b` how much to add per extra
MP. Fractions mean you need more MP to actually accomplish it; a 1/2, for
example, will require 2 extra MP to work.



### UM Fire

This is all about damage and destruction. 

    0:Sparks
        - Create sparks sufficient to light fire on kindling
        - 10+20 ft range
        - kindling/dry wood/damp wood/wet wood/pretty fireworks
    1:Fire Wreath
        - Cover objects in magical fire
        - 1+1 target
        - 1+1 damage
        - 4+2 rounds
        - 15+10 ft radius of light
    2:Throw Fire
        - Throws focused fire at a target
        - 3+2 damage
        - 1+(1/2) target
        - 60+30 ft range
    3:Fire hands
        - Creates an area effect of fire starting from hands
        - Can be a line, a cone, circle, etc.
        - 5+3 damage
        - 40+30 sq ft area
    4:Fire balls
        - Throws fireballs at people
        - 1+(1/5) Fireball (non-overlapping)
        - 20+(5/2) ft radius
        - 150+30 ft range
        - 10+5 damage
    5:Real Fire
        - Can be cast to enhance future fire spells into real fires
        - 10+5 rounds 
        - 5+10% chance of combustible burning
    6:Turn Water
        - Turns Water Elementals away
        - 1+1 water elemental
        - Spell attack - fire defense = number of rounds fleeing
        - 60+30 ft range 
    7:Summon Fire
        - Summons Fire Elemental. Goes on caster's turn based on mental
          commands
        - 5+2CR
        - 10+10 minutes
    8:Inferno
        - Massive blaze of fire energy
        - 1+1 round
        - Up to 7000+1000 cu ft
        - (10+1)*(spell attack - defense) damage
        - Can concentrate to melt metal


### UM Water


    0:Purify Water
        - Attempt to create clean, clear water
        - 10 gallons of water
        - slightly dodgy/stinky/nasty
        - change temperature 0+40 degrees
    1:Ice Shield
        - Creates freezing precipitate that forms an ice barrier for each strike
        - 1+1 target
        - 1+1 defense 
        - 4+2 rounds
        - Neutralizes damage from fire wreath
    2:Ice Ground
        - Slicks the ground
        - Must make tumble versus spell attack to stay upright for each move
        - 20+10 ft radius
        - 5+2 rounds
    3:Control Water
        - This manipulates water in various ways with various power levels
        - Water Walk: 1+1 target, 10+10minutes
        - +3 Air Bubble: 10+10 radius, 10+10 minutes
        - +6 Underwater Breathing: 1+1 target, 10+10 minutes
        - +10 Water Wave: 50+10 ft width, 10+5 damage
    4:Create Water
        - Creates water from humid air
        - 1+1 gallon of fresh water
    5:Ice Structures
        - Create and sculpt ice
        - 100+50 cubic feet of ice
        - Can do wall of ice, circle of ice, igloo, swan sculpture, whatever
    6:Turn Fire
        - Turns Fire Elementals away
        - 1+1 fire elemental
        - Spell attack - water defense = number of rounds fleeing
        - 60+30 ft range 
    7:Summon Water
        - Summons Water Elemental. Goes on caster's turn based on mental
          commands
        - 5+2CR
        - 10+10 minutes
    8:Freeze
        - Freeze any object with water in it in region
        - Up to 7000+1000 cu ft
        - spell attack - defense = rounds frozen
        - 10+5 damage per round frozen


### UM Air

    0:Breeze
        - Creates a gentle breeze
        - 10+5mph
        - For each 5mph above 10, -1 to ranged weapons
        - 10mph can move clouds of gas, 15+ starts to disperse at 5 rounds and
          lowers by 1
        - 1+1 minute
        - 1000+1000 cubic ft
        - Control direction on action
    1:Perceive Air flows
        - Perceive small changes in air flow
        - 1+1 Perception checks for sound based (whispers, invisibility)
        - 1+1 targets
        - 1+1 hour
    2:Sound Manipulation
        - Can manipulate sounds in a volume
        - Range to center: 30+30ft
        - Effect volume: sphere radius 10+10ft
        - 1+1 minute
        - Reduce sound in volume by 10+10decibels
        - +2 Reduce sound in or out of the surface area
        - +5 Thunderclap in sphere; 1+1 round; 5+5 damage
        - +8 Change volume to be any connected shape (tendrils fine)
    3:Clouds
        - Create various clouds with different effectives
        - Range to center: 90+30ft
        - Effect volume: sphere radius 20+10ft
        - Dense fog cloud; reduce vision to 20ft
        - 3+3 rounds
        - Moves at 5+5ft per round upon command
        - +3 Stink cloud; on defense failure, incapable of anything except fleeing cloud; takes round failures to recover
        - +6 Poison cloud; Poisoned on failure. Receives 3+3 damage per round
          for rounds equal to failure points. Can resist poison on subsequent
          rounds vs (remaining rounds)*(2+1)  
        - +9 Freezing cloud; Take freezing damage 7+5 damage each round in
          cloud. 
        - +12 Acid cloud; Take acid damage 15+5 damage each roundin cloud
    4:Storms
        - Create storms. Must be able to see origin point of storm outside
        - 100+100 sq ft radius
        - 1000+1000 ft range to center
        - 1+2 minute
        - Hard rain and heavy wind making motion and visibility hard
        - +3 Add torrential rain causing powerful floods
        - +3 Add Gale force winds make 
        - +6 Lightninig randomly striking with 20+20 damage per bolt 5+5%
          chance of hitting a target in storm area
        - +3 Control lightning strikes 1+1 bolt per round
    5:Vacuum
        - Suck air out of a volume
        - Volume: Sphere 20 +10 ft
        - Range: 30+30 ft
        - 1+1 round
        - No sound in or out of volume
        - 10+5 damage per round
        - 10+5% chance of unconsciousness
    6:Turn Earth
        - Turns Earth Elementals away
        - 1+1 Earth elemental
        - Spell attack - air defense = number of rounds fleeing
        - 60+30 ft range 
    7:Summon Air
        - Summons Air Elemental. Goes on caster's turn based on mental
          commands
        - 5+2CR
        - 10+10 minutes
    8:Transform into Gas
        - Transform objects into gas controllable by caster
        - Gas can move at 10+5mph
        - 1+1 hour
        - Volume 20+10 ft radius of sphere, selective in that
        - Range 100+100 ft
        - For unwilling, spell attack-defence is used to determine
          transformation. If succeed, caster can disperse but each round spell
          attack vs defence is used to determine damage; if it fails, then
          transforms back. 

### UM Earth

    0:Roll Rocks
        - Rolls rocks
        - Accelerates rocks 5+5ft per round
        - 3+3 rounds
        - 1+1 lb of rocks
    1:Easy/Hard Terrain
        - Either smooth or make difficult terrain
        - 0+2 per change in 5ft movement for difficulty
        - Concentration for selective application
        - Range 100+100 ft
        - Area 30+30 ft radius
    2:Acid
        - Acid streams out of hand
        - 1+1 quart of acid
        - 3+5 damage
        - 5+30 ft range
        - if bottled, 1+1 hour (roll spell attack and note with bottle)
    3:Earthquakes
        - Create tremors in ground
        - Knocks effected creatures over
        - spell attack - earth defense leads to knocking and damage
        - Rattles loose objects
        - +5 Cracks structures
        - 1+1 rounds
        - 20+10 ft radius
    4:Manipulate Stone 
        - Transforms stone into different shapes
        - +4 Creates stone
        - 1000+1000 cu ft
        - Permanent transformation
        - 10+10 minuts of existence for creation
    5:Quicksand
        - Ground becomes quicksand
        - 30+30 ft
        - 5+5 ft radius
        - Sinks at 1+1ft per round
    6:Turn Air        
        - Turns Air Elementals away
        - 1+1 Air elemental
        - Spell attack - earth defense = number of rounds fleeing
        - 60+30 ft range 
    7:Summon Earth
        - Summons Earth Elemental. Goes on caster's turn based on mental
          commands
        - 5+2CR
        - 10+10 minutes
    8:Petrify
        - Transforms objects into stone
        - 1+1 hour (willing)
        - Volume 20+10 ft radius of sphere, selective in that
        - Range 100+100 ft
        - For unwilling, spell attack-defence is used to determine
          transformation. If succeed, each round spell attack vs defense,
          gives damage to target of transformation. Transformation complete
          when LP gone. 
        - +3 per hardness level (spell attack as stone defense)
        - Caster has awareness if self-petrify

### UM Light

    0:Shedding light
        - Create basic light
        - 30+30 ft of light
        - touch object
        - 10+10 minute
    1:Hand Electricity
        - Near touch to discharge electricity
        - 5+5damage; double if wearing metal armor
        - 
    2:Light Manipulations
        - Change level of lightness in region
        - +2 per level change: magic dark/dark/dim/normal/bright/overpowering
    3:Minor Illusions
        - Convincing illusions of non-moving objects
    4:Lightning
        - Chain lightning
    5:True Seeing
        - See all wavelengths, including mystical
    6:Invisibility
        - Mask visibility
    7:Major Illusions
        - Full motion illusions
    8:Transform into Electricity
        - Become electrical, jumping from metal to metal

### UM Physical

    0:Understand Mechanism
        - Insight into mechanism
    1:Enlarge/Reduce
        - Change size 
    2:Replicate
        - Duplicate an object
    3:Manipulate Mechanism
        - Work with mechanism from afar
    4:Enhance Senses
        - Senses become sharper or duller
    5:Fabricate
        - Create basic objects 
    6:Alter Appearance
        - Alter aspects of appearance
    7:Create Mechanical
        - Assemble mechanical object from parts
    8:Permanent Creation
        - Make permanent objects


### UM Life

    This manipulates the life force energy all arounds us. It is largely
    healing, but it can also deal with some of the natural world. 

    0:Purify Food
        - Make food edible
        - 0+2 per level: Mild spoil/spoiled/foul/diseased/poison
    1:Heal
        - Heal damage
        - (1+1)*spell atk
        - 1+1 targets; spread healing over target at discretion
        - 30+30 ft range
    2:Life Summon
        - Summon (grow) and direct little animals, insects, plants
        - 0+3 per level for animals: a few/colony/horde
        - 0+3 per level for plants: 1 vine/multiple vines/thorns 1+1
          damage/hedge/mobile tree
        - 5+5 rounds of control/existence
    3:Resist poisons, diseases
        - Adds bonus to resistance rolls
        - 1+1 bonus to resist poison or disease
        - 5+5 rounds
        - 1+1 target
        - 30+30ft
    4:Turn Undead
        - Turns Undead away
        - 1+1 Undead
        - Spell attack - life defense = number of rounds fleeing
    5:Regenerate
        - Causes regeneration of LP and limbs
        - 5+5 rounds
        - 5+5 LP
        - 1+(1/3) target (10 ft)
        - Limb regenerates over 10 rounds
    6:Transform life from one form to another
        - Cause one form to become another
        - 0+5 per level: related species/same family/same order/kingdom/whatever
        - +3 size change per category
        - 0+5 per level: 1 minute/10minutes/1 hour/1day/1 week/1 month/1
          year/permanent
        - 1+(1/2) target (10 ft) 
    7:Field of Renewal
        - Within the region, mass regeneration of stats
        - Sphere of radius 30+30ft
        - Range 100+30 ft
        - (1+1)*spell attk healing per creature
        - 10+1 resist poison, disease, other
        - Regenerate a limb over 10 rounds
        - 3+3 rounds
        - Concentration required to be selective in application in sphere
    8:Resurrection
        - Restores dead
        - +5 per level: dead an hour/dead a day/dead a week/dead a year/dead a
          decade/dead a century/whenever
        - Need to touch remains

### UM Death

    0:Spoil Food
        - Make food rot
    1:Vampiric weapon damage
        - Gain LP from damage inflicted
    2:Poison
        - Poison targets
    3:Wither life
        - Kills plants and small animals
    4:Disease
        - Creates disease in targets
    5:Create Undead
        - Use dead bodies to create undead
    6:Control undead
        - Direct undead
    7:Field of Blight
        - Those in area suffer constant ill effects
    8:Kill
        - Kill outright targets

### UM Mental

    0:Calm
        - Try to calm anger, fear, suspicion
    1:Social Edge
        - Improve chances of social skill application
    2:Communicate
        - Improves language skill and/or animal communication
    3:Telephatic Communication
        - Mentally communicate directly with willing targets
    4:Fear
        - Cause fear in targets
    5:Read Mind
        - Forcefully read and delve into target mind
    6:Madness
        - Create insanity in target
    7:Control Other
        - Directly control other
    8:Drain Mind
        - Remove knowledge from others
    

### UM Space-Time

    0:Identify Age
        - Figure out how old something is
    1:Teleport Willing
        - Teleport targets to known location
    2:Divine Present
        - Learn what is going on elsewhere
    3:Tracking
        - Track target
    4:Create temporary pocket dimensions
        - Have a place to stash stuff for a little while
    5:Divine Past
        - Learn some history of something
    6:Teleport Unwilling
        - Teleport unwilling targets either to you or away from you
    7:Create Permanent Pocket Dimensions
        - Have a place to stash stuff for a long time
    8:Planar and Planetary Travel
        - Travel to other planes and planets


### UM Force

    0:Push
        - Move light objects slowly
        - 1+1 lb of stuff
        - 5+5 mph
        - 30+30ft range
    1:Force Punch
        - Hits a target with a force possibly knocking down
        - 1+1 damage (spl att)
        - 1+1 wrestling (spll att) to knock down
        - 60+30 ft range
    2:Force Shield
        - Create a small force barrier
        - 1+1 shield defense
        - 2+2 rounds
        - 30+10ft range
    3:Levitate
        - Reduce gravity and push around
        - Lift 15+15 lb
        - 10+10 minutes
        - 3+2 ft above ground
        - 5+5 ft radius of effect
        - +1 make a force opening to attach rope for pulling
    4:Force Walls
        - Create a large barrier
        - 
    5:Restrain Stuff
        - Create a force around an object that resists motion
    6:Flying
        - Full flying of targets
    7:Rip stuff
        - Rip fixed or held or worn objects from grasp
    8:Shockwave
        - Massive force of shockwave

### UM Magic

    0:Magic Tricks
        - Lots of parlor tricks
    1:Detect Magic
        - Discern magic (location, type, strength)
    2:Protection from Domain
        - Help resistance from domain
    3:Amplify Magic
        - Modify another magical effect in someway (stronger, delay based on
          condition, multiple)
    4:Disrupt Magic
        - Either dispel or disrupt control of magic
    5:Capture Magic
        - Take control of another's magic spell and redirect
    6:Drain Magic
        - Drain magic points from another and replenish own
    7:Cast Other Magic
        - Cast magic from another domain (except force) 
    8:Antimagic Field
        - Constant drain of magic points in region



## Spells

A spell needs a domain, a name, basic description, and a set of leveling abilities. 

If casting a somewhat lengthy spell and you take damage, then disadvantage to
your check. If you have only one hand free, you get disadvantage. These are
cumulative. You need to cast with at least one hand free as magic flows
through the hands.

Spread Druidcraft as cantrip starter, prestidigation, Thaumaturgy,

Elemental Weapon across domains, Protection from Energy, Absorb
Elements, Elemental Bane

When a lasting spell occurs, initial roll is what to be compared against. A
weapon uses the relevant magic domain each time. 


### Fire


    Fire Throw 
    0: Create Bonfire. Fire in a 5ft unoccupied square. +4 damage per level if someone is in it. 
    1: Firebolt +5dam, range 120ft, +1 bolt per lvl
    2: Flaming Sphere, 5ft sphere, 60ft range, rolls around 30ft speed, +7 dam to all adjacent. +5 dam per lvl
    3: Fireball. 150ft range, 20ft radius. +31dam. 5ft rad increase per lvl
    4: Melf's Minute Meteors. 6 meteors appear, send any number per turn 120 ft, explodes hurting within 5ft, +7dam. +2 meteors per lvl
    5: Flame strike. +20 fire dam, +20 radiant dam, 20ft radius, 40ft high. 
    6: Fire storm.  +41 dam, 10 10ft cubes, cubes must be adjacent
    7: Delayed Blast Fireball. Range 150ft, +47 dam, +3 per turn waiting. 20ft radius, range 150ft
    8: Incendiary Cloud. Range 150ft, +49dam, 20ft radius, obscures. Lasts 1 minute. Moves away at 10ft. Each turn creature takes damage.
    9: Meteor Swarm. Range sight. 4 Meteors, each has 40ft radius. +79 dam fire, +79 dam bludgeoning.  

    Fire Hand 
    0: Produce Flame. Flame appears in hand, lighting up 10ft rad + 10 dim.  Attack at higher levels by throwing +4 dam; +5 each additional level. 30ft + 5ft per level. 
    1: Searing Smite. Add +3 fire damage to attack. If hit, target is set on fre and takes +3 fire damage for a minute or until douses the flames. Add +4 dam per level. 
    1: Burning Hands. 15ft cone from fingertips. +11dam. +4dam, 5ft per level
    2: Aganazzar's Scorcher. From you, line 30ft long, 5ft wide, fire emanates. +14dam. Higher levels, +5dam, 5ft longer. 
    2: Heat Metal. Range 60ft. Metal starts to heat up. +9 dam for anyone in contact. Continues for a minute. +1 object or +5dam per level. 
    2: Flame Blade. Fire blade appears in hand. Attack with magic. +11 dam. 10 minutes. Lights up area as in produce flame. +4 dam per level. Can come and go during 10 minutes. 
    3: Flame Arrows. Touch ammunitiion. 12 pieces. +3 fire damage. Add +3 dam, 2 bolts per level.
    4: Scorching Ray. Scorching rays shoot out of finger tips (4), up to 120 ft away. Each does +20dam. Increase damage by +5dam per level per ray and add 1 ray per level.
    6:Investitute of Flame. Engulf yourself in flames. Immune to fire damage, resistance to cold damage, creatures adjacent take +5dam, can extend fire as in scorcher with +19 dam, 15ft long, 5 ft wide.  

    Fire Defend
    0: Control Flames. Manipulate fire with 60ft with a 5ft square. Either extinguish, expand it 5ft, double or halve light, simple shapes in flames.
    1: Hellish Rebuke. If hit by someone with 60ft, can cast this to do +11dam. Add +6dam per level. Instantaneous reaction. 
    1: Absorb Fire. Reaction to fire damage. Converts every 3 damage points into 1 MP up to 6MP.
    2: Fire shield. +2 resistance from fire, +2 defense as shield. Shield appears in hand. 
    3: Protection with Fire. For an 1 hour, +5 resistance to fire for target.  Extra target per level. 
    4: Fire armor. Fire wraps you, +5 resistance from fire damage and cold. When attacked, it erupts and does +9dam to attacker.  10 minutes.
    4: Wall of Fire. Shape wall 20ft high, 1ft thick, 60ft in length/20ft radius if circle. If in wall or within 10ft of one side (chosen by you), then +24 dam. +5dam per level. 

    Fire Summon
    0: Dancing Fire. 120 ft range. 4 little burning fireballs appear. Harmless, but distracting. 10ft light. Can combine to form vaguely humanoid fire shape. Can move them up to 60 ft. 
    2: Pyrotechnics. 60ft range. Either blinding fireworks (with 10 ft, 1 turn) or thick black smoke (20 ft) to obscure (1 minute)
    3: Fire Weapon. Touch, 1 hour. +4 fire to weapon. Add +2 per level.
    4: Elemental Bane. 90ft range. Remove resistance to fire, takes extra +7dam each time hurt by fire. Add one creature per level. 1 minute. 
    5: Conjure Fire Elemental. Basic fire elemental appears for 1 hour. If you lose concentration, it attacks you. Otherwise, you command it and it will obey. Higher level leads to stronger elementals. 

### Water

    Protection
    :Armor of Agathys
    :EE:Investiture of Ice
    :EE:Watery Sphere
    :EE:Wall of Water

    Storm
    :Sleet Storm
    :Tsunami
    :EE:Maelstrom
    :EE:Tidal Wave
    :EE:Snilloc's Snowball Swarm

    Ice
    :EE:Frostbite
    :Chill Touch
    :Cone of cold
    :Otiluke's Freezing Sphere
    :Ice Storm
    :Wall of Ice
    :Ray of frost

    Control
    :Conjure Water Elemental
    :Control Water
    :Create/Destroy Water
    :Simulacrum
    :Water Breathing
    :Water Walk
    :EE:Shape Water
    :EE:Abi-Dalzim's Horrid Wilting
    

### Air 

    Weather
    0:Gust. Range 30ft, light breeze. Each level up, the wind becomes stronger, pushing creature +5ft per level or lifting object (+5 pounds per level) and flinging up to +10ft per level.
    3:Call Lightning. range 120 feet, 10 minute duration. 60ft radius. Storm clouds come in (or take over them) and can direct lightning that hits with 5 ft. +18dam, add +6dam per level. Requires action each turn to call a bolt. Must be able to see point where the storm would be centered.  9:Storm of Vengenance. Lots of precipitation, thunder, acid, lightning, freezing rain. All comes down roughly +15dam per turn. 
    4:Storm Sphere(EE). 20ft radius sphere of whirling wind. +7dam bludgeon within sphere. Lightning each round, spell attack +14dam, +4dam per level. 
    5:Control Winds: range 300ft, 100ft cube, 1hour. Powerful gusts, downdraft, updraft.  
    7:Whirlwind(EE). range 300ft, 1minute. 10ft radius, whirls people around, +34dam. If affected, becomes ensnared and whirls higher and higher, up to 30ft. Falls at end of spell. If successful after being sucked in, will be thrown out 100ft in random direction.    
    8:Control Weather. Cast 10 min, 5 mile radius, 8 hours. Change conditions every 30 minutes both precipitation, temperature, and wind (speed, direction). 


    Airlift
    2:Feather Fall
    :Wind Walk
    :Fly
    :Gaseous Form


    Sound
    :Thunderwave
    :Shatter
    :Silence
    :Magic Mouth
    :Message
    :Sending
    :Thunderous Smite
    :Dissonant Whispers
    EE:Thunderclap

    AirCurtain
    :Gust of Wind
    :Wind Wall
    EE:Warding Wind
    EE:Investiture of Wind

    Clouds
    :Stinking Cloud
    :Fog Cloud 
    :Cloudkill
    :Conjure Air Elemental
    EE:Dust Devil
    EE:Skywrite




### Earth

    Acid
    :Acid Projectiles
    :Melf's Acid Arrow
    EE:Vitriolic Sphere

    Surface
    :Freedom of Movement
    :Grease
    :Pass Without Trace
    :Web
    EE:Earthbind
    :Commune with Nature

    Blades
    :Blade Barrier, Ward, Cloud of Daggers
    EE:Magic Stone

    Ground
    :Earthquake
    :Conjure Earth Elemental
    :Move Earth 
    :Imprisonment
    EE:Earth Tremor
    EE:Wall of Sand
    EE:Maximilian's Earthen GRasp
    EE:Erupting Earth
    :Wall of Stone
    EE:Bones of the Earth

    Mutation
    :Flesh to Stone
    :Meld Into Stone
    :Stoneskin
    EE:Mold Earth
    :Barkskin
    :Stone Shape
    EE:Investiture of Stone
    EE:Transmute Rock



### Light

    Brilliance
    :Blinding Smite
    :Branding Smite
    :Chromatic Orb
    :Color Spray
    :Prismatic Spray
    :Prismatic Wall
    :Moonbeam
    :Sunbeam
    :Sunburst
    :Sacred Flame

    Manipulation
    :Hypnotic Pattern
    :Illusory Script
    :Major Image
    :Minor Illusion
    :Mirage Arcane
    :Mirror Image
    :Mislead
    :Programmed Illusion
    :Project Image
    :Seeming
    :Silent Image
    
    Obscure
    :Blur
    :Darkness
    :Invisibility
    :Greater Invisibility

    Reveal
    :Arcane Eye
    :Continual Flame(Light)
    :Dancing Lights
    :Darkvision
    :Daylight
    :Light
    :See invisibility
    :True Seeing
    :1: Faerie fire. In a 20ft cube, 60ft range, creatures outlined in light up to a minute. 

    Electricity
    :Guiding Bolt
    :Chain Lightning
    :Lightninig Arrow, Bolt
    :Shocking Grasp
    1:Witch Bolt. Ran:30ft. Dur:1min. 






### Physical

    Modify
    :Slow
    :Spider Climb
    :Bestow Curse
    :Jump
    :Bane, Bless
    :Enhance Ability
    :Ray of Enfeeblement
    :Haste
    :Expeditious Retreat 
    :Blind/Deaf
    :Guidance
    :Longstrider
    :Mage Hand

    Manipulate
    :Enlarge/Reduce
    :Alter Self
    :Giant Insect
    :Polymorph
    :Shapechange
    :True Polymorph
    :Disguise Self

    Replicate
    :Conjure Barrage, Volley, Cordon of Arrows
    :Hail of Thorns
    :Swift Quiver
    :Fabricate

    Mechanical
    :Animate Ojects
    :Arcane Lock
    :Find Traps
    :Knock
    :Mending
    :Shillelagh


    
### Life

    Heal LP
    0:Spare the Dying. Stabilize creature. Touch initially, add 10ft per level
    1:Goodberry. 10 berries infused for 24 hours for 1 LP healing. Add 10
    berries and 1LP per level. 
    1:Cure Wounds. Touch. +4LP. +5dam per level, 10ft per level.
    1:Healing Word. 60ft. +2 LP. Add +3LP per level, 10ft per level. 
    2:Prayer of Healing. 10 minute casting time. 6 creatures, heal up to +9LP.  +5LP per level. 
    3:Mass Healing Word. 60ft. Up to 6 creatures healed for +2LP. +3LP per level, 10ft per level. 
    5: Mass Cure Wounds. +14LP across 6 creatures. + 5LP per level, +10ft, +1 creature
    6:Heal. 60ft. +70LP, +10LP per level. 
    9:Mass Heal. 700LP total, divide among as many as you like withing 60ft.  Cures all disease, blindness, and deafness. 
    9:Power Word Heal. Cures target of all conditions and regains all LP.

    Heal Conditions
    0:Detect Bad Food. Detects diseased or poison in food.
    1:Purify Food and Drink. Purifies all food and drink within a 5ft radius sphere, ridding of disease and poison. 
    1:Detect Poison and Disease. Lasts 10 minutes. Can sense presence of poison, poisonous creatures, and disease within 30ft. Can identify it all. 
    2:Lesser Restoration. Cure disease, blind, deaf, paralyz, poison.
    2:Protection from Poison. Neutralize one poison. Gives +3 to Resist Poison.
    3:Aura of Purity. 30 ft radius, 10 minutes. Ads +5 bonus to various
    conditions and disease, poison rolls.
    5:Greater Restoration, 100gp dimanond dust. Reduce some condition such as charm, petrified, a curse, ability score reduction, LP reduction. 

    Invigorate
    2:Aid. Within 30ft, 8 hours. Up to 3 creatures. Increase LP max and current LP by 5 for duration. +5LP per level. Not cumulative.
    Circle of Power
    3:Aura of Vitality. 30ft radius, 1 minute. As bonus action, add +7LP to a
    3:Becon of Hope. 30ft, 1 minute. Adds +4 per level to Wisdom and Death rolls. Gains +3 per level on LP gains from healing.  creature in radius. +5ft, +4LP per level.
    4:Death Ward. Lasts 8 hours. Automatic stabilization when reduced to 0 LP.  Negates direct death affects. One use leads to negation. 
    6:Heroes' Feast. 1000gp bowl, takes 1 hour to consume, 10 minutes to cast. 12plus people eat feast. Cures all disease and poison, becomes immune to poison, frightened, +4 Wisdom rolls. Max LP increased by 11 and actual LP. Lasts 24 hours. 

    Restore Life
    0:Restore dead bugs and plants. Touch to restore them to life.
    2: Restore animals to life. 
    3:Create Food and Water. Create 45 pounds of food and 30 gallons of water on the ground or in containers within range. Enough to feed fifteen humans or 5 steeds for 24 hours. Lasts 24 hours. 
    3:Revivy. 300gp diamond. Revives creature that just died wihtin 10 points.  Comes back with 1 LP.
    4:Reincarnate. 1000gp urn. Touch dead humanoid. Restores soul to life in new body. Roll d100 and consult table. 
    5:Raise Dead. 1 hour casting, 500gp diamond. Returns dead to life (10 days or less). Comes back 1LP. Cures nonmagical diseases, poisons, but not magical stuff. Does not deal with lack of body parts, such as head. -6 to rolls, reduce by one each day.
    8:Clone. 3000gp (diamond, coffin, flesh of creature). Create a clone to take in soul if original dies.
    7:Regenerate. Lasts 1 hour, 1 minute to cast. Target gains +34LP instantly. For duration, gains 1 LP per turn. Also restores severed body parts within 2 minutes. If you have old remains, instaneously restored. 
    7:Resurrection. 1000gp diamonds. Similar to Raise Dead, except goes back a century. Also does heals missing body parts. 
    9:True Resurrection. 25000gp of diamonds. Restores to life anyone dead within 200 years. Cures all diseases and conditions. Provides new body if needed. No ordeal peanlty. 

    Plants
    0:Thorn Whip. Attack within 30ft. If success, pulls creature 10 ft closer.  For each level, add +4 LP damage. 
    2:Spike Growth. 150ft rane. Creates 20ft radius of overgrown plants, causing +5LP damage for every 5ft growth. Terrain camouflaged. +3LP damage per level and 10ft of radius. 
    3:Plant Growth. 150ft range. Overgrow the plants if instant slowing speed 4 times. For 8 hour casting, will enrich land to make twice as good harvests for a year within a half-mile radius. 
    3:Speak with Plants. Duration 10 minutes. Plants can communicate and move branches (not spot). Overgrown becomes easy, might do other things. 
    5:Tree Stride. 1 miute. Enter a tree and exit from another tree within 500 ft. Each tree consists of 5ft movement.
    6:Transport via Plants. Duration 1 round. Two plants are connected so that stepping on one leads to other. 5 ft movement. Sender must be Large or larger plant. 
    6:Wall of Thorns. 120ft, up to 10 minutes. 60ft long wall or 20ft radius circle wall. +34LP damage for any in wall or moving through. 

    


### Death

    Control Undead
    :Animate Dead
    :Create Undead
    :False Life
    :Feign Death
    :Gentle Repose
    :Speak with Dead

    Hurt
    :Arms of Hadar - tendril force, weakens
    :Disintegrate
    :Finger of Death
    :Harm
    :Inflict Wounds
    :Evards Black Tentacles
    :Power Word Kill
    :Vampiric Touch
    
    Disease
    :Blight
    :Circle of Death
    :Contagion
    :Poison Spray
    :Ray of Sickness

### Mental

    Animal
    :Animal Friendship, messenger
    :Awaken
    :Beast sense
    :Speak with Animals
    :Find Familiar
    :Find Steed
    :Dominate Beast
    EE:Beast Bond

    Vicious
    :Phantasmal Force
    :Phantasmal Killer
    :Staggering Smite
    :Confusion
    :Dominate Monster, Person
    :Tasha's Hideous Laughter
    :Otto's Irresistible Dance
    :Feeblemind
    :Eyebite
    :Fear
    :Vicious Mockery
    :Weird
    :Wrathful Smite

    Uplift
    :Calm Emotions
    :Charm Person
    :Enthrall
    :Dream
    :Heroism
    :Friends
    :Crown of Madness
    :Crusader's Mantle
    :Geas
    :Glibness

    Blank
    :Command
    :Compelled duel, Compulsion
    :Antipathy/Sympathy
    :Mass Suggestion
    :Sleep
    :Suggestion
    :Mind Blank
    :Power Word Stun
    :Symbol

    Communicate
    :Comprehend Languages
    :Rary's Telepathic Bond
    :Zone of Truth
    :Detect Thoughts
    :Telepathy
    :Tongues
    :Modify Memory
    :Halluciantory Terrain




### Space-Time

    Tracking
    :True Strike
    :Locate Animals, Creature, Object
    :Hunter's Mark

    Movement
    2:Misty Step. 
    :Word of Recall
    :Teleport
    :Teleportation Circle
    :Arcane Gate
    :Gate
    :Time Stop

    Astral
    :Astral Projection
    :Blink
    :Dimension Door
    :Demiplane
    :Etherealness
    :Contact Other plane
    :Planar Binding
    :Plane Shift

    Know
    :Alarm
    :Augury
    :Clairvoyance
    :Commune
    :Divination
    :Scrying
    :Legend Lore
    :Find the Path
    :Foresight

    Pulling and Pushing
    :Drawamij's Instant Summons
    :Hunger of Hadar
    :Insect Plague
    :Banish, Banishing Smite
    :Conjure Celestial, Fey, woodland beings, animals
    :Maze
    :Planar Ally


### Force

    Restrain
    2:Hold Person. 60ft. Holds a humanoid for 1 turn per point above contested roll.  Add one person per level. 
    3:Spirit Guardians. Dur:10min, Ran:15ft. Spirit shapes come forth to protect you; you decide on basic form. Damage +14LP vs spell attack. Control who is unaffected. Half the speed. +4 damage per level. 
    5:Hold Monster. 90ft. Holds any creature for 1 turn per point above contested roll. Add one creature per level. 
    centered on you. 1hour duration.  :Divine Favor, Word
    7:Forcecage. (1500gp ruby dust). Duration 1 hour, 100ft. Imprisons creature in 20ft cube. Impenetrable except for magical teleportation which is versus the casting of this spell.
    4:Otiluke's Resilient Sphere. 30 ft, 1 minute. Enclose creature in sphere.  Nothing gets in or out. Sphere is weightless. Creature inside can move it as can those outside. 
    5:Wall of Force. An impenetrable wall of force appears. Ten 10*10*1/4inch thick panels or sphere radius 10ft. 

    Barrier
    1:Mage Armor. Touch, 1 round. 1 hour per level. For someone without armor. +3 Armor Defense. 
    1:Shield. For 1 round, +5 defensive shield appears. Also adds to magic attack defense of damage kind. Reaction. Self.
    1:Shield of Faith. 10 minutes, +2 shield defense. Bonus action. 30ft. Does not stack with shield.
    3:Leomund's Tiny Hut.  Creates a hut for nine creatures in a 10ft dome.  Can't see in, can see out. Can't move in without permission or overcoming spell roll. 10 hour duration.
    4:Guardian of Faith. Duration 8 hours. 30 ft. Guards a 10ft radius.  Attack and defense from spell casting. Disappears after 60 damage. 
    5:Antilife shield. No non-live creatures can penetrarte a 10ft radius
    4:Mordenkain's Faithful Hound. 8 hours. 30ft. Watch dog. Starts barking loudly when creature comes near it without password. If within 5ft of a creature, attacks with spell attack and does +19 damage. 


    Antigravity
    1:Catapult(EE). 150ft. Throws one object 90ft in one direction, in an arc of 20ft high. 5 pounds initially, +5 pounds per level. If struck by object, does +14 dam, +5 per level. Spell vs defense. 
    1:Tenser's Floating Disk. Levitating disk that follows you. Carries up to 500 pounds. 1 hour. It is always within 3ft of ground. Over a pit, it fails. 
    2:Levitate. Ran:60ft. Dur:10min. 1 Target up to 500 lbs is floating up 20ft. Up or down 20ft a round. Floats gently down. 
    :Phantom Steed
    7:Reverse Gravity. 50ft rad, 100ft high, range 100ft, falls upwards. Can strike things. At end, falls down. 
    5:Telekinesis. Range 60ft. 10 minutes. Move stuff or creature by thought. Target gets strength bonus in resisting. 1000 pound limit.  

    Forcefirst
    0:Unseen Servant. Does menial tasks within 60ft. Lifting and carrying is based on level of spell. 
    1:Magic Missile. 120ft. +3dam per dart, divide excess damage by 3. 3 darts first level. +1 dart and +1 dam per level. 
    2:Magic Weapon. Make normal weapon magical with +1 attack. +1 attack per level.
    2:Spiritual Weapon. 1 minute. 60ft. Attacks with +3dam. 
    5:Bigby's Hand. Dur: 1min. Large hand appears that can be used for protection or attack. Basic attack is spell attack and does +17 dam. +8dam per level.  Bonus attack to control. 60ft movement, stay within 120ft. 
    7:Mordenkainen's Sword. 60 ft, 250 gp reusable. 1minute. Magic sword that flies around and uses spell attack. +17dam. 
    




### Magic

    Counter
    :Antimagic
    :Counterspell
    :Dispel Magic
    :Dispel Evil/Good
    :Remove Curse

    Knowledge
    :Detect Evil/Good
    :Detect Magic
    :Contingency
    :Identify
    :Nondetection
    :Magic Jar

    Protection
    :Forbiddance
    :Nystul's Magic Aura
    :Holy Aura
    :Hallow
    :Protection from Evil and Good
    :Globe of Invulnerability
    :Glyph of Warding
    :Guards and Wards
    :Resistance
    :Warding Bound
    EE:Primordial Ward

    Pocket
    :Mordenkainen's Magnificient Mansion
    :Mordenkainen's Privates Sanctum
    :Leomund's Secret Chest
    :Sequester
    :Rope Trick
    :Sanctuary


    Create
    :Creation
    :Eldritch Blast
    :Hex
    :Magic Circle
    :Wish 



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



## Feats

Here we list various feats. 

    Alert
    - Never surprised
    - Hidden or invisible creatures do not get bonus on attack

    Charger
    - 10ft+ charge leads to advantage on melee attack or equal distant shove

    Crossbow Expert
    - You can fire multiple times per multiple attacks rule
    - No disadvantage on attack rolls when close to enemy
    - You can wield a one-handed weapon and a hand-crossbow attack

    Dual Wielder
    - Advantage to parry with two weapons
    - Can use any 1-handed weapon for dual, not just light
    - Draw both weapons at once

    Dungeon Delver
    - Advantage to detect traps, secret doors, etc., in dungeons
    - Double advantage to avoiding damage to traps
    - Search for traps at normal pace

    Great Weapon Master
    - If an attack fells a creature, you can continue an attack to an adjacent
      creature.
    - You can remove an amount of a +bonus to hit to double it as damage.

    Healer
    - Stabilizing someone gives them one LP with use of kit.
    - Can use kit to restore +10 LP. 

    Heavy Armor Master
    - No disadvantage to Skill checks except dodge and stealth though stealth
      is reduced to just one disadvantage. 

    Mage Slayer
    - Adjacent spell caster casting spell allows you an extra attack against
      them. 
    - If you hit, the challenge of casting is increased by the damage amount.
    - Advantage to resistance to spells cast from adjacent mage. 

    Mobile
    - Speed increases by 10 ft.
    - Dash over difficult terrain.
    - No penalty for leaving combat at full speed. 

    Mounted Combat
    - Advantage to attack unmounted targets
    - Protect mount by having attack target you
    - Advantage to riding skill in dodging effects
 
    Polearm Master
    - Applies to glaive, halberd, pike, quarterstaff
    - Extra attack with opposite end (opposite from target across you) with +2 damage
    - Entry to reach without half-speed movement gives advantage attack bonus
    - If readied for a charge, gives double advantage on attack roll

    Sharpshooter
    - Long range no penalty
    - Ignore half cover, 3/4 cover
    - You can remove an amount of a +bonus to hit to double it as damage.

    Shield Master
    - You can use the shield to shove a creature you are attacking to 5 ft.
      Use shield skill as attack skill.
    - You can use the shield skill instead of dodge skill in avoiding relevant
      attack damage.

    Spell Sniper
    - No disadvantage for double range of spell
    - Ranged spells ignore partial cover
    - You can remove an amount of a +bonus to hit to double it as damage. 

    War Caster
    - No penalty when casting a spell and taking damage
    - You can have other stuff in one hand and cast spells without penalty
    - If someone is running from combat without slow or mobile feat, then you
      get advantage in targeting the creature
      

## Features

The feats should be merged in here. Every feature or feat should have levels
associated with it. They are roughly worth the same as a school advancement of
corresponding level. It should be relatively hard to take them. 

There are features that have a series of choices that are equivalent, but each
additional one comes at a different level. For these we use start: inc: to
indicate the starting level amount and how to advance

Need to go through and recast some things in terms of magic points (generally
anything with restricted uses). Ki, divine channeling, etc. 


    # General

    Critical
    Start:2, inc:2
    If roll max on die, roll a 1d4. Each level increase will increase the die
    rolled. So at lvl 4, 1d6, lvl6 1d8, ... Add to total. If max on, say 1d8,
    then roll 1d6 and if max then 1d4. Stop at 1d4. Applies to any roll.

    Initiative
    Start:2, inc:2
    Add +1 per increment to initiative.


    # Fighter

    Fighting Style
    start:2, inc:3
    Can take this multiple times.
    Archery +2 with ranged
    Defense +1 when wearing armor
    Dueling +2 one hand weapon
    Protection +3 to other when using shield
    Two Weapon Fighting No penalty when using two weapons

    Second Wind
    Start:1, inc:3
    1 use per level taken between short rests
    +5 LP per level taken

    Extra Action
    Start:3, inc:4
    Can take an extra action once per level taken between rests. Most once per
    turn.

    Extra Attack
    Start:5, inc:5
    Extra attack per turn per level taken

    Survivor
    Start:2, inc:4
    lvl+con add to LP when LP is less than half. each turn

    Multiple Attackers
    Start:3, Inc:3. Reduce penalty by 1 per level for multiple attackers.

    Battle Master
    Start:3, inc:3
    Choose a battle maneuver per level. add +3 when it says superior dice. You
    have 4 uses per short rest initially. Add 1 use per level and +1 per
    level.
    Commander's Strike: Allow other to attack with reaction with superior
    bonus
    Disarming: When hitting, can disarm. Opponent uses wrestling vs original
    attack + superior
    Distracting Strike: When hitting, add superior to damage and to next attack (within a
    turn) by other. 
    Evasive Footwork: Add superior to defense when moving
    Feinting Attack: Use bonnus action to get superior to hit on next attack
    this turn.
    Goading attack: Add superior to attack and, on hit, compare to opponent Sense
    Motive. If target fails, then -superior on all attacks against other
    creatures not you.
    Lunging Attack: Extend reach by 5ft, add superior to damage
    Maneuvering Attack: Add superior to damage, move friend half speed with
    reaction and no opportunity attack from target
    Menacing Attack: Add superior to attack, compare opponent Sense Motive. If
    failed, then opponent frightened for a turn (-superior on rolls when
    adjacent)
    Parry. Add superior+dex to parry skill. 
    Precision Attack. Add superior+str to attack. 
    Pushing Attack. Add superior to attack after hit and compare to opponent
    Wrestle. If succeed, then push 15ft. 
    Rally. Add superior+cha to LP to friendly. Temporary.
    Riposte. If opponent misses, can react with attack. Add superior to
    attack.
    Sweeping Attack. When hit one creature, use same attack on another adjacent one
    with +superior.
    Trip Attack. Attempt to trip on hit. Add superior to attack and compare to
    Wrestling. On successs, oppoen falls prone. 

    Eldritch Knight
    Based on casting spells; must do so.
    3: Item Bond. Bond with item (weapon usually), cannot be disarmed. Can also use for
    shield. One summon per turn. At most two bonds.
    7: When casting level 1 or 0 spell, can do 1 attack as bonus. 
    10: Do bonus attack first. If hit, then -3 on defense against spell cast
    in 7. 
    15: Pick domain and transport accordingly 30ft as charge with no penalty. 
    18: When casting any spell, get bonus attack with defense undercutting of
    -6. 
    
    # Rogue

    Sneak Attack
    Start:2, Inc:2
    Add +3 to damage per level when attacking an oppoent distracted,
    incapicated, fighting oppoent opposite. 
    3:Thieves' Cant. Knowledge of thief languages and code.
    
    Cunning Action
    5: Bonus Action: Dash, Disengage, Hide

    BlindSense
    14: Sense hidden or invisible creatures within 10ft from hearing.

    Lucky.
    Start:5, Inc 5. Reroll one roll. 1 per level between rests. 

    Thief.
    3: Fast Hands. Extremely fast sleight of hand.
    5: Fast Pick. Extremely fast lock picking, disabling traps.
    7: Fast Climb. No penalty for vertical movement. 
    9: Fast Appraisal. Can do a quick appraisal at -4 penalty in 1 round.
    12: Use Magic Device. Can use magic items of any kind. 
    14: Quick Reactions. If you win initiative, you get two turns the first
    round, with the second turn being halfway through it. 
    17: Elusive. No opportunity attacks against you.

    Assasain.
    3:Initial Strike. If a creature has not acted in combat yet, then they
    get no defensive skill roll.
    9:False Identity creation. Cost 25gp, but perfect identity creation with
    history, papers, etc.
    13: Impostor. Mimic another that you have studied for hours. +6 deception
    vs perception by suspicious person.
    17: Double damage from initial strike action when applied.



    # Bard

    Start:1, Inc:2 Bardic Inspiration
    Singing can inspire others to better action. After hearing words or song,
    those listening get the option to use an extra die on a roll. Starts at
    1d4 and goes up by the usual progression. One can decide to use this after
    the first roll. One use per increment; recover at short rest.
    Start:2, Inc:2 Healing
    Singing does some healing. Same progression as above +1 per increment.
    This affects anyone who can hear you. One use per increment; recover at
    short rest.
    6: Countercharm. Sing for a turn and all allies with 30ft get +4 against
    frighten or charm. 
    20: Rolling initiative gives one bardic inspire if none. 

    # Barbarian

    Start:1, Inc:2 Rage
    Strength and attack bonus increases by +1 per increment. Cannot cast
    spells or use ranged weapons. -1 to defense. 1 Rage per increment per
    short rest. Need to continue to attack or take damage to stay raged. 
    3:Unarmored Defense. Add CON to defense as well as DEX.
    3:Frenzy. Add bonus action of attack. -6 Defense.
    Start:2, Inc:2 Relentless Attack
    Can trade +1 attack for -1 defense per increment
    Start:2, Inc:2 Danger Sense
    Add +1 per increment to Perception for danger
    11:Relentless Rage. When raging, if succeed on resist death, restore LP from the roll. 
    8:Hulk 1. Enlarge one size while raging. +4 to attack, +5ft reach, -4 defense.
    17:Hulk 2. Enlarge two sizes while raging. +8 to attack, +10ft reach, -8 defense.
    15:Persistent Rage. Can maintain rage without attack or damage. 
    
    # Druid

    Start:2, Inc:4 Wild Shape
    Can transform into a best for 2 hours per increment and do once per
    increment between rests. First increment is ground, second allows swim,
    third allows fly, fourth elemental shape, fifth plant. Attacks of the creature, abilities of the creature, mind
    of self. LP is LP/5 * increment.
    18: Timeless Body. Age slower by fator of 10.
    14: Beast Spells. Cast spells as Beast if no material components
    20: Unlimited. Change whenever.
    6: Stride across natural terrain without impediment.
    10: Immune to poison, disease, charm by fey or elementals.
    14: Use Persuasion skill to calm animals and plants
    6: Beast attack form is magical.
    14: Thousand Forms. Alter self at will. 
    
    # Monk

    //Unarmored combat


    # Paladin
    
    //Magical abilities embedded

    # Cleric, Wizard, Sorcerer, Warlock

    //Convert to particular domains

    # Ranger

    //Hunter

    Start:3, Inc 3. Beast Master
    Have beast companion. Size and LP increases by increment. Use LP/5*inc.
    Can intuit feelings from beast who can mostly understand.
    5: Bonus Action to command
    8: Rudimentary perception of beast senses.
    Start:10, Inc 2: Starting with level 1 spells, going up per increment,
    spell origins can start with beast.
    11: Beast can do two attacks
    13: Clear senses of beast upon concentration.


    # Magic Domain Immersion

    //Any magic domain can have effects crafted in the following manner




