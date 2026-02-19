/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    // const numLength = Math.floor(Math.log10(x, 10) + 1);

    // for(let i = 0; i < Math.floor(numLength / 2); i++){
    //     const l = Math.floor(x / Math.pow(10, numLength-i-1))%10;
    //     const r = Math.floor(x / Math.pow(10, i))% 10;
    //     if(l!==r) return false;
    // }

    // return true;

    const original = x;

    let reversed = 0;

    while(x >0){
        reversed = reversed * 10 + x%10;
        x = Math.floor(x / 10);
    }

    return original===reversed;

};