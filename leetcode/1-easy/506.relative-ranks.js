/*
 * @lc app=leetcode id=506 lang=javascript
 *
 * [506] Relative Ranks
 */

// @lc code=start
/**
 * 점수 값을 가진 n개의 배열이 입력 값으로 들어오고, 가장 큰 수 부터 순위를 매겨서
 * 1 ~ 3위 까지는 등급별 메달, 나머지는 그냥 순위를 숫자로 리턴해야하는 문제이다.
 * 1. 점수 배열의 복사본을 만들고 내림차순으로 정렬한다.
 * 2. 정렬된 배열을 순회하여 트리 형식의 데이터에 "숫자": "랭크"로 기록한다.
 * 3. score 배열을 순회하여 트리 형식의 데이터를 활용하여 등급에 대한 배열을 리턴한다.
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = (score) => {
  const ranks = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  const desScore = [...score].sort((a, b) => b - a);
  const obj = {};

  for (let i = 0; i < desScore.length; i++) {
    const ele = desScore[i];
    if (i < 3) {
      obj[ele] = ranks[i];
    } else {
      obj[ele] = `${i + 1}`;
    }
  }

  return score.map((val) => obj[val]);
};
// @lc code=end

console.log(findRelativeRanks([5, 4, 3, 2, 1])); // [ 'Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5' ]
console.log(findRelativeRanks([10, 3, 8, 9, 4])); // 'Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4' ]


// @lc code=start
/**
 * GPT-4o의 풀이, 오브젝트를 사용하지 않아서 공간은 절약되는 것 같은데,
 * 결과를 확인해보니 처리 속도는 다소 느린 편이다.
 * 조건문을 더 많이 확인해서 느린 것으로 판단된다.
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks2 = (score) => {
  const n = score.length;
  
  // 점수와 원래 인덱스를 같이 저장
  const scoreWithIndex = score.map((val, idx) => [val, idx]);
  
  // 점수 기준으로 내림차순 정렬
  scoreWithIndex.sort((a, b) => b[0] - a[0]);
  
  const result = new Array(n);

  for (let i = 0; i < n; i++) {
    const [val, idx] = scoreWithIndex[i];
    if (i === 0) result[idx] = "Gold Medal";
    else if (i === 1) result[idx] = "Silver Medal";
    else if (i === 2) result[idx] = "Bronze Medal";
    else result[idx] = (i + 1).toString();
  }

  return result;
};