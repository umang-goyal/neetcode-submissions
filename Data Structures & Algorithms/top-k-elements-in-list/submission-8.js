class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const l = nums.length;
        const freqMap = {};
        for (let i = 0; i < l; i++) {
            const num = nums[i];
            if (freqMap[num]) {
                freqMap[num] = freqMap[num] + 1
            } else {
                freqMap[num] =  1
            }
        }
        const freqArr = []
        for (let key in freqMap) {
            freqArr.push([parseInt(key), freqMap[key]])
        }
        return freqArr.sort((a, b) => b[1] - a[1]).slice(0, k).map((a) => a[0]);
    }
}
