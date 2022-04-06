function myDoWhile() {
    var myNumbers = "";
    var i = 0;
    var comma = ", ";
    do {
        comma = i === 9 ? "" : ", ";
        myNumbers += i + comma;
        i++;
        
    } while (i < 10);
    return myNumbers;
}

console.log(myDoWhile());
module.exports = myDoWhile;