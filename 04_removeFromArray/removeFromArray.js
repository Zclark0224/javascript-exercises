const removeFromArray = function(array, removed, removed2) {
    let args = Array.prototype.slice.call(arguments);
    
    array = array.filter(val => !args.includes(val));
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
