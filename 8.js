/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let number = undefined;
    let sign = undefined;

    for(const c of s){
        if(c === ' ' && (number !== undefined || sign!== undefined)) break;
        if(c === ' ') continue;
        if(c === '-' || c === '+'){
            if(number===undefined && sign === undefined){
                sign = c == '-' ? -1 : 1;
                continue;
            }else {
                break;
            }
        }
       if('0' <=c && c <= '9'){
            number = (number || 0) * 10 + parseInt(c);
        }else {
            break;
        }
    }

    const result = (number || 0) * (sign || 1);

    if(result > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    if(result < -Math.pow(2, 31)) return -Math.pow(2, 31);

    return result;
    
};