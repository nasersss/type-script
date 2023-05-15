interface Setting{
    theme: boolean;
    font?: string;
    save(): void;
}

class User implements Setting{
   
    constructor(public username:string, public theme:boolean, public font?:string){}
    save(): void {
       console.log('saved')
    }
    update(): void{
        console.log('updated')
    }
    
}

let obj = new User('nasser',true,'Open sas');
console.log(obj.username);
console.log(obj.font);
console.log(obj.theme);
console.log(obj.save());
