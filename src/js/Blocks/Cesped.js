const Block = require('./Block.js');
const ItemC = require('../Items/Cesped.js');
class Cesped extends Block{
        static id = Block.idBlocks[11];
        static resistencia = 5000;
        constructor(x, y, world){
            super(x, y, world);
            this.addBlockToWorld(Cesped.id);
        }
        getTexture(){
            return textures.Blocks_Cesped;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new ItemC(player, slot);
        }
        getClass(){
            return Cesped;
        }
}
module.exports = Cesped;