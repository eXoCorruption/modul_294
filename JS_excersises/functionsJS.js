const square = function(x) {
    return x * x;
};
console.log("Square of 2 is: " + square(2));

const dogBark = function() {
    console.log("Bark!");
};

dogBark();

const roundTo = function(i, step) {
    let remainder = i % step;
    return i - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(43,44));

const halve = function(n) {
    return n / 2;
};

let n = 10;
console.log("Die Hälfte von 100 ist: "+halve(100));
console.log(halve(n));

