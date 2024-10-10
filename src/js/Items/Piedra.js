function registerC(){
    nameSpace.js.Items.Piedra = class extends nameSpace.js.Items.Item{
        static id = nameSpace.js.Itemss.Item.idItems[13];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(nameSpace.js.Items.Piedra.id);
        }
        getTexture(){
            return textures.Blocks_Piedra;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new nameSpace.js.Blocks.Piedra(x, y, world);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;