const Item = require('./Item.js');
const BlockH = require('../Blocks/Hierro.js');
class Hierro extends Item{
        static id = Item.idItems[3];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(Hierro.id);
        }
        getTexture(){
            return textures.Items_Hierro;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new BlockH(x, y, world);
        }
        getClass(){
            return Hierro;
        }
}
module.exports = Hierro;