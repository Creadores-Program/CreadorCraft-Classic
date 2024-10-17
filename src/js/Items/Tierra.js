function registerC(){
    nameSpace.js.Items.Tierra = class extends nameSpace.js.Items.Item{
        static id = nameSpace.js.Items.Item.idItems[0];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(nameSpace.js.Items.Tierra.id);
        }
        getTexture(){
            return textures.Blocks_Tierra;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new nameSpace.js.Blocks.Tierra(x, y, world);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;