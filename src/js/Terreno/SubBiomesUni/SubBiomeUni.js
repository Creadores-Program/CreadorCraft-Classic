class SubBiomeUni{
    static subBiomesIds = ["montaña", "normal", "cuevas", "arbol"];
    maxY = -1;
    minY = -1;
    static id = "null";
    constructor(){}
    generateTerrain(filtrer){}
    applyFiltrer(filtrer, element){
        for(let attribute of Object.keys(filtrer)){
            let value = filtrer[attribute];
            $(element).css(attribute, value);
        }
        return element;
    }
}
module.exports = SubBiomeUni;