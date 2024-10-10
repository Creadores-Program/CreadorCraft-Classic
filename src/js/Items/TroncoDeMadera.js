function registerC(){
    nameSpace.js.Items.TroncoDeMadera = class extends nameSpace.js.Items.Item{
        static id = nameSpace.js.Itemss.Item.idItems[11];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(nameSpace.js.Items.TroncoDeMadera.id);
        }
        getTexture(){
            return textures.Blocks_TroncoDeMadera;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new nameSpace.js.Blocks.TroncoDeMadera(x, y, world);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;