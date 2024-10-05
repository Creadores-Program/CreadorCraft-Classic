function registerC(){
    nameSpace.js.Blocks.MesaDeCraft = class extends nameSpace.js.Blocks.Block{
        static id = nameSpace.js.Blocks.Block.idBlocks[1];
        static resistencia = 8000;
        constructor(x, y){
            super();
            this.x = x;
            this.y = y;
            this.blockElement = terrain.createElement("div");
            this.blockElement.classList.add("Block");
            this.blockElement.classList.add(this.id);
        }
        remove(){
            this.blockElement.remove();
        }
        getTexture(){
            return textures.Blocks-MesaDeCraft;
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;