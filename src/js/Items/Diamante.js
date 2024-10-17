function registerC(){
    nameSpace.js.Items.Diamante = class extends nameSpace.js.Items.Item{
        static id = nameSpace.js.Items.Item.idItems[9];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(nameSpace.js.Items.Diamante.id);
        }
        getTexture(){
            return textures.Items_Diamante;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new nameSpace.js.Blocks.Diamante(x, y, world);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;