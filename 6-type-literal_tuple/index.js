/**
 * Data type
 * ----Literal type
 */
function compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 0;
    }
    else {
        return -1;
    }
}
console.log(compare(20, 10));
/**
 * Data type
 * ---Tuple type
 * ----- Is another sort of array type
 * ----- we know exactly how many element it contain
 * ----- we know which types it contains at specific positions
 *
 */
var article = [10, "how are you ? ", true];
var article2 = [10, "how are you ? ", true];
console.log(article);
[10, 'how are you ? ', true];
article.push(500); //
// article2.push(500)//Property 'push' does not exist on type 'readonly [number, string, boolean]'
console.log(article); //[ 10, 'how are you ? ', true, 500 ]
var id = article[0], title = article[1], isActive = article[2];
console.log("id : ".concat(id));
console.log("title : ".concat(title));
console.log("isActive : ".concat(isActive));
