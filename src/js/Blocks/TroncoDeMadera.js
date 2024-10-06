function registerC(){
    nameSpace.js.Blocks.TroncoDeMadera = class extends nameSpace.js.Blocks.Block{
        static id = nameSpace.js.Blocks.Block.idBlocks[8];
        static resistencia = 8000;
        constructor(x, y, world){
            super(x, y, world);
            this.blockElement.classList.add(nameSpace.js.Blocks.TroncoDeMadera.id);
        }
        getTexture(){
            return textures.Blocks_TroncoDeMadera;
        }
        isBreak(){
            return true;
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;