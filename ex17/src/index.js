function inverseWhile() {
    var counter = 5;
    var fiveNumbers = "";
    while(counter >= 0) {
        var comma = counter === 0 ? "" : ",";
        fiveNumbers += counter + comma;
        counter--;
    }
    return fiveNumbers;
    
}
console.log(inverseWhile());
module.exports = inverseWhile;
