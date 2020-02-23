/*
    while loop: same with JAVA
    do-while: same with JAVA
    for loop: same with JAVA

    break:  exits the loop or switch statement
    continue: skip the iteration

    for in loop
*/

var i = 0;
while(i<=10){
    console.log(i);
    i++;
}

console.log("==========================");

for(var i=0; i<=10; i++){
    console.log(i);
}

console.log("==========================");

for(var i = 0; i<5; i++){
    if(i == 3){
        continue;
    }
    console.log(i);
}

console.log("==========================");

var arr = [6, 7, 8, 9, 10, 20];

for(each in arr){
    console.log(each);
}

console.log("==========================");

var strArray = ["Madina", "Waris", "Ruhan", "Shirin", "Turhan"];

for(anyname in strArray){
    console.log(strArray[anyname]);
}

console.log("==========================");

for(var i = 0; i<strArray.length; i++){
    console.log(strArray[i]);
}

