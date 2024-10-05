function registerC(){
    nameSpace.js.Blocks.Tierra = class extends nameSpace.js.Blocks.Block{
        static id = nameSpace.js.Blocks.Block.idBlocks[0];
        static resistencia = 5000;
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
            return textures.Blocks-Tierra;
        }
    };
}
clasesExtendB[clasesExtendB.length] = registerC;