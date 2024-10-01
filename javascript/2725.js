var cancellable = function (fn, args, t) {
  fn(...args);
  const cancelFn = function () {
    clearInterval(id);
  };
  const id = setInterval(() => {
    fn(...args);
  }, t);

  return cancelFn;
};

const fn = (x) => x * 2;
const args = [4];
const t = 35;

cancellable(fn, args, t);
