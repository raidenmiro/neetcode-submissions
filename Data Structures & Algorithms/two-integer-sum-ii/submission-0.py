class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        l, r = 0, len(nums) - 1

        while l < r:
            left = nums[l]
            right = nums[r]

            s = left + right

            if s > target:
                r = r - 1
            elif s < target:
                l = l + 1
            else:
                return [l + 1, r + 1]
        
        return [-1, -1]