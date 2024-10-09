function registerC(){
    nameSpace.js.Items.MesaDeCraft = class extends nameSpace.js.Items.Item{
        static id = nameSpace.js.Itemss.Item.idItems[2];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(nameSpace.js.Items.MesaDeCraft.id);
        }
        getTexture(){
            return textures.Blocks_MesaDeCraft;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new nameSpace.js.Blocks.MesaDeCraft(x, y, world);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;