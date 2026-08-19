class Solution {
    twoSum(numbers, target, startIndex) {
        let i = startIndex;
        let j = numbers.length - 1;
        const pairs = [];
        while (i < j) {
            if (i > startIndex && numbers[i] === numbers[i-1]) {
                i++;
                continue
            }
            if (j < numbers.length - 1 && numbers[j] === numbers[j+1]) {
                j--;
                continue
            }
            const num1 = numbers[i];
            const num2 = numbers[j];
            const sum = num1 + num2;
            if (sum === target) {
                pairs.push([num1,num2])
                i++
                j--
            }
            if (sum < target) {
                i++
            }
            if (sum > target) {
                j--
            }
        }
        return pairs;
    }
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = []
        const sortedNums = [...nums].sort((a, b) => (a-b))
        for (let i = 0; i < sortedNums.length; i++) {
            const num = sortedNums[i];
            if (i > 0 && num === sortedNums[i-1]) {
                continue;
            }
            const target = 0 - num;
            const pairs = this.twoSum(sortedNums, target, i+1);
            pairs.forEach((pair) => {
                if (pair !== null) {
                    res.push([num, ...pair])
                }
            })
        }
        return res;
    }
}
