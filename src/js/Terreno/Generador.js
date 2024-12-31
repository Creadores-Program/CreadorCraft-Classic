const Player = require("../Entitys/Controlable/Player.js");
const Day = require("./Ambient/Day.js");
const Weather = require("./Ambient/Weather.js");
const Block = require("../Blocks/Block.js");
const Entity = require("../Entitys/Entity.js");
const BlockTierra = require("../Blocks/Tierra.js");
const BlockMesaDeCraft = require("../Blocks/MesaDeCraft.js");
const BlockHierro = require("../Blocks/Hierro.js");
const BlockRuby = require("../Blocks/Ruby.js");
const BlockCarbon = require("../Blocks/Carbon.js");
const BlockDiamante = require("../Blocks/Diamante.js");
const BlockOro = require("../Blocks/Oro.js");
const BlockHojas = require("../Blocks/Hojas.js");
const BlockTroncoDeMadera = require("../Blocks/TroncoDeMadera.js");
const BlockArena = require("../Blocks/Arena.js");
const BlockPiedra = require("../Blocks/Piedra.js");
const BlockCesped = require("../Blocks/Cesped.js");
const EntityTryhardero = require("../Entitys/Ostil/Tryhardero.js");
const EntityZombie = require("../Entitys/Ostil/Zombie.js");
const EntityDelfin = require("../Entitys/Pasive/Delfin.js");
class Generador{
    blocksScreen = {};
    entitysScreen = {};
    constructor(worldJson, id){
        this.world = worldJson;
        this.player = new Player(this.world.player.coords[0], this.world.player.coords[1], this.world, this.world.player.vida);
        this.player.food = this.world.player.food;
        this.player.hidrata = this.world.player.hidrata;
        this.player.attak = this.world.player.attak;
        this.player.calor = this.world.player.calor;
        this.player.freez = this.world.player.freez;
        this.player.protect = this.world.protect;
        this.id = id;
        setInterval(this.save.bind(this), 600000);
        setInterval(this.updateScreen.bind(this), 0);
        GameProps.addEventListener("pauseEvent", this.save.bind(this));
        Respawn.addEventListener("click", this.player.respawn.bind(this.player));
        $("html, body").css("overflow-y", "hidden");
        $("html, body").css("overflow-x", "hidden");
        this.day = new Day();
        this.weather = new Weather(this);
        GameProps.getGameMusic().play();
        $("#Loader").fadeOut();
    }
    static genNewWorld(id, name){
        let worldCache = {};
        worldCache.player = {};
        worldCache.player.coords = [0.0, 0.0];
        worldCache.player.vida = Player.vidaDef;
        worldCache.player.food = Player.foodDef;
        worldCache.player.hidrata = Player.hidrataDef;
        worldCache.player.attak = Player.attakDef;
        worldCache.player.velocity = Player.velocityDef;
        worldCache.player.velocitySpeed = Player.velocitySpeedDef;
        worldCache.player.calor = 0;
        worldCache.player.freez = 0;
        worldCache.player.protect = 0;
        worldCache.player.inventary = {};
        worldCache.entitys = {};
        worldCache.blocks = {};
        worldCache.spawnPos = [0.0, 0.0];
        worldCache.biomes = {};
        let dataG = JSON.parse(GameProps.getStorage().get("data"));
        dataG.worlds[dataG.worlds.length] = {
            id: id,
            name: name
        };
        GameProps.getStorage().set("data", JSON.stringify(dataG));
        GameProps.getStorage().set(id, JSON.stringify(worldCache));
        return new Generador(worldCache, id);
    }
    static genWorld(id){
        return new Generador(JSON.parse(GameProps.getStorage().get(id)), id);
    }
    static deleteWorld(id){
        GameProps.getStorage().delete(id);
    }
    save(){
        GameProps.getStorage().set(this.id, JSON.stringify(this.world));
    }
    updateScreen(){
        let maxBlocksX = Math.floor(window.innerWidth / 60);
        let maxBlocksY = Math.floor(window.innerHeight / 60);
        let posPlayerXS = (maxBlocksX / 2) * 60;
        let posPlayerYS = (maxBlocksY / 2) * 60;
        let posPlayerWX = this.world.player.coords[0];
        let posPlayerWY = this.world.player.coords[1];
        $(this.player.entityElement).css({
            left: posPlayerXS + "px",
            bottom: posPlayerYS + "px"
        });
        //Blocks
        for(let x = 0; x < (maxBlocksX + 1); x++){
            let coordFinalX = 0;
            if(x < posPlayerXS){
                coordFinalX = parseInt(posPlayerWX - x);
            }else if(x > posPlayerXS){
                coordFinalX = parseInt(posPlayerWX + x);
            }else{
                coordFinalX = parseInt(posPlayerWX);
            }
            if(this.world.blocks[coordFinalX] == null || Object.keys(this.world.blocks[coordFinalX]).length == 0){
                if(this.blocksScreen[x] != null && this.blocksScreen[x] != {}){
                    for(let blockNX of Object.keys(this.blocksScreen[x])){
                        this.blocksScreen[x][blockNX].blockElement.remove();
                    }
                    this.blocksScreen[x] = {};
                }
                continue;
            }
            for(let y = 0; y < (maxBlocksY + 1); y++){
                let coordFinalY = 0;
                if(y < posPlayerYS){
                    coordFinalY = parseInt(posPlayerWY - y);
                }else if(y > posPlayerYS){
                    coordFinalY = parseInt(posPlayerWY + y);
                }else{
                    coordFinalY = parseInt(posPlayerWY);
                }
                this.blocksScreen[x] = (this.blocksScreen[x] || {});
                if(this.world.blocks[coordFinalX][coordFinalY] == null){
                    if(this.blocksScreen[x][y] != null){
                        this.blocksScreen[x][y].blockElement.remove();
                        delete this.blocksScreen[x][y];
                    }
                    continue;
                }
                if(this.blocksScreen[x][y] != null && this.blocksScreen[x][y].getClass() == this.convertBlockById(this.world.blocks[coordFinalX][coordFinalY]).getClass()) continue;
                if(this.blocksScreen[x][y] != null && this.blocksScreen[x][y].getClass() != this.convertBlockById(this.world.blocks[coordFinalX][coordFinalY]).getClass()){
                    this.blocksScreen[x][y].blockElement.remove();
                    delete this.blocksScreen[x][y];
                }
                this.blocksScreen[x][y] = this.convertBlockById(this.world.blocks[coordFinalX][coordFinalY], coordFinalX, coordFinalY);
                $(this.blocksScreen[x][y].blockElement).css({
                    left: (x * 60)+"px",
                    bottom: (y * 60)+"px"
                });
                terrain.appendChild(this.blocksScreen[x][y].blockElement);
            }
        }
        //Entitys
        for(let x = 0; x < (maxBlocksX + 1); x++){
            for(let xD = 0; xD < 10; xD++){
                let xFinalS = parseFloat(x + "." + xD);
                let xFinal = 0;
                if(xFinalS < posPlayerXS){
                    xFinal = parseFloat(posPlayerWX - xFinalS);
                }else if(xFinalS > posPlayerXS){
                    xFinal = parseFloat(posPlayerWX + xFinalS);
                }else{
                    xFinal = parseFloat(posPlayerWX);
                }
                if(this.world.entitys[xFinal] == null || Object.keys(this.world.entitys[xFinal]).length == 0){
                    if(this.entitysScreen[xFinalS] != null && this.entitysScreen[xFinalS] != {}){
                        for(let entityNY of Object.keys(this.entitysScreen[xFinalS])){
                            for(let entityNID of Object.keys(this.entitysScreen[xFinalS][entityNY])){
                                this.entitysScreen[xFinalS][entityNY][entityNID].entityElement.remove();
                            }
                        }
                        this.entitysScreen[xFinalS] = {};
                    }
                    continue;
                }
                this.blocksScreen[xFinalS] = (this.blocksScreen[xFinalS] || {});
                for(let y = 0; y < (maxBlocksY + 1); y++){
                    for(let yD = 0; yD < 10; yD++){
                        let yFinalS = parseFloat(y + "." + yD);
                        let yFinal = 0;
                        if(yFinalS < posPlayerYS){
                            yFinal = parseFloat(posPlayerWY - yFinalS);
                        }else if(yFinalS > posPlayerYS){
                            yFinal = parseFloat(posPlayerWY + yFinalS);
                        }else{
                            yFinal = parseFloat(posPlayerWY);
                        }
                        if(this.world.entitys[xFinal][yFinal] == null || Object.keys(this.world.entitys[xFinal][yFinal]).length == 0){
                            if(this.entitysScreen[xFinalS][yFinalS] != null && this.entitysScreen[xFinalS][yFinalS] != {}){
                                for(let entityNID of Object.keys(this.entitysScreen[xFinalS][yFinalS])){
                                    this.entitysScreen[xFinalS][yFinalS][entityNID].entityElement.remove();
                                }
                            }
                            this.entitysScreen[xFinalS][yFinalS] = {};
                            continue;
                        }
                        this.entitysScreen[xFinalS][yFinalS] = (this.entitysScreen[xFinalS][yFinalS] || {});
                        for(let entityFinal of Object.keys(this.world.entitys[xFinal][yFinal])){
                            if(this.entitysScreen[xFinalS][yFinalS][entityFinal] != null) continue;
                            this.entitysScreen[xFinalS][yFinalS][entityFinal] = this.convertEntityById(this.world.entitys[xFinal][yFinal][entityFinal].id, this.world.entitys[xFinal][yFinal][entityFinal].vid);
                            this.entitysScreen[xFinalS][yFinalS][entityFinal].x = xFinal;
                            this.entitysScreen[xFinalS][yFinalS][entityFinal].y = yFinal;
                            this.entitysScreen[xFinalS][yFinalS][entityFinal].uniqueId = entityFinal;
                            this.entitysScreen[xFinalS][yFinalS][entityFinal].calor = this.world.entitys[xFinal][yFinal][entityFinal].calor;
                            this.entitysScreen[xFinalS][yFinalS][entityFinal].freez = this.world.entitys[xFinal][yFinal][entityFinal].freez;
                            $(this.entitysScreen[xFinalS][yFinalS][entityFinal].entityElement).css({
                                left: (xFinalS * 60)+"px",
                                bottom: (yFinalS * 60)+"px"
                            });
                        }
                    }
                }
            }
        }
    }
    convertBlockById(id, x, y){
        x = (x || "CacheBX");
        y = (y || "CacheBY");
        switch(id){
            case Block.idBlocks[0]:
                return new BlockTierra(x, y, this.world);
            case Block.idBlocks[1]:
                return new BlockMesaDeCraft(x, y, this.world);
            case Block.idBlocks[2]:
                return new BlockHierro(x, y, this.world);
            case Block.idBlocks[3]:
                return new BlockRuby(x, y, this.world);
            case Block.idBlocks[4]:
                return new BlockCarbon(x, y, this.world);
            case Block.idBlocks[5]:
                return new BlockDiamante(x, y, this.world);
            case Block.idBlocks[6]:
                return new BlockOro(x, y, this.world);
            case Block.idBlocks[7]:
                return new BlockHojas(x, y, this.world);
            case Block.idBlocks[8]:
                return new BlockTroncoDeMadera(x, y, this.world);
            case Block.idBlocks[9]:
                return new BlockArena(x, y, this.world);
            case Block.idBlocks[10]:
                return new BlockPiedra(x, y, this.world);
            case Block.idBlocks[11]:
                return new BlockCesped(x,y, this.world);
            default:
                return new Block(x, y, this.world);
        }
    }
    convertEntityById(id, vid, x, y){
        x = (x || "CacheEX");
        y = (y || "CacheEY");
        let EntityR;
        switch(id){
            case Entity.idEntitys[0]:
                EntityR = new Player(x, y, this.world, vid);
                break;
            case Entity.idEntitys[1]:
                EntityR = new EntityTryhardero(x, y, this.world, vid);
                break;
            case Entity.idEntitys[2]:
                EntityR = new EntityZombie(x, y, this.world, vid);
                break;
            case Entity.idEntitys[3]:
                EntityR = new EntityDelfin(x, y, this.world, vid);
                break;
            default:
                EntityR = new Entity(x, y, this.world, vid);
        }
        this.ClearCacheEntity();
        return EntityR;
    }
    ClearCacheEntity(){
        if(this.world.entitys["CacheEX"] != null){
          delete this.world.entitys["CacheEX"];
        }
    }
}
module.exports = Generador;