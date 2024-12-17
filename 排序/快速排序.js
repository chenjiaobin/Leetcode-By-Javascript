/**
 * 快速排序
 */

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = [], right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);}
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0]));

// 时间复杂度：O(nlogn)，空间复杂度：O(logn)

// 递归树的总深度是logn，而每层需要进行的元素比较等操作的时间复杂度总和大致和  成正比，所以总的时间复杂度是O(nlogn)。
// 需要提供一个栈空间来存储每次遍历的左右区间的索引，所以空间复杂度是O(logn)。

// 优化：如果数组已经有序，那么每次都需要遍历整个数组，时间复杂度就会变成O(n^2)，那么我们可以在取基准值的时候随机取一个值，这样就可以避免这种情况。

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivotIndex = Math.floor(Math.random() * arr.length);
  let pivot = arr[pivotIndex];
  [arr[0], arr[pivotIndex]] = [arr[pivotIndex], arr[0]]; // 将基准值放到数组的第一个位置
  let left = [], right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0]));