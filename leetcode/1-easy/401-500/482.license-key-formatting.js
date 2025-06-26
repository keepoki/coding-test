/*
 * @lc app=leetcode id=482 lang=javascript
 *
 * [482] License Key Formatting
 */

// @lc code=start
/**
 * 1. 문자열을 대문자로 변환한다.
 * 2. k 개수만큼 그룹으로 묶어야 한다.
 * 3. 그룹에 대한 구분자로 '-'를 사용한다.
 * 4. 첫 번째 그룹에는 k 개수보다 적을 수 있다.
 * 5. 따라서 뒤 그룹부터 묶어야한다.
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const licenseKeyFormatting = (s, k) => {
  // 대문자로 변환
  const upperStr = s.toUpperCase();
  
  let result = '';
  let parts = '';
  for (let i = upperStr.length - 1; 0 <= i; i--) {
    const char = upperStr[i];
    if (char == '-') continue;

    parts = char + parts;
    if (parts.length >= k) {
      result = '-' + parts + result;
      parts = parts.substring(k); // 앞의 k개의 문자를 버리고 나머지를 parts에 저장
    }
  }

  if (parts) {
    result = parts + result;
  } else {
    result = result.substring(1);
  }

  return result;
};

// @lc code=end

console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4));
console.log(licenseKeyFormatting('2-5g-3-J', 2));
console.log(licenseKeyFormatting('2-4A0r7-4k', 4));
console.log(licenseKeyFormatting('0123456789', 10));


// @lc code=start
/**
 * GPT-4o의 풀이, 처리 속도가 빠르다.
 * start 포인터와 slice를 활용하여 반복 탐색 횟수를 줄인 방법이 좋아보인다.
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const licenseKeyFormatting2 = (s, k) => {
  // 1. 모든 대시 제거, 대문자로 변환
  const clean = s.replace(/-/g, '').toUpperCase();

  // 2. 뒤에서부터 k개씩 잘라 그룹 만들기
  let result = [];
  let i = clean.length;

  while (i > 0) {
    const start = Math.max(i - k, 0);
    result.push(clean.slice(start, i));
    i -= k;
  }

  // 3. 결과를 뒤집어서 '-'로 연결
  return result.reverse().join('-');
};