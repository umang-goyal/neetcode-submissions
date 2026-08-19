class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const hashSet = new Set();
        for (let i = 0; i < nums.length; i++) {
            hashSet.add(nums[i])
        }
        const startNums = []
        for (let i = 0; i < nums.length; i++) {
            if (!hashSet.has(nums[i] - 1)) {
                startNums.push(nums[i])
            }
        }
        const maxLen = nums.length;
        let seqLen = 0;
        for (let i = 0; i < startNums.length; i++) { 
            const currStartNum =  startNums[i];
            let currSeqLen = 1;         
            for (let j = 1; j <= maxLen; j++) {
                if (hashSet.has(currStartNum+j)) {
                    currSeqLen++
                } else {
                    seqLen = Math.max(seqLen, currSeqLen);
                    break;
                }
            }
        }
        return seqLen
    }
}
