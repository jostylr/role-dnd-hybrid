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

## Load characters

Read the command line and get the relevant files. 


    return {};


## Load parse background data

There are a variety of files to load. We read them in, parse them out, and
return an object with all the structures needed to apply in the stats.  


    const ret = {
        race : fs.readFileAsync('src/race.txt', {encoding:'utf8'}).
            then( _"race parse")
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
    

## Compute stats

    //


## Make PDF

    //

