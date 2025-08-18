const Item = require('./Item.js');
const BlockR = require('../Blocks/Ruby.js');
class Ruby extends Item{
        static id = Item.idItems[4];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(Ruby.id);
        }
        getTexture(){
            return textures.Items_Ruby;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new BlockR(x, y, world);
        }
        getClass(){
            return Ruby;
        }
}
module.exports = Ruby;