function registerC(){
    nameSpace.js.Blocks.Ruby = class extends nameSpace.js.Blocks.Block{
        static id = nameSpace.js.Blocks.Block.idBlocks[3];
        static resistencia = 20000;
        constructor(x, y, world){
            super(x, y, world);
            this.blockElement.classList.add(nameSpace.js.Blocks.Ruby.id);
        }
        getTexture(){
            return textures.Blocks_Ruby;
        }
        isBreak(){
            return true;
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;