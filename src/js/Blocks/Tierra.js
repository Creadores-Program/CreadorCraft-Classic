function registerC(){
    nameSpace.js.Blocks.Tierra = class extends nameSpace.js.Blocks.Block{
        static id = nameSpace.js.Blocks.Block.idBlocks[0];
        static resistencia = 5000;
        constructor(x, y, world){
            super(x, y, world);
            this.addBlockToWorld(nameSpace.js.Blocks.Tierra.id);
        }
        getTexture(){
            return textures.Blocks_Tierra;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new nameSpace.js.Items.Tierra(player, slot);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;