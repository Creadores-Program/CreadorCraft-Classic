function registerC(){
    nameSpace.js.Blocks.Cesped = class extends nameSpace.js.Blocks.Block{
        static id = nameSpace.js.Blocks.Block.idBlocks[11];
        static resistencia = 5000;
        constructor(x, y, world){
            super(x, y, world);
            this.addBlockToWorld(nameSpace.js.Blocks.Cesped.id);
        }
        getTexture(){
            return textures.Blocks_Cesped;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new nameSpace.js.Items.Cesped(player, slot);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;