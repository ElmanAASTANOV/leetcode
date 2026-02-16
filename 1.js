
// Worst Time O(n), Space O(n)
// Best Time O(k), Space 0(k-1)
// Average O(n), Space(n)
var twoSum = function(nums, target) {
    const map = new Map();
    const output = [];

    for(let i = 0; i < nums.length; i++){
        const needed = target - nums[i];
        if(map.has(needed)){
            output.push(map.get(needed), i);
            break;
        }
        map.set(nums[i], i);
    }

    return output;
};


var arr = [3,3]
var targert = 6;

console.log(twoSum(arr, targert));