nameSpace.js.Terreno.Biomes.Biome = class{
    subBiomeId = "null";
    static biomesIds = ["nevado", "normal", "desierto", "oceano", "FortalezaFin"];
    constructor(xMin, xMax, world, subBiome){
        this.world = world;
        this.xMin = xMin;
        this.xMax = xMax;
        this.subBiomeId = (subBiome || nameSpace.js.Terreno.SubBiomesUni.SubBiomeUni.SubBiomesIds[Math.floor(Math.random() * nameSpace.js.Terreno.SubBiomesUni.SubBiomeUni.SubBiomesIds.length)] || "normal");
        this.subBiome = nameSpace.js.Terreno.Biomes.Biome.getSubBiomeById(this.subBiomeId);
    }
    static getSubBiomeById(id){
        switch(id){}
    }
    static getBiomeById(id, xMin, xMax, world, subBiome){
        switch(id){
            case nameSpace.js.Terreno.Biomes.Biome.biomesIds[0]:
                return new nameSpace.js.Terreno.Biomes.Nevado(xMin, xMax, world, subBiome);
            case nameSpace.js.Terreno.Biomes.Biome.biomesIds[1]:
                return new nameSpace.js.Terreno.Biomes.Normal(xMin, xMax, world, subBiome);
            case nameSpace.js.Terreno.Biomes.Biome.biomesIds[2]:
                return new nameSpace.js.Terreno.Biomes.Desierto(xMin, xMax, world, subBiome);
            case nameSpace.js.Terreno.Biomes.Biome.biomesIds[3]:
                return new nameSpace.js.Terreno.Biomes.Oceano(xMin, xMax, world, subBiome);
            case nameSpace.js.Terreno.Biomes.Biome.biomesIds[4]:
                return new nameSpace.js.Terreno.Biomes.FortalezaFin(xMin, xMax, world, subBiome);
            default:
                return new nameSpace.js.Terreno.Biomes.Normal(xMin, xMax, world, subBiome);
        }
    }
};