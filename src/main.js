window.addEventListener("load", function(){
  //for textures
  //$().css(var, valor);
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
      }
    });
  });
});
