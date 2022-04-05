function myForLoop1() {
    var evenNumbers = "";
    var suffix = ", ";
    for (var i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            suffix = i === 8 ? "" : ", ";
            evenNumbers += i + suffix;
        } 
        
    }
    return evenNumbers;

}

function myForLoop2() {
    var evenInverseNumbers = "";
    var suffix = ", ";
    for (var i = 8; i >= 0; i--) {
        if (i % 2 === 0) {
            suffix = i === 0 ? "" : ", ";
            evenInverseNumbers += i + suffix;
        }
    }
    return evenInverseNumbers;

}

console.log(myForLoop1());
console.log(myForLoop2());
module.exports = {
    myForLoop1,
    myForLoop2
};