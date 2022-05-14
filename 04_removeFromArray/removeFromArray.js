const removeFromArray = function(array,...num) {
    let result = array.filter(item => !num.includes(item));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
