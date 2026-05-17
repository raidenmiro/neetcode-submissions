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
      const hash = {};

      for (let ch of s) {
        let k = [...ch].sort().join('')

        if (!(k in hash)) {
            hash[k] = [];
        }
        hash[k].push(ch);
      }

      return Object.values(hash)
    }
}
