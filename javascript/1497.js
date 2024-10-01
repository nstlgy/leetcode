var canArrange = function (arr, k) {
  const remainders = new Array(k).fill(0);

  for (let num of arr) {
    let remainder = ((num % k) + k) % k;
    remainders[remainder]++;
  }

  if (remainders[0] % 2 !== 0) return false;

  for (let i = 1; i <= k / 2; i++) {
    if (i === k - i) {
      if (remainders[i] % 2 !== 0) return false;
    } else {
      if (remainders[i] !== remainders[k - i]) return false;
    }
  }

  return true;
};

// const arr = [1, 2, 3, 4, 5, 10, 6, 7, 8, 9];
const arr = [-4, -7, 5, 2, 9, 1, 10, 4, -8, -3];
const k = 3;

const result = canArrange(arr, k);
console.log(result);
