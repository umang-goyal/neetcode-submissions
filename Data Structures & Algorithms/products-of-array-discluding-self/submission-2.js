class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const l = nums.length;
        const res = new Array(l).fill(1);
        for (let i = 1; i < l; i++) {
            res[i] = res[i-1] * nums[i-1]
        }
        let postFixProduct = 1;
        for (let i = l-1; i >= 0; i--) {
            res[i] = res[i] * postFixProduct;
            postFixProduct = postFixProduct * nums[i];
        }
        return res
    }
}
