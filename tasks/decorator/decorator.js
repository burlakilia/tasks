//Создайте декоратор makeLogging(func, log), для функции func возвращающий обёртку,
// которая при каждом вызове добавляет её аргументы в массив log.
function decorate(fn, log) {
    /* ваш код */
}

function work(a, b) {
    console.log( a + b ); // work - произвольная функция
}

var log = [];
work = decorate(work, log);
work(1, 2); // -> 3

console.log(log[0][0] === 1, log[0][1] === 2);