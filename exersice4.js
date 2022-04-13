// Задание 4
function nums(a, b) {
    i = a;
    timerId = setInterval(function() {
        console.log(i);
        if (i == b) {
        clearInterval(timerId);
        }   
        i++;
    }, 1000);
}

nums(5, 15);