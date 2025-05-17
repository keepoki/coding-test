/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

// @lc code=start
/**
 * 문자열 자료형인 숫자 2개가 주어지고 이 값을 더해 문자열로 반환해야 한다.
 * 단순히 문자열 자료형을 숫자로 형변환 하게 되면, 표현 가능한 숫자 범위를
 * 초과하여 실패하게 되는 문제이다.
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1, num2) => {
  const sumArr = [];
  let num1Index = num1.length - 1;
  let num2Index = num2.length - 1;

  // 같은 자리수수 값 더하기
  while (num1Index >= 0 || num2Index >= 0) {
    if (num1Index >= 0 && num2Index >= 0) {
      const number1 = Number(num1[num1Index]);
      const number2 = Number(num2[num2Index]);
      sumArr.push(number1 + number2);
    } else {
      if (num1Index >= 0) {
        sumArr.push(Number(num1[num1Index]));
      } else if (num2Index >= 0) {
        sumArr.push(Number(num2[num2Index]));
      }
    }

    num1Index--;
    num2Index--;
  }

  // 올림 수 처리
  for (let i = 0; i < sumArr.length; i++) {
    const num = sumArr[i];
    if (num >= 10) {
      sumArr[i] %= 10;
      if (i + 1 < sumArr.length) {
        sumArr[i + 1]++;
      } else {
        sumArr.push(1);
      }
    }
  }

  // 올바른 숫자 표현을 위해 반전시키고 문자열로 변경하여 리턴한다.
  return sumArr.reverse().join('');
};
// @lc code=end

console.log(addStrings("11", "123")); // 134
console.log(addStrings("456", "77")); // 533
console.log(addStrings("0", "0")); // 0
console.log(addStrings("1", "9")); // 10
console.log(addStrings("6", "501")); // 507

/**
 * 뤼튼 AI의 풀이
 * 올림을 저장하는 변수를 사용하여 로직이 깔끔하다.
 * 그리고 결과에 현재 자리수를 문자열로 앞에 붙여주고 있다.
 * 숫자로 형변환 하는 num1[i] - '0'은 가독성이 좋지 못하다.
 * Number(num1[i])로 바꿔주는 것이 좋다.
 * @param {string} num1
 * @param {string} num2
 * @returns string
 */
function addStrings2(num1, num2) {
  let result = '';
  let carry = 0; // 올림을 저장할 변수
  let i = num1.length - 1; // num1의 마지막 인덱스
  let j = num2.length - 1; // num2의 마지막 인덱스

  // 두 숫자의 모든 자리수를 처리할 때까지 반복
  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? num1[i] - '0' : 0; // num1의 현재 자리수
    const digit2 = j >= 0 ? num2[j] - '0' : 0; // num2의 현재 자리수

    const sum = digit1 + digit2 + carry; // 자리수 더하기
    result = (sum % 10) + result; // 결과에 현재 자리수 추가
    carry = Math.floor(sum / 10); // 다음 자리수로 넘길 값 계산

    i--; // num1의 다음 자리로 이동
    j--; // num2의 다음 자리로 이동
  }

  return result; // 최종 결과 반환
}

console.log(addStrings2("11", "123")); // 134
console.log(addStrings2("456", "77")); // 533
console.log(addStrings2("0", "0")); // 0
console.log(addStrings2("1", "9")); // 10
console.log(addStrings2("6", "501")); // 507