class Student {
   constructor(university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
   }

   getInfo() {
      return `${this.course}, ${this.university}, ${this.fullName}`;
   }

   canGetMarks = true;
   massArr = [5, 4, 4, 5];

   get marks() {
      return this.canGetMarks ? this.massArr : null;
   }

   set marks(number) {
      if (this.canGetMarks) this.massArr.push(number);
      else return null;
   }

   getAverageMark() {
      let result = this.massArr.reduce((acc, el) => acc + el, 0);
      return (result / this.massArr.length).toFixed(1);
   }

   dismiss() {
      return this.canGetMarks = false;
   }

   recover() {
      return this.canGetMarks = true;
   }

}





class BudgetStudent extends Student {
   constructor(university, course, fullName) {
      super(university, course, fullName)
      setInterval(() => {
         this.getScholarship();
      }, 30000);

   }

   logic() {
      return this.getAverageMark() >= 4.0 && this.canGetMarks === true;
   }

   getScholarship() {
      if (this.logic()) { console.log(`Ви отримали 1400 грн. стипендії`) }
   }

}


const bohdan = new Student("КНУТД - м.Київ", "Бакалавр - Комп'ютерна інженерія", "Панчишин Богдан Михайлович");
const andryi = new BudgetStudent("ЛНУП - м.Львів", "Студент 3 курсу - Системне проектування", "Микитин Андрій Ярославович");
console.log(bohdan.getInfo());
console.log(bohdan.marks);
bohdan.marks = 7;
console.log(bohdan.marks);
console.log(bohdan.getAverageMark());
bohdan.dismiss();
bohdan.marks = 8;
console.log(bohdan.marks);
bohdan.recover();
bohdan.marks = 3;
console.log(bohdan.marks);
console.log(andryi.getInfo());







