const Entity = require("../Entity.js");
class Zombie extends Entity {
    static id = Entity.idEntitys[2];
    static vidaDef = 10;
    static maxCalor = 10;
    static maxFreez = 10;
    static attakDef = 1;
    static velocityDef = 100;
    static velocitySpeedDef = 50;
    velocitySpeed = Zombie.velocitySpeedDef;
    attak = Zombie.attakDef;
    velocity = Zombie.velocityDef;
    constructor(x, y, world, vid){
        super(x, y, world, vid);
        this.addEntityToWorld(Zombie.id);
    }
    static getTexture(){
        return "";
    }
    initIA(){
        //code
    }
    getClass(){
        return Zombie;
    }
}
module.exports = Zombie;