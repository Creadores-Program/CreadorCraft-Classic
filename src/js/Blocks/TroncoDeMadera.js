function registerC(){
    nameSpace.js.Blocks.TroncoDeMadera = class extends nameSpace.js.Blocks.Block{
        static id = nameSpace.js.Blocks.Block.idBlocks[8];
        static resistencia = 8000;
        constructor(x, y, world){
            super(x, y, world);
            this.addBlockToWorld(nameSpace.js.Blocks.TroncoDeMadera.id);
        }
        getTexture(){
            return textures.Blocks_TroncoDeMadera;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new nameSpace.js.Items.TroncoDeMadera(player, slot);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;