

function countNum(number , target){
    let count = 0;
    for(let i = 0; i < number.length; i++){
        if(number[i] === target){
            count++
        }
    }
    return count;
}
const numbers = [5,6,11,12,98,5,6,4,6,4,3,3,3,3,4];
const targetNum = 3;
const sum = countNum(numbers, targetNum);
console.log(`The Number ${targetNum} is repeted ${sum} time in the  Array`);



// function countOccurrences(numbers, targetNumber) {
//     let count = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === targetNumber) {
//             count++;
//         }
//     }

//     return count;
// }

// // Example usage
// const numbers = [5, 6, 11, 12, 98, 5];
// const targetNumber = 5;

// const result = countOccurrences(numbers, targetNumber);

// console.log(`The number ${targetNumber} is repeated ${result} times in the array.`);
