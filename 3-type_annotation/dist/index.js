"use strict";
/**
 * Type Annotation
 * --- Indicate the data type of variable
 * --- indicate the data type of function input/output
 * --- object ....
 *
 * why need use it ?
 * is it mandatory ?
 * what happen if we did not use it?
 */
//=====================================
// Type Annotation with Function and variable
// ====================================
let theName = 'Nasser';
let theAge = 27;
let married = false;
let allany;
allany = 150;
allany = "Hello";
// theAge = 'hi'; //Type 'string' is not assignable to type 'number'. 
// ====================================
// Type Annotation with Arrays
// ====================================
let all = 'Ali';
all = 20;
all = true;
let myFriends1 = ['Ali', 'Ahmed', 'Saleh', 50];
// let myFriends2:string []= ['Ali', 'Ahmed', 'Saleh',50];//Type 'number' is not assignable to type 'string'
let myFriends3 = ['Ali', 'Ahmed', 'Saleh']; // correct
myFriends1.forEach(element => {
    // console.log(element.repeat(3))// Property 'repeat' does not exist on type 'number'.
    console.log(element);
});
myFriends3.forEach(element => {
    console.log(element.repeat(2)); // Property 'repeat' does not exist on type 'number'.
});
// ====================================
// Type Annotation with Multidimensional array
// ====================================
let arrayNumber = [1, 2, 3, 4, 56];
let arrayChar = ['A', 'B', 'C'];
let arrayThree = ['A', 'B', 'C', 5, 6, 9, 8, 'H', 'O'];
let arrayFour = ['A', 'B', 'C', 5, 6, 9, 8, 'H', 'O', ['H', 'M'], true];
// ====================================
// Type Annotation with  function
// ====================================
/**
 * ---- noImplicitAny
 *
 * ---- noImplicitReturn
 * ------- Will check all code path in a function to ensure the return a value
 *
 * ---- noUnusedLocals
 * --------Report errors on unused local variables
 *
 * ----- noUnusedParameter
 * --------Report errors on unused parameter
 */
/** noImplicitAny */
// let add = (num1,num2) => num1 + num2; /// num1 ,num2 no implicitly has an 'any' type
let add = (num1, num2) => num1 + num2; /// num1 ,num2 implicitly has an 'any' type
let showMs = true;
let showFunction = (name, age, salary /*,isMarried:true = true*/) => {
    // let isActive = true; // 'isActive' is declared but its value is never read.
    if (showMs) {
        return `Hello ${name} age ${age} salary ${salary}`;
    }
    else {
        // return 45612;//Type 'number' is not assignable to type 'string'
        return 'nothing';
    }
};
showFunction('Ali', 25, 2500);
// in your tsconfig.json 
// "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
// "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
// "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
// "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
//# sourceMappingURL=index.js.map