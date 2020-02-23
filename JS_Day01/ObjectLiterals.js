
var Employee1 = {
    EmployeeName: "Sait",
    EmployeeID: 12,
    Salary: 120000
};

console.log(Employee1);
console.log(Employee1.EmployeeName);
console.log(Employee1["EmployeeName"]);

console.log("===========================");

for(each in Employee1){
    console.log(each+" : "+Employee1[each]);
}

console.log("===========================");

var Employees = {
    Mehmet:{
        Name: "Mehmet",
        Salary: 120000,
    },

    Ceren:{
        Name: "Ceren",
        Salary: 130000
    },

    Turan:{
        Name:"Turan",
        Salary: 140000
    }
}

console.log(Employees.Ceren);
console.log(Employees["Ceren"]);
console.log("Ceren Salary is "+Employees.Ceren.Salary);
console.log("Ceren Salary is "+Employees["Ceren"]["Salary"]);
