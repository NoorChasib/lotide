const eqArrays = function(leftSide, rightSide) {
  const leftString = JSON.stringify(leftSide);
  const rightString = JSON.stringify(rightSide);

  if (leftString === rightString) {
    console.log('true');
    return true;
  } else if (leftString !== rightString) {
    console.log('false');
    return false;
  }
};

module.exports = eqArrays;
