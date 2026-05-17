class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * 
     * jar raj
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const map = {};

        for (let ch of s) {
            map[ch] = (map[ch] || 0) + 1;
        }

        for (let ch of t) {
          if (!(ch in map)) {
            return false;
          }

          map[ch] = map[ch] - 1;
        }

        return Object.values(map).every(sc => sc === 0);
    }
}
