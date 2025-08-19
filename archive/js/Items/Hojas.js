const Item = require('./Item.js');
const BlockH = require('../Blocks/Hojas.js');
class Hojas extends Item{
        static id = Item.idItems[10];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(Hojas.id);
        }
        getTexture(){
            return textures.Blocks_Hojas;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new BlockH(x, y, world);
        }
        getClass(){
            return Hojas;
        }
}
module.exports = Hojas;