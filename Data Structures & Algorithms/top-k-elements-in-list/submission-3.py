class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counters = {}

        for n in nums:
            counters[n] = counters.get(n, 0) + 1

        sorted_items = sorted(counters.items(), key=lambda x: x[1], reverse=True)

        ans = []
        for i in range(k):
            ans.append(sorted_items[i][0])

        return ans
        

