/**
 * Data types
 * --void 
 * ----Function that will be return nothing.
 * ---- function in js that that not  return a value is show undefined
 * ---- undefined is not void
 * 
 * -- Never
 * ---- Return type never returns.
 * ---- The function does not have a normal completion
 * ---- it throws an error or never finish running at all "infinite loop" 
 *  */


function login(msg:string):void {
    console.log('Ali');
}
console.log(login('Hi every one '));

function alwaysLog(name:string):never{
    while (true) {
        console.log(name);
    }
}

// alwaysLog('sdlfjgh')
console.log(login('Hi every one '));

