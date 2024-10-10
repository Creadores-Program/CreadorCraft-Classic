nameSpace.js.Entitys.Entity = class{
    static idEntitys = ["playerMax", "tryhardero"];
    static vidaDef = -1;
    static id = "entity";
    constructor(x, y, world, vid){
        this.vid = vid;
        this.x = x;
        this.y = y;
        this.world = world;
        this.entityElement = document.createElement("div");
        this.blockElement.classList.add("Entity");
    }
    kill(){
        $(this.entityElement).fadeOut();
        this.entityElement.remove();
        delete this.world.entitys[this.x][this.y]
    }
    getTexture(){
        return "";
    }
    damage(vidD){
        this.vid -= vidD;
        if(this.vid <= 0){
            this.kill();
        }
    }
}