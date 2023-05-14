/**
 * Data Types
 * - Type alias
 */

type standNum = string | number;

let all: standNum;
all = 20;
all = "name";
// all = true; // error Type 'boolean' is not assignable to type 'standNum'


type Buttons = {
    up: string,
    left: string,
    right: string,
    down: string,
}

type Last = Buttons & {
    x:boolean
}

function getActions(btn:Last) {
    console.log(`
    Action for button up is : ${btn.up},
    Action for button left is : ${btn.left},
    Action for button right is : ${btn.right},
    Action for button down is : ${btn.down},
    `)
}
getActions({up:"Jump",left:"Go left",right:"Go right",down:"Go down",x:true});