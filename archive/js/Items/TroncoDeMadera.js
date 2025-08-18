const Item = require('./Item.js');
const BlockT = require('../Blocks/TroncoDeMadera.js');
class TroncoDeMadera extends Item{
        static id = Item.idItems[11];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(TroncoDeMadera.id);
        }
        getTexture(){
            return textures.Blocks_TroncoDeMadera;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new BlockT(x, y, world);
        }
        getClass(){
            return TroncoDeMadera;
        }
}
module.exports = TroncoDeMadera;