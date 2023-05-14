/**
 * Data type 
 * ----Literal type
 */

type nums = 0 | 1 | -1;


function compare(num1:number, num2:number): nums{
    if (num1 === num2) {
        return 0;
    } else if (num1 > num2)  {
        return 0;
    }else{
        return -1;
    }
}


console.log(compare(20,10));

/**
 * Data type
 * ---Tuple type
 * ----- Is another sort of array type
 * ----- we know exactly how many element it contain 
 * ----- we know which types it contains at specific positions
 * 
 */

let article: [number, string, boolean] = [10,"how are you ? ",true];
let article2: readonly [number, string, boolean] = [10,"how are you ? ",true];
console.log(article);[ 10, 'how are you ? ', true ]

article.push(500);//
// article2.push(500)//Property 'push' does not exist on type 'readonly [number, string, boolean]'
console.log(article); //[ 10, 'how are you ? ', true, 500 ]

let [id, title, isActive] = article;
console.log(`id : ${id}`)
console.log(`title : ${title}`)
console.log(`isActive : ${isActive}`);
