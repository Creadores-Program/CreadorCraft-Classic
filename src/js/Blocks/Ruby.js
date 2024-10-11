function registerC(){
    nameSpace.js.Blocks.Ruby = class extends nameSpace.js.Blocks.Block{
        static id = nameSpace.js.Blocks.Block.idBlocks[3];
        static resistencia = 20000;
        constructor(x, y, world){
            super(x, y, world);
            this.addBlockToWorld(nameSpace.js.Blocks.Ruby.id);
        }
        getTexture(){
            return textures.Blocks_Ruby;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new nameSpace.js.Items.Ruby(player, slot);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;