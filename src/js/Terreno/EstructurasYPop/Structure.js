class Structure{
    ySize = -1;
    xSize = -1;
    static StructuresId = ["portal", "cueva"];
    constructor(world, xInicio, yInicio){
    }
    static isEnterrado(){
        return false;
    }
}
module.exports = Structure;