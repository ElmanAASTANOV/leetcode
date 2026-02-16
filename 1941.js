/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const freqMap = new Map();

    for(const c of s) {
        const key = c;
        let freq = freqMap.get(key)
        freqMap.set(key, (freq || 0)+1)
    }
    
    
    const firstCharFreq = freqMap.get(s[0]);
    for(const freq of freqMap.values()){
        if(freq !== firstCharFreq) return false;
    }
    return true;
}

const input = 'tveixwaeoezcf'
const input1 = 'abcdd';

console.log(areOccurrencesEqual(input));
console.log(areOccurrencesEqual(input1));


/*
Input: s = "abacbc"
Output: true
*/