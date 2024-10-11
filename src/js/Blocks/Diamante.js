function registerC(){
    nameSpace.js.Blocks.Diamante = class extends nameSpace.js.Blocks.Block{
        static id = nameSpace.js.Blocks.Block.idBlocks[5];
        static resistencia = 25000;
        constructor(x, y, world){
            super(x, y, world);
            this.addBlockToWorld(nameSpace.js.Blocks.Diamante.id);
        }
        getTexture(){
            return textures.Blocks_Diamante;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new nameSpace.js.Items.Diamante(player, slot);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;