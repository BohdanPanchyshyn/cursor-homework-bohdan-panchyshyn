const button = document.querySelectorAll(".button");
const container = document.querySelector(".boxButton");

function sound(id) {
   let searchAudio = document.getElementById(id);
   let audios = document.getElementsByTagName('audio');
   for (let i = 0; i < audios.length; i++) {
      audios[i] != searchAudio.target ? audios[i].load() : 0;
   }
   searchAudio.currentTime = 0;
   searchAudio.play();
}

container.addEventListener("click", function (event) {
   let div = event.target.closest(".button");
   changeSoundAndStyle(div);
});

function clear() {
   button.forEach((el) => {
      el.classList.remove("playKey");
   })
}

function changeSoundAndStyle(params) {
   clear();
   if (!params) return;
   numId = parseInt(params.id) + 1;
   params.classList.add("playKey");
   sound(numId);
}

document.addEventListener("keydown", function (event) {
   let getCodeButton = event.code;

   switch (getCodeButton) {
      case "KeyA":
         let getIdDivA = document.getElementById("10")
         changeSoundAndStyle(getIdDivA);
         break;
      case "KeyS":
         let getIdDivS = document.getElementById("20")
         changeSoundAndStyle(getIdDivS);
         break;
      case "KeyD":
         let getIdDivD = document.getElementById("30")
         changeSoundAndStyle(getIdDivD);
         break;
      case "KeyF":
         let getIdDivF = document.getElementById("40")
         changeSoundAndStyle(getIdDivF);
         break;
      case "KeyG":
         let getIdDivG = document.getElementById("50")
         changeSoundAndStyle(getIdDivG);
         break;
      case "KeyH":
         let getIdDivH = document.getElementById("60")
         changeSoundAndStyle(getIdDivH);
         break;
      case "KeyJ":
         let getIdDivJ = document.getElementById("70")
         changeSoundAndStyle(getIdDivJ);
         break;
      case "KeyK":
         let getIdDivK = document.getElementById("80")
         changeSoundAndStyle(getIdDivK);
         break;
      case "KeyL":
         let getIdDivL = document.getElementById("90")
         changeSoundAndStyle(getIdDivL);
         break;
   }
});







