var User = /** @class */ (function () {
    function User(username) {
        User.created++;
    }
    User.countOject = function () {
        console.log("".concat(this.created, " object created "));
    };
    User.created = 0;
    return User;
}());
var o1 = new User('Ali');
var o2 = new User('Ahmed');
var o3 = new User('Saleh');
var o4 = new User('Abdoh');
User.countOject();
