const Biome = require("./Biome.js");
class Nevado extends Biome{
    filtrer = {};
    constructor(xMin, xMax, world, subBiome){
        super(xMin, xMax, world, subBiome);
        this.generateTerrain();
    }
    generateTerrain(){
        this.subBiome.generateTerrain(this.filtrer);
    }
}
module.exports = Nevado;