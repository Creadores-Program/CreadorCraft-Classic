function registerC(){
    nameSpace.js.Items.Oro = class extends nameSpace.js.Items.Item{
        static id = nameSpace.js.Items.Item.idItems[6];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(nameSpace.js.Items.Oro.id);
        }
        getTexture(){
            return textures.Items_Oro;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new nameSpace.js.Blocks.Oro(x, y, world);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;