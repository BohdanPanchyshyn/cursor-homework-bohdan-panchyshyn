let sumAllNumbers = 0;
let sumEvenNumbers = 0;
let startNumber;

do{
    startNumber = +prompt("Введіть число N від якого будемо складати: ", 0);
}while(isNaN(startNumber) || startNumber <= 0);

let finalNumber;

do{
    finalNumber = +prompt("Введіть число M до якого будемо складати: ", 0);
}while(isNaN(finalNumber) || finalNumber <= 0 || finalNumber < startNumber);

let evenNumbers = confirm("Чи потрібно пропустити парні числа?");

for(startNumber; startNumber<=finalNumber; startNumber++){
  if(!evenNumbers){
    sumEvenNumbers = sumEvenNumbers + startNumber;
  } else if(startNumber % 2){
      sumEvenNumbers = sumEvenNumbers + startNumber;
    }
}
alert (`Ваш результат: ${sumEvenNumbers}`);