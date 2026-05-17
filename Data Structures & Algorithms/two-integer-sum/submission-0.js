class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};

        for (let i = 0; i < nums.length; i++) {
            const n = target - nums[i];

            if (n in map) {
                return [i, map[n]];
            } else {
                map[nums[i]] = i;
            }
        }

        return [-1, -1];
    }
}
