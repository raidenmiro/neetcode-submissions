class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};

        for (let n of nums) {
            map[n] = (map[n] || 0) + 1;
        }

        const list = Object.entries(map)
        const sortedLst = list.sort((a, b) => b[1] - a[1]);
        const ll = sortedLst.flatMap(a => a[0]).map(Number)

        return ll.slice(0, k)
    }
}
