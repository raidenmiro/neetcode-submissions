class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash = {}

        for idx, n in enumerate(nums):
            r = target - n

            if r in hash:
                return [hash[r], idx]
            else:
                hash[n] = idx
        
        return [-1, -1]