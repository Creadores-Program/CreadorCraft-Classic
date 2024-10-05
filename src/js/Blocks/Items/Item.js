nameSpace.js.Blocks.Items.Item = class{
    static idItems = ["tierra", "palo", "mesaDeCraft", "hierro", "ruby", "carbon", "oro", "lantano", "changesita", "diamante", "hojas", "troncoDeMadera", "arena", "piedra", "cesped"];
    static id = "aire";
    static resistencia = -1;
    constructor(player){
        this.player = player;
        this.player.addItem(this);
    }
    getTexture(){
        return "";
    }
    isBreak(){
        return false;
    }
    toBlock(x, y, world){
        return new nameSpace.js.Blocks.Block(x, y, world);
    }
};