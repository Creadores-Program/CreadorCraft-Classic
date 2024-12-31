const Item = require("../Items/Item.js");
class Block{
    static idBlocks = ["tierraBlock", "mesaDeCraftBlock", "hierroBlock", "rubyBlock", "carbonBlock", "diamanteBlock", "oroBlock", "hojasBlock", "troncoDeMaderaBlock", "arenaBlock", "piedraBlock", "cespedBlock"];
    static resistencia = -1;
    static id = "aireBlock";
    constructor(x, y, world) {
        this.x = x;
        this.y = y;
        this.blockElement = document.createElement("div");
        this.blockElement.classList.add("Block");
        this.world = world;
        this.world.blocks[this.x] = (this.world.blocks[this.x] || {});
    }
    addBlockToWorld(iD){
        this.world.blocks[this.x][this.y] = iD;
        this.blockElement.classList.add(iD);
    }
    remove(){
        this.blockElement.remove();
        delete this.world.blocks[this.x][this.y];
    }
    getTexture(){
        return "";
    }
    isBreak(){
        return false;
    }
    toItem(player, slot){
        return new Item(player, slot);
    }
    getClass(){
        return Block;
    }
}
module.exports = Block;