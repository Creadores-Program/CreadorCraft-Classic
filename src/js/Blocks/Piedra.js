function registerC(){
    nameSpace.js.Blocks.Piedra = class extends nameSpace.js.Blocks.Block{
        static id = nameSpace.js.Blocks.Block.idBlocks[10];
        static resistencia = 15000;
        constructor(x, y, world){
            super(x, y, world);
            this.addBlockToWorld(nameSpace.js.Blocks.Piedra.id);
        }
        getTexture(){
            return textures.Blocks_Piedra;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new nameSpace.js.Items.Piedra(player, slot);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;