nameSpace.js.Entitys.Entity = class{
    static idEntitys = ["playerMax", "tryhardero"];
    static vidaDef = -1;
    static id = "entity";
    constructor(x, y, world, vid){
        this.vid = vid;
        this.x = x;
        this.y = y;
        this.world = world;
        this.world.entitys[this.x] = (this.world.entitys[this.x] || {});
        this.entityElement = document.createElement("div");
        this.entityElement.classList.add("Entity");
    }
    addEntityToWorld(iD){
        this.world.entitys[this.x][this.y] = iD;
        this.entityElement.classList.add(iD);
    }
    kill(){
        $(this.entityElement).fadeOut();
        this.entityElement.remove();
        delete this.world.entitys[this.x][this.y];
    }
    getTexture(){
        return "";
    }
    getTextureJump(){
        return "";
    }
    getTextureStep(){
        return "";
    }
    tp(x, y){
        //code..
    }
    move(x, y){
        //code
    }
    jump(){
        //code
    }
    rotateD(){
        $(this.entityElement).css("transform", "scaleX(1)");
    }
    rotateI(){
        $(this.entityElement).css("transform", "scaleX(-1)");
    }
    isPlayer(){
        return this instanceof nameSpace.js.Entitys.Player;
    }
    damage(vidD){
        this.vid -= vidD;
        if(this.vid <= 0){
            this.kill();
        }
    }
}