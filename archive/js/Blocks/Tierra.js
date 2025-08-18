const Block = require('./Block.js');
const ItemT = require('../Items/Tierra.js');
class Tierra extends Block{
        static id = Block.idBlocks[0];
        static resistencia = 5000;
        constructor(x, y, world){
            super(x, y, world);
            this.addBlockToWorld(Tierra.id);
        }
        getTexture(){
            return textures.Blocks_Tierra;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new ItemT(player, slot);
        }
        getClass(){
            return Tierra;
        }
}
module.exports = Tierra;