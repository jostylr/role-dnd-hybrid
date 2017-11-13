# Initiative

This is a short program that deals with initiative. 

The idea is that each character has an accumulating history of actions that
put them in an initiative queue. As they take an action, the number grows,
putting them later in the queue. 

The more a character does, the more pushed off their primary action is. This
should help make sure everyone gets reasonable play time. 

The idea comes from ...

## Basic algorithm

We first add in the characters. We can input their name, an initial queueing
order (what their first action suggests about when they start), and a factor
skewing the action rate. That is, fast characters might have a factor of 0.9,
while slow might have 1.1, etc. This would apply to all of their actions. 

We sort the array based on the queuing order. The first character to go takes
an action and we add an action amount for that to that character's action. We
also add an action amount to anyone who reacted. 

We then initiate the update process and get the next character to act.

The queue is an array of the form `name, action, factor`. 

We have the following functions:

* Initial creation. Defaults of 5 for an action (no action, basically) and a
  factor of 1.
* Update action amount. For positive action amounts, use factor. For negative,
  ignore factor.
* Modify factor
* Remove character
* Sort.

And now here is the code. 

    let queue = [];
    let currentAction = 0;
    let add = function (name, initial=5, factor= 1) {
        queue.push([name, initial+currentAction, factor]);
    }
    let update = function (name, action) {
       queue.forEach(
            function (el) {
                if (el[0] === name) {
                    if (action > 0) {
                        el[1] += action*factor;
                    } else {
                        el[1] += action;
                    }
                }
            }
        );
    }
    let modify = function (name, factor) {
        queue.forEach(
            function (el) {
                if (el[0] === name) {
                    el[2] = factor;
                }
            }
        );
    }
    let remove = function (name) {
        queue = queue.filter( (el) => ! (el[0] === name) );
    }
    let iterate = function (a,b) {
       return a[1] - b[1];   
    }

    let input = _"input"


## Input

To keep things simple in this first attempt, we will have a single textbox. In
it, we will input items in the form: 

`name, initial action, factor`

This is for adding characters. One per line. The initial amount is added to
the current action level. 

When modifying a character, use

`name, +|- action`

for adding the action; positive puts one later in the queue, negative puts one
earlier. To modify the factor, use 

`name, *factor` 

This replaces the factor. 

`name` 

will remove the character (no longer in combat)


And that's it. 

So our function takes in the text value and figures out what to do with each
line, and then 
    
    function (text) {

        let lines = text.split("\n");
        lines.forEach(function (line) {
            let parts = line.split(",").forEach( (el) => el.trim() );
            if (parts.length === 1) {
                remove(parts[0]);
            }
            switch (parts[1][0]) {
                case '+' : 
                    update(parts[0], parseFloat(parts[1]));
                break;
                case '-' :
                    update(parts[0], parseFloat(parts[1]));
                break;
                case '*' :
                    modify(parts[0], parseFloat(parts[1].slice(1)));
                break;
                default  : 
                    add(parts[0], parseFloat(parts[1]), parseFloat               
                break;
            }
        });
        queue.sort(iterate);
        currentAction = queue[0][1];
    }


## js to html

Here we need some ui for using these functions: 

* On clicking button, parse text box
* Clear text box
* display table of characters

`tb` is the textarea elemen with the text in it. 

    function () {

        input(tb.value);
        tb.value = '';
            
        makeTable()

    }

## Make table

this makes a table

