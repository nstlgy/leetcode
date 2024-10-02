var isEmpty = function (obj) {
  if (typeof obj === "object" && obj !== null) {
    if (Array.isArray(obj)) {
      return obj.length === 0;
    } else {
      return Object.keys(obj).length === 0;
    }
  }
  return false;
};

const obj = { x: 5, y: 42 };

const result = isEmpty(obj);
console.log(result);
