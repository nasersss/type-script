/**
 * Interface
 * --- interface declaration
 * ----- Serve like types
 * ----- The interface describe the shape of an object
 * ----- It defines the syntax to follow
 *
 * ----- Use with Object
 * ----- Use with Function
 * ----- Use read only and optional operator
 */
var user1 = {
    id: 10,
    username: 'Nasser',
    country: 'Yemen',
    sayHello: function () { return 'Hello'; },
    sayWelcome: function () { return "Hello ".concat(user1.username); },
    getDouble: function (number) { return number * 2; }
};
// user1.id = 102; //Cannot assign to 'id' because it is a read-only 
console.log(user1);
console.log(user1.sayWelcome());
console.log(user1.sayHello());
console.log(user1.getDouble(50));
var userSetting = {
    theme: true,
    font: 'Open Sans',
    sidebar: false,
    external: false
};
console.log(userSetting);
console.log('#'.repeat(10));
var moderator = {
    role: "admin",
    id: 102,
    username: "admin",
    sayHello: function () { return 'Hello'; },
    sayWelcome: function () { return "Welcome Ms : ".concat(moderator.username); },
    getDouble: function (number) { return number * 4; }
};
console.log(moderator);
console.log(moderator.sayWelcome());
console.log(moderator.sayHello());
console.log(moderator.getDouble(50));
console.log(moderator.role);
