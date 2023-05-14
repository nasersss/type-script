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

let theName: string = 'Nasser';
let theAge:number = 27;
let married: boolean = false;
let allany: any ;
allany = 150;
allany = "Hello";
// theAge = 'hi'; //Type 'string' is not assignable to type 'number'. 



// ====================================
// Type Annotation with Arrays
// ====================================

let all: string | number | boolean = 'Ali';
all = 20;
all = true;

let myFriends1 = ['Ali', 'Ahmed', 'Saleh',50];
// let myFriends2:string []= ['Ali', 'Ahmed', 'Saleh',50];//Type 'number' is not assignable to type 'string'
let myFriends3:string []= ['Ali', 'Ahmed', 'Saleh']; // correct

myFriends1.forEach(element => {
    // console.log(element.repeat(3))// Property 'repeat' does not exist on type 'number'.
    console.log(element);
});
myFriends3.forEach(element => {
    console.log(element.repeat(2))// Property 'repeat' does not exist on type 'number'.
});




// ====================================
// Type Annotation with Multidimensional array
// ====================================

let arrayNumber : number [] = [1,2,3,4,56];
let arrayChar : string [] = ['A','B','C'];
let arrayThree: (string | number) [] = ['A','B','C', 5,6,9,8,'H','O'];
let arrayFour:(string | number | string[] | boolean)[] = ['A','B','C', 5,6,9,8,'H','O',['H','M'],true];


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
let add = (num1:number,num2:number) => num1 + num2; /// num1 ,num2 implicitly has an 'any' type


let showMs = true;
let showFunction = (name: string,age: number,salary: number /*,isMarried:true = true*/) : string => { //'isMarried' is declared but its value is never read

   // let isActive = true; // 'isActive' is declared but its value is never read.
   
   if (showMs) {
        return `Hello ${name} age ${age} salary ${salary}`;
    }
    else{
        // return 45612;//Type 'number' is not assignable to type 'string'
        return 'nothing';

    }

}

showFunction('Ali', 25, 2500);


// ====================================
// Type Annotation with  Object
// ====================================

let myObject: {
    readonly username:string,
    id: number,
    hire?:boolean,
    skills:{
        one:string,
        two:string
    }   
} = {
    username:"Hello",
    id: 101,
    skills:{
        one:"HTML",
        two:"CSS"
    }
}



console.log(myObject)
// in your tsconfig.json 
// "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
// "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
// "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
// "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
