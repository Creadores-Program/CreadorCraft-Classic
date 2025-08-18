const Block = require("./Block.js");
const ItemT = require("../Items/TroncoDeMadera.js");
class TroncoDeMadera extends Block{
        static id = Block.idBlocks[8];
        static resistencia = 8000;
        constructor(x, y, world){
            super(x, y, world);
            this.addBlockToWorld(TroncoDeMadera.id);
        }
        getTexture(){
            return textures.Blocks_TroncoDeMadera;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new ItemT(player, slot);
        }
        getClass(){
            return TroncoDeMadera;
        }
}
module.exports = TroncoDeMadera;