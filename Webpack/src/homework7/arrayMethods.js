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

console.log("Мода: [2,2,8,9,4,2] = ", getModa(2, 2, 8, 9, 4, 2));

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


export default getModa;