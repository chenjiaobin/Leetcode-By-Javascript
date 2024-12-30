/**
 * 归并排序（分治法）
 * 时间复杂度：O(nlogn)，空间复杂度：O(n)，稳定
 */

// 原理：将数组分成两个数组，然后将两个数组分别排序，然后将两个数组合并起来。

function mergeSort(arr) {
  let _sort = function (arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(_sort(left), _sort(right));
  }
  let merge = function (left, right) {
    let result = [];
    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    if (left.length > 0) {
      result.push(...left);
    }
    if (right.length > 0) {
      result.push(...right);
    }
    return result;
  }
  return _sort(arr);
}

console.log(mergeSort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0])); 