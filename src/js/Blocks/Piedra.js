const Block = require('./Block.js');
const ItemP = require('../Items/Piedra.js');
class Piedra extends Block{
        static id = Block.idBlocks[10];
        static resistencia = 15000;
        constructor(x, y, world){
            super(x, y, world);
            this.addBlockToWorld(Piedra.id);
        }
        getTexture(){
            return textures.Blocks_Piedra;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new ItemP(player, slot);
        }
        getClass(){
            return Piedra;
        }
}
module.exports = Piedra;