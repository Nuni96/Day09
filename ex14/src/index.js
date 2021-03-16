function myForLoop1() {
  var evenNumbers = "";
  for (var i = 0; i <= 6; ) {
    evenNumbers += i.toString() + ", ";
    i += 2;
  }
  evenNumbers += "8";
  return evenNumbers;
}

function myForLoop2() {
  var evenInverseNumbers = "";
  for (var i = 8; i >= 2; ) {
    evenInverseNumbers += i.toString() + ", ";
    i -= 2;
  }
  evenInverseNumbers += "0";
  return evenInverseNumbers;
}

console.log(myForLoop1());
console.log(myForLoop2());

module.exports = {
  myForLoop1,
  myForLoop2,
};
