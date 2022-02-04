const fibonacci = function(input) {
    let sequence = [1, 1];
    let indexNumber = Number(input);
    if(indexNumber < 1){
        return "OOPS"
    } else {
        for(let i=1; i <= indexNumber; i++) {
            sequence.push(sequence[i-1] + sequence[i]);
        }
        return sequence[indexNumber - 1];
    }

};

// Do not edit below this line
module.exports = fibonacci;
