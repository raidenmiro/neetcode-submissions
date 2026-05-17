class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     * 
     * 1. ["act","pots","tops","cat","stop","hat"]
     * 2. ["act","cat","hat", "pots","tops", "stop"]
     * 3. 
     */
    groupAnagrams(strs) {
      if (strs.length === 0) {
        return [];
      }  

      const anagramMap = new Map();

      for (const word of strs) {
        const key = word.split('').sort((a, b) => b.localeCompare(a)).join('');

        if (!anagramMap.has(key)) {
            anagramMap.set(key, []);
        }

        anagramMap[key] = anagramMap.get(key).push(word);
      }

      return [...anagramMap.values()];
    }
}
