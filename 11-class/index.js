var User = /** @class */ (function () {
    function User(username, salary) {
        this.u = username;
        this.s = salary;
        this.msg = function () {
            return "Hello ".concat(this.u, " your salary ").concat(this.s);
        };
    }
    User.prototype.sayMsg = function () {
        return "Hello ".concat(this.u, " your salary ").concat(this.s);
    };
    return User;
}());
var userOne = new User('Ali', 2500);
console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
