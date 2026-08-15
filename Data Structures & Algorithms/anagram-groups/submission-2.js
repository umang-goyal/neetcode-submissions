class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const output = [];
        const freq = {}
        for (let i = 0; i < strs.length; i++) {
            const pattern = new Array(26).fill(0);
            (strs[i]).split('').forEach((_, idx) => {
                pattern[(strs[i].charCodeAt(idx) - 'a'.charCodeAt(0))] = pattern[(strs[i].charCodeAt(idx) - 'a'.charCodeAt(0))] + 1
            })

            const patternKey = pattern.join(',');
            if (freq[patternKey]) {
               (freq[patternKey]).push(strs[i])
            } else {
                freq[patternKey] = [strs[i]]
            }
        }
        for (let key in freq) {
            output.push(freq[key])
        }
        return output;
    }
}
