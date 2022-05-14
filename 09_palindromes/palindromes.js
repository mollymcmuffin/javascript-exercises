const palindromes = function (string) {
    
    string = string.toLowerCase();
    string = string.replace(/[^a-zA-Z0-9]/g, '');
    string = string.replace(/\s/g, '');

    let length = string.length;
    let count = Math.floor(length/2);
    let check = 0;

    for (let i = 0; i<count; i++){
        if (string[i] !== string[length-1-i]){
            check = 1;
            break;
        }
    }
    if (check === 1) return false;
    else return true;

};

// Do not edit below this line
module.exports = palindromes;
