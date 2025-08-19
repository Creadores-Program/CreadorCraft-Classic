const Block = require('./Block.js');
const ItemR = require('../Items/Ruby.js');
class Ruby extends Block{
        static id = Block.idBlocks[3];
        static resistencia = 20000;
        constructor(x, y, world){
            super(x, y, world);
            this.addBlockToWorld(Ruby.id);
        }
        getTexture(){
            return textures.Blocks_Ruby;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new ItemR(player, slot);
        }
        getClass(){
            return Ruby;
        }
}
module.exports = Ruby;