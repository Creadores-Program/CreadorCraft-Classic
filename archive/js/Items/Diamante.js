const Item = require('./Item.js');
const BlockD = require('../Blocks/Diamante.js');
class Diamante extends Item{
        static id = Item.idItems[9];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(Diamante.id);
        }
        getTexture(){
            return textures.Items_Diamante;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new BlockD(x, y, world);
        }
        getClass(){
            return Diamante;
        }
}
module.exports = Diamante;