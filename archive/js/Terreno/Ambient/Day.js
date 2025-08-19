class Day{
    constructor(){
        daycycle = setInterval(this.updateDay.bind(this), 60000);
        this.updateDay();
    }
    updateDay(){
        let date = new Date();
        let hours = date.getMinutes();
        let sun = document.getElementById("sunGame");
        let moon = document.getElementById("moonGame");
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
          let sunPosition = ((hours / 60) * 100).toFixed(2);
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
          let moonPosition = ((hours / 60) * 100).toFixed(2);
          moon.style.right = moonPosition + "%";
        }
    }
}
module.exports = Day;