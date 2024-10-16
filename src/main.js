$("#world1Level").hide();
$("#gameControl").hide();
$("#killScreen").hide();
$("#Loader").hide();
$("#Loader").fadeIn();
var nameSpace = {};
var textures = {};
var daycycle;
var clasesExtendB = [];
window.addEventListener("load", function(){
  $("#LoaderBar").prop("value", "100");
  $("#LoaderTxt").html("Loading Textures...");
  $("#LoaderBar").prop("value", "0");
  let textures = GameProps.getFileGame().folder("textures");
  let valP = 0;
  textures.forEach(function(RelaPath, Texture){
    if(RelaPath.endsWith("/")) return;
    Texture.async("uint8array").then(function(TextureBytes){
      valP++;
      $("#LoaderBar").prop("value", valP);
      let TexturBlob = new Blob([TextureBytes], {
        type: "image/webp"
      });
      let TexturUrl = URL.createObjectURL(TexturBlob);
      switch(RelaPath){
        case "Controls/BackBtn.png":
          $("#backControlBtn").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Controls/ForwardBtn.png":
          $("#forwardControlBtn").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Controls/JumpBtn.png":
          $("#jumpButtonBtn").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Clouds.png":
          $(".clouds, .clouds1, .clouds2, .clouds3, .clouds4, .clouds5").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "CloudsN.png":
          $(".cloudsN, .cloudsN1, .cloudsN2, .cloudsN3, .cloudsN4, .cloudsN5").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "CloudsW.png":
          $(".cloudsW, .cloudsW1, .cloudsW2, .cloudsW3, .cloudsW4, .cloudsW5").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Drops.png":
          $(".dropsbackground drops").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Lightning.png":
          $(".lightning").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Stars.png":
          $(".starsGame").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Sun.png":
          $(".sunGame").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Moon.png":
          $(".moonGame").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Blocks/Tierra.png":
          $(".tierraBlock, .tierra").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Blocks/MesaDeCraft.png":
          $(".mesaDeCraftBlock, .mesaDeCraft").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Blocks/Cesped.png":
          $(".cespedBlock, .cesped").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Blocks/Piedra.png":
          $(".piedraBlock, .piedra").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Blocks/Arena.png":
          $(".arenaBlock, .arena").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Blocks/TroncoDeMadera.png":
          $(".troncoDeMaderaBlock, .troncoDeMadera").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Blocks/Hojas.png":
          $(".hojasBlock, .hojas").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Blocks/Oro.png":
          $(".oroBlock").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Blocks/Hierro.png":
          $(".hierroBlock").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Blocks/Ruby.png":
          $(".rubyBlock").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Blocks/Carbon.png":
          $(".carbonBlock").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Blocks/Diamante.png":
          $(".diamanteBlock").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Items/Palo.png":
          $(".palo").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Items/Oro.png":
          $(".oro").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Items/Hierro.png":
          $(".hierro").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Items/Carbon.png":
          $(".carbon").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Items/Diamante.png":
          $(".diamante").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Items/Ruby.png":
          $(".ruby").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Items/Lantano.png":
          $(".lantano").css("background-image", 'url("'+TexturUrl+'")');
          break;
        case "Items/Changesita.png":
          $(".changesita").css("background-image", 'url("'+TexturUrl+'")');
          break;
      }
      textures[RelaPath.trim().replaceAll("/", "_").replaceAll(".png", "")] = TexturUrl;
    }).catch(function(err){
      alert("Error al Cargar Texturas\nJuego Dañado!\n\nError Loading Textures!\nGame Corrupted!");
      throw err;
    });
  });
  let clasesJS = GameProps.getFileGame().folder("js");
  valP = 0;
  $("#LoaderBar").prop("value", valP);
  $("#LoaderTxt").html("Loading Resources...");
  nameSpace.js = {};
  nameSpace.js.Blocks = {};
  nameSpace.js.Items = {};
  nameSpace.js.Entitys = {};
  nameSpace.js.Entitys.Ostil = {};
  nameSpace.js.Entitys.Pasive = {};
  nameSpace.js.Entitys.Controlable = {};
  nameSpace.js.Terreno = {};
  nameSpace.js.Terreno.Biomes = {};
  nameSpace.js.Terreno.SubBiomesUni = {};
  nameSpace.js.Terreno.Ambient = {};
  nameSpace.js.Terreno.EstructurasYPop = {};
  clasesJS.forEach(function (RelaPath, claseJS) {
    if(RelaPath.endsWith("/")) return;
    claseJS.async("string").then(function (claseJSstr) {
      valP++;
      $("#LoaderBar").prop("value", valP);
      let execC = new Function(claseJSstr);
      execC();
    }).catch(function(err){
      alert("Error al Cargar Recursos\nJuego Dañado!\n\nError Loading Resources!\nGame Corrupted!");
      throw err;
    });
  });
  for(let cEB of clasesExtendB){
    cEB();
  }
  delete clasesExtendB;
  $("#LoaderBar").prop("value", "100");
  $("#Loader").fadeOut();
  startGameWorld();
});

function startGameWorld() {
  $("#stopGameMusicBtn").show();
}