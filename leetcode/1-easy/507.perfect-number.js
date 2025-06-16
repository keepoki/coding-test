/*
 * @lc app=leetcode id=507 lang=javascript
 *
 * [507] Perfect Number
 */

// @lc code=start
/**
 * 완전수는 숫자 자체를 제외한 양의 약수의 합과 같은 양의 정수이다.
 * 정수 x의 약수는 x를 균등하게 나눌 수 있는 정수이다.
 * 완전수가 맞는지 틀린지를 반환해야 한다.
 * 문제를 풀기전에 완전수에 대해 조사를 통해 짝수 완전수만 존재한다는 것을 확인하였다.
 * 완전수는 끝의 숫자가 6 또는 28로 끝난다는 것이 증명되었다.
 * 6, 28, 496, 8128, ...
 *
 * 1. 1의 자리가 6 또는 8이 아닌 수는 완전수가 아니다.
 * 2. num의 절반까지만 순회하여 약수를 찾아 더해준다.
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = (num) => {
  if (![6, 8].includes(num % 10)) return false;

  let sum = 0;
  const half = Math.floor(num / 2);
  for (let i = 1; i <= half; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }

  return sum === num;
};
// @lc code=end

// console.log(checkPerfectNumber(28)); // true
// console.log(checkPerfectNumber(7)); // false
// console.log(checkPerfectNumber(6)); // true
// console.log(checkPerfectNumber(496)); // true
// console.log(checkPerfectNumber(8128)); // true

/**
 * GPT-4o의 풀이, 제곱근 만큼만 순회하는 처리속도가 빠른 방법이다.
 * i가 약수이면 num / i도 약수인 것을 잘 활용한 풀이이다.
 *
 * 1. 2부터 √num까지 순회하며 약수를 찾습니다. (1은 항상 포함)
 * 2. i가 약수이면 num / i도 약수이므로 둘 다 더합니다.
 * 3. 중복 방지를 위해 i === num / i이면 한 번만 더합니다 (예: 제곱근이 정수일 때).
 * 4. 약수의 합이 num과 같으면 완전수입니다.
 *
 * num ≤ 10^8일 때 완전수는 단 5개 뿐이라고 한다.
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber2 = (num) => {
if (num <= 1) return false;

  let sum = 1; // 1은 모든 수의 약수이므로 포함
  const sqrt = Math.sqrt(num);

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      sum += i;
      const pair = num / i;
      if (pair !== i) sum += pair; // 제곱근이 아닌 경우만 추가
    }
  }

  return sum === num;
};

console.log(checkPerfectNumber2(28));