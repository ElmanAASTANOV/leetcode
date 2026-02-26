/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let output = '';
    const romans = [
        {
            roman: 'M',
            value: 1000
        },
        {
            roman: 'CM',
            value: 900
        },
        {
            roman: 'D',
            value: 500
        },
        {
            roman: 'CD',
            value: 400
        },
        {
            roman: 'C',
            value: 100
        },
        {
            roman: 'XC',
            value: 90
        },
        {
            roman: 'L',
            value: 50
        },
        {
            roman: 'XL',
            value: 40
        },
        {
            roman: 'X',
            value: 10
        },
        {
            roman: 'IX',
            value: 9
        },
        {
            roman: 'V',
            value: 5
        },
        {
            roman: 'IV',
            value: 4
        },
        {
            roman: 'I',
            value: 1
        },

    ]

    for(const roman of romans) {
        let count = Math.floor(s / roman.value);
        if(count > 0){
            while(count-- > 0) output+=roman.roman;
            s%=roman.value;
        }
    }

    return output;
};

console.log(romanToInt(3749));
console.log(romanToInt(58));
console.log(romanToInt(1994));