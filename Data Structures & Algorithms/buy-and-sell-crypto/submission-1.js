class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const rightMax = new Array(prices.length).fill(0);
        for (let i = prices.length-2; i >= 0; i--) {
            rightMax[i] = Math.max(prices[i+1], rightMax[i+1])
        }
        let maxProfit = 0
        for (let i = 0; i < prices.length; i++) {
            maxProfit = Math.max(rightMax[i] - prices[i], maxProfit)
        }
        return maxProfit;
    }
}
