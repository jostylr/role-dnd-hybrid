# Initiative

This is a short program that deals with initiative. 

The idea is that each character has an accumulating history of actions that
put them in an initiative queue. As they take an action, the number grows,
putting them later in the queue. 

The more a character does, the more pushed off their primary action is. This
should help make sure everyone gets reasonable play time. 

The idea comes from

    
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title></title>
        </head>
        <body>
            <textarea rows="20" cols="100"></textarea>
            <button>Process action</button>
            <div id="table"></div>
            <script>
                _"js | jshint"
            </script>
        </body>
    </html>


## js

This is the whole script compilation. 

    let textarea = document.querySelector("textarea");
    let tabby = document.querySelector("#table");
    let button = document.querySelector("button");

    let makeTable = _"make table";

    _"basic algorithm"

    button.addEventListener("click", _"process textarea");


## Basic algorithm

We first add in the characters.

We have an object called characters whose keys are names. Names should
contain no space (use something like dash for spaces, such as orc-1). 

Each name will point to an object with the keys of the various attributes
being tracked (at least for some characters). Two mandatory attributes are
action and factor which is used in the initiative. The rest is just to help
make tracking of monster stats, etc., easier. 

* For each line, we grab the name
* If the name is not present we add an entry to characters. Action and
  factor is automatically added; action is currentAction and factor is 1.
* We grab the object and proceed to modify it
* A single number adds to action
* A number with a * in front of it sets the factor
* A number with a `word:` in front of it sets that attribute. If it already is
  present, then it becomes additive. 
* All things are separated by white space. 


And now here is the code. 

    let chars = {};
    let currentAction = 0;

    let rank = _"rank";
    
    let linePro = _"line";

    let linesPro = function (text) {
        let lines = text.split("\n").map( el => el.trim() );
        lines.forEach( (line) => {
            if (line) {
               linePro(line.split(/\s+/)); 
            }
        });
    };



## Line

This processes each line with each line already being split into white-space
separated terms. 

We sort the pieces so that the factor gets processed first (`*` comes before
numbers, plus, and minus) since that affects the action.

Commas at the end are ignored. This is because I sometimes will write
commas to separate. 

    function (pieces) {
        pieces = pieces.map( el => 
            (el[el.length-1] === ',') ? 
                el.slice(0,-1) :
                el
        );


        let name = pieces.shift();

        var char = chars[name];
        if (!char) {
           char = chars[name] = {
               action : 0,
               factor : 1
           };
        }

        pieces.sort().forEach( (el) => {
            _":action"
            _":factor"
            _":attribute"
            _":delete"
        });


    }


[action]()

This should match a number. parseFloat should do the trick. We just add the
number.

We multiply by a little random amount to make it a little less predictable
who goes first when they are essentially tied. 

    let action = parseFloat(el);
    if (!isNaN(action)) {
        char.action += action+Math.random()*0.1;
        return;
    }


[factor]()

Here a leading `*` denotes a factor assignment. 

    if (el[0] === '*') {
        char.factor = parseFloat(el.slice(1));
        return;
    }

[attribute]()

This applies when there is a `word:` followed by a number.

    let m = el.match(/(\w+)\:((\+|\-)?\d+(\.\d+)?)/);
    if (m) {
        let att = m[1];
        let prop = parseFloat(m[2]);
        if (char.hasOwnProperty(att) ) {
            char[att] += prop;
        } else {
            char[att] = prop;
        }
        return;
    }

[delete]() 

Delete a character if there is a `!` as an entry. 

    if (el === '!') {
        delete chars[name];
        return;
    }



## Process textarea

Here we need some ui for using these functions: 

* On clicking button, parse text box
* Clear text box
* display table of characters

`tb` is the textarea elemen with the text in it. 

    function () {
        let val = textarea.value;
        if (val) {
            linesPro(textarea.value);
        }
        textarea.value = '';
            
        makeTable(rank() );

    }

## Make table

This makes a table.

    function (queue) {
        let table = "<table><tbody><tr><td>" + 
            queue.map( (el) => {
               _":make row"  
            }).join("</td></tr><tr><td>") +
            "</td></tr></tbody></table>";
        tabby.innerHTML = table;
    }

[make row]()

We are fed in a name. The name can be used with chars to get the character
object. The form of the line should be `name, action, factor, other
attributes`. 


    let char = chars[el];
    let keys = Object.keys(char);
    keys = keys.filter( el => (
        (el !== "action") && 
        (el !== "factor") )
    );
    let ret = keys.map(el => el + ":" + char[el]);
    ret.unshift(el, char.action.toFixed(2), char.factor);
    return ret.join("</td><td>");

## Rank

This ranks the names based on the action and generates the current action. 

    function () {
        let ret = Object.keys(chars);
        ret.sort( (a,b) => chars[a].action - chars[b].action );
        currentAction += ret[0];
        return ret;
    }
