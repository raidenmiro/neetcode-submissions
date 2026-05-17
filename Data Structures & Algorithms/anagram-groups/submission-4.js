class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
         const anagrams = new Map();

  for (const str of strs) {
    const sumOfChars = getKey(str);

    const prevAnagrams = anagrams.get(sumOfChars) ?? [];
    const anagramGroup = [...prevAnagrams, str]

    anagrams.set(sumOfChars, anagramGroup);
  }

  return Array.from(anagrams.values());
    }
}

function getKey(s) {
  return s.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
}
