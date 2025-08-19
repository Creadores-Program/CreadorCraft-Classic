const Block = require('./Block.js');
const ItemM = require('../Items/MesaDeCraft.js');
class MesaDeCraft extends Block{
        static id = Block.idBlocks[1];
        static resistencia = 8000;
        constructor(x, y, world){
            super(x, y, world);
            this.addBlockToWorld(MesaDeCraft.id);
        }
        getTexture(){
            return textures.Blocks_MesaDeCraft;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new ItemM(player, slot);
        }
        getClass(){
            return MesaDeCraft;
        }
}
module.exports = MesaDeCraft;