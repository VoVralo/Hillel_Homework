let company = {
   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
   development: {
       web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
       internals: [{name: 'Jack', salary: 1300}]
   }
};

function sumSalaries(department) {
   let totalSalary = 0;

   if (Array.isArray(department)) {
       for (let user of department) {
           totalSalary += user.salary;
       }
   } else {
       for (let subDepartment in department) {
           totalSalary += sumSalaries(department[subDepartment]);
       }
   }

   return totalSalary;
}

let totalSalary = sumSalaries(company);
console.log(totalSalary);
