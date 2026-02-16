/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagrams = strs.reduce((accum, str)=> {
    let key = str.split('').sort().join('');
    if(accum[key]){
        accum[key].push(str);
    }else {
        accum[key] = [str];
    }
    return accum;
}, {});

return Object.values(anagrams);
};