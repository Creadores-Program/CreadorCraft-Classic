const Item = require('./Item.js');
const BlockC = require('../Blocks/Carbon.js');
class Carbon extends Item{
        static id = Item.idItems[5];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(Carbon.id);
        }
        getTexture(){
            return textures.Items_Carbon;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new BlockC(x, y, world);
        }
        getClass(){
            return Carbon;
        }
}
module.exports = Carbon;