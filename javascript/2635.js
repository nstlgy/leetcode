// was a little bit tricky because, when we pass i inside arr[i], (i), i is actually a string inside an object and not a number.
// So you have to convert it to a number before returning by doing =>  arr[i], Number(i),
function map(arr, fn) {
  const returnedArray = [];
  for (let i = 0; i < arr.length; i++) {
    returnedArray.push(fn(arr[i], Number(i)));
  }
  return returnedArray;
}

const arr = [1, 2, 3];
const fn = function plusone(n) {
  return n + 1;
};
const solution = map(arr, fn); // [2,3,4]

console.log(solution);
