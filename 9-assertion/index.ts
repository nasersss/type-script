/**
 * Data Types
 * --- Type Assertion
 * ----- Sometimes compiler does not know the information we do
 * ----- typescript is not preforming any check to make sure type assertion is valid
 */


//let myImg = document.getElementById("my-img") as HTMLImageElement;
// let myImg = <HTMLImageElement> document.getElementById("my-img");
// console.log(myImg.src);


let data:any = "1000";
 let newdata = (data as string).repeat(10)


 console.log(newdata)