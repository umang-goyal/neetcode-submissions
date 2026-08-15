class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0;
        let j = nums.length ? nums.length-1 : -1;
        const sortedNums = nums.map((num, i) => {
            return [num, i]
        });
        console.log(sortedNums)
        sortedNums.sort((a, b) => a[0] - b[0]);
        while (i < j) {
            const a = sortedNums[i][0];
            const b = sortedNums[j][0];
            const sum = a+b;
            if (sum === target) {
                return [sortedNums[i][1], sortedNums[j][1]]
            }
            if (sum < target) {
                i++
            }
            if (sum > target) {
                j--
            }
        }
        return 
    }
}
