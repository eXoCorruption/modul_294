const square = function(x) {
    return x * x;
};
let square1 = square(2)
console.log("Square of 2: " + square1);

const dogBark = function() {
    console.log("Bark!");
};

dogBark();

const roundTo = function(i, step) {
    let remainder = i % step;
    return i - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(23,10));

const halve = function(n) {
    return n / 2;
};

let n = 10;
console.log("Die Hälfte von 100 ist: "+halve(100));
console.log(halve(n));

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log('${ingredientAmount} ${unit} ${name}');
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};
console.log("Closer:")
function wrapValue(n) {
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(1);
console.log(wrap1());


function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2);
let fiveTimes = multiplier(5);
console.log(twice(7));
console.log(fiveTimes(10));


const isEven = function(x) {
     if ( x % 2 == 0) {
       return true;
       } else if ( x % 2 == 1) {
       return false;
       } else if ( x <= 0 ) {
       return "??";
       }
  }

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// Mit dieser Funktion wird Spezifisch das \"B\" gezählt:
const countBs = function(String) {
  let counter = 0;
  for (let i = 0; i < String.length; i++) {
    if (String[i] === "B") {
        counter++;
    }
  }
  return counter;
}

// Mit dieser Funktion wird das übergebene Argument gezählt:
const countChar = function(string, char) {
   let count = 0;
   for (let i = 0; i < string.length; i++) {
     if (string[i] === char) {
       count++;
       }
   }
   return count;
}
console.log("Mit dieser Funktion wird Spezifisch das \"B\" gezählt:")
console.log(countBs("BOB"));
// → 2
console.log("Mit dieser Funktion wird das übergebene Argument gezählt:")
console.log(countChar("kakkerlak", "k"));
// → 4