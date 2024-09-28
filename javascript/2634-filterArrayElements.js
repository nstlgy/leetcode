// An array with numbers only
const arr = [1, 2, 3];

// A filtering function
function fn(n) {
  return i === 0;
}

//returns a filtered array
function filter(arr, fn) {
  const filtered = [];
  arr.map((item) => {
    if (fn(item)) {
      return item;
    }
  });
}

filter(arr, fn);
