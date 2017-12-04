const P = require('bluebird');
const fs = P.promisifyAll(require('fs'));
const pdf = require('pdfkit');

async function main ()  {

    const chars = (async function () {
        return {};
    })();

    const src = (async function () {
        const ret = {
            race : fs.readFileAsync('src/race.txt', {encoding:'utf8'}).
                then( function (text) {
                    const ret = {};
                    const blocks = text.split("\n\n").map(
                        b => b.split("\n").map(b=>b.trim()) );
                    blocks.forEach(b => {
                        ret[b.shift()] = b;
                    })
                    return ret;
                })
        };
        
        return ret;
    })();

    const what = await P.all([P.props(src), P.props(chars)]);

    console.log(what);

    //

    //

};

main();
