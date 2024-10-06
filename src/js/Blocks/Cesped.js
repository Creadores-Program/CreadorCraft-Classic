function registerC(){
    nameSpace.js.Blocks.Cesped = class extends nameSpace.js.Blocks.Block{
        static id = nameSpace.js.Blocks.Block.idBlocks[11];
        static resistencia = 5000;
        constructor(x, y, world){
            super(x, y, world);
            this.blockElement.classList.add(nameSpace.js.Blocks.Cesped.id);
        }
        getTexture(){
            return textures.Blocks_Cesped;
        }
        isBreak(){
            return true;
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;