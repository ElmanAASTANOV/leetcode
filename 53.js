var maxSubArray = function(nums) {

    let max = nums[0];   
    let currentSum = max;

    for(let i = 1; i < nums.length; i++){
        currentSum = nums[i] > currentSum ? nums[i] : nums[i] + currentSum;
        max = Math.max(currentSum, max);
    }

    return max;

}

let input = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(input));