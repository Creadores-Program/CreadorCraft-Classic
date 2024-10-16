function registerC(){
    nameSpace.js.Entitys.Controlable.Player = class extends nameSpace.js.Entitys.Entity{
        static id = nameSpace.js.Entitys.Entity.idEntitys[0];
        static vidaDef = 10;
        static foodDef = 10;
        static hidrataDef = 10;
        static maxCalor = 10;
        static maxFreez = 10;
        static attakDef = 1;
        static velocityDef = 100;
        static velocitySpeedDef = 50;
        static protectDef = 0;
        protect = 0;
        uniqueId = "player";
        food = 10;
        hidrata = 10;
        velocitySpeed = nameSpace.js.Entitys.Controlable.Player.velocitySpeedDef;
        attak = nameSpace.js.Entitys.Controlable.Player.attakDef;
        velocity = nameSpace.js.Entitys.Controlable.Player.velocityDef;
        constructor(x, y, world, vid){
            super(x, y, world, vid);
            this.addEntityToWorld(nameSpace.js.Entitys.Controlable.Player.id);
            this.entityElement.id = nameSpace.js.Entitys.Controlable.Player.id;
            this.inventary = this.world.player.inventary;
        }
        getTexture(){
            //code..
        }
        respawn(){
            this.entityElement = document.createElement("div");
            this.entityElement.classList.add("Entity");
            this.entityElement.classList.add(nameSpace.js.Entitys.Controlable.Player.id);
            this.entityElement.id = nameSpace.js.Entitys.Controlable.Player.id;
            world1Level.appendChild(this.entityElement);
            this.tp(this.world.spawnPos[0], this.world.spawnPos[1]);
            $("#killScreen").fadeOut();
        }
        addItem(item, slot){
            if(this.inventary.length >= 30) return;
            if(slot < 0){
              item.slot = Object.keys(this.inventary).length;
              this.inventary[Object.keys(this.inventary).length] = item;
            }else if(this.inventary[slot] == null){
                item.slot = slot;
                this.inventary[slot] = item;
            }else{
                let subItem = this.inventary[slot];
                subItem.slot = Object.keys(this.inventary).length;
                this.inventary[Object.keys(this.inventary).length] = subItem;
                item.slot = slot;
                this.inventary[slot] = item;
            }
            this.updateInventary();
        }
        removeItem(item, slot){
            delete this.inventary[slot];
            this.updateInventary();
        }
        updateInventary(){
            this.world.player.inventary = this.inventary;
        }
        toItems(){
            return this.inventary;
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;