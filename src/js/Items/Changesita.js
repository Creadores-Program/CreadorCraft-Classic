function registerC(){
    nameSpace.js.Items.Changesita = class extends nameSpace.js.Items.Item{
        static id = nameSpace.js.Itemss.Item.idItems[8];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(nameSpace.js.Items.Changesita.id);
        }
        getTexture(){
            return textures.Items_Changesita;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new nameSpace.js.Blocks.Changesita(x, y, world);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;