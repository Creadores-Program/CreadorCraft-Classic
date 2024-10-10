function registerC(){
    nameSpace.js.Blocks.Arena = class extends nameSpace.js.Blocks.Block{
        static id = nameSpace.js.Blocks.Block.idBlocks[9];
        static resistencia = 5000;
        constructor(x, y, world){
            super(x, y, world);
            this.blockElement.classList.add(nameSpace.js.Blocks.Arena.id);
        }
        getTexture(){
            return textures.Blocks_Arena;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new nameSpace.js.Items.Arena(player, slot);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;