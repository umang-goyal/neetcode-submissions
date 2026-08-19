class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1;
        while (i < j) {
            const num1 = numbers[i];
            const num2 = numbers[j];
            const sum = num1 + num2;
            if (sum === target) {
                return [i+1,j+1]
            }
            if (sum < target) {
                i++
            }
            if (sum > target) {
                j--
            }
        }
        return [];
    }
}
