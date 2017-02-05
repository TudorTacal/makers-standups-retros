var generateRandomId = function() {
  return Math.random().toString(16).substring(9)
};

export default generateRandomId;
