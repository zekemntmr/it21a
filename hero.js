class Hero{
    #health;
    
    constructor(name,health,attack){
        this.name = name;
        this.health = health;
        this.attack = attack;
    }
    getHealth(){
        return this.#health = this.#health;

    }


}
class Warrior extends Hero{
    useAbility(){
        console.log(`${this.name} uses power Striker`);
    }
}

const warrior = new Warrior("Thorin", 100, 10);
warrior.useAbility();

class Wizard extends Hero{
    constructor(name,health,attack,mana){
        super(name,health,attack);
        this.mana = mana;

    }
    useAbility(){
        console.log(`${this.name} uses ROCKET LAUNCHER`);
    }

}

const wizard = new Wizard("Invoker", 100, 5);
wizard.useAbility();

//const hero = new Hero("Furion", 100, 10);

//console.log(hero.getHealth());