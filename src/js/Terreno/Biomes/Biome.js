const SubBiomeUni = require("../SubBiomesUni/SubBiomeUni.js");
const SubBiomeMontaña = require("../SubBiomesUni/Montaña.js");
class Biome{
    subBiomeId = "null";
    static biomesIds = ["nevado", "normal", "desierto", "oceano", "FortalezaFin"];
    StructureAviable = [];
    constructor(xMin, xMax, world, subBiome){
        this.world = world;
        this.xMin = xMin;
        this.xMax = xMax;
        this.subBiomeId = (subBiome || SubBiomeUni.SubBiomesIds[Math.floor(Math.random() * SubBiomeUni.SubBiomesIds.length)] || "normal");
        this.subBiome = Biome.getSubBiomeById(this.subBiomeId);
    }
    generateTerrain(){
    }
    static getSubBiomeById(id){
        switch(id){
            case SubBiomeUni.subBiomesIds[0]:
                return new SubBiomeMontaña();
            case SubBiomeUni.subBiomesIds[1]:
                return new nameSpace.js.Terreno.SubBiomesUni.Normal();
            case SubBiomeUni.subBiomesIds[2]:
                return new nameSpace.js.Terreno.SubBiomesUni.Cuevas();
            case SubBiomeUni.subBiomesIds[3]:
                return new nameSpace.js.Terreno.SubBiomesUni.Arbol();
        }
    }
    static getBiomeById(id, xMin, xMax, world, subBiome){
        switch(id){
            case Biome.biomesIds[0]:
                return new nameSpace.js.Terreno.Biomes.Nevado(xMin, xMax, world, subBiome);
            case Biome.biomesIds[1]:
                return new nameSpace.js.Terreno.Biomes.Normal(xMin, xMax, world, subBiome);
            case Biome.biomesIds[2]:
                return new nameSpace.js.Terreno.Biomes.Desierto(xMin, xMax, world, subBiome);
            case Biome.biomesIds[3]:
                return new nameSpace.js.Terreno.Biomes.Oceano(xMin, xMax, world, subBiome);
            case Biome.biomesIds[4]:
                return new nameSpace.js.Terreno.Biomes.FortalezaFin(xMin, xMax, world, subBiome);
            default:
                return new nameSpace.js.Terreno.Biomes.Normal(xMin, xMax, world, subBiome);
        }
    }
}
module.exports = Biome;