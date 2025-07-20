/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 * Tags: array | two-pointers
 */

// @lc code=start
/**
 * ## 문제
 * 정렬된 두 정수 배열 nums1과 nums2, 그리고 nums1과 nums2에 각각 포함된 요소의
 * 개수를 나타내는 정수 m과 n이 주어집니다.
 * nums1과 nums2를 비내림차순으로 정렬된 하나의 배열로 합치세요.
 * 최종적으로 정렬된 배열은 함수에 의해 반환되지 않고, nums1 배열 내부에 저장되어야 합니다.
 * 이를 위해 nums1의 길이는 m + n이며, 처음 m개의 요소는 합쳐야 할 요소를 나타내고,
 * 마지막 n개의 요소는 0으로 설정되어 있으며 무시해야 합니다. nums2의 길이는 n입니다.
 *
 * ## 예시
 * 예시 1:
 * 입력: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 출력: [1,2,2,3,5,6]
 * 설명: 우리가 합칠 배열은 [1,2,3]과 [2,5,6]입니다. 합쳐진 결과는 [1,2,2,3,5,6]이며,
 * 밑줄 친 요소는 nums1에서 온 것입니다.
 *
 * 예시 2:
 * 입력: nums1 = [1], m = 1, nums2 = [], n = 0
 * 출력: [1]
 * 설명: 우리가 합칠 배열은 [1]과 []입니다. 합쳐진 결과는 [1]입니다.
 *
 * 예시 3:
 * 입력: nums1 = [0], m = 0, nums2 = [1], n = 1
 * 출력: [1]
 * 설명: 우리가 합칠 배열은 []과 [1]입니다. 합쳐진 결과는 [1]입니다.
 * 참고: m = 0이므로 nums1에는 요소가 없습니다. 0은 단순히 합쳐진 결과가 nums1에
 * 들어갈 수 있도록 공간을 확보하기 위한 것입니다.
 *
 * ## 제약 조건
 * 1. nums1.length == m + n
 * 2. nums2.length == n
 * 3. 0 <= m, n <= 200
 * 4. 1 <= m + n <= 200
 * 5. -10^9 <= nums1[i], nums2[j] <= 10^9
 *
 * ## 후속 조치
 * 시간 복잡도 O(m + n)으로 동작하는 알고리즘을 제시할 수 있습니까?
 *
 * ## 문제 요약
 * 오름차순으로 정렬된 nums1과 nums2, 각각 포함된 요소의 개수를 나타내는 m, n이 주어진다.
 * nums1에 nums2 배열을 오름차순으로 합친다. num1의 길이는 m + n이다.
 *
 * ## 풀이 과정
 * 후속 조치 시간 복잡도 O(m + n)에 부합하도록 풀이에 도전하였지만, 제한 시간 15분을
 * 초과하여 풀이에 실패하였다. 그래서 그냥 후속 조치를 무시하고 1분도 안되어서 풀었다.
 * 1. nums1의 유효한 숫자의 길이인 m까지 nums2에 추가한다.
 * 2. nums2를 오름차순으로 정렬한다.
 * 3. nums1 요소에 덮어씌운다.
 *
 * ## 풀이 요약
 * nums1 유효한 숫자 요소들을 nums2에 추가하고, nums2를 정렬하여 nums1에 덮어씌운다.
 *
 * ## 시간 복잡도: O((m+n) log (m+n)), 공간 복잡도: O(m + n)
 *
 * ## 제출 결과
 * 59/59 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 95.14 % of javascript submissions (53.4 MB)
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} 아무것도 반환하지 말고 대신 내면에서 nums1을 수정하십시오.
 */
const merge = (nums1, m, nums2, n) => {
  for (let i = 0; i < m; i++) {
    nums2.push(nums1[i]);
  }
  nums2.sort((a, b) => a - b);

  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = nums2[i];
  }

  // return nums1;
};
// @lc code=end

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
// console.log(merge([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5));


