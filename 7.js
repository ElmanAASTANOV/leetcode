/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = x < 0 ? -1 : 1;
    let number = 0;
    x = x * sign;
    while(x){
        number = number * 10 + parseInt(x % 10);
        x = parseInt(x / 10)
    }

    if(number > 2**31) return 0;

    return number * sign;
};