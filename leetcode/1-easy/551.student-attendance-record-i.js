/*
 * @lc app=leetcode id=551 lang=javascript
 *
 * [551] Student Attendance Record I
 */

// @lc code=start
/**
 * 학생의 출석 기록 문자열 s가 입력 값으로 주어진다.
 * 'A': 결석, 'L': 지각, 'P': 출석
 * 출석 상을 받기 위해서 다음 두 조건을 만족해야 한다.
 * 1. 결석한 날이 총 2일 미만이어야 한다.
 * 2. 지각이 연속해서 3일 이상인 경우가 없어야 한다.
 * 출석상을 받을 자격이 있으면 true, 아니라면 false를 반환한다.
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = (s) => {
  let absent = 0;
  let late = 0;
  for (const char of s) {
    if (char === 'A') {
      absent++;
      late = 0;
    } else if (char === 'L') {
      late++;
    } else {
      late = 0;
    }

    if (absent > 1 || late >= 3) {
      return false;
    }
  }

  return true;
};
// @lc code=end

