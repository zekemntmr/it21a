class Hero{
    #health;

    constructor(name, health, attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
        this.items = [];
    }

    getHealth(){
        return this.#health;
    }

    getName(){
        return this.name;
    }

    getAttack(){
       console.log(this.attack);
    }

    getStats(){
       console.log("\n");
       console.log("Name: " + this.name);
       console.log("Health: " + this.#health);
       console.log("Attack: " + this.attack);
    }

    addItem(item){
        this.items.push(item);
    }

    totalAttack(){
        return this.attack + this.items.reduce((sum, i) => sum + i.bonusAttack, 0);

    }    
}

class Warrior extends Hero{
    useAbility(){
        console.log(`${this.name} uses Rocketo Launcher!!`);
        
    }
}

class Mage extends Hero{
    constructor(name, health, attack, mana){
        super(name, health, attack);
        this.mana = mana;
    }
    useAbility(){
        console.log(`${this.name} uses Exort, Exort, Wex, Invoke, Chaos Meteor!!`); 
     
    }

}

class Item{
    constructor(name, bonusAttack, ){
        this.name = name;
        this.bonusAttack = bonusAttack;
        
    }
}

const sword = new Item("Sword", 5);
const staff = new Item("Staff", 3);

const Furion = new Warrior("Furion", 50, 100);
Furion.getName();
Furion.getAttack();
Furion.addItem(sword);
console.log(Furion.totalAttack());




const Invoker = new Mage("Invoker", 80, 50, 90);
Invoker.getName();
Invoker.getAttack();
Invoker.addItem(staff);
console.log(Invoker.totalAttack());


function performAbility(hero){
    console.log("\n");
    hero.useAbility();
}

performAbility(Furion);
performAbility(Invoker);