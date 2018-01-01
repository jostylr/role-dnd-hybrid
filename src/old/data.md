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

The racial interpretations 


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
upping the die roll. After 1d12, we use 1d61d8, 1d12d4 and 1d12d6 to somewhat
simulate 1d14, 1d16, and 1d18 (stats not entirely right, but close enough).
Then we hit 1d20 and we 


This alternates between adding a bonus or adding die roll. After d12, it does
d6+d8, d4+d12, d12+d6, d20. It stops at d20 and then we just add bonuses. 

    1d04+00, 1d04+01, 1d06+01, 1d06+02, 1d08+02, 
    1d08+03, 1d10+03, 1d10+04, 1d12+04, 1d12+05, 
    d6d8+05, d6d8+06,d12d4+06,d12d4+07,d12d6+07,
    d12d6+08,1d20+08, 1d20+09,1d20+10,1d20+11,
    1d20+12,1d20+13,1d20+14,1d20+15,1d20+16,
    1d20+17,1d20+18,1d20+19,1d20+20,1d20+21


[stats]()

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




