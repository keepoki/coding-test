/*
 * @lc app=leetcode id=401 lang=javascript
 *
 * [401] Binary Watch
 */

// @lc code=start
/**
 * 뤼튼 AI 풀이의 도움을 받았다.
 * 문제 이해가 안되어서 풀이의 결과를 분석하였다.
 *
 * 분과 시간을 이진수로 변환하고 1의 개수를 세어 turnedOn 개수와 같으면
 * 유효한 시간이므로 해당 시간을 출력 결과에 추가한다.
 * @param {number} turnedOn
 * @return {string[]}
 */
function readBinaryWatch(turnedOn) {
  const result = [];

  // 시간과 분을 이진수로 표현하기 위한 반복문
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      // 시간과 분의 이진수에서 켜진 LED의 개수를 계산
      const count = countBits(h) + countBits(m);
      if (count === turnedOn) {
        // 유효한 시간 형식으로 변환하여 결과에 추가
        result.push(`${h}:${m < 10 ? '0' + m : m}`);
      }
    }
  }

  return result;
}
/**
 * 주어진 숫자의 이진수에서 1의 개수를 세는 함수
 * @param {number} num
 * @returns {number}
 */
function countBits(num) {
  let count = 0;
  while (num > 0) {
    count += num & 1; // 가장 오른쪽 비트가 1인지 확인
    num >>= 1; // 오른쪽으로 비트 이동
  }
  return count;
}
// @lc code=end

console.log(readBinaryWatch(1)); // ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]

