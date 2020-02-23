var numbers = [1, 2, 3, 3.5, "Mahmut", '@', true];
console.log(numbers);
console.log(numbers[4]);

/*
sort(): sorts in accending
push(value): add variable
pop(): LIFO
Shift(); FIFO
unshift(value):
length():
*/

var nums = [9,8,7,6,5,4,3,2,1];
nums.sort();
console.log(nums);
nums.push(100);
console.log(nums);

console.log(nums.pop());
console.log(nums);

console.log(nums.shift());
console.log(nums);

nums.unshift(1);
console.log(nums);

console.log(nums.length);
