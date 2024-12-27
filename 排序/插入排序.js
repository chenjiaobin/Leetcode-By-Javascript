/**
 * 插入排序
 */
// 跟选择排序的区别是，选择排序是每次都把最小的放到前面，插入排序是把当前的放到前面有序的合适位置，也就是需要把当前的值遍历跟前面的有序数组比较

// 时间复杂度：O(n^2)，空间复杂度：O(1)，稳定

function insertSort(arr) {
  for (let i = 1, len = arr.length; i < len; i++) {
    let preIndex = i - 1;
    let curent = arr[i];
    while (preIndex >= 0 && arr[preIndex] > curent) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = curent;
  }
  return arr;
}

console.log(insertSort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0]));

