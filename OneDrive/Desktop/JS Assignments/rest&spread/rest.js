const array1 = ["hello", "hi", 1, 5, 7,["hello", "mine"]]

console.log(...array1, ...array1[5])

function rest(...array1){
    return array1
}

console.log(rest(1,3,4))

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

function sum(...nums) {
    console.log(nums);
}
sum(1, 2, 3, 4);

console.log([..."hello"]);