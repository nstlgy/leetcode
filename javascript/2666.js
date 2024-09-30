var once = function (fn) {
  let status = false;
  return function (...args) {
    if (status) {
      return undefined;
    }
    status = true;
    return fn(...args);
  };
};

let fn = (a, b, c) => a + b + c;
let oncefn = once(fn);
oncefn(1, 2, 3);
oncefn(2, 3, 6);
