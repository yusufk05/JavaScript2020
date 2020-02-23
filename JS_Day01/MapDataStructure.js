
var map = new Map();
/*
set(Key, Value): add keys and values to the map
get(Key): returns value related with key
delete(Key): delete value related with key
has(key): verifies is the key exist?
*/

map.set("Yusuf", 120000);
map.set("Mahmut", 130000);
map.set("Muhtar", 200000);
map.set("John", 150000);

console.log(map);

console.log("======================================");

for(var eachEmplooye of map){
    console.log(eachEmplooye);
}

console.log("======================================");

for(var [key, value] of map){
    console.log(key+" salary is "+value+" dollars per year");
}

console.log("======================================");

console.log(map.get("Yusuf"));

console.log("======================================");

map.delete("Mahmut");
console.log(map);

console.log("======================================");

console.log(map.has("Yusuf"));
console.log(map.has("Madina"));

console.log("======================================");

/*
Keys(): returns all keys
Values(): returns all the values
*/

var students = new Map();
students.set("Nurzat", 1);
students.set("Oless", 2);
students.set("Holly", 3);

for(var key of students.keys()){
    console.log(key);
}

console.log("======================================");

for(var value of students.values()){
    console.log(value);
}




