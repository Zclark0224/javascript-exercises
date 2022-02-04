const palindromes = function (input) {
    var str = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    var reverse = str.split("").reverse().join("");
    return (str == reverse) ? true : false;
 };

// Do not edit below this line
module.exports = palindromes;
