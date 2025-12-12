/*
 * @lc app=leetcode id=661 lang=javascript
 *
 * [661] Image Smoother
 * Tags: array
 */

// @lc code=start
/**
 * ## 문제
 * 이미지 스무더는 3 x 3 크기의 필터로, 각 셀과 주변의 8개 셀(총 9개 셀)의 평균을
 * 내림차순으로 반올림하여 이미지의 각 셀에 적용할 수 있습니다(즉, 파란색 스무더의 9개
 * 셀의 평균). 셀의 주변 셀 중 하나 이상이 없으면 평균 계산에서 고려하지 않습니다
 * (즉, 빨간색 스무더의 4개 셀의 평균).
 * 이미지의 그레이스케일을 나타내는 m x n 정수 행렬 img가 주어질 때, 각 셀에 스무더를
 * 적용한 후의 이미지를 반환하세요.
 *
 * ## 예시
 *
 * ### 예제 1
 * 입력: img = [[1,1,1],[1,0,1],[1,1,1]]
 * 출력: [[0,0,0],[0,0,0],[0,0,0]]
 * 설명:
 * For the points (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
 * For the points (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
 * For the point (1,1): floor(8/9) = floor(0.88888889) = 0
 *
 * ### 예제 2
 * 입력: img = [[100,200,100],[200,50,200],[100,200,100]]
 * 출력: [[137,141,137],[141,138,141],[137,141,137]]
 * 설명:
 * For the points (0,0), (0,2), (2,0), (2,2): floor((100+200+200+50)/4) = floor(137.5) = 137
 * For the points (0,1), (1,0), (1,2), (2,1): floor((200+200+50+200+100+100)/6) = floor(141.666667) = 141
 * For the point (1,1): floor((50+200+200+200+200+100+100+100+100)/9) = floor(138.888889) = 138
 *
 * ## 제약 조건
 * 1. m == img.length
 * 2. n == img[i].length
 * 3. 1 <= m, n <= 200
 * 4. 0 <= img[i][j] <= 255
 *
 * ## 문제 요약
 * 주어진 행렬의 각 셀에 대해 3x3 영역(자신을 포함하여 최대 9개)의 평균을 구하고,
 * 그 평균을 내림한 값으로 새로운 행렬을 만드는 문제이다.
 * 3x3이 되지 않는 셀들은 주변 셀들만 고려한다.
 *
 * ## 풀이 과정
 * 1. 주어진 행렬의 각 셀에 대해 3x3 영역의 평균을 구한다. (주변에 잇는 셀만)
 * 2. 내림한 값으로 새로운 행렬에 추가한다.
 *
 * ## 풀이 요약
 * 각 셀에 대한 3x3 영역의 평균을 구하고 반내림하여 반환한다.
 *
 * ## 시간 복잡도: O(m x n), 공간 복잡도: O (m x n)
 *
 * ## 제출 결과
 * 203/203 cases passed (8 ms)
 * Your runtime beats 79.28 % of javascript submissions
 * Your memory usage beats 66.67 % of javascript submissions (63.4 MB)
 *
 * ## 점검
 * 처음에는 원시적으로 시계방향의 데이터를 조건문으로 확인하면서 더해주었다가 방식을 바꿔서
 * 2중 반복문으로 바꿔서 적용하였다. 처리 속도가 향상되었다. 36ms -> 8ms
 *
 * @param {number[][]} img
 * @return {number[][]}
 */
const imageSmoother = (img) => {
  const columns = img.length;
  const rows = img[0].length;
  const newImg = [];
  
  for (let y = 0; y < columns; y++) {
    newImg[y] = [];
    for (let x = 0; x < rows; x++) {
      let sum = 0;
      let count = 0;

      // 1. 주어진 행렬의 각 셀에 대해 3x3 영역의 평균을 구한다.
      for (let deltaY = -1; deltaY <= 1; deltaY++) {
        for (let deltaX = -1; deltaX <= 1; deltaX++) {
          const newY = y + deltaY;
          const newX = x + deltaX;

          if (newY >= 0 && newY < columns && newX >= 0 && newX < rows) {
            sum += img[newY][newX];
            count++;
          }
        }
      }

      // 2. 내림한 값으로 새로운 행렬에 데이터 추가.
      newImg[y][x] = Math.floor(sum / count);
    }
  }

  return newImg;
};
// @lc code=end

// console.log(
//   imageSmoother([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ])
// );

console.log(
  imageSmoother([
    [100, 200, 100],
    [200, 50, 200],
    [100, 200, 100],
  ])
);
