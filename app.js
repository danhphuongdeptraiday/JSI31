// var createCounter = function (n) {
//   //   let c = n;
//   return function () {
//     return n++;
//   };
// };

// let counter = createCounter(-2);
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let object = {};

// for (let i = 0; i < s.length; i++) {
//   console.log(object);
//   if (object[`${s.charAt(i)}`]) {
//     // console.log([`${s.charAt(i)}`], object[`${s.charAt(i)}`]);
//     object[`${s.charAt(i)}`]++;
//   } else {
//     object[`${s.charAt(i)}`] = 1;
//   }
// }

// console.log(Object.entries(object));
// let key = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

// let c = 0;

// for (const [symbol, value] of Object.entries(object)) {
//   console.log(symbol, value, key["C"]);

//   if (symbol == "I") {
//     c = key["I"] * value + c;
//   } else if (symbol == "V") {
//     c = key["V"] * value + c;
//   } else if (symbol == "X") {
//     c = key["X"] * value + c;
//   } else if (symbol == "L") {
//     c = key["L"] * value + c;
//   } else if (symbol == "C") {
//     c = key["C"] * value + c;
//   } else if (symbol == "D") {
//     c = key["D"] * value + c;
//   } else if (symbol == "M") {
//     c = key["M"] * value + c;
//   }
// }

// console.log(c);

// let c = 0;
// let s = "MCMXCIV";

// for (let i = 0; i < s.length; i++) {
//   if (i + 1 < s.length) {
//     if (s.charAt(i) == "I" && s.charAt(i + 1) == "V") {
//       c = c + 4;
//       i++;
//       continue;
//     } else if (s.charAt(i) == "I" && s.charAt(i + 1) == "X") {
//       c = c + 9;
//       i++;
//       continue;
//     } else if (s.charAt(i) == "X" && s.charAt(i + 1) == "L") {
//       c = c + 40;
//       i++;
//       continue;
//     } else if (s.charAt(i) == "X" && s.charAt(i + 1) == "C") {
//       c = c + 90;
//       i++;
//       continue;
//     } else if (s.charAt(i) == "C" && s.charAt(i + 1) == "D") {
//       c = c + 400;
//       i++;
//       continue;
//     } else if (s.charAt(i) == "C" && s.charAt(i + 1) == "M") {
//       c = c + 900;
//       i++;
//       continue;
//     }
//   }
//   if (s.charAt(i) == "I") {
//     c = c + 1;
//   } else if (s.charAt(i) == "V") {
//     c = c + 5;
//   } else if (s.charAt(i) == "X") {
//     c = c + 10;
//   } else if (s.charAt(i) == "L") {
//     c = c + 50;
//   } else if (s.charAt(i) == "C") {
//     c = c + 100;
//   } else if (s.charAt(i) == "D") {
//     c = c + 500;
//   } else if (s.charAt(i) == "M") {
//     c = c + 1000;
//   }
// }

// console.log(c);

// let strs = ["flower", "flow", "flight"];

// let small_word_length = Math.min(...strs.map((word) => word.length));
// // console.log(small);

// let samePrefix = "";

// function checkPrefix(m, n) {
//   if (m < n) {
//     let array = [];
//     for (let i = 0; i < strs.length; i++) {
//       array.push(strs[i].charAt(m));
//     }

//     array.every((c) => {
//       return c === array[0];
//     });

//     if (array.every((c) => c === array[0])) {
//       samePrefix = samePrefix + array[0];
//     } else {
//       samePrefix = "";
//       return;
//     }
//     m++;
//     return checkPrefix(m, n);
//   }
// }

// checkPrefix(0, small_word_length);
// console.log(samePrefix);

let s = "()";
// console.log(s.substr(1));
// console.log(s.substring(2, 4));

function check(s) {
  if (s.length % 2 != 0) {
    return false;
  }

  //   if (s !== reverseString(s)) {
  //     return false;
  //   }

  for (let i = 0; i < s.length; i++) {
    //   console.log(s.charAt(i));
    if (i % 2 != 0) {
      let brace = s.substring(i - 1, i + 1);
      if (brace == "()" || brace == "{}" || brace == "[]") {
        continue;
      } else {
        return false;
      }
    }
  }

  return true;
}
console.log(check(s));
// [[]]=> 0 1 2 3

let t = "Hellow";
console.log(t.substring(0));

function checkPalindrome(s) {
  let mid = s.length / 2;

  if (s[mid] == 0) {
  }
}
