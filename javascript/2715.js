var cancellable = function (fn, args, t) {
  const cancelFn = function () {
    clearTimeout(id);
  };
  const id = setTimeout(() => {
    fn(...args);
  }, t);

  return cancelFn;
};
