function registerC(){
    nameSpace.js.Items.Arena = class extends nameSpace.js.Items.Item{
        static id = nameSpace.js.Itemss.Item.idItems[12];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(nameSpace.js.Items.Arena.id);
        }
        getTexture(){
            return textures.Blocks_Arena;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new nameSpace.js.Blocks.Arena(x, y, world);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;