function myDoWhile() {
  var myNumbers = "";
  var i = 0;
  do {
    myNumbers += i.toString() + ", ";
    i++;
  } while (i <= 8);
  myNumbers += "9";
  return myNumbers;
}

console.log(myDoWhile());
module.exports = myDoWhile;
