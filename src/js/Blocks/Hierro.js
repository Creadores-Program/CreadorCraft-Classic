function registerC(){
    nameSpace.js.Blocks.Hierro = class extends nameSpace.js.Blocks.Block{
        static id = nameSpace.js.Blocks.Block.idBlocks[2];
        static resistencia = 16000;
        constructor(x, y, world){
            super(x, y, world);
            this.blockElement.classList.add(nameSpace.js.Blocks.Hierro.id);
        }
        getTexture(){
            return textures.Blocks_Hierro;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new nameSpace.js.Items.Hierro(player, slot);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;