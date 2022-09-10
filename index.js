"use strict";

// --- определение на последовательность чисел

function litres(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    // console.log('x: ',i, arr.length - 1)
    if (arr[i] + 1 !== arr[i + 1]) {
      // console.log(arr[i] + 1, arr[i + 1])
      return arr[i + 1];
    }
  }
  return null;
}

// console.log(litres([1, 2, 3, 4, 6, 7, 8])); // 6
// console.log(litres([0,1,2,3,4,5,6,7,8,9])); // null

// --- сумма двух чисел 

function feast(arr, k) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        result.push(arr[i]);
        result.push(arr[j]);
        return result;
      }
    }
  }
  return [];
}

// console.log(feast([-3, 0, 1, 3, 4], (5))); // [1,4]
// console.log(feast([-1, 0, 3, 8], (7))); // [-8,1]

// --- 