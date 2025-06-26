/*
 * @lc app=leetcode id=495 lang=javascript
 *
 * [495] Teemo Attacking
 */

// @lc code=start
/**
 * 입력된 timeSeries 마다 티모가 공격하고 duration초 만큼 중독된다.
 * 중독된 상태에서 이어서 공격하면 이전 중독은 끝나고, 새로운 중독 시간이 시작된다.
 * 공격 당한 애쉬가 중독된 총 시간을 반환해야 한다.
 * 1. 공격 시간은 오름차순으로 되어 있다.
 * 2. 중독시간은 '요소 개수 x 지속 시간 - 겹치는 시간'임을 알 수 있다.
 * 3. 현재 요소와 다음 요소의 값 차이가 duration보다 작으면 겹친다.
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = (timeSeries, duration) => {
  // 초기화 되지 않는 총 중독 시간
  let poisonedTime = timeSeries.length * duration;

  // 겹치는 시간에서 초기화된 시간을 뺀다.
  for (let i = 0; i < timeSeries.length - 1; i++) {
    const currentTime = timeSeries[i];
    const nextTime = timeSeries[i + 1];
    if (nextTime - currentTime < duration) {
      // 실제로 중독된 시간은 nextTime - currentTime
      // 초기화 시간을 빼야하므로 duration - (nextTime - currentTime)
      poisonedTime -= duration - (nextTime - currentTime);
    }
  }
  
  // 총 중독 시간
  return poisonedTime;
};
// @lc code=end

console.log(findPoisonedDuration([1, 4], 2)); // 4
console.log(findPoisonedDuration([1, 2], 2)); // 3
console.log(findPoisonedDuration([1, 2, 3, 4, 5], 5)); // 9

/**
 * Windsurf 자동완성의 풀이, 처리 속도가 조금 더 빠르다.
 * 값을 순회하면서 겹치는 시간과 아닌 것을 판단하여 더해주고 있어서
 * 내가 푼 방법보다 깔끔하다.
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration2 = (timeSeries, duration) => {
  let totalDuration = duration;
  for (let i = 1; i < timeSeries.length; i++) {
    if (timeSeries[i] - timeSeries[i - 1] < duration) {
      totalDuration += timeSeries[i] - timeSeries[i - 1];
    } else {
      totalDuration += duration;
    }
  }

  return totalDuration;
};

/**
 * GPT-4o의 풀이. 위 풀이와 다를 바 없지만 조건식의 차이가 있다.
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration3 = (timeSeries, duration) => {
  let total = 0;

  for (let i = 1; i < timeSeries.length; i++) {
    const diff = timeSeries[i] - timeSeries[i - 1];
    total += Math.min(diff, duration);
  }

  // 마지막 공격은 항상 duration만큼 적용됨
  total += duration;

  return total;
};