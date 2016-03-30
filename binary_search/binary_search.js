'use strict';

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function recursiveBinarySearch(input, target) {
  function search(min, max) {
    if (max < min)
      return -1;

    let guess = Math.floor((min + max) / 2);

    if (input[guess] === target)
      return guess;

    if (input[guess] < target)
      min = guess + 1;
    else
      max = guess - 1;

    return search(min, max);
  }

  return search(0, input.length);
}

function loopingBinarySearch(input, target) {
  let min = 0;
  let max = input.length;
  while (min < max) {
    let guess = Math.floor((min + max) / 2);

    if (input[guess] === target) {
      return guess;
    }

    if (input[guess] < target)
      min = guess + 1;
    else
      max = guess - 1;
  }
  return -1;
}

console.time('Recursive binary search');
recursiveBinarySearch(primes, 67);
console.timeEnd('Recursive binary search');

console.time('Looping binary search');
loopingBinarySearch(primes, 73);
console.timeEnd('Looping binary search');
