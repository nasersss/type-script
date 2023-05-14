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
var User = /** @class */ (function () {
    // constructor(username: string,salary:number) {
    //     this.u = username;
    //     this.s = salary;
    //     this.msg = function() {
    //         return `Hello ${this.u} your salary ${this.s}`
    //     }
    // }
    function User(_u, s, address) {
        this._u = _u;
        this.s = s;
        this.address = address;
        this.msg = function () {
            return "Hello ".concat(this._u, " your salary ").concat(this.s, " address ").concat(this.address);
        };
    }
    Object.defineProperty(User.prototype, "u", {
        get: function () {
            return this._u;
        },
        set: function (value) {
            this._u = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.sayMsg = function () {
        return "Hello ".concat(this._u, " your salary ").concat(this.s, " address ").concat(this.address);
    };
    return User;
}());
var userOne = new User('Ali', 2500, 'Yemen');
var userSecond = new User('Nasser', 3000);
console.log(userOne.msg());
// console.log(userOne.u);//Property 'u' is private and only accessible within class 'User'
// console.log(userOne.s);//Property 's' is protected and only accessible within class 'User' and its subclasses
userOne.u = "Ahmed";
console.log(userOne.msg());
console.log(userSecond.msg());
