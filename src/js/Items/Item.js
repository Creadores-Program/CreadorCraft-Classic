nameSpace.js.Items.Item = class{
    static idItems = ["tierra", "palo", "mesaDeCraft", "hierro", "ruby", "carbon", "oro", "lantano", "changesita", "diamante", "hojas", "troncoDeMadera", "arena", "piedra", "cesped"];
    static id = "aire";
    static resistencia = -1;
    constructor(player, slot){
        this.player = player;
        this.slot = slot;
        this.itemElement = inventary.createElement("div");
        this.itemElement.classList.add("Item");
        this.player.addItem(this);
    }
    getTexture(){
        return "";
    }
    isBreak(){
        return false;
    }
    remove(){
        this.itemElement.remove();
        delete this.player.inventary[this.slot];
    }
    toBlock(x, y, world){
        return new nameSpace.js.Blocks.Block(x, y, world);
    }
};