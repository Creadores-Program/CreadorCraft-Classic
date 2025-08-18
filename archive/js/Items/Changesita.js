const Item = require('./Item.js');
const BlockC = require('../Blocks/Changesita.js');
class Changesita extends Item{
        static id = Item.idItems[8];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(Changesita.id);
        }
        getTexture(){
            return textures.Items_Changesita;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new BlockC(x, y, world);
        }
        getClass(){
            return Changesita;
        }
}
module.exports = Changesita;