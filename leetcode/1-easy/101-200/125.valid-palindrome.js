/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  // 알파벳과 숫자 필터링을 위한 코드 값 설정
  const aCode = 'a'.charCodeAt(), zCode = 'z'.charCodeAt();
  const zeroCode = '0'.charCodeAt(), nineCode = '9'.charCodeAt();

  let alphaNumber = '';

  // 소문자로 변경하여 알파벳과 숫자만을 문자열에 추가
  for (let i = 0; i < s.length; i++) {
    const lowChar = s[i].toLocaleLowerCase();
    const charCode = lowChar.charCodeAt();

    if ((aCode <= charCode && zCode >= charCode) ||
      (zeroCode <= charCode && nineCode >= charCode)
    ) {
      alphaNumber += lowChar;
    }
  }

  // 빈 문자열이라면 true로 리턴
  if (!alphaNumber) {
    return true;
  }

  const halfLength = Math.ceil(alphaNumber.length / 2);
  let backIndex = alphaNumber.length - 1;
  let result = true;

  // 맨 앞 요소와 맨 뒤의 요소를 마주 보는 방향으로 이동하며 비교
  for (let i = 0; i < halfLength; i++, backIndex--) {
    if (alphaNumber[i] !== alphaNumber[backIndex]) {
      result = false;
      break;
    }
  }

  return result;
};
// @lc code=end

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('aa'));
console.log(isPalindrome(' '));

