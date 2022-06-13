const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

const girls = [];
const boys = [];

//Work 1
function sortStudents() ({
   students.forEach(student => {
      student.slice(-1) === 'а' ? girls.push(student) : boys.push(student)
   })
})();


const pairs = boys.map(function (student, indx) {
   return [`${boys[indx]} i ${girls[indx]}`];
});
console.log(pairs);

//Work 2

const pairsAndThemes = themes.map(function (el, indx) {
   return [...pairs[indx], el];
})
console.log(pairsAndThemes);

//Work 3

const marksStudents = marks.map(function (el, indx) {
   return [students[indx], el];
})
console.log(marksStudents);
//Work 4
const marksProject = pairsAndThemes.map(function (el, indx) {
   return [...pairsAndThemes[indx], Math.floor(Math.random() * (5 - 1) + 1)];
})
console.log(marksProject);