/**
 * 시간 복잡도 O(m + n)으로 동작하는 알고리즘을 목표로 풀기 시작하였다.
 * 일부 통과가 되긴 했지만, 완전한 통과는 하지 못했다.
 * 제한 시간 15분을 초과하여 풀이에 실패하였다.
 *
 * ## 실패한 풀이 과정
 * nums1를 탐색할 포인터와 nums2를 탐색할 포인터 두개가 필요해 보인다.
 * 1. 각각 첫번째 인덱스를 기준으로 값의 크기를 비교한다.
 * 2. nums2에 더 작은 값이 있으면 nums1과 데이터를 교환한다.
 * 3. 그리고 nums1의 인덱스를 증가시키면서 탐색을 이어간다.
 *
 * ## 실패한 원인 (Gemini 2.5 Flash)
 * 1. 앞에서부터 병합:
 *    문제로 앞에서부터 데이터를 덮어쓰면 기존의 nums1의 정렬된 요소들이 손상될 수 있다.
 * 2. nums2의 모든 요소 처리 미흡:
 *    첫 번째 for 루프에서 nums2의 p를 증가시키긴 하지만, nums2의 모든 요소가
 *    nums1으로 적절히 이동하지 못할 수 있다.
 * 3. num1의 0이 아닌 유효한 부분만 사용해야 함:
 *    nums1은 처음 m개의 요소만 유효하고, 뒤의 n개는 단순히 공간을 위한 0이다.
 *    이 0들은 합쳐진 배열의 끝에 나타나야 한다.
 */
const _mergeFailed = (nums1, m, nums2, n) => {
  let p = 0;
  const length = m + n;

  for (let i = 0; i < n; i++) {
    const num1 = nums1[i];
    const num2 = nums2[p];

    if (num1 > num2) {
      const temp = num1;
      nums1[i] = nums2[p];
      nums2[p] = temp;
      p++;
    }
  }

  p = 0;
  for (let i = 0; i < m; i++, p++) {
    nums1[i + n] = nums2[p];
  }

  // return nums1;
};

/**
 * 정답을 보기 전에 AI에게 힌트를 요청하고 다시 도전한다.
 * 제미나이가 정답이랑 다를 바 없는 힌트를 주었다. 가즈아~~!!
 *
 * ## 힌트 (Gemini 2.5 Flash)
 * 핵심 힌트는 투 포인터를 활용하여 뒤에서부터 채우기이다.
 * 1. 포인터 세개 구성하기:
 *    p1은 nums1의 인덱스(m - 1), p2는 nums2의 인덱스(n - 1),
 *    pMerged은 nums1의 인덱스(m + n - 1)으로 구성한다.
 * 2. 가장 큰 값부터 채워나가기:
 *    nums1[p1]과 nums2[p2]를 비교한다. 더 큰 값을 pMerged가 가리키는 nums1 위치에
 *    넣는다. 값을 넣은 포인터 (p1 또는 p2와 pMerged를 하나 감소시킨다.
 *    이 과정을 p1과 p2중 하나가 배열의 시작점을 넘어설 때까지 반복한다.
 * 3. nums2에 남은 요소 처리하기:
 *    만약 p1은 다 사용했는데 nums2에 아직 요소가 남아 있다면 (p2 >= 0인 경우),
 *    남은 nums2의 모든 요소는 nums1의 맨 앞에 있는 공간에 그대로 복사되어야 한다.
 *
 * ## 시간 복잡도: O(n + m), 공간 복잡도: O(1)
 *
 * ## 제출 결과:
 * 59/59 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 54.86 % of javascript submissions (54.7 MB)
 */
const merge2 = (nums1, m, nums2, n) => {
  let p1 = m - 1;
  let p2 = n - 1;
  let pMerged = m + n - 1;
  
  // p1과 p2중 하나가 배열의 시작점을 넘어설 때까지 반복
  while (p1 >= 0 && p2 >= 0) {
    // 더 큰 값부터 채워나간다.
    if (nums1[p1] > nums2[p2]) {
      nums1[pMerged] = nums1[p1];
      p1--;
    } else {
      nums1[pMerged] = nums2[p2];
      p2--;
    }

    pMerged--;
  }

  // m이 n보다 짧은 경우 남은 nums2 요소들을 nums1에 데이터를 대입한다.
  while (p2 >= 0) {
    nums1[pMerged] = nums2[p2];
    p2--;
    pMerged--;
  }

  // return nums1;
}

console.log(merge2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge2([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
console.log(merge2([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5));