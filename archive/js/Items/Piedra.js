const Item = require('./Item.js');
const BlockP = require('../Blocks/Piedra.js');
class Piedra extends Item{
        static id = Item.idItems[13];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(Piedra.id);
        }
        getTexture(){
            return textures.Blocks_Piedra;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new BlockP(x, y, world);
        }
        getClass(){
            return Piedra;
        }
}
module.exports = Piedra;