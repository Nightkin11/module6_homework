// Задание 1
let a = ['object'];
let arr = [1,2,3,4,5,6,7,8,9,NaN,a,'Привет', true, false, null,0]
let i = -1;
function arrValuesInfo() {
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            if (arr[i] == 0) {
                console.log(arr[i] + ' - это ноль')
            } else if (isNaN(arr[i])) {
                console.log(arr[i] + ' - это NaN')
            } else if (arr[i] % 2 == 0) {
                console.log(arr[i] + ' - это четное число')
            } else {
                console.log(arr[i] + ' - это нечетное число')
            }
        }
        if (typeof arr[i] == 'object') {
            console.log(arr[i] + ' - это объект')
        }
        if (typeof arr[i] == 'string') {
            console.log(arr[i] + ' - это строка')
        }
        if (typeof arr[i] == 'boolean') {
            console.log(arr[i] + ' - это булевы значения')
        }
    }
};

arrValuesInfo();