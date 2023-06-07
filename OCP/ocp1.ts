interface Attacker {
    attack: () => void;
}

class Weapon implements Attacker {
    damage: number;
    range: number;

    constructor(damage: number, range: number) {
        this.damage = damage;
        this.range = range;
    }

    attack() {
    }
}

class Sword extends Weapon {
    attack() {
        console.log("Удар мечом с уроном " + this.damage);
    }
}

class Crossbow extends Weapon {
    attack() {
        console.log("Выстрел из арбалета с уроном " + this.damage);
    }
}

class Knife extends Weapon {
    attack() {
        console.log("Удар ножом с уроном " + this.damage);
    }

}

class Character {
    name: string;
    weapon: Weapon;

    constructor(name: string, weapon: Weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    changeWeapon(newWeapon: Weapon) {
        this.weapon = newWeapon;
    }

    attack() {
        this.weapon.attack();
    }
}

const sword = new Sword(12, 3);
const crossbow = new Crossbow(40, 100);
const knife = new Knife(10, 2);

const character = new Character("Warrior", sword);
character.attack();

character.changeWeapon(crossbow);
character.attack();

character.changeWeapon(knife);
character.attack();