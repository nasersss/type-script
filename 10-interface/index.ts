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


interface User {
    readonly id:number,
    username:string,
    country?:string,
    sayHello(): string,
    sayWelcome: () => string,
    getDouble(num:number) : number
}

let user1:User = {
    id:10,
    username:'Nasser',
    country:'Yemen',
    sayHello() {return 'Hello'},
    sayWelcome: () => `Hello ${user1.username}`,
    getDouble(number) {return number * 2}

}
// user1.id = 102; //Cannot assign to 'id' because it is a read-only 

console.log(user1);
console.log(user1.sayWelcome());
console.log(user1.sayHello());
console.log(user1.getDouble(50));

/**
 * Interface 
 * -----Reopen the interface and use case
 */


// Home page
interface Setting {
    theme : boolean;
    font:string;
}

//article

interface Setting{
    sidebar: boolean;
}

// contact

interface Setting {
    external:boolean;
}

let userSetting: Setting  = {
    theme:true,
    font:'Open Sans',
    sidebar: false,
    external:false
}

console.log(userSetting);

console.log('#'.repeat(10))
/**
 * Interface 
 * ----- Extends 
 */


interface Moderator extends User{
    role: number | string;
}

let moderator:Moderator = {
    role: "admin",
    id: 102,
    username: "admin",
    sayHello() { return 'Hello' },
    sayWelcome: () => { return `Welcome Ms : ${moderator.username}` },
    getDouble(number) { return number * 4 }
}

console.log(moderator);
console.log(moderator.sayWelcome());
console.log(moderator.sayHello());
console.log(moderator.getDouble(50));
console.log(moderator.role);