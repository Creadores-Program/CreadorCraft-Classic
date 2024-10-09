function registerC(){
    nameSpace.js.Blocks.Oro = class extends nameSpace.js.Blocks.Block{
        static id = nameSpace.js.Blocks.Block.idBlocks[6];
        static resistencia = 17000;
        constructor(x, y, world){
            super(x, y, world);
            this.blockElement.classList.add(nameSpace.js.Blocks.Oro.id);
        }
        getTexture(){
            return textures.Blocks_Oro;
        }
        isBreak(){
            return true;
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;