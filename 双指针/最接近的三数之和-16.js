/**
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
 * 返回这三个数的和。
 * 假定每组输入只存在恰好一个解。
 */

// 示例 1：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2)
// 示例 2：
// 输入：nums = [0,0,0], target = 1
// 输出：0
// 解释：与 target 最接近的和是 0（0 + 0 + 0 = 0）。

var threeSumClosest = function(nums, target) {
  // 升序排序
  nums = nums.sort((a, b) => a - b);
  let good = null;
  for (let i = 0, len = nums.length; i < len; i++) {
    let cur = nums[i];
    let pb = i + 1, pc = len - 1;
    while (pb < pc) {
      let sum = cur + nums[pb] + nums[pc];
      if (!good || Math.abs(sum - target) < Math.abs(good - target)) {
        good = sum;
      }
      if (sum === target) {
        return sum;
      } else if (sum > target) {
        pc--;
      } else {
        pb++;
      }
    }
  }
  return good;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));

// 时间复杂度分析：
// nums数组排序的时间复杂度是nlongN，for循环里面嵌套了个while循环，while循环中pb最坏的程度是遍历完整个数组，所以时间复杂度是O(n^2)，所以总的时间复杂度是O(nlongN + n^2) = O(n^2)
// 空间复杂度分析：因为cur、pb、pc变量都是常数级别的，这些变量所占用的空间大小都不依赖输入数组的nums的长度N的影响，所以空间复杂度是O(1)

// 以上还有可以优化的点是：没有考虑到重复元素的情况
// 在for循环可以判断i的下一个是否和上一个相同，相同可以直接跳过，while循环中的pb和pc也可以判断下一个是否和上一个相同，相同可以直接跳过

var threeSumClosest = function(nums, target) {
  // 升序排序
  nums = nums.sort((a, b) => a - b);
  let good = null;

  for (let i = 0, len = nums.length; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重 (i > 0是为了防止i - 1越界)
    let cur = nums[i];
    let pb = i + 1, pc = len - 1;
    while (pb < pc) {
      let sum = cur + nums[pb] + nums[pc];
      if (!good || Math.abs(sum - target) < Math.abs(good - target)) {
        good = sum;
      }
      if (sum === target) {
        return sum;
      } else if (sum > target) {
        pc--;
        while (pb < pc && nums[pc] === nums[pc + 1]) pc--; // 去重
      } else {
        pb++;
        while (pb < pc && nums[pb] === nums[pb - 1]) pb++; // 去重
      }
    }
  }
  return good;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));


// 总结，以上优化版本在遇到数组重复元素比较多的时候可能更有效，否则可能因为要多执行判断语句，反而会降低效率