let sumAllNumbers = 0;
let sumEvenNumbers = 0;
let startNumber;

do{
    startNumber = +prompt("Введіть число N від якого будемо складати: ");
}while(isNaN(startNumber) || startNumber < 0);

let finalNumber;

do{
    finalNumber = +prompt("Введіть число M до якого будемо складати: ");
}while(isNaN(finalNumber) || finalNumber < 0);

let evenNumbers = confirm("Чи потрібно пропустити парні числа?");

if(evenNumbers){
  
    for(startNumber; startNumber<=finalNumber; startNumber++){
      if(startNumber % 2){
        sumEvenNumbers = sumEvenNumbers + startNumber;
               }
    }
  alert (`Ваш результат: ${sumEvenNumbers}`);
}else{ 
  for(startNumber; startNumber<=finalNumber; startNumber++){
  sumAllNumbers = sumAllNumbers + startNumber;
     }
  alert (`Ваш результат: ${sumAllNumbers}`); 
}