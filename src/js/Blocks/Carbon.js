function registerC(){
    nameSpace.js.Blocks.Carbon = class extends nameSpace.js.Blocks.Block{
        static id = nameSpace.js.Blocks.Block.idBlocks[4];
        static resistencia = 15500;
        constructor(x, y, world){
            super(x, y, world);
            this.blockElement.classList.add(nameSpace.js.Blocks.Carbon.id);
        }
        getTexture(){
            return textures.Blocks_Carbon;
        }
        isBreak(){
            return true;
        }
        toItem(player, slot){
            return new nameSpace.js.Items.Carbon(player, slot);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;