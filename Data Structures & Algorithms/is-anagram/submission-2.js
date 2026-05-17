class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
          if (s.length !== t.length) {
    return false;
  }

  const charCounter = {};

  for (let ch of s) {
    charCounter[ch] = (charCounter[ch] || 0) + 1;
  }

  for (let ch of t) {
    if (!(ch in charCounter)) {
      return false;
    }

    charCounter[ch] = charCounter[ch] - 1;
  }

  return Object.values(charCounter).every(count => count === 0);
    }
}
