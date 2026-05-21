class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        # [2,20,4,10,3,4,5]
        # [2,3,3,4,5,10,20]
        # [2,3,4,5,10,20]

        # [2,5,7,8,9]

        if not nums:
            return 0

        uniq_nums = sorted(set(nums))

        curr_count = 1
        ans = curr_count

        for i in range(1, len(uniq_nums)):
            r = uniq_nums[i] - uniq_nums[i - 1]

            if r == 1:
                curr_count = curr_count + 1
            else:
                ans = max(curr_count, ans)
                curr_count = 1

        ans = max(curr_count, ans)

        return ans

