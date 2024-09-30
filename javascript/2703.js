var argumentsLength = function (...args) {
  return args.length;
};

const args = [{}, null, "3"];

argumentsLength(args);
