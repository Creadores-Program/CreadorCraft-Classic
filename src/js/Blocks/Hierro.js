const Block = require("./Block.js");
const ItemH = require("../Items/Hierro.js");
class Hierro extends Block{
        static id = Block.idBlocks[2];
        static resistencia = 16000;
        constructor(x, y, world){
            super(x, y, world);
            this.addBlockToWorld(Hierro.id);
        }
        getTexture(){
            return textures.Blocks_Hierro;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new ItemH(player, slot);
        }
        getClass(){
            return Hierro;
        }
}
module.exports = Hierro;