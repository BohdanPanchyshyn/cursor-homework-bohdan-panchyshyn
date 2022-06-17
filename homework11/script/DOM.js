alert("Щоб квадрати з'явились на сторінці, необхідно викликати функцію generateBlocks(); або generateBlocksInterval();")

const element = document.getElementById("container");

function color() {
   const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
   return randomColor;
}

function generateBlocks() {
   const numberSquare = 25;
   for (let i = 0; i < numberSquare; i++) {
      let newSquare = document.createElement('div');
      newSquare.classList.add("article");
      newSquare.style.backgroundColor = color();
      element.append(newSquare);
   }
}

function generateBlocksInterval() {
   generateBlocks();
   let oldBlocks = document.getElementsByClassName("article");
   setInterval(() => {
      for (let i = 0; i < oldBlocks.length; i++) {
         oldBlocks[i].style.backgroundColor = color();
      }
   }, 1000);
}