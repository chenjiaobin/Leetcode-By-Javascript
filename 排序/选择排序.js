/**
 * 选择排序
 */

// 原理：每次遍历数组，找到最小的元素，然后将其放到数组的第一个位置，然后再遍历数组，找到第二小的元素，然后将其放到数组的第二个位置，以此类推。
function selectionSort(arr) { 
  for (let i = 0, len = arr.length; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

console.log(selectionSort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0]));

// 时间复杂度：O(n^2)，空间复杂度：O(1)