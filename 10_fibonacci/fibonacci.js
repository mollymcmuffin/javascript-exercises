const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    let array = [];
    let i = 3;
    array[0] = 0;
    array[1] = 1;
    for (i = 2; i<= num; i++){
        array[i] = array[i-1] + array[i-2];
    }
    return array[num];

};

// Do not edit below this line
module.exports = fibonacci;
