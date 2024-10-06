nameSpace.js.Blocks.Block = class {
    static idBlocks = ["tierraBlock", "mesaDeCraftBlock", "hierroBlock", "rubyBlock", "carbonBlock", "diamanteBlock", "oroBlock", "hojasBlock", "troncoDeMaderaBlock", "arenaBlock", "piedraBlock", "cespedBlock"];
    static resistencia = -1;
    static id = "aireBlock";
    constructor(x, y, world) {
        this.x = x;
        this.y = y;
        this.blockElement = terrain.createElement("div");
        this.blockElement.classList.add("Block");
        this.world = world;
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
        return new nameSpace.js.Items.Item(player, slot);
    }
};