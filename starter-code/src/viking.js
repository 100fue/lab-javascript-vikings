// Soldier
function Soldier(healthArg, strengthArg) {
   this.health =  healthArg;
   this.strength =  strengthArg;
}

Soldier.prototype.attack = function(){
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
    this.damage = damage;
    this.health = this.health - this.damage;
}

// Viking

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
}

Viking.prototype.receiveDamage = function(damage){
    this.damage = damage;
    this.health = this.health - this.damage;
        if (this.health > 0){
            return this.name + ' has received ' + this.damage + ' points of damage';
        }
        else{
            return this.name + ' has died in act of combat';
        }
}

Viking.prototype.battleCry = function(){
    return 'Odin Owns You All!';
}


// Saxon

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon(health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
}

Saxon.prototype.receiveDamage = function(damage){
    this.damage = damage;
    this.health = this.health - this.damage;
        if (this.health > 0){
            return this.name + 'A Saxon has received ' + this.damage + ' points of damage';
            
        }
        else{
            return this.name + 'A Saxon has died in combat';
        }
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(paco){
    this.vikingArmy.push(paco);
    return;
}

War.prototype.addSaxon = function(pepe){
    this.saxonArmy.push(pepe);
    return;
}

// War.prototype.vikingArmy = [];
// War.prototype.saxonArmy = [];

War.prototype.vikingAttack = function(){

}
