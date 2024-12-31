const Item = require('./Item.js');
const BlockO = require('../Blocks/Oro.js');
class Oro extends Item{
        static id = Item.idItems[6];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(Oro.id);
        }
        getTexture(){
            return textures.Items_Oro;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new BlockO(x, y, world);
        }
        getClass(){
            return Oro;
        }
}
module.exports = Oro;