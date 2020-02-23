
var car1 = {
    brand : "Mercedes",
    milage : 120000,
    year : 2019
}

var car2 = {
    brand : "Toyota",
    milage : 150000,
    year : 2008
}

function car(brand, milage, year){
    this.brand = brand;
    this.milage = milage;
    this.year = year;
}

var car3 = new car("Ford", 135000, 2011);

console.log(car3);

function employees(Name, ID, SSN, salary){
    this.Name = Name;
    this.ID = ID;
    this.SSN = SSN;
    this.salary = salary;
}

var employeeYusuf = new employees("Yusuf", 1453, '123-123-456', 120000 );
var employeeSumer = new employees("Sumeyye", 8, "000-000-333", 120000);

console.log(employeeYusuf);
console.log(employeeSumer);

console.log(employeeSumer.Name);
console.log(employeeSumer["Name"]);

