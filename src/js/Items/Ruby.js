function registerC(){
    nameSpace.js.Items.Ruby = class extends nameSpace.js.Items.Item{
        static id = nameSpace.js.Itemss.Item.idItems[4];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(nameSpace.js.Items.Ruby.id);
        }
        getTexture(){
            return textures.Items_Ruby;
        }
        isBreak(){
            return false;
        }
        toBlock(x, y, world){
            return new nameSpace.js.Blocks.Ruby(x, y, world);
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;