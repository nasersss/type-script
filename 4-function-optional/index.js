"use strict";
let showFunction = (name = 'Nasser', age, salary) => {
    return `Hello ${name} age ${age} salary ${salary}`;
};
// console.log(showFunction(undefined,25));//An argument for 'salary' was not provided.
// console.log(showFunction(undefined,25,2500));//An argument for 'salary' was not provided.
let showFunction2 = (name = 'Nasser', age, salary) => {
    return `Hello ${name} age ${age} salary ${salary}`;
};
// console.log(showFunction2(undefined,25));
/** Function reset
 *  Rest parameter
*/
function addAll(...nums) {
    //    return  nums.reduce((total:number,num:number):number => {
    //         total+= num;
    //         return total;
    //     })
    return nums.reduce((total, num) => total *= num);
}
;
console.log(addAll(2, 3, 6, 9, 8, 9, 9));
