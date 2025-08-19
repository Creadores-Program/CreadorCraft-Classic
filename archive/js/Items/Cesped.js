const Item = require('./Item.js');
const BlockC = require('../Blocks/Cesped.js');
class Cesped extends Item{
        static id = Item.idItems[14];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(Cesped.id);
        }
        getTexture(){
            return textures.Blocks_Cesped;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new BlockC(x, y, world);
        }
        getClass(){
            return Cesped;
        }
}
module.exports = Cesped;