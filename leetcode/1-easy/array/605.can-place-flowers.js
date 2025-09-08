/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 * Tags: array
 */

// @lc code=start
/**
 * ## 문제
 * 긴 꽃밭(flowerbed)이 있고, 일부 구역에는 꽃이 심어져 있고 일부 구역은 비어 있습니다.
 * 단, 꽃은 인접한 구역에 동시에 심을 수 없습니다.
 *
 * 정수 배열 flowerbed가 주어집니다.
 * - flowerbed[i] = 0 → 비어 있는 구역
 * - flowerbed[i] = 1 → 이미 꽃이 심겨 있는 구역
 * 그리고 정수 n이 주어졌을 때, 인접하지 않게 n개의 새로운 꽃을 심을 수 있으면 true,
 * 그렇지 않으면 false를 반환하세요.
 *
 * ## 예시
 * 예제 1
 * 입력: flowerbed = [1,0,0,0,1], n = 1
 * 출력: true
 *
 * 예제 2
 * 입력: flowerbed = [1,0,0,0,1], n = 2
 * 출력: false
 *
 * ## 제약 조건
 * 1. 1 <= flowerbed.length <= 2 * 10^4
 * 2. flowerbed[i]는 0 또는 1
 * 3. flowerbed에는 인접한 두 꽃이 없음 (초기 상태 조건)
 * 4. 0 <= n <= flowerbed.length
 *
 * ## 문제 요약
 * 꽃밭 배열에서 인접하지 않게 새로운 꽃을 n개 심을 수 있는지 확인하고 반환한다.
 *
 * ## 풀이 과정
 * 맨 앞과 맨 뒤에 대한 값을 확인하고 나머지 값은 순회하면서 현재 인덱스와 앞 뒤를
 * 확인하면 되겠다는 생각이 바로 들었다. 그리고 나무를 심었으면 n을 -1해준다.
 * 1. 배열의 길이가 최소인 1일 때에 대한 예외 처리
 * 2. 맨 앞의 인덱스에 대한 예외 처리
 * 3. 두 번째 인덱스부터 시작해서 마지막 이전 인덱스까지 순회하며 앞, 뒤, 현재의 요소
 * 값이 0이라면 현재 요소에 1을 넣어주고 n--하고 1칸 더 건너뛴다.
 * 4. 마지막 인덱스에 대한 예외 처리
 * 5. n이 0이하이면 true, 아니라면 false를 반환
 *
 * ## 풀이 요약
 * 배열의 맨 앞과 맨 뒤 요소에 대한 처리를 따로 하고, 가운데 값들을 순회하면서 꽃을 심어서
 * 요소를 1로 넣고 n을 -1로 줄이고 n이 0이하인지를 리턴한다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 130/130 cases passed (2 ms)
 * Your runtime beats 50.05 % of javascript submissions
 * Your memory usage beats 18.01 % of javascript submissions (57.7 MB)
 *
 * ## 점검
 * 앞 뒤 조건이 많아서 코드가 깔끔하지 않다. 어떻게 하면 조건을 더 단순하게
 * 만들 수 있을까 고민이지만, 시간은 기다려주지 않았다.
 *
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    n--;
  }

  if (flowerbed[0] === 0 && flowerbed[1] === 0) {
    n--;
    flowerbed[0] = 1;
  }

  const length = flowerbed.length;
  for (let i = 1; i < length - 1; i++) {
    if (flowerbed[i-1] === 0 && flowerbed[i] === 0 && flowerbed[i+1] === 0) {
      flowerbed[i] = 1;
      n--;
      i++;
    }
  }

  if (flowerbed[length-2] === 0 && flowerbed[length-1] === 0) {
    n--;
    flowerbed[length-1] = 1;
  }

  return n <= 0;
};
// @lc code=end

console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2)); // true
console.log(canPlaceFlowers([0,1,0], 1)); // false
console.log(canPlaceFlowers([0,0], 2)); // false
console.log(canPlaceFlowers([0,0,1,0,1], 2)); // false
console.log(canPlaceFlowers([0], 1)); // true

/**
 * GPT-5의 풀이, 앞 뒤 요소에 대한 처리가 깔끔하다.
 *
 * ## 풀이 과정
 * 1. 배열을 순회하면서 꽃을 심을 수 있는 위치를 찾습니다.
 *    - 현재 구역이 0이고, 좌우 구역도 0이거나 경계라면 꽃을 심을 수 있습니다.
 * 2. 꽃을 심으면 n을 1 줄이고, 해당 구역을 1로 표시합니다.
 * 3. n이 0 이하가 되면 바로 true 반환.
 * 4. 끝까지 순회해도 n > 0이면 false 반환.
 *
 * ## 풀이 요약
 * 배열을 순회하며 좌우가 비어 있는 구역에 꽃을 심어 n개를 채울 수 있는지 확인하면 된다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 130/130 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 15.12 % of javascript submissions (57.8 MB)
 *
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers2 = (flowerbed, n) => {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1; // 꽃 심기
      n--; // 심은 꽃 수 감소
      if (n === 0) return true; // 다 심었으면 바로 true
    }
  }
  return n <= 0;
};