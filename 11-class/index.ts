/**
 * --Class
 * ----Data Access modifiers && parameters properties
 * ------Public
 * -------- All members of a class in typescript are public
 * -------- All public member can be accessed anywhere without any restriction
 * ------Private
 * -------- Members are visible only to that class and are not accessible outside the class
 * ------Protected
 * -------- Same like private but can be access using the deriving class
 * --TypeScript is a layer on top of javascript
 * ------ It should remove all annotation and although access modifiers "Private for example"

 * 
*/
class User {
    public get u(): string {
        return this._u;
    }
    public set u(value: string) {
        this._u = value;
    }
//    private u:string;
//    protected s:number;
    msg: () => string;
    // constructor(username: string,salary:number) {
    //     this.u = username;
    //     this.s = salary;
    //     this.msg = function() {
    //         return `Hello ${this.u} your salary ${this.s}`
    //     }
    // }
    constructor (private _u: string, protected s:number, public address?:string){
        this.msg = function() {
                    return `Hello ${this._u} your salary ${this.s} address ${this.address}`
         }
    }
    sayMsg(){
        return `Hello ${this._u} your salary ${this.s} address ${this.address}`
    }
}

let userOne = new User('Ali',2500,'Yemen');
let userSecond= new User('Nasser',3000);
console.log(userOne.msg());
// console.log(userOne.u);//Property 'u' is private and only accessible within class 'User'
// console.log(userOne.s);//Property 's' is protected and only accessible within class 'User' and its subclasses
userOne.u = "Ahmed";
console.log(userOne.msg());
console.log(userSecond.msg());