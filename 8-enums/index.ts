/**
 -- Data types
 ---Enums => Enumeration
 ----Allow us to declare a set of named constant
 ----Used for logical grouping collection of constants "collection of related values".
 ---- it organize your code 
 ---- By default  enums are number-based, first element is 0
 ---- There a numeric enums
 ---- There a string-based enums
 ---- there a heterogeneous enum [string - number];
 */

 let getHard = ():number => 3 ;

 enum Kids {
   five = 25,
   seven = 20,
   ten = 15

 } 

 enum Level {
    Kid = Kids.five,
    Easy = 9,
    Medium = Easy - 3,
    Hard = getHard()
 }

 const enum Level2 {
   Kids = 15,
   Easy = 9,
   Medium = 6,
   Hard = 3
} // to save your enum modified your config.json file and uncomment "preserveConstEnum": true 
 let lv1:string = 'Easy';
 if (lv1 === 'Easy'){
    console.log(`The level is ${lv1} and number of second is ${Level.Easy}`);
 }

 let lv2:string = 'Hard';
 if (lv2 === 'Hard'){
    console.log(`The level is ${lv2} and number of second is ${Level2.Hard}`);
 }