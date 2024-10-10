function registerC(){
    nameSpace.js.Items.Cesped = class extends nameSpace.js.Items.Item{
        static id = nameSpace.js.Itemss.Item.idItems[14];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(nameSpace.js.Items.Cesped.id);
        }
        getTexture(){
            return textures.Blocks_Cesped;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new nameSpace.js.Blocks.Cesped(x, y, world);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;