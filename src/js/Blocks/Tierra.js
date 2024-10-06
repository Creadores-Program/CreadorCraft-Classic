function registerC(){
    nameSpace.js.Blocks.Tierra = class extends nameSpace.js.Blocks.Block{
        static id = nameSpace.js.Blocks.Block.idBlocks[0];
        static resistencia = 5000;
        constructor(x, y, world){
            super(x, y, world);
            this.blockElement.classList.add(nameSpace.js.Blocks.Tierra.id);
        }
        getTexture(){
            return textures.Blocks_Tierra;
        }
        isBreak(){
            return true;
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;