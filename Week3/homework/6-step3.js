'use strict';

const arr1d = [1, 2, 3, 4];
const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const arr4d = [0, [[[1, 2], 2.5, [3, 4]], [[5, 6], [7, 8]]], [[[9, 10], [11, 12]], [[13, 14], [15, 16]]]];

// add your solution here, or 
//add a comment on how you would tackle this problem

function printAllArr(inputArr) {

  const purifiedArr = [];

  const errorMessage = "there is a non-array element!!";

  if (typeof inputArr === 'object') {
    printInArr(inputArr);
  } else {
    return errorMessage;
  }

  function printInArr(newInputArr) {
    if (typeof newInputArr === 'object') {
      for (let i = 0; i < newInputArr.length; i++) {
        if (typeof newInputArr[i] === "number") {
          purifiedArr.push(newInputArr[i]);
        } else {
          printInArr(newInputArr[i]);
        }
      }
    } else {
      return errorMessage;
    }
  }

  return purifiedArr;
}

console.log(printAllArr(arr4d));