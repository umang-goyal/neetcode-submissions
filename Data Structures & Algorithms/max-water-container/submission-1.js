class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let maxWater = 0;
        while (l < r) {
            const h1 = heights[l]
            const h2 = heights[r]
            const water = Math.min(h1, h2) * (r-l);
            maxWater = Math.max(water, maxWater)
            if (h1 < h2) {
                l++
            }
            if (h2 < h1) {
                r--
            }
            if (h2 === h1) {
                l++
                r--
            }
        }
        return maxWater
    }
}
