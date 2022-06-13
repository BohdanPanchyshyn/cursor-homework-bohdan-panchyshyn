const students = [{
   name: "Tanya",
   course: 3,
   subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
   }
}, {
   name: "Victor",
   course: 4,
   subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
   }
}, {
   name: "Anton",
   course: 2,
   subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
   }
}];

//Work 1

function getSubjects(...students) {
   for (let i = 0; i < students.length; i++) {
      let result = Object.keys(students[i].subjects);
      let firstLetter = [];
      for (let j = 0; j < result.length; j++) {
         result[j] = result[j].replace("_", " ");
         firstLetter[j] = result[j].replace(result[j], result[j].toUpperCase().substring(0, 1));
         result[j] = firstLetter[j] + result[j].replace(result[j], result[j].toLowerCase().substring(1));
      }
      return result;
   }
}
let resWork1 = getSubjects(students[0]);
console.log("Cписок предметів: ", resWork1);

//Work 2

function getAverageMark(...students) {
   let lengthArr = [];
   for (let i = 0; i < students.length; i++) {
      let a = Object.values(students[i].subjects);
      for (let j = 0; j < a.length; j++) {
         lengthArr = lengthArr.concat(a[j]);
      }
   }
   return getAverage(lengthArr).toFixed(2);
}

function getAverage(numbers) {

   numbers.reduce((acc, el) => {
      return newArray4 = (acc + el)
   }, 0)
   return newArray4 / numbers.length;
}

let resWork2 = getAverageMark(students[0]);
console.log("Середня оцінка: ", resWork2);

// //Work 3

function getStudentInfo(...students) {
   let b = {};
   let result = {};
   for (let i = 0; i < students.length; i++) {
      b = { averageMark: getAverageMark(students[i]) };
      result = { ...students[i], ...b }
      delete result.subjects;
   }
   return result;
}

let resWork3 = getStudentInfo(students[0]);
console.log("Інформація загального виду по переданому студенту: ", resWork3);


//Work 4

function getStudentsNames(students) {
   let arrSortStudents = [];
   for (let i = 0; i < students.length; i++) {
      arrSortStudents.push(students[i].name);
   }
   arrSortStudents.sort();
   return arrSortStudents;
}

let resWork4 = getStudentsNames(students);
console.log("Імена студентів у алфавітному порядку: ", resWork4);

//Work 5

function getBestStudent(students) {
   let arrNew = [];
   let arrMark = [];
   let result = [];
   for (let i = 0; i < students.length; i++) {
      arrNew.push(getStudentInfo(students[i]));
   }

   arrNew.map((el, indx) => {
      arrMark.push(parseFloat(arrNew[indx].averageMark));
   })

   result = Math.max(...arrMark);

   for (let i = 0; i < arrNew.length; i++) {
      if (parseFloat(arrNew[i].averageMark) === result) {
         result = arrNew[i].name;
      }
   }

   return result;
}

let resWork5 = getBestStudent(students);
console.log("Кращий студент: ", resWork5);

//Work 6

function calculateWordLetters(string) {

   let mass = [...string];
   let obj = {};
   mass.reduce((acc, el) => {
      (acc[el]) ? acc[el] += 1 : acc[el] = 1;
      return acc;
   }, obj)
   return obj;

}

let resWork6 = calculateWordLetters("тест");
console.log("Ключі це букви у слові, а значення – кількість їх повторень: ", resWork6);