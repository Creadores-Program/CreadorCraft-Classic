$("#world1Level").hide();
$("#gameControl").hide();
$("#Loader").hide();
$("#Loader").fadeIn();
var nameSpace = {};
var textures = {};
var daycycle1;
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
  nameSpace.js.Terreno = {};
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

function weatherCycleInit() {
          let date = new Date();
          var hours2 = date.getHours();
          var weatherStart = Math.random() * (23 - 0) + 0;
          var weaterStop = Math.random() * (23 - 1) + 1;
          if (hours2 >= weatherStart && hours2 < weaterStop) {
            clearInterval(daycycle1);
            moon.style.visibility = "hidden";
            sun.style.visibility = "hidden";
            $(".clouds").hide();
            $(".clouds1").hide();
            $(".clouds2").hide();
            $(".clouds3").hide();
            $(".clouds4").hide();
            $(".clouds5").hide();
            $(".cloudsN").hide();
            $(".cloudsN1").hide();
            $(".cloudsN2").hide();
            $(".cloudsN3").hide();
            $(".cloudsN4").hide();
            $(".cloudsN5").hide();
            $("#starsGame").hide();
            $(".cloudsW").show();
            $(".cloudsW1").show();
            $(".cloudsW2").show();
            $(".cloudsW3").show();
            $(".cloudsW4").show();
            $(".cloudsW5").show();
            document.body.style.backgroundColor = '#6D6968';
            setTimeout(function() {
              document.querySelector(".lightning").style.display = 'block';
              }, Math.random() * 5000);
            $('.dropsbackground').show();
            var dropsfond = document.querySelector(".dropsbackground");
            const rain = ()=> {
            let randomdrop = 0;
              let x = innerWidth * Math.random();
              let time = 1 * Math.random();
            while (randomdrop <= 80){
              var dropsd = document.createElement('drops');
              drops.style.animationDuration = time + 's';
              drops.style.animationDelay = time + 's';
              drops.style.left = x + 'px';
              dropsfond.appendChild(dropsd);
              randomdrop++;
              }
            }
            rain();
          }else{
            daycycle();
            daycycle1 = setInterval(daycycle, 1000 * 60);
            $('.dropsbackground').hide();
            $('.lightning').hide();
            clearTimeout(function() {
              document.querySelector(".lightning").style.display = 'block';
              }, Math.random() * 5000);
          }
        }
function daycycle() {
          var date = new Date();
          var hours = date.getMinutes();
          var sun = document.getElementById("sunGame");
          var moon = document.getElementById("moonGame");
          if (hours >= 0 && hours < 30) {
            document.body.style.backgroundColor = '#00FFFF';
            moon.style.visibility = "hidden";
            sun.style.visibility = "visible";
            $(".clouds").show();
            $(".clouds1").show();
            $(".clouds2").show();
            $(".clouds3").show();
            $(".clouds4").show();
            $(".clouds5").show();
            $(".cloudsN").hide();
            $(".cloudsN1").hide();
            $(".cloudsN2").hide();
            $(".cloudsN3").hide();
            $(".cloudsN4").hide();
            $(".cloudsN5").hide();
            $("#starsGame").hide();
            $(".cloudsW").hide();
            $(".cloudsW1").hide();
            $(".cloudsW2").hide();
            $(".cloudsW3").hide();
            $(".cloudsW4").hide();
            $(".cloudsW5").hide();
            var sunPosition = ((hours / 60) * 100).toFixed(2);
            sun.style.left = sunPosition + "%";
            
          } else {
            document.body.style.backgroundColor = '#0C090A';
            sun.style.visibility = "hidden";
            moon.style.visibility = "visible";
            $(".clouds").hide();
            $(".clouds1").hide();
            $(".clouds2").hide();
            $(".clouds3").hide();
            $(".clouds4").hide();
            $(".clouds5").hide();
            $(".cloudsW").hide();
            $(".cloudsW1").hide();
            $(".cloudsW2").hide();
            $(".cloudsW3").hide();
            $(".cloudsW4").hide();
            $(".cloudsW5").hide();
            $(".cloudsN").show();
            $(".cloudsN1").show();
            $(".cloudsN2").show();
            $(".cloudsN3").show();
            $(".cloudsN4").show();
            $(".cloudsN5").show();
            $("#starsGame").show();
            $(".starsGame").show();
            var moonPosition = ((hours / 60) * 100).toFixed(2);
            moon.style.right = moonPosition + "%";
            }
          }
function startGameWorld() {
          GameProps.getClickStartSound().play();
          $("html, body").css("overflow-y", "hidden");
          $("html, body").css("overflow-x", "hidden");
          $("#stopGameMusicBtn").show();
          GameProps.getGameMusic().play();
          daycycle();
          daycycle1 = setInterval(daycycle, 1000 * 60);
            weatherCycleInit();
            setInterval(weatherCycleInit, 2000 * 120);
            var terrainGeneration = document.getElementById("terrain");
            var playerMax = document.getElementById("playerMax");
            var collisionP = false;
        }
