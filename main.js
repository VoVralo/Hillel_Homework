class Student {
   constructor(firstName, lastName, birthYear) {
       this.firstName = firstName;
       this.lastName = lastName;
       this.birthYear = birthYear;
       this.grades = [];
       this.attendance = Array(25).fill(null);
   }

   getAge() {
       const currentYear = new Date().getFullYear();
       return currentYear - this.birthYear;
   }

   addGrade(grade) {
       this.grades.push(grade);
   }

   getAverageGrade() {
       if (this.grades.length === 0) return 0;

       const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
       return sum / this.grades.length;
   }

   present() {
       this._updateAttendance(true);
   }

   absent() {
       this._updateAttendance(false);
   }

   _updateAttendance(present) {
       const index = this.attendance.findIndex(el => el === null);
       if (index !== -1) {
           this.attendance[index] = present;
       } else {
           console.log("Attendance array is full.");
       }
   }

   summary() {
       const avgGrade = this.getAverageGrade();
       const attendanceCount = this.attendance.filter(el => el === true).length;
       const totalClasses = this.attendance.length;
       const avgAttendance = attendanceCount / totalClasses;

       let summaryText = '';

       if (avgGrade > 90 && avgAttendance > 0.9) {
           summaryText = "Молодець!";
       } else if (avgGrade > 90 || avgAttendance > 0.9) {
           summaryText = "Добре, але можна краще";
       } else {
           summaryText = "Редиска!";
       }

       return summaryText;
   }

   render() {
       const studentDiv = document.createElement('div');
       studentDiv.classList.add('student');

       studentDiv.innerHTML = `
           <h2>${this.firstName} ${this.lastName}</h2>
           <div class="student-info">
               <p><span>Age:</span> ${this.getAge()}</p>
               <p><span>Grades:</span> ${this.grades.join(', ') || 'No grades yet'}</p>
           </div>
           <div class="student-buttons">
               <button class="button">Present</button>
               <button class="button">Absent</button>
               <button class="button">Summary</button>
           </div>
       `;

       studentDiv.querySelector('.button:nth-child(1)').addEventListener('click', () => {
           this.present();
       });

       studentDiv.querySelector('.button:nth-child(2)').addEventListener('click', () => {
           this.absent();
       });

       studentDiv.querySelector('.button:nth-child(3)').addEventListener('click', () => {
           alert(this.summary());
       });

       return studentDiv;
   }
}

const student1 = new Student('John', 'Doe', 1998);
const student2 = new Student('Jane', 'Smith', 1999);

student1.addGrade(85);
student1.addGrade(92);
student1.addGrade(88);
student2.addGrade(90);
student2.addGrade(95);

const appDiv = document.getElementById('students');
appDiv.appendChild(student1.render());
appDiv.appendChild(student2.render());
