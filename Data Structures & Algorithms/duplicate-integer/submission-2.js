class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numSet = new Set();
        const l = Array.isArray(nums) ? nums.length : 0;
        let found = false;
        for (let i = 0; i < l; i++) {
            const num = nums[i];
            if (numSet.has(num)) {
                found = true;
                break;
            } else {
                numSet.add(num)
            }
        }
        return found
    }
}
