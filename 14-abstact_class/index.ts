abstract class Food{
    constructor(public title:string,){}
    abstract getCookingTime(): void;
    // abstract getCookingTime(): string { return 'Food is ready'; } //Method 'getCookingTime' cannot have an implementation because it is marked abstract.
}   

class Pizza extends Food{
    constructor(title: string ,public price: number){
        super(title);
    }

    // we must implement abstract method getCookingTime()

    getCookingTime(): void{
        console.log(` Cooking time for ${this.title} is 1 hour price ${this.price}`);
    }
}

class Burger extends Food{
    constructor(title: string ,public price: number){
        super(title);
    }
    // we must implement abstract method getCookingTime()
    getCookingTime(): void{
        console.log(` Cooking time for ${this.title} is 1 hour price ${this.price}`);
    }
}

let pizza1 = new Pizza('KSA pizza',150);
pizza1.getCookingTime();
let burger = new Pizza('Chains Burger',200);
burger.getCookingTime();