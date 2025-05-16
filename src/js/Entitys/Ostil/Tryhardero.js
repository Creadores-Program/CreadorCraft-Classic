const Entity = require("../Entity.js");
class Tryhardero extends Entity {
    static id = Entity.idEntitys[1];
    static vidaDef = 16;
    static maxCalor = 10;
    static maxFreez = 10;
    static attakDef = 2;
    static velocityDef = 130;
    static velocitySpeedDef = 50;
    velocitySpeed = Tryhardero.velocitySpeedDef;
    attak = Tryhardero.attakDef;
    velocity = Tryhardero.velocityDef;
    constructor(x, y, world, vid){
        super(x, y, world, vid);
        this.addEntityToWorld(Tryhardero.id);
    }
    static getTexture(){
        return "";
    }
    initIA(){
        //code
    }
    getClass(){
        return Tryhardero;
    }
}
module.exports = Tryhardero;