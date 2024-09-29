window.addEventListener("load", function(){
  let textures = GameProps.getFileGame().folder("textures");
  textures.forEach(function(RelaPath, Texture){
    Texture.async("string").then(function(TextureBytes){
      let TexturB64 = btoa(TextureBytes);
      switch(RelaPath){
        case "Clouds.png":
          $(".clouds, .clouds1, .clouds2, .clouds3, .clouds4, .clouds5").css("background-image", 'url("data:image/png;base64,'+TexturB64+'")');
          break;
        case "CloudsN.png":
          $(".cloudsN, .cloudsN1, .cloudsN2, .cloudsN3, .cloudsN4, .cloudsN5").css("background-image", 'url("data:image/png;base64,'+TexturB64+'")');
          break;
        case "CloudsW.png":
          $(".cloudsW, .cloudsW1, .cloudsW2, .cloudsW3, .cloudsW4, .cloudsW5").css("background-image", 'url("data:image/png;base64,'+TexturB64+'")');
          break;
        case "Drops.png":
          $(".dropsbackground drops").css("background-image", 'url("data:image/png;base64,'+TexturB64+'")');
          break;
        case "Lightning.png":
          $(".lightning").css("background-image", 'url("data:image/png;base64,'+TexturB64+'")');
          break;
        case "Stars.jpg":
          $(".starsGame").css("background-image", 'url("data:image/png;base64,'+TexturB64+'")');
          break;
        case "Sun.png":
          $(".sunGame").css("background-image", 'url("data:image/png;base64,'+TexturB64+'")');
          break;
        case "Moon.png":
          $(".moonGame").css("background-image", 'url("data:image/png;base64,'+TexturB64+'")');
          break;
      }
    });
  });
});

function weatherCycleInit() {
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
            var sunPosition = (hours - 0) * 10;
            sun.style.left = sunPosition + "px";
            
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
            var moonPosition = (hours - 30) * 10;
            moon.style.right = moonPosition + "px";
            }
          }
function startGameWorld() {
          GameProps.getClickStartSound().play();
          $("#stopGameMusicBtn").show();
          GameProps.getGameMusic().play();
          daycycle();
          var daycycle1 = setInterval(daycycle, 1000 * 60);
            weatherCycle();
            setInterval(weatherCycle, 2000 * 120);
            var terrainGeneration = document.getElementById("terrain");
            var playerMax = document.getElementById("playerMax");
            var collisionP = false;
            for (var i = 0; i < 6000; i++) {
              terrainGeneration.innerHTML += "<div id='grass"+i+"' style='with:1px; height:1px;left:"+i+"px;background-color: green;'></div>";
            }
        }
