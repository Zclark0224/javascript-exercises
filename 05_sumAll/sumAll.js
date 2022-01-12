const sumAll = function(start, end) {
if (start < 0 || end < 0) {
    return "ERROR";
} else if (Array.isArray(start) || Array.isArray(end)) {
    return "ERROR";
} else if (typeof start === 'string' || start instanceof String || typeof end === 'string' || end instanceof String){
    return "ERROR"
} else if (start < end) {
    let sum = 0;
    while (start <= end) {
        sum += start;
        start++; 
    }
    return sum;
} else if (end < start) {
    let sum = 0;
    while (end <= start) {
        sum += end;
        end++;
    }
    return sum;
}
};

// Do not edit below this line
module.exports = sumAll;
