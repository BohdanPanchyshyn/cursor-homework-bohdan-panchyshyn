const text = document.getElementById("text");
const buttonUp = document.getElementById("buttonUp");
const buttonDown = document.getElementById("buttonDown");

function* createIdGenerator() {
   for (let i = 1; i < Infinity; i++) {
      yield i;
   }
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

function* newFontGenerator(sizeFont = 14) {
   let counter = 1;
   for (let i = 0; i < counter; i++) {
      let upDown = yield sizeFont;
      if (upDown === "up") sizeFont += 2;
      if (upDown === "down") sizeFont -= 2;
      (sizeFont > 0) ? text.style.fontSize = `${sizeFont}px` : sizeFont = 0;
      counter++;
   }
}

const fontGenerator = newFontGenerator();

buttonUp.addEventListener("click", () => fontGenerator.next("up"));
buttonDown.addEventListener("click", () => fontGenerator.next("down"));