var startTime = performance.now();

function filter(arr, fn) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let result = Boolean(fn(arr[i], i));
    if (result) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

var endTime = performance.now();

const arr = [-2, -1, 0, 1, 2];
const fn = function plusOne(n) {
  return n + 1;
};

filter(arr, fn);

console.log(`${endTime - startTime} milliseconds`);
