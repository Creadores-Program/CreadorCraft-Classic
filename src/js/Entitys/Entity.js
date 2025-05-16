const Player = require("./Controlable/Player.js");
const RandomUUID = require("js/Utils/RandomUUID.js");
class Entity{
    static idEntitys = ["playerMax", "tryhardero", "zombie", "delfin"];
    static vidaDef = -1;
    static id = "entity";
    static velocityDef = -1;
    static attakDef = -1;
    static maxCalor = -1;
    static maxFreez = -1;
    uniqueId = -1;
    velocity = -1;
    attak = 0;
    calor = -1;
    freez = -1;
    constructor(x, y, world, vid){
        this.vid = vid;
        this.x = x;
        this.y = y;
        this.world = world;
        if(!this.isPlayer()){
          this.world.entitys[this.x] = (this.world.entitys[this.x] || {});
        }else{
            this.world.player.coords = [this.x, this.y];
        }
        this.entityElement = document.createElement("div");
        this.entityElement.classList.add("Entity");
    }
    addEntityToWorld(iD){
        if(!this.isPlayer()){
          if(this.uniqueId == -1){
            this.uniqueId = RandomUUID();
          }
          this.world.entitys[this.x][this.y] = (this.world.entitys[this.x][this.y] || {});
          this.world.entitys[this.x][this.y][this.uniqueId] = {};
          this.world.entitys[this.x][this.y][this.uniqueId].id = iD;
          this.world.entitys[this.x][this.y][this.uniqueId].vid = this.vid;
          this.world.entitys[this.x][this.y][this.uniqueId].calor = this.calor;
          this.world.entitys[this.x][this.y][this.uniqueId].freez = this.freez;
          this.entityElement.id = this.uniqueId;
        }
        this.entityElement.classList.add(iD);
    }
    kill(){
        $(this.entityElement).fadeOut();
        this.entityElement.remove();
        if(!this.isPlayer()){
          delete this.world.entitys[this.x][this.y][this.uniqueId];
        }
    }
    static getTexture(){
        return "";
    }
    getTextureJump(){
        return "";
    }
    getTextureStep(){
        return "";
    }
    tp(x, y){
        //code..
    }
    jump(){
        $(this.entityElement).css("background-image", 'url("'+this.getTextureJump()+'")');
        //code
    }
    moveI(){
        this.rotateI();
        $(this.entityElement).css("background-image", 'url("'+this.getTextureStep()+'")');
        let idC = this.world.entitys[this.x][this.y][this.uniqueId];
        if(!this.isPlayer()){
          delete this.world.entitys[this.x][this.y][this.uniqueId];
        }
        this.x -= 0.1;
        if(!this.isPlayer()){
          this.world.entitys[this.x] = (this.world.entitys[this.x] || {});
          this.world.entitys[this.x][this.y] = (this.world.entitys[this.x][this.y] || {});
          this.world.entitys[this.x][this.y][this.uniqueId] = idC;
        }else{
          this.world.player.coords = [this.x, this.y];
        }
    }
    moveD(){
        this.rotateD();
        $(this.entityElement).css("background-image", 'url("'+this.getTextureStep()+'")');
        //code
    }
    moveIF(){
        this.rotateI();
        $(this.entityElement).css("background-image", 'url("'+this.getTextureStep()+'")');
        //code
    }
    moveDF(){
        this.rotateD();
        $(this.entityElement).css("background-image", 'url("'+this.getTextureStep()+'")');
        //code
    }
    rotateD(){
        $(this.entityElement).css("transform", "scaleX(1)");
    }
    rotateI(){
        $(this.entityElement).css("transform", "scaleX(-1)");
    }
    isPlayer(){
        return this instanceof Player;
    }
    damage(vidD){
        this.vid -= vidD;
        if(this.vid <= 0){
            this.kill();
        }
    }
    hit(entity){
        entity.damage(this.attak);
        if(entity.isKill() && entity.isPlayer()){
            $("#killScreen").fadeIn();
        }else if(entity.isKill() && this.isPlayer()){
            for(var i of entity.toItems()){
                this.addItem(i, -1);
            }
        }
    }
    initIA(){
        //code
    }
    toItems(){
        return [];
    }
    isKill(){
        return this.world.entitys[this.x] == null || this.world.entitys[this.x][this.y] == null;
    }
    getClass(){
        return Entity;
    }
}
module.exports = Entity;