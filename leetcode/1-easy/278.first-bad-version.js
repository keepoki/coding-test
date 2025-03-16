/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * 제한 시간 초과 문제로 AI의 풀이를 분석
 * AI gpt-4o-mini의 풀이
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        right = mid; // mid가 나쁜 버전이므로 왼쪽 절반에서 검색
      } else {
        left = mid + 1; // mid가 좋은 버전이므로 오른쪽 절반에서 검색
      }
    }
    return left; // left가 첫 번째 나쁜 버전
  };
};
// @lc code=end

/*
  풀이 과정을 분석
  Input: n = 1000, bad = 600

  1. left = 1, right = 1000, mid = 500
  2. isBadVersion(500) => false, left = 501
  3. left = 501, right = 1000, mid = 750
  4. isBadVersion(750) => true, right = 750
  5. left = 501, right = 750, mid = 625
  6. isBadVersion(625) => true, right = 625
  7. left = 501, right = 625, mid = 563
  8. isBadVersion(563) => false, left = 564
  9. left = 564, right = 625, mid = 594
  10. isBadVersion(594) => false, left = 595
  11. left = 595, right = 625, mid = 610
  12. isBadVersion(610) => true, right = 610
  13. left = 595, right = 610, mid = 602
  14. isBadVersion(602) => true, right = 602
  15. left = 595, right = 602, mid = 598
  16. isBadVersion(598) => false, left = 599
  17. left = 599, right = 602, mid = 600
  18. isBadVersion(600) => true, right = 600
  19. left = 599, right = 600, mid = 599
  20. isBadVersion(599) => false, left = 600
  21. return left // 600

*/