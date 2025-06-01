/*
 * @lc app=leetcode id=476 lang=javascript
 *
 * [476] Number Complement
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) => {
  if (num < 2) return 0;

  
  let result = 0;
  let mul = 1;
  const array = [];

  // 2진수로 변환 할 때 0이라면 0, 1이라면 1로 변환
  while(num > 0) {
    array.push(num % 2 == 1 ? 0 : 1);
    num = Math.floor(num / 2);
  }

  for (let i = 0; i < array.length; i++, mul *= 2) {
    if (array[i] == 0) continue;
    const value = array[i];
    result += value * mul;
  }

  return result;
}

// @lc code=end

console.log(findComplement(5));
console.log(findComplement(1));
console.log(findComplement(2));

/**
 * 다른 풀이 방법, 쉽지만 처리 속도는 느린편
 * @param {number} num
 * @return {number}
 */
const findComplement2 = (num) =>
  Number.parseInt(
    num
      .toString(2)
      .split("")
      .map((v) => (v === "0" ? "1" : "0"))
      .join(""),
    2
  );