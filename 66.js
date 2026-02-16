/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let one = 1;
    let i = 0;
    digits.reverse();

    while(one){
         if(i === digits.length){
            digits.push(1);
            break;
        }
        if(digits[i] === 9){
            digits[i] = 0;
            one = 1;
        }else {
            digits[i]++;
            one = 0;
        }
        i++;
    }

    digits.reverse();
    return digits;
};