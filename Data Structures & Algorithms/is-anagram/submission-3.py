class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        counters = {}

        for ch in s:
            counters[ch] = counters.get(ch, 0) + 1
        
        for ch in t:
            if ch not in counters:
                return False
            
            counters[ch] = counters[ch] - 1

            if counters[ch] < 0:
                return False
        
        return True