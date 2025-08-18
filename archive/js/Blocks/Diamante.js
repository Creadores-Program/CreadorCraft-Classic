const Block = require('./Block.js');
const ItemD = require('../Items/Diamante.js');
class Diamante extends Block{
        static id = Block.idBlocks[5];
        static resistencia = 25000;
        constructor(x, y, world){
            super(x, y, world);
            this.addBlockToWorld(Diamante.id);
        }
        getTexture(){
            return textures.Blocks_Diamante;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new ItemD(player, slot);
        }
        getClass(){
            return Diamante;
        }
}
module.exports = Diamante;