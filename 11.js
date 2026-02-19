/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0, r = height.length-1, max = 0;

    while(l<r){
        max = Math.max(max, (r - l) * Math.min(height[r], height[l]))
        if(height[l] > height[r]){
            r--;
        }else {
            l++;
        }
    }
    return max;
};