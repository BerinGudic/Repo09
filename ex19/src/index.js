function myDoWhile() {
    var myNumber = "";
    var i = 0;
    var comma = ", ";
    do {
        comma = i === 9 ? "" : ", ";
        myNumber += i + comma;
        i++;
        
    } while (i < 10);
    return myNumber;
}

console.log(myDoWhile());
module.exports = myDoWhile;