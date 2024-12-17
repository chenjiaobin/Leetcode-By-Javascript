/**
 * 冒泡排序
 */

function buppleSort(arr) {
  if (arr.length <= 1) return arr;
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(buppleSort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0]));

// 优化：可以有一个标识，如果某一次循环没有发生交换，说明已经排序完成，就可以直接返回了
function buppleSort(arr) {
  if (arr.length <= 1) return arr;
  for (let i = 0, len = arr.length; i < len; i++) {
    let flag = true;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = false;
      }
    }
    if (flag) return arr;
  }
  return arr;
}

console.log(buppleSort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0]));