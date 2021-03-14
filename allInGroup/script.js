"use strict";
//1️⃣
//Look at this series: 7, 10, 8, 11, 9, 12, … What number should come next?
/*
const nextNum = function (arr) {
  if (arr.length === 1) {
    return (arr[0] += 3);
  } else {
    return (arr[arr.length - 2] += 1);
  }
};
console.log(nextNum([7, 10, 8, 11, 9, 12])); // 10
console.log(nextNum([1])); //4
console.log(nextNum([1, 4])); //2
console.log(nextNum([1, 4, 2])); //5
 */

//2️⃣
// Father said to his son, "When I was your age, you were 4 years old. When you will be my age, I will be 79 years old."
// How old both of them are now?
/*
const findCurrAges = (num1, num2) => {
  let sonAge = Math.round((num2 + 8) / 3);
  let fatherAge = num2 - (sonAge - num1);
  return [sonAge, fatherAge];
};
console.log(findCurrAges(4, 79)); //[29, 54]
 */

//3️⃣
//Print all even numbers between 1-79.
/*
const printEven = function (a, b) {
  const arr = [];
  const startEven = a < b && a % 2 === 0 ? a : (a += 1);
  for (let i = startEven; i <= b; i += 2) {
    arr.push(i);
  }
  return arr;
};

console.log(printEven(1, 79));
console.log(printEven(2, 10));
 */

//4️⃣
//Reproduce the following output (use loops).
//*
//**
//***
//****
//*****
/*
const stars = function (n) {
  let starStr = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
       starStr += "*";
    }
    if (i < n) starStr += "\n";
  }
  return starStr;
};
console.log(stars(5));
 */

//5️⃣
//Write a function, which can find and replace all letters "a" in the sentence with "*" (without using default methods).
/*
const replaceA = function (str) {
  let newStr = "";
  for (const char of str) {
    if (char.toLowerCase() === "a") {
      newStr += "*";
    } else {
      newStr += char;
    }
  }
  return newStr;
};
console.log(replaceA("Aram is a hardware developer"));
console.log(
  replaceA("The four major categories of B2B product purchasers are:")
);
 */

//6️⃣
//Write a function, which receives a string, finds numbers in the string and returns their sum.
/*
const sumOfNums = function (str) {
  const arr = str.match(/\d+/g);
  return arr ? arr.reduce((sum, el) => sum + +el, 0) : str;
};
console.log(sumOfNums("FwrtY45KHL120mn10P")); //175
console.log(sumOfNums("abc23vgh2")); //25
console.log(sumOfNums("helloworld")); // helloworld
 */

//7️⃣
//Out of 8 coins, one weighs less than the others. You have a scale. How can you determine which one weighs less in 2 weigh?


// const coins = function (arr) {
//   let diffCoin = arr.find((el) => arr.indexOf(el) === arr.lastIndexOf(el));
//
//   for (const num of arr) {
//     if (diffCoin > num) return ` ${diffCoin} `;
//   }
//   return "ball is lighter";
// };
// console.log(coins([12, 12, 12, 12, 23, 12, 12, 12]));
