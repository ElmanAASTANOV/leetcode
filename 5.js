/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0, end = 0;

    for(let i = 0; i < s.length; i++){
        // odd
        let l = r = i;
        while(l >= 0 && r<s.length && s[l]===s[r]){
            if(r - l > end - start){
                start = l;
                end = r;
            }
            l--;
            r++;
        }

        // even
        l = i; r = i + 1;
        while(l >= 0 && r<s.length && s[l]===s[r]){
            if(r - l > end - start){
                start = l;
                end = r;
            }
            l--;
            r++;
        }
    }
    return s.substring(start, end+1);
};

// console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))