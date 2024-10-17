function registerC(){
    nameSpace.js.Items.Hierro = class extends nameSpace.js.Items.Item{
        static id = nameSpace.js.Items.Item.idItems[3];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(nameSpace.js.Items.Hierro.id);
        }
        getTexture(){
            return textures.Items_Hierro;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new nameSpace.js.Blocks.Hierro(x, y, world);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;