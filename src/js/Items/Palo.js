function registerC(){
    nameSpace.js.Items.Palo = class extends nameSpace.js.Items.Item{
        static id = nameSpace.js.Items.Item.idItems[1];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(nameSpace.js.Items.Palo.id);
        }
        getTexture(){
            return textures.Items_Palo;
        }
        isBreak(){
            return false;
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;