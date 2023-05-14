
class User {

    private static created: number  = 0 ;
    static countOject(){
       console.log(`${this.created} object created `);
    }

    constructor(username:string) {
        User.created++;
    }
}

let o1 = new User('Ali')
let o2 = new User('Ahmed')
let o3 = new User('Saleh')
let o4 = new User('Abdoh')

User.countOject();