/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // string.split()字串拆分 如"hello" 拆成"h","e","l","l","o"轉成陣列
    let arr = s.split('').reverse().join('')
    return arr;
};

console.log(reverseString('Book'));

/**
 * @param {number} x
 * @return {number}
 */
var reverseNum = function(x) {
    let isNegative = x < 0 ? -1 : 1;
    // 三元判斷式 https://pclevinblog.pixnet.net/blog/post/314562376-javascript%E4%B8%89%E5%85%83%E9%81%8B%E7%AE%97%E5%BC%8F
    let str = Math.abs(x) + ""; // es5
    // 轉成正數
    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
    // let str = `${x}`; // es6字串模板
    // https://ithelp.ithome.com.tw/articles/10207033
    // string.split()字串拆分 如"hello" 拆成"h","e","l","l","o"轉成陣列
    // 陣列反轉reverse()
    // 陣列組成字串join('')
    // - 0 ,+ strArr轉數字
    // "123" 字串強制轉數字 +"123" 或 "123" -0
    let strArr = str.split('').reverse().join('') - 0;
    let returnInt = strArr * isNegative;
    // 乘上-1負數 乘上正數
    // https://docs.microsoft.com/zh-tw/dotnet/visual-basic/language-reference/data-types/integer-data-type
    if (returnInt < -2147483648 || returnInt > 2147483647) return 0
    return returnInt;
    // console.log(str);
    // console.log(typeof str);
    // console.log(strArr);
    // console.log(typeof strArr);
};
console.log(reverseNum(123));
console.log(reverseNum(-123));
console.log(reverseNum(120));