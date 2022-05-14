const sumAll = function(a,b) {

    if (typeof a !== 'number' || typeof b !== 'number'){
        return 'ERROR';
    }

    if (a < 0 || b < 0){
        return 'ERROR';
    }

    

    let result = 0;
    let i = 0;
    if (a < b){
        i = a;
        while (i !== b){
            result = result + i;
            i++;
        }
    }
    else{
        i = b;
        while (i !== a){
            result = result + i;
            i++;
        }
    }

    result = result + i;
    return result;
};

// Do not edit below this line
module.exports = sumAll;
