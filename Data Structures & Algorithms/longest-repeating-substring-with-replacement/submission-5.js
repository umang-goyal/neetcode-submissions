class Solution {

    maxCharFreq(charMap) {
        let currMaxFreqChar = 0
        for (let char in charMap) {
            currMaxFreqChar = Math.max(charMap[char], currMaxFreqChar);
        }
        return currMaxFreqChar
    }
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const charMap = {};
        let l = 0;
        let res = 0;
        for (let r = 0; r < s.length; r++) {
            const rightChar = s[r];
            charMap[rightChar] = (charMap[rightChar] || 0) + 1
            let currMaxFreqChar = this.maxCharFreq(charMap);
            const isValidSubString = ((r-l+1) - currMaxFreqChar ) <= k;
            if (isValidSubString) {
                res = Math.max(res, (r-l+1))
            } else {
                while (l < r) {
                    charMap[s[l]] -= 1;
                    l++;
                    let currMaxFreqChar = this.maxCharFreq(charMap)
                    const isValidSubString = ((r-l+1) - currMaxFreqChar ) <= k;
                    if (isValidSubString) {
                        break;
                    }
                }
            }
        }
        return res
    }
}
