class User {
    u:string;
    s:number;
    msg: () => string;

    constructor(username: string,salary:number) {
        this.u = username;
        this.s = salary;
        this.msg = function() {
            return `Hello ${this.u} your salary ${this.s}`
        }
    }

    sayMsg(){
        return `Hello ${this.u} your salary ${this.s}`
    }
}

let userOne = new User('Ali',2500);
console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());