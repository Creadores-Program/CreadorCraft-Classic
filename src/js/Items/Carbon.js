function registerC(){
    nameSpace.js.Items.Carbon = class extends nameSpace.js.Items.Item{
        static id = nameSpace.js.Items.Item.idItems[5];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(nameSpace.js.Items.Carbon.id);
        }
        getTexture(){
            return textures.Items_Carbon;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new nameSpace.js.Blocks.Carbon(x, y, world);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;