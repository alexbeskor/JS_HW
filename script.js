let firstNumber = prompt('Enter first number');
let secondNumber = prompt('Enter second number');

const resultSumm = Number(firstNumber) + Number(secondNumber);
const resultDifference = firstNumber - secondNumber;
const resultMultiply = firstNumber * secondNumber;
const resultDivison = firstNumber / secondNumber;

let isAllOk;

if (firstNumber === '' || secondNumber === '') {
    alert('Error: One of fields is empty');    
} else if (secondNumber == 0) {
    alert('Error: Second number is 0');    
} else if (firstNumber < secondNumber) {
    isAllOk = confirm('Are you sure you want to continue calculation?');
    if (isAllOk === true) {
        alert((`Summ of ${firstNumber} and ${secondNumber} is ${resultSumm}`));
        alert((`Difference of ${firstNumber} and ${secondNumber} is ${resultDifference}`));
        alert((`Multiplification of ${firstNumber} and ${secondNumber} is ${resultMultiply}`));
        alert((`Division of ${firstNumber} and ${secondNumber} is ${resultDivison}`));
    }
} 
    else {
    alert(`Summ of ${firstNumber} and ${secondNumber} is ${resultSumm}`);
    alert(`Difference of ${firstNumber} and ${secondNumber} is ${resultDifference}`);
    alert(`Multiplification of ${firstNumber} and ${secondNumber} is ${resultMultiply}`);
    alert(`Division of ${firstNumber} and ${secondNumber} is ${resultDivison}`);
}

// alert(`Your result is Summ - ${resultSumm}, Difference - ${resultDifference}, Multiply - ${resultMultiply}, Divide - ${resultDivison}`);

// } else if ((firstNumber === '' || firstNumber === null) || (secondNumber === '' || secondNumber === null)) {
//     alert('Error: One of fields is empty');    
// }