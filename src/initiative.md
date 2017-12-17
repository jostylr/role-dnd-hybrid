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
            <style>
                #actions, #cards {
                    width: 48%;
                    float: left;
                }
                #cards {
                    display:flex;
                    flex-direction:column;
                }
            </style>
        </head>
        <body>
            <div id="actions">
            <textarea rows="10" cols="100">---P
    </textarea>
            <button id="action">Process action</button>
            <button id="back">Back</button>
            <button id="forward">Forward</button>
            <div id="table"></div>
            </div>
            <div id="cards"></div>
            <script>
                _"js | jshint"
            </script>
        </body>
    </html>


## js

This is the whole script compilation. 

    let textarea = document.querySelector("textarea");
    let tabby = document.querySelector("#table");
    let act = document.querySelector("#action");
    let back = document.querySelector("#back");
    let forward = document.querySelector("#forward");

    let makeTable = _"make table";

    const history = []; //records textarea histories for replay
    let current = 0; 
    let cards = {};

    _"basic algorithm"

    _"cards"

    act.addEventListener("click", _"process textarea");
    back.addEventListener("click", _"back");
    forward.addEventListener("click", _"forward");
    


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
* Group is done by `---name`. The default is players so put them in first,
  then do monsters which will also give the players a slight advantage in the
  first round to go first (always nice). 


And now here is the code. 

    let chars = {
        their : {
            action:100,
            factor:0.5,
            group : "-"
        },
        my : {
            action:100,
            factor:2,
            group : "-"
        },
        "-" : {
            action :1000,
            factor :1,
            group  : "-"
        }
    };
    let currentAction = 0;
    let group = "P"; // for different factors
    

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

We also use groups for enabling different factors. A group is `---groupname`.
The default is `P` for players. Recommend `---M` for monsters.

We can apply something to a group by doing `(name1,name2,...) whatever you
want to apply`.

    function line (pieces) {
        pieces = pieces.map( el => 
            (el[el.length-1] === ',') ? 
                el.slice(0,-1) :
                el
        );

        let m, name, char;
        name = pieces.shift();
        if ( (m = name.match(/\-\-\-(\w+)/) ) ) {
            _":assign group"
        } else if ( (m = name.match( /\(([^)]+)\)/ ) ) ) { 
            let names = m[1].split(',');
            names.forEach( el => 
                line([el].concat(pieces) )
            );
            return;
        } else {    
            char = chars[name];
            if (!char) {
               char = chars[name] = {
                   action : 0,
                   factor : 0,
                   group : group
               };
            }
        }

        pieces.sort().forEach( (el) => {
            _":action"
            _":factor"
            _":attribute"
        });


    }


[assign group]()

This creates a group for a group name if it does not exist. We set the action
to 100 so that it never takes a turn; it is just for modifying the factor. 

    name = group = m[1];
    char = chars[name];
    if (!char) {
        char = chars[name] = {
            factor : 0,
            action : 100,
            group : "-"
        };
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

Here a leading `*` denotes a factor assignment. This is additive to the
current factor. 

    if (el[0] === '*') {
        char.factor += parseFloat(el.slice(1));
        return;
    }

[attribute]()

This applies when there is a `word:` followed by anything not space.

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



## Process textarea

Here we need some ui for using these functions: 

* On clicking button, parse text box
* Clear text box
* display table of characters

`tb` is the textarea element with the text in it. 

    function () {
        let val = textarea.value;
        if (val) {
            linesPro(textarea.value);
        }
        textarea.value = '';
        let keys = rank();
        makeTable(keys);
        makeCards(keys);

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
    let specialKeys = ["action",
         "factor", 
         "group",
         "randmod"
    ];
    keys = keys.filter( el => 
        !(specialKeys.includes(el)) 
    );
    let ret = keys.map(el => el + ":" + char[el]);
    ret.unshift(el, (char.action+char.randmod).toFixed(1),
        char.factor.toFixed(1));
    return ret.join("</td><td>");

## Rank

This ranks the names based on the action and generates the current action and
group of main actor. 

    function () {
        let ret = Object.keys(chars);
        _"generate mod"
        ret.sort( (a,b) => (chars[a].action + chars[a].randmod) - (chars[b].action+chars[b].randmod) );
        currentAction += chars[ret[0]].action;
        group = chars[ret[0]].group;
        return ret;
    }

### Generate Mod

We create the random modifier. At its base is Math.random(), but we multiply
that by a group factor (to delay members of the same group having consecutive
turns) as well as the personal modifiers as well as a particular group
modifier. The higher the modifier, the more
likely a turn is delayed. These modifiers are not cumulative, but just in the
moment of randomness. 

The group modifiers are dealt with by being "characters".

    ret.forEach( (el) =>  { 
        let char = chars[el];
        char.randmod = Math.random()*
            (char.factor + 
             chars[char.group].factor +
             ( (char.group === group) ? 
                chars.my.factor : chars.their.factor )
            );
        }
    );

### Back

    function backF () {
        console.log("back pushed");
    }

### Forward

    function forwardF () {
        console.log("forward pushed");
    }


## Cards

This should display the cards of the monsters. 

Each card is put into a vertical flexbox. The ordering is the same as the
ordering of the table of actions. Each card itself is a flex container,
horizontal, with wrap. 

    _":makeprop"

    _":makecard"

    _":makecards"

[makecards]()

    function makeCards(keys) {
        let html = keys.map(makeCard).join('\n');
        cards.innerHtml = html;
    }


[makecard]()

The data should be an array of arrays. 

    function makeCard (key) {
        if (!cards.hasOwnProperty(key) ) { return '';}
        let ret = '<div class="card">';
        ret += '<span>' + key + '</span>'
        ret += '<span>' + cards[key].map(makeProp).join('</span><span>') +
            '</span>';
        ret += '</div>';
        return ret;
    }

[makeprop]()

Each array should be either one string (just a name or fixed something or other) or  string, die roll, modifier.

    function makeProp( arr) {
        if (arr.length === 1) {
            return arr[0];
        }
        return arr[0] + ":" + arr[1] + "+" + arr[2];
    }


## Feedback

Make a history to repopulate the textarea and go back; this helps eliminate
possible mistakes. 

Allow for more data per character (particularly monsters); the active one
should come up; one should also be able to type in various names to get their
cards as needed. 

Abbreviations for a name should also be available maybe `name~n` One could do
a fuzzy match, but we also rely on having new names being added. Could add
syntax for that instead. 

