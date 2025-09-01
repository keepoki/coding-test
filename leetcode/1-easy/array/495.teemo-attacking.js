/*
 * @lc app=leetcode id=495 lang=javascript
 *
 * [495] Teemo Attacking
 * Tags: array
 */

// @lc code=start
/**
 * ## 문제
 * 우리의 영웅 Teemo가 적 Ashe를 독 공격으로 공격하고 있습니다! Teemo가 Ashe를 공격하면
 * Ashe는 정확히 duration 초 동안 독에 걸립니다.
 * 좀 더 정확히 말하면, 초 t에 공격이 이루어지면 Ashe는 [t, t + duration - 1] 구간
 * 동안 독에 걸립니다.
 * 만약 Teemo가 독 효과가 끝나기 전에 다시 공격하면, 독 타이머가 새 공격 시점에서
 * 다시 시작되어 새 공격 후 duration 초 동안 독 상태가 지속됩니다.
 *
 * 당신은 비내림차순으로 정렬된 정수 배열 timeSeries를 받습니다.
 * - timeSeries[i]는 Teemo가 초 timeSeries[i]에 Ashe를 공격함을 의미합니다.
 * - 정수 duration도 주어집니다.
 * 목표: Ashe가 독에 걸린 총 시간을 반환하세요.
 *
 * ## 예시
 * 예시 1:
 * 입력: timeSeries = [1,4], duration = 2
 * 출력: 4
 * 설명:
 * - 초 1: Teemo 공격 → Ashe가 초 1과 2 동안 독에 걸림
 * - 초 4: Teemo 공격 → Ashe가 초 4와 5 동안 독에 걸림
 * 총 독에 걸린 시간: 1, 2, 4, 5 → 4초
 *
 * 예시 2:
 * 입력: timeSeries = [1,2], duration = 2
 * 출력: 3
 * 설명:
 * - 초 1: Teemo 공격 → Ashe가 초 1과 2 동안 독에 걸림
 * - 초 2: Teemo 재공격 → 독 타이머 리셋 → Ashe가 초 2와 3 동안 독에 걸림
 * 총 독에 걸린 시간: 1, 2, 3 → 3초
 *
 * ## 제약 조건
 * 1. 1 <= timeSeries.length <= 10^4
 * 2. 0 <= timeSeries[i], duration <= 10^7
 * 3. timeSeries는 비내림차순으로 정렬되어 있음
 *
 * ## 문제 요약
 * Teemo가 일정 시간 간격으로 공격할 때 Ashe가 독에 걸린 총 시간을 반환해야 한다.
 * 중독 시간이 지나기 전에 또 공격하면 중독 시간이 다시 시작된다.
 *
 * ## 풀이 과정
 * 1. 중독 시간, 이전 공격 시간을 담을 변수에 첫 번째 요소와 중독 시간으로 초기화 한다.
 * 2. 두 번째 요소부터 timesSeries.length 만큼 순회하며 중독 시간을 더해준다.
 * 3. 중독 된 시간 전에 다음 공격이 이어지는지 확인하고 중독 시간에 다음 공격과 이전 공격의
 *    차이 시간을 빼준다.
 * 4. 이전 공격 시간을 갱신한다.
 * 5. 중독 시간을 반환한다.
 *
 * ## 풀이 요약
 * 배열을 순회하며 연속 공격 시 겹치는 시간을 제외하고 중독 시간을 누적하여 최종 총
 * 중독 시간을 계산한다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 40/40 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 48 % of javascript submissions (58.6 MB)
 *
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = (timeSeries, duration) => {
  let poisonTime = duration;
  let prevAttackTime = timeSeries[0];

  for (let i = 1; i < timeSeries.length; i++) {
    poisonTime += duration;
    const attackTime = timeSeries[i];
    const diffTime = attackTime - prevAttackTime;
    
    if (diffTime < duration) {
      poisonTime -= duration - diffTime;
    }

    prevAttackTime = attackTime;
  }

  return poisonTime;
};
// @lc code=end

console.log(findPoisonedDuration([1, 2], 2));
console.log(findPoisonedDuration([1, 2, 3, 4, 5], 5));


/**
 * GPT-5의 풀이
 *
 * 내가 푼 방식보다 깔끔하다.
 *
 * ## 풀이 과정
 * 1. timeSeries를 순회하며 각 공격 시점의 독 지속 시간을 계산합니다.
 * 2. 이전 공격의 독 종료 시간과 겹치는 경우에는 겹치는 시간만 제외하고 더합니다.
 * 3. 마지막 공격의 독 지속 시간도 합산합니다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 40/40 cases passed (1 ms)
 * Your runtime beats 88.8 % of javascript submissions
 * Your memory usage beats 40 % of javascript submissions (58.8 MB)
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration2 = (timeSeries, duration) => {
  let total = 0;

  for (let i = 0; i < timeSeries.length - 1; i++) {
    // 다음 공격 전까지 독 지속 시간 계산
    total += Math.min(duration, timeSeries[i + 1] - timeSeries[i]);
  }

  // 마지막 공격 시간 추가
  total += duration;

  return total;
};