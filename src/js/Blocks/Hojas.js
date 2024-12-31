const Block = require('./Block.js');
const ItemH = require('../Items/Hojas.js');
class Hojas extends Block{
        static id = Block.idBlocks[7];
        static resistencia = 2000;
        constructor(x, y, world){
            super(x, y, world);
            this.addBlockToWorld(Hojas.id);
        }
        getTexture(){
            return textures.Blocks_Hojas;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new ItemH(player, slot);
        }
        getClass(){
            return Hojas;
        }
}
module.exports = Hojas;