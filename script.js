// LESSON - 23 --------------------------------------------------------

// Array
const array = [11, 23, 47, 22, 33, 93, 92, 1, 7, 18];

// Sum calculation
let sum = 0;
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
        sum += array[i];
    } 
}

console.log(`Sum calculation: ${sum}`);

// Min-Max examination
let min = null;
let max = null;

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
        if (min === null || array[i] < min) {
            min = array[i];
        }
        if (max === null || array[i] > max) {
            max = array[i];
        }
    }
}

console.log(`Min is: ${min}. Max is: ${max}`);

// Picture
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '#';
    }
    console.log(row);
  }





// LESSON - 22 --------------------------------------------------------

// let firstNumber = prompt('Enter first number');
// let secondNumber = prompt('Enter second number');

// const resultSumm = Number(firstNumber) + Number(secondNumber);
// const resultDifference = firstNumber - secondNumber;
// const resultMultiply = firstNumber * secondNumber;
// const resultDivison = firstNumber / secondNumber;

// let isAllOk;

// if (firstNumber === '' || secondNumber === '') {
//     alert('Error: One of fields is empty');    
// } else if (secondNumber == 0) {
//     alert('Error: Second number is 0');    
// } else if (firstNumber < secondNumber) {
//     isAllOk = confirm('Are you sure you want to continue calculation?');
//     if (isAllOk === true) {
//         alert((`Summ of ${firstNumber} and ${secondNumber} is ${resultSumm}`));
//         alert((`Difference of ${firstNumber} and ${secondNumber} is ${resultDifference}`));
//         alert((`Multiplification of ${firstNumber} and ${secondNumber} is ${resultMultiply}`));
//         alert((`Division of ${firstNumber} and ${secondNumber} is ${resultDivison}`));
//     }
// } 
//     else {
//     alert(`Summ of ${firstNumber} and ${secondNumber} is ${resultSumm}`);
//     alert(`Difference of ${firstNumber} and ${secondNumber} is ${resultDifference}`);
//     alert(`Multiplification of ${firstNumber} and ${secondNumber} is ${resultMultiply}`);
//     alert(`Division of ${firstNumber} and ${secondNumber} is ${resultDivison}`);
// }


// LESSON - 21 --------------------------------------------------------

// alert(`Your result is Summ - ${resultSumm}, Difference - ${resultDifference}, Multiply - ${resultMultiply}, Divide - ${resultDivison}`);

// } else if ((firstNumber === '' || firstNumber === null) || (secondNumber === '' || secondNumber === null)) {
//     alert('Error: One of fields is empty');    
// }