const Item = require('./Item.js');
class Palo extends Item{
        static id = Item.idItems[1];
        static resistencia = -1;
        constructor(player, slot){
            super(player, slot);
            this.itemElement.classList.add(Palo.id);
        }
        getTexture(){
            return textures.Items_Palo;
        }
        isBreak(){
            return false;
        }
        getClass(){
            return Palo;
        }
}
module.exports = Palo;