class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1CharFreq = new Array(26).fill(0);
        for (let char of s1) {
            const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
            s1CharFreq[charCode] = s1CharFreq[charCode] ? s1CharFreq[charCode] + 1 : 1
        }
        let l = 0;
        const s2CharFreq = new Array(26).fill(0)
        for (let r = 0; r < s2.length; r++) {
            const charCode = s2.charCodeAt(r) - 'a'.charCodeAt(0);
            s2CharFreq[charCode] = s2CharFreq[charCode] ? s2CharFreq[charCode] + 1 : 1;
            const windowLen = r-l+1;
            if (windowLen < s1.length) {
                continue;
            } else {
                let isValidSubString = true
                for (let i = 0; i < 26; i++) {
                    isValidSubString = (s1CharFreq[i] === s2CharFreq[i]) && isValidSubString;
                    if (!isValidSubString) {
                        break;
                    }
                }
                if (isValidSubString) {
                    return true;
                } else {
                    const charCode = s2.charCodeAt(l) - 'a'.charCodeAt(0);
                    s2CharFreq[charCode] = s2CharFreq[charCode] - 1;
                    l++
                }
            }
        }
        return false
    }
}
