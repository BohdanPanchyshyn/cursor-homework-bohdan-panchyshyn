//Work 1

function getRandomArray(length, min, max) {
   let copyArr = [];
   for (let i = 0; i < length; i++) {
      copyArr[i] = (Math.floor(Math.random() * (max - min)) + min);
   }
   return copyArr;
}

console.log("Масив чисел: ", getRandomArray(15, 1, 100));


//Work 2

function getModa(...numbers) {
   let arr = bubbleSort(numbers);
   let objCopy = {};
   let maxNumber = 0;
   let counter = 0;
   for (let i = 0; i < arr.length; i++) {
      const temp = arr[i];

      objCopy[temp] ? objCopy[temp]++ : objCopy[temp] = 1;

      if (counter < objCopy[temp]) {
         maxNumber = temp;
         counter = objCopy[temp];
      }
   }
   return maxNumber;
}

console.log("Мода: ", getModa(2, 2, 8, 9, 4, 2));


//Work 3
let newArray4 = 0;
function getAverage(...numbers) {

   numbers.reduce((acc, el) => {
      return newArray4 = (acc + el)
   }, 0)
   console.log("Cереднє арифметичне: ", newArray4 / numbers.length);
}
getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);

//Work 4

function bubbleSort(number) {
   for (let i = 0; i < number.length; i++) {
      for (let j = 0; j < number.length - 1 - i; j++) {
         if (number[j] > number[j + 1]) {
            let temp = number[j];
            number[j] = number[j + 1];
            number[j + 1] = temp;
         }
      }
   }
   return number;
}

function getMedian(...numbers) {
   let arr = bubbleSort(numbers);
   let copyArr = arr.slice();
   if (arr.length % 2) {
      return arr[Math.ceil(copyArr.length / 2 - 1)];
   } else {
      return arr[(copyArr.length / 2 - 1)] + 0.5;
   }
}
console.log("Медіана: ", getMedian(1, 2, 3, 4, 5));

//Work 5
let resultFilterNumbers = [];
function filterEvenNumbers(...numbers) {

   numbers.filter((el, indx) => {
      numbers[indx] % 2 !== 0 ? resultFilterNumbers.push(el) : 0
   })
}
filterEvenNumbers(1, 2, 3, 4, 5, 6);
console.log("Фільтрація парних чисел: ", resultFilterNumbers);


//Work 6
let counterNumbers = 0;
function countPositiveNumbers(...numbers) {
   numbers.filter((el, indx) => {
      numbers[indx] > 0 ? counterNumbers++ : 0
   })
}
countPositiveNumbers(1, -2, 3, 4, -5, -6, 8, -9);
console.log("Кількість чисел більших 0: ", counterNumbers);

//Work 7
let filterFive = [];
function getDividedByFive(...numbers) {

   numbers.filter((el, indx) => {
      numbers[indx] % 5 !== 0 ? 0 : filterFive.push(el)
   })
}
getDividedByFive(6, 2, 55, 11, 78, 22, 55, 77, 57, 87, 23, 2, 56, 3, 45);
console.log("Діляться на ціло на 5: ", filterFive);


//Work 8

function removeWord(name) {
   let lastLetter = name.split("")
   const replaceLetters = lastLetter.map((el) => el !== "*" ? el = "*" : el)
   return replaceLetters.join("")
}

const replaceGoodWords = (string) => {
   let goodWords = ['fuck', 'shit',]
   goodWords.forEach(el => string = string.split(el).join(removeWord(el)))
   return string
}
console.log("Заміна матюків: ", replaceGoodWords('Are you fucking, kidding me, bullshit ?'));

//Work 9

function divideByThree(word) {

   let word2 = word.split(" ").join("");
   word2 = word2.toLowerCase().split("");
   let arrayWords = [];
   for (let i = 1; i <= word2.length;) {
      word2.length !== "" ? arrayWords.push(word2.splice(0, 3).join("")) : 0;
   }
   return arrayWords;

}
console.log("Поділити слово на склади по 3: ", divideByThree("Commander is not a functions"));

//Work 10
/*Примітка ВАЖЛИВО!!!, функція працює нормально тільки з довжиною слова 3 та 2 
причина в тому, що з математичної точки зору, я не знайшов інших варіантів, як виконати цю функцію, 
якщо у Вас будуть варіанти, як це виправити, буду радий побачити їх, дальше не став обдумувати тільки через те, що не встигаю...(((
Але дуже хочу закінчити цю функцію, тому прошу допомоги колег та менторів, чекаю коментарів.!!!*/
function generateCombinations(word) {

   const numberGeneratedWord = factorial(word);
   let charArray = word.split("");
   let results = [];
   for (let i = 0; i <= (numberGeneratedWord / word.length); i++) {
      for (let j = 0; j < charArray.length; j++) {
         if (j + 1 < word.length) {
            let temp = charArray[j];
            charArray[j] = charArray[j + 1];
            charArray[j + 1] = temp;
            results.push(charArray.join(""));
         }
      }
   }
   console.log("Result: ", results);
   return results;
}

function factorial(word) {
   let n = word.length;
   if (n === 0 || n === 1)
      return 1;
   for (let i = n - 1; i >= 1; i--) {
      n = n * i;
   }
   return n;

}
generateCombinations("man");
