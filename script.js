// -------------------------- LESSON - 25 ------------------------------------

// 1. Напишіть функцію, яка буде перевіряти обʼєкт на пустоту

function isEmptyObj(obj) {
    for(var key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

// Перевірка:
console.log("Перевірка 1го завдання");  
var obj = 14;
let isEmpty = isEmptyObj(obj);
console.log(isEmpty);
  
// 2. Опишіть обʼєкт user з полями name, age та методом sayHello, результатом виклику якого має бути повідомлення “Привіт, я name, мені age років”

var user = {
    name: "Олексій",
    age: 37,
    sayHello: function() {
      console.log("Привіт, я " + this.name + ", мені " + this.age + " років.");
    }
  };

// Перевірка:
console.log("Перевірка 2го завдання"); 
user.sayHello();

  
// 3. Напишіть обʼєкт калькулятор. Він має містити метод ask, sum та mul. При виклику методу ask обʼєкт має запросити 2 числа та зберегти їх, як свої властивості. При виклику sum - вивести суму збережених чисел, при виклику mul - додаток чисел.

var calculator = {
    num1: null,
    num2: null,
    ask: function() {
      this.num1 = +prompt("Введіть перше число:", "");
      this.num2 = +prompt("Введіть друге число:", "");
    },
    sum: function() {
      return this.num1 + this.num2;
    },
    mul: function() {
      return this.num1 * this.num2;
    }
  }; 

// Перевірка:
calculator.ask();
var sum = calculator.sum();
var mul = calculator.mul();
console.log("Перевірка 3го завдання"); 
console.log(sum);
console.log(mul);

 



// -------------------------- LESSON - 24 ------------------------------------
// 1. Зробити функції для додавання, віднімання, множення і ділення чисел. В тілі функції обовʼязково додати перевірку на те, чи є параметр числом.

// function add(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         console.log(a + b);
//     } else {
//         console.log('Параметри повинні бути числами!');
//     }
// }

// function subtract(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         console.log(a - b);
//     } else {
//         console.log('Параметри повинні бути числами!');
//     }
// }

// function multiply(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         console.log(a * b);
//     } else {
//         console.log('Параметри повинні бути числами!');
//     }
// }

// function divide(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         if (b === 0) {
//             console.log('Ділення на нуль неможливe');
//         } else {
//             console.log(a / b);
//         }
//     } else {
//         console.log('Параметри повинні бути числами!');
//     }
// }

// 2. Зробити функції для пошуку мінімального і максимального числа в масиві. Масив має бути аргументом функції. Для пошуку мінімального та максимального чисел використовуйте різні цикли.

// function findMin(array) {
//     let min = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }
//     }
//     console.log(min);
// }

// function findMax(array) {
//     let max = array[0];
//     let i = 1;
//     while (i < array.length) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//         i++;
//     }
//     console.log(max);
// }

// // Перевірка:
// add(3, 2);
// subtract(3, 2);
// multiply(3, 2);
// divide(15, 12);

// const array1 = [1, 5, 33, 7, 12];
// findMin(array1);
// findMax(array1);


// -------------------------- LESSON - 23 ------------------------------------

// Array
// const array = [11, 23, 47, 22, 33, 93, 92, 1, 7, 18];

// // Sum calculation
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//         sum += array[i];
//     } 
// }

// console.log(`Sum calculation: ${sum}`);

// // Min-Max examination
// let min = null;
// let max = null;

// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//         if (min === null || array[i] < min) {
//             min = array[i];
//         }
//         if (max === null || array[i] > max) {
//             max = array[i];
//         }
//     }
// }

// console.log(`Min is: ${min}. Max is: ${max}`);

// // Picture
// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//       row += '#';
//     }
//     console.log(row);
//   }



// -------------------------- LESSON - 22 ------------------------------------

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



// -------------------------- LESSON - 21 ------------------------------------

// alert(`Your result is Summ - ${resultSumm}, Difference - ${resultDifference}, Multiply - ${resultMultiply}, Divide - ${resultDivison}`);

// } else if ((firstNumber === '' || firstNumber === null) || (secondNumber === '' || secondNumber === null)) {
//     alert('Error: One of fields is empty');    
// }