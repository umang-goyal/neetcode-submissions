class Solution {
    /**
     * Check if a character is alphanumeric
     * @param {char} char
     * @return {boolean}
     */
    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const filteredStr = s.split('').filter((elem) => {
            return this.isAlphanumeric(elem);
        }).join('')
        const mid = Math.ceil(s.length/2);
        let valid = true;
        for (let i = 0; i < mid; i++) {
            const j = filteredStr.length - i - 1;
            const isSame = filteredStr.charAt(i).toLowerCase() === filteredStr.charAt(j).toLowerCase();
            valid = valid && isSame;
            if (j - i <= 1) {
                return valid
            }
        }
    }
}
