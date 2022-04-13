// Задание 3
function sum(callback) {
    callback();
    return function() {
        console.log(a + b);
    }
}
function argumentFunc() {
    a=2;
    b=3;
}
const resultSum = sum(argumentFunc);

resultSum();