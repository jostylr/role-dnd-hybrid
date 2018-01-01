# Builder

This is a literate program that produces a script which will create PDFs for
monsters, characters, etc. 

The input into the script is the character file, monster file, or a list of
such to generate. The monster files should also have supplied with it the
experience levels. Character files should have that already. 

In addition to the specific data of what to generate, the script reads in
monsters, race, features, classes, equipment, etc., to build up whatever is
needed. 

The output should consist of PDFs for all the creatures involved.

    const P = require('bluebird');
    const fs = P.promisifyAll(require('fs'));
    const pdf = require('pdfkit');

    async function main ()  {

        const chars = (async function () {
            _"load characters"
        })();

        const src = (async function () {
            _"load parse background data"
        })();

        const what = await P.all([P.props(src), P.props(chars)]);

        console.log(what);

        _"compute stats"

        _"make pdf"

    };

    main();


[../build.js](# "save:| jshint")


## Basic Setup

* Name: No impact on anything
* Race: Each character or monster has a core race. This gives a discount on learning
stuff. Those same numbers can also be used to generate point allocations for
the race. Negative numbers make it harder to advance in the skill. 

Then we get into the stats blocks. Each block is preceded by a number on its
own line; this is the experience to apply. It may be multiple numbers that
get added: `500 3000  -200` which is 3300. 
After each line, it gets applied to groups listed or the specific
attributes, skills, features, etc., listed. The number at the start of each
line represents what part of 

The core group is computed by adding up all experience points and applying 10%
to that. Thus, there is some basic advancement in these core skills and
abilities. 

A class gets 8% bonus and an archetype gets a 16% bonus. Some classes nest
other classes. For example, Barbarian, Cleric, Paladin, Ranger all have
Fighter as part of their base class. 

A line of the form `name: *`  will aply the 


## Load characters

Read the command line and get the relevant files. 


    return {};


## Load parse background data

There are a variety of files to load. We read them in, parse them out, and
return an object with all the structures needed to apply in the stats.  


    const ret = {
        race : fs.readFileAsync('src/race.txt', {encoding:'utf8'}).
            then( _"race parse"), 
        groups : fs.readFileAsync('src/race.txt', {encoding:'utf8'}).
            then(_"groups parse"),
        skills : fs.readFileAsync('src/skills.txt', {encoding:'utf8'}).
            then(_"skills parse),
        equipment : fs.readFileAsync('src/equipment.txt', {encoding:'utf8'}).
            then(_"equipment parse),
        features : fs.readFileAsync('src/features.txt', {encoding:'utf8'}).
            then(_"features parse"),
        spells : fs.readFileAsync('src/spells.txt', {encoding:'utf8'}).
            then(_"spells parse)
    };

    return ret;

### Race Parse

This parses the race data. Each racial block is separated by a full blank
line. Each piece of data is on its own line. The first line is the name of the
race. 

    function (text) {
        const ret = {};
        const blocks = text.split("\n\n").map(
            b => b.split("\n").map(b=>b.trim()) );
        blocks.forEach(b => {
            ret[b.shift()] = b;
        })
        return ret;
    }
    

### Groups Parse

### Skills Parse

This reads in the skills 

### Equipment Parse

### Features Parse

### Spells Parse

For spells, we parse them in in order to list them and also for the (domain)
spells listing which allows one to start learning all of the spells evenly (so
cantrips are learned earlier than the others, for example). 


## Compute stats



    //


## Make PDF

    //

