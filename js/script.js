'use strict';

function sumMaker() {

    let arg = 0;

    return function (x) {
        let result = arg + x;
        arg += x;
        return result;
    }
}

const sum = sumMaker();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));