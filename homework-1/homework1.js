const SSD = 15.678;
const Memory = 123.965;
const CPU = 90.2345;

const resultMax = Math.max(SSD, Memory, CPU);
const resultMin = Math.min(SSD, Memory, CPU);

const resultSumm = SSD + Memory + CPU;

const result = Math.floor(SSD) + Math.floor(Memory) + Math.floor(CPU);

const resultSummSot = Math.ceil((resultSumm)/100)*100;


if(result % 2){
  a = false;
} else {
  a = true;
}

const otherFunds = 500 - resultSumm;
const averageValue = (resultSumm / 3).toFixed(2);
const randomNumber = (Math.random()*(40-1)+1).toFixed();
const discount = resultSumm*(randomNumber/100);
const discountSumm = (resultSumm - discount).toFixed(2);
const netProfit = (resultSumm / 2);
const netProfitResult = (netProfit - discount).toFixed(2);

/*console.log('Максимальне число: ' + resultMax);
console.log('Мінімальне число: ' + resultMin);
console.log('Сума товарів: ' + resultSumm);
console.log('Сума цілих чисел товарів: ' + result);
console.log('Сума округлення до сотень: ' + resultSummSot);
console.log('Сума усіх товарі є парною: ' +  a);
console.log('Сума решти при оплаті 500грн: ' + otherFunds + ' грн.');
console.log('Середнє значення цін: ' + averageValue);
console.log('Ви отримали знижку: ' + randomNumber + '%');
console.log('Ваша сумма із врахуванням знижки: ' + discountSumm  + ' грн.');
console.log('Чистий прибуток: ' + netProfitResult);*/

alert
(
    `
     Максимальне число: ${resultMax}
     Мінімальне число: ${resultMin}
     Сума товарів: ${resultSumm}
     Сума цілих чисел товарів: ${result}
     Сума округлення до сотень: ${resultSummSot}
     Сума усіх товарі є парною: ${a}
     Сума решти при оплаті 500грн: ${otherFunds} грн.
     Середнє значення цін: ${averageValue}
     Ви отримали знижку: ${randomNumber}%
     Ваша сумма із врахуванням знижки: ${discountSumm} грн.
     Чистий прибуток: ${netProfitResult}
     `
 )