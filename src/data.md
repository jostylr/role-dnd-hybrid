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
  to death, t hen the character has 10 rounds to use resist death to get to 0
  LP level before dying. Can use remaining surge points; no automatic failure.
* Magic Points: 1 MP per power level of spell
* Surge Points: 1 SP use gives 1d6 roll, 2SP 1d12, 3SP 1d20. With 1d20, 1 is
  automatic failure, 20 is automatic success. 6SP can be used for 1d100 with
  1-10 being automatic failure, 91-100 being automatic success. For auto
  success, remove opposing subtraction. Massive success. If SP reaches 0, then
  all rolls get disadvantage. 
* Advantage is a +4, disadvantage is a -4.

Integrate: moving results in -1 per step for any rolls that turn. moving away
from an enemy allows them to use their attack action before you move. The move
penalty lasts from the start of turn to the start of next turn. 


### Combat

Basic combat is oppositional rolls. Choose an attack skill, roll it. Compare
to defender's skill (choosing their action). Subtract, if positive in favor of
attacker, then it is hit. Damage is the 
positive amount + weapon damage - armor class of defender (-10 from what is
listed in PHB). 

Armor with dex restriction limits gives disadvantage to dodge disadvantage if no dex allowed. No penalty on parry or shield. Other uses of dex
skills follow similarly as sensible. Penalty on stealth checks is double
disadvantage for the armors that have that property and strength related skills get half disadvantage
for STR13 and disadvantage for STR15.

Moving away from enemies either requires half speed to maintain defense or
double disadvantage to defense. 

Ranged: Disadvantage on long-range attacks and close quarters.

Cover: Half cover advantage defense, 3/4 cover double advantage defense, total cover can't be
targeted. 

Being attacked by multiple opponents leads to a -1  per opponent to all rolls. 


### Magic

The magic spells all have different levels, including cantrips. When casting a
spell at a certain level, the challenge to overcome is as follows.
Use the upper max at`2*lvl` skill level roll. So just within
that range. Cantrips have a 1 which is basically a pass unless there are
negative modifiers at work. 

    1, 5, 8, 11, 14, 17, 18, 19, 20, 21

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
    160000
    190000
    220000
    260000
    300000
    350000
    400000
    450000
    500000
    560000
    630000
    700000
    770000
    840000
    910000
    1000000

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

    Draginborn
    STR +2
    CHA +1
    Size Med
    Speed 30
    Languages Common, Draconic
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
     



## Dice levels

