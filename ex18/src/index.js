function myForLoop1() {
    var evenNumbers = "";
    var comma = ", ";
    for (var i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            comma = i === 8 ? "" : ", ";
            evenNumbers += i + comma;
        } 
        
    }
    return evenNumbers;

}

function myForLoop2() {
    var evenInverseNumbers = "";
    var comma = ", ";
    for (var i = 8; i >= 0; i--) {
        if (i % 2 === 0) {
            comma = i === 0 ? "" : ", ";
            evenInverseNumbers += i + comma;
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