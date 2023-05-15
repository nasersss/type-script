var User = /** @class */ (function () {
    function User(username, theme, font) {
        this.username = username;
        this.theme = theme;
        this.font = font;
    }
    User.prototype.save = function () {
        console.log('saved');
    };
    User.prototype.update = function () {
        console.log('updated');
    };
    return User;
}());
var obj = new User('nasser', true, 'Open sas');
console.log(obj.username);
console.log(obj.font);
console.log(obj.theme);
console.log(obj.save());
