class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Set();

        for (const i of nums) {
            if (map.has(i)) {
                return true
            } else {
                map.add(i)
            }
        }

        return false;
    }
}
