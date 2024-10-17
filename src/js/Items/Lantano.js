function registerC(){
    nameSpace.js.Items.Lantano = class extends nameSpace.js.Items.Item{
        static id = nameSpace.js.Items.Item.idItems[7];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(nameSpace.js.Items.Lantano.id);
        }
        getTexture(){
            return textures.Items_Lantano;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new nameSpace.js.Blocks.Lantano(x, y, world);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;