Basically, starts with 1d4, and we alternate between adding a bonus point and
upping the die roll. Once maxed at 1d12, we then go down gaining precision,
but not changing the upper limit of the range (so lower the d by 2, adding in
+2 bonus. At 1d4+13, we then repeat the previous process. 

    _":option 4"


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


## Skills

We have general areas of learning, schools of learning, and skills. 


    Physical:
        STR Outdoor:  Swim, Climb, Run
        DEX Agility: Tumble, Escape Artist, Juggling
        CON Toughness: Resist Poison, Resist Disease, Resist Death

    Mental:
        INT Academic: History, Nature, Mathematics, Science, Law, Ancient, Arcana 
        INT Thinking: Strategy, Memory, Deduction, Engineering
        WIS Survival: Heal, Forage, Track, Knots, Herbalism Kit, Navigator's Kit

        
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
        WIS Knowing: Perception, Search, Spot, Gather Information, Sense Motive, Read Lips
        WIS Hide: Background Camouflage, Disguise Kit, Hide Tracks
        DEX Movement: Move Silently, Precision Movements, Sleight of Hand
        DEX Mechanical: Thieve's Tools, Detect Traps, Disable Device
        INT Keen Eye: Decipher/Encrypt Script, Forgery Kit, Appraise, Poisoner's Kit

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

* Parry. This grants advantage in attacking any opponent that is attacking
  you. Cannot be used as defense against most magic stuff. 
* Dodge. This can be used to dodge not only direct attacks, but also many
  magical attacks. Remember heavier armor leads to disadvantage with this
  skill.
* Shield. This can be used to defend against both physical and magical
  attacks. Gives +2 to damage reduction. 



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


    Fire Throw (dodge/shield as well as fire defense)
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

    Fire Hand (dodge/shield as well as fire defense)
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

    Armor of Agathys
    Chill Touch
    Cone of cold
    Conjure Water Elemental
    Control Water
    Create/Destroy Water
    Ice Storm
    Otiluke's Freezing Sphere
    Ray of frost
    Simulacrum
    Sleet Storm
    Tsunami
    Wall of Ice
    Water Breathing
    Water Walk
    EE:
    Abi-Dalzim's Horrid Wilting
    Frostbite
    Investiture of Ice
    Maelstrom
    Shape Water
    Snilloc's Snowball Swarm
    Tidal Wave
    Wall of Water
    Watery Sphere

### Air 

    Cloudkill
    Conjure Air Elemental
    Control Weather
    Dissonant Whispers
    Feather Fall
    Fly
    Fog Cloud 
    Gaseous Form
    Gust of Wind
    Magic Mouth
    Message
    Sending
    Shatter
    Silence
    Silent Image
    Stinking Cloud
    Thunderous Smite
    Thunderwave
    Wind Walk
    Wind Wall
    EE:
    Control Winds
    Dust Devil
    Gust
    Investiture of Wind
    Skywrite
    Thunderclap
    Warding Wind
    Whirlwind

### Earth

    Acid Projectiles
    Barkskin
    Blade Barrier, Ward, Cloud of Daggers
    Commune with Nature
    Conjure Earth Elemental
    Earthquake
    Flesh to Stone
    Freedom of Movement
    Grease
    Imprisonment
    Meld Into Stone
    Melf's Acid Arrow
    Move Earth 
    Pass Without Trace
    Stone Shape
    Stoneskin
    Wall of Stone
    Web
    EE:
    Bones of the Earth
    Earthbind
    Earth Tremor
    Erupting Earth
    Investiture of Stone
    Magic Stone
    Maximilian's Earthen GRasp
    Mold Earth
    Transmute Rock
    Vitriolic Sphere
    Wall of Sand


### Light

    Arcane Eye
    Blinding Smite
    Blur
    Branding Smite
    Call Lightning
    Chain Lightning
    Chromatic Orb
    Color Spray
    Continual Flame(Light)
    Dancing Lights
    Darkness
    Darkvision
    Daylight
    Greater Invisibility
    Guiding Bolt
    Hypnotic Pattern
    Illusory Script
    Invisibility
    Light
    Lightninig Arrow, Bolt
    Major Image
    Mend
    Minor Illusion
    Mirage Arcane
    Mirror Image
    Mislead
    Moonbeam
    Prismatic Spray
    Prismatic Wall
    Programmed Illusion
    Project Image
    See invisibility
    Seeming
    Shocking Grasph
    Storm of Vengenance
    Sunbeam
    Sunburst
    True Seeing
    EE:
    Storm Sphere
    1: Faerie fire. In a 20ft cube, 60ft range, creatures outlined in light up to a minute. 
    Sacred Flame





### Physical

    Alter Self
    Animate Ojects
    Arcane Lock
    Bane, Bless
    Bestow Curse
    Blind/Deaf
    Chromatic Orb
    Conjure Barrage, Volley, Cordon of Arrows
    Disguise Self
    Enhance Ability
    Enlarge/Reduce
    Expeditious Retreat 
    Fabricate
    Find Traps
    Giant Insect
    Guidance
    Hail of Thorns
    Haste
    Jump
    Knock
    Longstrider
    Polymorph
    Ray of Enfeeblement
    Shapechange
    Shillelagh
    Slow
    Spider Climb
    Swift Quiver
    True Polymorph


    
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

    Aid - bonus LP

    Aura of Life, Purity, vitality, Beacon of Hope, Circle of Power
    Clone
    Create Food
    Cure Wounds
    Death Ward
    Detect Poison and Disease
    Ensnaring Strike, Entangle, Grasping Vine
    Goodberry
    Greater Restoration
    Heal
    Healing Word
    Heroes' Feast
    Lesser Restoration
    Mass Cure Wounds, Mass Heal, Mass Healing Word
    Plant Growth
    Power Word Heal
    Prayer of Healing
    Protection from Poison
    Purify Food and Drink
    Raise Dead
    Regenerate
    Reincarnate
    Resurrection
    Revivy
    Spare the Dying
    Speak with Plants
    Spike Growth
    Thorn Whip
    Transport via Plants
    Tree Stride
    True Resurrection
    Wall of Thorns

    


### Death

    Animate Dead
    Arms of Hadar - tendril force, weakens
    Blight
    Circle of Death
    Contagion
    Create Undead
    Disintegrate
    Evards Black Tentacles
    False Life
    Feign Death
    Finger of Death
    Gentlre Repose
    Harm
    Inflict Wounds
    Poison Spray
    Power Word Kill
    Ray of Sickness
    Speak with Dead
    Vampiric Touch

### Mental

    Animal Friendship, messenger
    Antipathy/Sympathy
    Awaken
    Beast sense
    Calm Emotions
    Charm Person
    Command
    Compelled duel, Compulsion
    Comprehend Languages
    Confusion
    Crown of Madness
    Crusader's Mantle
    Detect Thoughts
    Dominate Beast, Dominate Monster, Person
    Dream
    Enthrall
    Eyebite
    Fear
    Feeblemind
    Find Familiar
    Find Steed
    Friends
    Geas
    Glibness
    Halluciantory Terrain
    Heroism
    Mass Suggestion
    Mind Blank
    Modify Memory
    Otto's Irresistible Dance
    Phantasmal Force
    Phantasmal Killer
    Power Word Stun
    Rary's Telepathic Bond
    Sleep
    Speak with Animals
    Staggering Smite
    Suggestion
    Symbol
    Tasha's Hideous Laughter
    Telepath
    Tongues
    Vicious Mockery
    Weird
    Wrathful Smite
    Zone of Truth
    EE: 
    Beast Bond



### Space-Time

    Alarm
    Arcane Gate
    Augury
    Clairvoyance
    Commune
    Divination
    Drawamij's Instant Summons
    Find the Path
    Foresight
    Gate
    Hunger of Hadar
    Hunter's Mark
    Insect Plague
    Legend Lore
    Locate Animals, Creature, Object
    Scrying
    Teleport
    Teleportation Circle
    Time Stop
    True Strike
    Word of Recall


### Force

    Barrier (Antilife shield), 
    Bigby's Hand
    Divine Favor, Word
    Forcecage
    Guardian of Faith
    Hold Monster, Person
    Leomund's Tiny Hut
    Levitate
    Mage Armor
    Mage Hand
    Magic Missile
    Magical Weapon
    Misty Step
    Mordenkain's Faithful Hound
    Mordenkainen's Sword
    Otiluke's Resilient Sphere
    Phantom Steed
    Reverse Gravity
    Shield, Shield of Faith
    Spirit Guardians
    Spiritual Weapon
    Telekinesis
    Temser's Floating Disk
    Unseen Servant
    Wall of Force
    Witch Bolt
    EE:
    Catapult



### Magic

    Antimagic
    Astral Projection
    Banish, Banishing Smite
    Blink
    Conjure Celestial, Fey, woodland beings, animals
    Contact Other plane
    Contingency
    Counterspell
    Creation
    Demiplane
    Detect Evil/Good
    Detect Magic
    Dimension Door
    Dispel Evil/Good
    Dispel Magic
    Eldritch Blast
    Etherealness
    Forbiddance
    Globe of Invulnerability
    Glyph of Warding
    Guards and Wards
    Hallow
    Hex
    Holy Aura
    Identify
    Leomund's Secret Chest
    Magic Circle
    Magic Jar
    Maze
    Mordenkainen's Magnificient Mansion
    Mordenkainen's Privates Sanctum
    Nondetection
    Nystul's Magic Aura
    Planar Ally
    Planar Binding
    Plane Shift
    Protection from Evil and Good
    Remove Curse
    Resistance
    Rope Trick
    Sanctuary
    Sequester
    Warding Bound
    Wish 
    EE:
    Primordial Ward


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


