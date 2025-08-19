const Item = require('./Item.js');
const BlockL = require('../Blocks/Lantano.js');
class Lantano extends Item{
        static id = Item.idItems[7];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(Lantano.id);
        }
        getTexture(){
            return textures.Items_Lantano;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new BlockL(x, y, world);
        }
        getClass(){
            return Lantano;
        }
}
module.exports = Lantano;