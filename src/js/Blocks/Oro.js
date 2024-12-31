const Block = require('./Block.js');
const ItemO = require('../Items/Oro.js');
class Oro extends Block{
        static id = Block.idBlocks[6];
        static resistencia = 17000;
        constructor(x, y, world){
            super(x, y, world);
            this.addBlockToWorld(Oro.id);
        }
        getTexture(){
            return textures.Blocks_Oro;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new ItemO(player, slot);
        }
        getClass(){
            return Oro;
        }
}
module.exports = Oro;