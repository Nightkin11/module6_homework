// //Задание 1
// let a = ['object'];
// let arr = [1,2,3,4,5,6,7,8,9,NaN,a,'Привет', true, false, null,0]
// let i = -1;
// function arrValuesInfo() {
//     for (i = 0; i < arr.length; i++) {
//         if (typeof arr[i] == 'number') {
//             if (arr[i] == 0) {
//                 console.log(arr[i] + ' - это ноль')
//             } else if (isNaN(arr[i])) {
//                 console.log(arr[i] + ' - это NaN')
//             } else if (arr[i] % 2 == 0) {
//                 console.log(arr[i] + ' - это четное число')
//             } else {
//                 console.log(arr[i] + ' - это нечетное число')
//             }
//         }
//         if (typeof arr[i] == 'object') {
//             console.log(arr[i] + ' - это объект')
//         }
//         if (typeof arr[i] == 'string') {
//             console.log(arr[i] + ' - это строка')
//         }
//         if (typeof arr[i] == 'boolean') {
//             console.log(arr[i] + ' - это булевы значения')
//         }
//     }
// };

// arrValuesInfo();


// //Задание 2
// function anyNum(num) {
//     if (num > 1000 || num <= 0) {
//         console.log(`данные не верны`)
//     } else if (num ==2 || num ==3) {
//         console.log(`${num} - простое число`)
//     } else {
//         for (i= 2; i <= num; i++) {
//             if (num / i == 1 && num % 2 !=0 && num % 3 !=0) {
//                 console.log(`${num} - простое число`)
//             }
//         }
//     }
// }


// //Задание 3
// function sum(callback) {
//     callback();
//     return function() {
//         console.log(a + b);
//     }
// }
// function argumentFunc() {
//     a=2;
//     b=3;
// }
// const resultSum = sum(argumentFunc);

// resultSum();


// //Задание 4
// function nums(a, b) {
//     i = a;
//     timerId = setInterval(function() {
//         console.log(i);
//         if (i == b) {
//         clearInterval(timerId);
//         }   
//         i++;
//     }, 1000);
// }

// nums(5, 15);


//Задание 5
const arrow = (x, n) => console.log(Math.pow(x,n));

arrow(8,8);