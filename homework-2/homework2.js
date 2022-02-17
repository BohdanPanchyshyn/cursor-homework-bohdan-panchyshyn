let sumAllNumbers = 0;
let sumEvenNumbers = 0;
let startNumber = prompt("Введіть число N від якого будемо складати: ");
startNumber = Number(startNumber);

let finalNumber = prompt("Введіть число M до якого будемо складати: ");
finalNumber = Number(finalNumber);

let evenNumbers = confirm("Чи потрібно пропустити парні числа?");

if(evenNumbers == 1 ){
  
    for(startNumber; startNumber<=finalNumber; startNumber++){
      if(startNumber % 2){
        sumEvenNumbers = sumEvenNumbers + startNumber;
               }
    }
  console.log('Ваш результат: ' + sumEvenNumbers);

}else{ 
  for(startNumber; startNumber<=finalNumber; startNumber++){
  sumAllNumbers = sumAllNumbers + startNumber;
     }
  console.log('Ваш результат: ' + sumAllNumbers); 
}