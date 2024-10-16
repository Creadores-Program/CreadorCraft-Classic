nameSpace.js.Terreno.Ambient.Weather = class {
    constructor(gen){
        this.gen = gen;
        setInterval(this.updateWeather.bind(this), 120 * 2000);
    }
    updateWeather(){
        let date = new Date();
        let hours2 = date.getHours();
        let weatherStart = Math.random() * (23 - 0) + 0;
        let weaterStop = Math.random() * (23 - 1) + 1;
        if (hours2 >= weatherStart && hours2 < weaterStop) {
          clearInterval(daycycle);
          moonGame.style.visibility = "hidden";
          sunGame.style.visibility = "hidden";
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
          this.timeW = setTimeout(this.lig.bind(this), Math.random() * 900000);
          $('.dropsbackground').show();
          let dropsfond = document.querySelector(".dropsbackground");
          const rain = ()=> {
              let x = innerWidth * Math.random();
              let time = 1 * Math.random();
              for(let randomdrop = 0; randomdrop <= 80; randomdrop++){
                let dropsd = document.createElement('drops');
                dropsd.style.animationDuration = time + 's';
                dropsd.style.animationDelay = time + 's';
                dropsd.style.left = x + 'px';
                dropsfond.appendChild(dropsd);
              }
            };
            rain();
          }else{
            this.gen.day.updateDay();
            daycycle = setInterval(this.gen.day.updateDay.bind(this.gen.day), 1000 * 60);
            $('.dropsbackground').hide();
            $('.lightning').hide();
            clearTimeout(this.timeW);
          }
    }
    lig(){
      document.querySelector(".lightning").style.display = 'block';
      $(".lightning").show();
      this.timeW = setTimeout(this.lig.bind(this), Math.random() * 900000);
    }
};