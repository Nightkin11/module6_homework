// Задание 2
function anyNum(num) {
    if (num > 1000 || num <= 0) {
        console.log(`данные не верны`)
    } else if (num ==2 || num ==3) {
        console.log(`${num} - простое число`)
    } else {
        for (i= 2; i <= num; i++) {
            if (num / i == 1 && num % 2 !=0 && num % 3 !=0) {
                console.log(`${num} - простое число`)
            }
        }
    }
}