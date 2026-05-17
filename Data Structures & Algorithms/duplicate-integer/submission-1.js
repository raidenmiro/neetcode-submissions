class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();

  let contains = false;

  function iterate(nextNums) {
    if (nextNums.length === 0) {
      return;
    }

    const num = nextNums[0];

    if (set.has(num)) {
      contains = true;
    } else {
      set.add(num);
    }

    iterate(nextNums.slice(1));
  }

  iterate(nums);

  return contains
    }
}
