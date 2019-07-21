class Fighter {
    constructor(inputObj) {
        let name = inputObj['name'];
        let damage = inputObj['damage'];
        let agility = inputObj['agility'];
        let health = inputObj['hp'];
        let wins = 0;
        let losses = 0;
        let totalHp = health;
        this.getName = () => name;
        this.getDamage = () => damage;
        this.getAgility = () => agility;
        this.getHealth = () => health;
        this.logCombatHistory = () =>
            console.log('Name: ' + this.getName() + ', Wins: ' + wins + ', Losses: ' + losses);
        this.heal = (value) => {
            health += value;
            if (health > totalHp) {
                health = totalHp;
            }
        }
        this.dealDamage = (value) => {
            health -= value;
            if (health < 0) {
                health = 0;
            }
        }
        this.addWin = () => wins++;
        this.addLoss = () => losses++;
    }
    attack(defender) {
        const rangeMultiplier = 100;
        let attackValue = Math.floor(Math.random() * rangeMultiplier + 1);
        // console.log(attackValue); //delete
        if (attackValue > defender.getAgility()) {
            defender.dealDamage(this.getDamage());
            console.log(this.getName() + ' make ' + this.getDamage() + ' damage to ' + defender.getName());
        } else {
            console.log(this.getName() + ' attack missed');
        }
    }
}
function battle(myFighter, myFighter1) {
    if (myFighter.getHealth() === 0 || myFighter1.getHealth() === 0) {
        console.log('One of fighters is dead. The battle cannot take place');
    } else {
        for (; ;) {
            myFighter.attack(myFighter1);
            if (myFighter1.getHealth() === 0) {
                myFighter1.addLoss();
                myFighter.addWin();
                console.log(myFighter.getName() + ' has won ');
                break;
            }
            myFighter1.attack(myFighter);
            if (myFighter.getHealth() === 0) {
                myFighter.addLoss();
                myFighter1.addWin();
                console.log(myFighter1.getName() + ' has won ');
                break;
            }
        }
    }
}
const myFighter = new Fighter({ name: 'John', damage: 20, hp: 100, agility: 25 });
const myFighter1 = new Fighter({ name: 'Jim', damage: 25, hp: 100, agility: 30 });
battle(myFighter, myFighter1);
myFighter.logCombatHistory();
myFighter1.logCombatHistory();
// myFighter.heal(50);
// myFighter.heal(120);
// console.log(myFighter.getName() + ' ' + myFighter.getHealth());
// console.log(myFighter1.getName() + ' ' + myFighter1.getHealth());
// battle(myFighter, myFighter1);