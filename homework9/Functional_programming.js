const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//Work 1

function getMyTaxes(salary) {

   let result = salary * this.tax;
   return result;

}

let resWork1 = getMyTaxes.call(ukraine, 15000);
console.log("Cкільки податків ви заплатите як IT-спеціаліст в якійсь з країн: ", resWork1);

//Work 2

function getMiddleTaxes() {

   let result = this.tax * this.middleSalary;
   return result;

}

let resWork2 = getMiddleTaxes.call(ukraine);
console.log("Середні податки ІТ-спеціалістів у кожній країні: ", resWork2);

//Work 3

function getTotalTaxes() {

   let result = this.tax * this.middleSalary * this.vacancies;
   return result;

}

let resWork3 = getTotalTaxes.call(ukraine);
console.log("Cкільки всього податків платять IT-спеціалісти у кожній країні: ", resWork3);

//Work 4

function getMySalary(country) {
   setInterval(() => {

      let salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
      let taxes = Math.floor(getMyTaxes.call(country, salary));
      let profit = salary - taxes;
      const result = { salary, taxes, profit };
      return console.log(": ", result);
   }
      , 2000);

}

getMySalary(ukraine);

