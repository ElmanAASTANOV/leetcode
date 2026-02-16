/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {

    let r = 0, l = 0, counter = p.length, output = [];
    const neededFreqMap = new Array(26).fill(0);
    for(const c of p) neededFreqMap[ c.charCodeAt(0) - 97]++;

    //Rule: the elements' frequency which are not in searched anagram, can be 0 or negative.

    while(r < s.length){
        const cR = s[r].charCodeAt(0) - 97;
        if(neededFreqMap[cR] > 0) counter--;
        neededFreqMap[cR]--;
        r++;
        if(counter === 0) output.push(l);

        if(r - l === p.length){
            const cL = s[l].charCodeAt(0) - 97;
            if(neededFreqMap[cL] >=0) counter++;
            neededFreqMap[cL]++;
            l++;
        }
    }

    return output;

}