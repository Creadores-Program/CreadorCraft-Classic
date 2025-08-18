const Block = require('./Block.js');
const ItemC = require('../Items/Carbon.js');
class Carbon extends Block{
        static id = Block.idBlocks[4];
        static resistencia = 15500;
        constructor(x, y, world){
            super(x, y, world);
            this.addBlockToWorld(Carbon.id);
        }
        getTexture(){
            return textures.Blocks_Carbon;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new ItemC(player, slot);
        }
        getClass(){
            return Carbon;
        }
}
module.exports = Carbon;