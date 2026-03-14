/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if(strs.length === 1){
        return strs[0];
    }

    strs.sort();
    
    const first = strs[0];
    const last = strs[strs.length - 1]

    if(first.length === 0) return first;
    

    let currentIndex = 0;
    while(currentIndex < first.length && first[currentIndex] === last[currentIndex]){
        currentIndex++;
    }
    

    return first.substring(0, currentIndex);

};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["flower","flower","flower", "flower"]))
console.log(longestCommonPrefix(["",""]))