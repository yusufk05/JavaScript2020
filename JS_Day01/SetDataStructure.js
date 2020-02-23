/*
add(values)
delete(value): deletes
clear():    removes everything
has(Value): contains

values(): 
*/
var set = new Set();
set.add(10);
set.add(10);
set.add(10);
set.add("Yusuf");
set.add('$');
set.add(true);
console.log(set);

set.delete(10);
console.log(set);

//set.clear();
console.log(set);

console.log(set.has(2));

console.log("==========================================");

/*
for off loop: 
    for(var varname of )
*/

for(var each of set.values()){
    console.log(each);
}

console.log("==========================================");

var students = [ "Nurullaj", "Mahmut", "Sukran", "Nurzat"];
for(var eachStudents of students.values() ){
    console.log(eachStudents);
}

