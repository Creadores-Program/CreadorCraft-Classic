function registerC(){
    nameSpace.js.Blocks.MesaDeCraft = class extends nameSpace.js.Blocks.Block{
        static id = nameSpace.js.Blocks.Block.idBlocks[1];
        static resistencia = 8000;
        constructor(x, y, world){
            super(x, y, world);
            this.blockElement.classList.add(nameSpace.js.Blocks.MesaDeCraft.id);
        }
        getTexture(){
            return textures.Blocks_MesaDeCraft;
        }
        isBreak(){
            return true;
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;