// Worst Time O(n), Space O(n)
// Best Time O(n), Space 0(1)
// Average Time O(n), Space(n)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const freq = new Map();
    let max = 0;
    let l = 0, r = 0;

    while(r < s.length){
        const char = s[r];
        
        if(!freq.has(char)){
            max = Math.max(r - l + 1, max);
        }else {
            for(let i = l; i<r; i++ ){
                if(char === s[i]){
                    l=i+1;
                    break;
                }else {
                    freq.delete(s[i]);
                }
            }
        }
        freq.set(char,true);
        r++;
    }

    return max;
};