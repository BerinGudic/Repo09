function inverseWhile() {
    var counter = 5;
    var fiveNumbers = "";
    while(counter >= 0) {
        suffix = counter === 0 ? "" : ",";
        fiveNumbers += counter + suffix;
        counter--;
    }
    return fiveNumbers;
    
}
console.log(inverseWhile());
module.exports = inverseWhile;
