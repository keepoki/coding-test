/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 */

// @lc code=start
/**
 * 문제를 제대로 이해하지 못해서 GPT-4o의 도움을 받았다.
 * 기본적으로 4개의 변이 있다.
 * 상하좌우에 인접한 땅이 있을 때마다 둘레에서 -1씩 줄여야 한다.
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = (grid) => {
  let rows = grid.length;
  let cols = grid[0].length;
  let perimeter = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        perimeter += 4;

        // 상단에 땅이 있으면 둘 다 공유하므로 -2
        if (i > 0 && grid[i - 1][j] === 1) {
          perimeter -= 2;
        }

        // 좌측에 땅이 있으면 둘 다 공유하므로 -2
        if (j > 0 && grid[i][j - 1] === 1) {
          perimeter -= 2;
        }
      }
    }
  }

  return perimeter;
};
// @lc code=end

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])); // 16
console.log(islandPerimeter([[1]])); // 4
console.log(islandPerimeter([[1,0]])); // 4
console.log(islandPerimeter([[1,1]])); // 6


/**
 * GPT-4o의 다른 풀이 방법
 * DFS 방식으로 섬의 둘레 구하기
 * DFS로 각 땅(1) 에서 시작해서 상하좌우로 탐색하며:
 * 밖으로 나가거나, 물(0)을 만나면,
 * 👉 그 방향은 둘레 1이니까 더해주는 방식이다.
 * @param {number[][]} grid
 * @returns {number}
 */
function islandPerimeter2(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  function dfs(i, j) {
    // 범위를 벗어나거나 물이면 둘레 +1
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 0) {
      return 1;
    }

    // 이미 방문한 땅이면 둘레에 영향 없음
    if (visited[i][j]) {
      return 0;
    }

    visited[i][j] = true;

    // 4방향 탐색
    return (
      dfs(i - 1, j) + // 위
      dfs(i + 1, j) + // 아래
      dfs(i, j - 1) + // 왼쪽
      dfs(i, j + 1)   // 오른쪽
    );
  }

  // 섬의 시작점 찾기
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        return dfs(i, j); // 첫 번째 땅에서 DFS 시작
      }
    }
  }

  return 0; // 섬이 없을 경우
}