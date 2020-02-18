const generateFunction = function (b) {
    return function (a) {
        return a + b;
    }
};

let plusFive = generateFunction(5);
let plusSix = generateFunction(6);
console.log(plusFive(1));
