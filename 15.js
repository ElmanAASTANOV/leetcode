/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort( (a, b) => a-b); // sort for processing
    const output = [];
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0) break;
        else if(i > 0 && nums[i] === nums[i-1]) continue; // if it is positive number, no need to check rest.

        let l = i+1, r = nums.length - 1;
        while(l < r){
            const sum = nums[i] + nums[l] + nums[r];
            if(sum === 0){
                output.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
                while(l < r && nums[l] === nums[l-1]) l++; // if they same numbers next to next, shift next one.
                while(l < r && nums[r] === nums[r+1]) r--; // same here

            }else if(sum < 0){ // if sum negative shift left
                l++;
            }else { // other wise shift back right
                r--;
            }
        }   
    }

    return output;
};

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0, 0, 0, 0]))
console.log(threeSum([-100,-70,-60,110,120,130,160]))


