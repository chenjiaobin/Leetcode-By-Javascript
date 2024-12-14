/**
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
 * 每行的元素从左到右升序排列。
 * 每列的元素从上到下升序排列。
 */

// 输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// 输出：true


/*************** 二分法实现 *******************/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  for (let item of matrix) {
    if (item[0] <= target && item[item.length - 1] >= target) {
      let left = 0, right = item.length - 1;
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (item[mid] === target) {
          return true;
        } else if (item[mid] > target) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
  }
  return false;
};

console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 15))

// 时间复杂度：O(mlogn)
// 空间复杂度：O(1)

/******************* Z字形查找 *******************/
// 因为列和行都是升序，所以我们可以挑出一个点，从这个点出发，往上下左右四个方向查找，并且这个点一个方向是越来越大，另一个方向是越来越小，所以我们可以根据这个点的值和目标值的大小关系，来判断往哪个方向查找。
// 这里我们定义矩阵的右上角为起始点
var searchMatrix = function (matrix, target) {
  let m = matrix.length, n = matrix[0].length;
  let row = 0, column = n - 1;
  while (row < m && column > 0) {
    if (matrix[row][column] === target) {
      return true;
    } else if (matrix[row][column] > target) {
      // 当前点大于目标值，只能往左查找，因为当前列往下只会越来越大
      column--;
    } else {
      row++;
    }
  }
  return false;
}

console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 30))