var reduce = function (nums, fn, init) {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }
  return init;
};

// Test Case
const nums = [1, 2, 3, 4];
const fn = function sum(accum, curr) {
  return accum + curr * curr;
};
const init = 100;

console.log(reduce(nums, fn, init));
