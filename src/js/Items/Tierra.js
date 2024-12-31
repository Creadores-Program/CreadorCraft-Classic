const Item = require('./Item.js');
const BlockT = require('../Blocks/Tierra.js');
class Tierra extends Item{
        static id = Item.idItems[0];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(Tierra.id);
        }
        getTexture(){
            return textures.Blocks_Tierra;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new BlockT(x, y, world);
        }
        getClass(){
            return Tierra;
        }
}
module.exports = Tierra;