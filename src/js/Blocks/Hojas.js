function registerC(){
    nameSpace.js.Blocks.Hojas = class extends nameSpace.js.Blocks.Block{
        static id = nameSpace.js.Blocks.Block.idBlocks[7];
        static resistencia = 2000;
        constructor(x, y, world){
            super(x, y, world);
            this.blockElement.classList.add(nameSpace.js.Blocks.Hojas.id);
        }
        getTexture(){
            return textures.Blocks_Hojas;
        }
        isBreak(){
            return true;
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;