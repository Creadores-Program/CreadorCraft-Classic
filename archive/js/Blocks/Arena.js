const Block = require('./Block.js');
const ItemA = require('../Items/Arena.js');
class Arena extends Block{
    static id = Block.idBlocks[9];
    static resistencia = 5000;
    constructor(x, y, world){
        super(x, y, world);
        this.addBlockToWorld(Arena.id);
    }
    getTexture(){
        return textures.Blocks_Arena;
    }
    isBreak(){
        return true;
    }
    toItem(player, slot){
        return new ItemA(player, slot);
    }
    getClass(){
        return Arena;
    }
}
module.exports = Arena;