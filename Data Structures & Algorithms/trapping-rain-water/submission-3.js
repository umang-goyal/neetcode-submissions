class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let r = height.length-1;
        let leftMax = height[l];
        let rightMax = height[r];
        let water = 0
        while (l < r) {
            if (leftMax < rightMax) {
                l++
                const h = height[l]
                leftMax = Math.max(leftMax, h);
                water = water + (leftMax - h);
            } else {
                r--
                const h = height[r]
                rightMax = Math.max(rightMax, h);
                water = water + (rightMax - h);
            }
        }
        return water
    }
}
