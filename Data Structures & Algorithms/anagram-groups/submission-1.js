class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     * 
     * 1. ["act","pots","tops","cat","stop","hat"]
     * 2. ["act","cat","hat", "pots","tops", "stop"]
     * 3. 
     */
    groupAnagrams(s) {
      if (s.length === 0) return []

      let hash = {};

      for (let ch of s) {
        let k = ch.split('').sort((a, b) => b.localeCompare(a)).join('')

        if (!(k in hash)) {
            hash[k] = [];
        }

        hash[k].push(ch);
      }

      return Object.values(hash)
    }
}
