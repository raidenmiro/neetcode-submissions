class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # [-1,0,1,2,3]
        # [0, ]
        ans = []

        for i in range(len(nums)):
            r, l = i + 1, 0
            s = 1

            while l < i:
                s = s * nums[l]
                l = l + 1

            while r < len(nums):
                s = s * nums[r]
                r = r + 1
            
            ans.append(s)
        
        return ans