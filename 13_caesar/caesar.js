const caesar = function(string, num) {
    
    for (let i = 0; i < string.length; i++){
        let code = string.charCodeAt(i);
        code = code + num;
        let ch = String.fromCharCode(code);
        string = string.slice(0,i) + ch + string.slice(i+1);
    }
    return string;

};

// Do not edit below this line
module.exports = caesar;
