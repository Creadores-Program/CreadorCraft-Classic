const Item = require("./Item.js");
const BlockM = require("../Blocks/MesaDeCraft.js");
class MesaDeCraft extends Item{
        static id = Item.idItems[2];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(MesaDeCraft.id);
        }
        getTexture(){
            return textures.Blocks_MesaDeCraft;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new BlocksM(x, y, world);
        }
        getClass(){
            return MesaDeCraft;
        }
}
module.exports = MesaDeCraft;