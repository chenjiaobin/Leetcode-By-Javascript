/**
 * 给你一个字符串 s 和一个字符串数组 dictionary ，找出并返回 dictionary 中最长的字符串，
 * 该字符串可以通过删除 s 中的某些字符得到。
 * 如果答案不止一个，返回长度最长且字母序最小的字符串。如果答案不存在，则返回空字符串。
 */

// 示例 1：

// 输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
// 输出："apple"
// 示例 2：

// 输入：s = "abpcplea", dictionary = ["a","b","c"]
// 输出："a"

/**
 * @param {string} s 字符串
 * @param {string[]} dictionary 数组
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  let pointA = 0, pointB = 0;
  let res = '';
  for (let i = 0, len = dictionary.length; i < len; i++) {
    let cur = dictionary[i];
    while (pointB < s.length && pointA < cur.length) {
      if (cur[pointA] === s[pointB]) {
        pointA++;
      }
      pointB++;
    }
    if (pointA === cur.length) {
      // 注意之前匹配的和当前匹配的长度如果一直，要判断字母序号先后顺序
      if (cur.length > res.length || (cur.length === res.length && cur < res))
      res = cur;
    }
    pointA = 0;
    pointB = 0;
  }
  return res;
};

console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]));
console.log(findLongestWord("abpcplea", ["a", "b", "c"]));
console.log(findLongestWord('abce', ['abe', 'abc']))  // 输出 abc(虽然两个都符合条件，但是abc的字母序号比较小)

// 时间复杂度分析
// 外层循环遍历字典：代码中有一个外层循环遍历输入的dictionary数组，循环次数取决于dictionary数组的长度len，其时间复杂度为 ，这里的n表示dictionary数组中元素的个数。
// 内层while循环匹配字符：对于dictionary中的每个单词（也就是外层循环的每次迭代），都会有一个内层的while循环来尝试将当前单词与字符串s进行匹配。在最坏的情况下，内层while循环每次都要遍历完整个字符串s（长度设为m）才能确定当前单词是否匹配成功，所以内层while循环的时间复杂度在最坏情况下是 。
// 综合起来，整体的时间复杂度就是外层循环复杂度与内层循环复杂度的乘积，即 O(n X m)，其中n是dictionary数组的长度，m是字符串s的长度

// 空间复杂度分析
// 使用的额外变量：代码中定义了几个额外的变量，例如pointA、pointB、res等，这些变量无论输入的规模如何变化，它们所占用的空间都是固定的，不会随着输入规模（dictionary数组的长度或者字符串s的长度）的增大而增大，属于常量级别的空间占用。
// 不依赖输入规模的额外空间：由于没有使用额外的数据结构来存储与输入规模相关的数据，除了函数调用栈等必要的少量空间开销外，总的来说，该函数的空间复杂度为 ，也就是常数空间复杂度，表示算法执行过程中额外消耗的空间不随输入规模变化而变化。


