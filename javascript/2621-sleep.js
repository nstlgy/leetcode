let x = 4;
function compose(arr) {
  let result;
  const reversed = arr.reverse();
  for (let i = 0; i < reversed.length; i++) {
    x = reversed[i](x);
  }
  console.log(x);
}
compose([(x) => x + 1, (x) => 2 * x]);
