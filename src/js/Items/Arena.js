const Item = require('./Item.js');
const BlockA = require('../Blocks/Arena.js');
class Arena extends Item{
        static id = Item.idItems[12];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(Arena.id);
        }
        getTexture(){
            return textures.Blocks_Arena;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new BlockA(x, y, world);
        }
        getClass(){
            return Arena;
        }
}
module.exports = Arena;