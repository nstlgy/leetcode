var sortBy = function (arr, fn) {
  const sortedArr = arr.sort((a, b) => fn(a) - fn(b));
  return sortedArr;
};

const arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
const fn = (d) => d.x;

sortBy(arr, fn);
