class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const enc = strs.map((s) => {
            const l = s.length;
            return `[${l}]${s}`
        }).join('')
        // console.log(enc);
        return enc
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let l = str.length;
        let count = null;
        const output = []
        while (i < l) {
            let k = i+1;
            let countStr = ''
            while (str[k] !== ']') {
                countStr = `${countStr}${str[k]}`;
                k++
            }
            count = parseInt(countStr);
            let j = k + 1;
            let strLen = j+count-1;
            let s = '';
            while (j <= strLen) {
                s = `${s}${str[j]}`;
                j++
            }
            i = j;
            output.push(s);
        }
        return output;
    }
}
