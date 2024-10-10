function registerC(){
    nameSpace.js.Items.Hojas = class extends nameSpace.js.Items.Item{
        static id = nameSpace.js.Itemss.Item.idItems[10];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(nameSpace.js.Items.Hojas.id);
        }
        getTexture(){
            return textures.Blocks_Hojas;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new nameSpace.js.Blocks.Hojas(x, y, world);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;