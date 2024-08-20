/**
 * 88. 合并两个有序数组
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 * 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
*/

/**
 * 我的题解（双指针）
 * 思路：双指针，从前往后遍历
 * 时间复杂度：O(m+n)
 * 空间复杂度：O(1)
*/
var merge1 = function (nums1, m, nums2, n) {
	// 删除末尾的0
  nums1.splice(m);
  nums2.splice(n);
  let i = 0,
    j = 0;
  while (i < nums1.length && j < nums2.length) {
		// 如果num1比较小，只需要往后移动指针就行
    if (nums1[i] <= nums2[j]) {
      i++;
		} else {
			// 如果num1比较大，那么要把num2当前的值插入到num1当前的位置
      // 同时num1和num2指针也需要往后移动
      nums1.splice(i, 0, nums2[j]);
      j++;
      i++;
    }
	}
	// 如果num2还有剩余，那么直接把剩余的num2插入到num1的末尾
  // 因为num1和num2都是有序的，所以直接插入到末尾即可
  nums1.splice(i, 0, ...nums2.slice(j));
  return nums1;
};


/**
 * 官方题解（逆双指针）
 * 思路：双指针，从后往前遍历
 * 时间复杂度：O(m+n)
 * 空间复杂度：O(1)
*/
var merge2 = function (nums1, m, nums2, n) {
  let p1 = m - 1,
		p2 = n - 1;
	// 因为nums1最终的长度是m+n（由题目可知），利用这点，从后往前遍历
  let tail = m + n - 1;
  var cur;
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      cur = nums2[p2--];
    } else if (p2 === -1) {
      cur = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1--];
    } else {
      cur = nums2[p2--];
    }
    nums1[tail--] = cur;
	}
	return nums1;
};

/**
 * 测试用例
 */
var nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
console.log(merge1(nums1, m, nums2, n));
console.log(merge2(nums1, m, nums2, n));

