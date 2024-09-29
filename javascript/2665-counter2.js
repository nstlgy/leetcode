function createCounter(init) {
  let value = init;
  function increment() {
    return ++value;
  }
  function decrement() {
    return --value;
  }
  function reset() {
    return (value = init);
  }

  const obj = {
    increment,
    decrement,
    reset,
  };
  return obj;
}

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
