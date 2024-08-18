/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

/**
 * 입력 문자열 s와 패턴 p가 주어진다. '.' 및 '*'를 지원하는
 * 정규식이 일치하는지 구현해야 한다.
 * '.'는 단일 문자와 일치한다.
 * '*'는 앞의 요소 중 0개 이상과 일치한다.
 *
 * s는 소문자 영문자만 포함한다.
 * p는 소문자 영문자, '.', '*'만 포함된다.
 * '*' 캐릭터의 각 등장마다 보장되며, 일치하는 이전 유효한 캐릭터가 있다.
 *
 * 문제가 이해되지 않아서 다른 사람의 풀이를 확인하고 동작 원리를 분석해보았다.
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  // corner case
  if (s == null || p == null) return false;

  const sLength = s.length;
  const pLength = p.length;

  // M[i][j] s의 첫 번째 i 문자와 p의 첫 번째 j 문자와 일치하는지 여부를 나타냅니다.
  const M = Array.from(Array(sLength + 1), () => Array(pLength + 1).fill(false));

  // 1. M[0][0] = true, 빈 문자열이 빈 패턴과 일치합니다.
  M[0][0] = true;

  // 2. M[0][j]: 빈 문자열('')과 일치하는 패턴은 무엇일까요? 
  // '*' 패턴은 앞 뒤로 겹칠 필요 없으니 #*#*#*#*..., 또는 (#*)*으로 구성됩니다.
  // 패턴의 길이는 짝수여야 하고 짝수 위치의 문자는 '*'이어야 합니다.
  // 홀수 길이의 경우 기본 값은 false 입니다. 따라서 홀수를 생략할 수 있습니다.
  // 즉, j는 2부터 시작하고 j의 간격도 2입니다.
  // 그리고 반복되는 서브 패턴 #* 의 길이가 2개에 불과하다는 것에 주목하여,
  // #*#*#*#*와 일치하는지 확인하기 위해 M[0][j - 2]를 사용할 수 있습니다.
  for (let j = 2; j < pLength + 1; j += 2) {
    if (p.charAt(j - 1) == '*' && M[0][j - 2]) {
      M[0][j] = true;
    }
  }

  // 패턴에서 어떤 문자를 만나는지에 따라 달라집니다.
  // 1. if p.charAt(j) == s.charAt(i), M[i][j] = M[i - 1][j - 1]
  //    ######a(i)
  //    ####a(j)
  // 2. if p.charAt(j) == '.', M[i][j] = M[i - 1][j - 1]
  // 	  #######a(i)
  //    ####.(j)
  // 3. if p.charAt(j) == '*':
  //    1. if p.charAt(j - 1) != '.' && p.charAt(j - 1) != s.charAt(i), 그러면 b*는 비어있는 것으로 계산됩니다. M[i][j] = M[i][j - 2]
  //       #####a(i)
  //       ####b*(j)
  //    2.if p.charAt(j - 1) == '.' || p.charAt(j - 1) == s.charAt(i):
  //       ######a(i)
  //       ####.*(j)
  //
  // 	  	 #####a(i)
  //    	 ###a*(j)
  //      2.1 if p.charAt(j - 1) is counted as empty, then M[i][j] = M[i][j - 2]
  //      2.2 if counted as one, then M[i][j] = M[i - 1][j - 2]
  //      2.3 if counted as multiple, then M[i][j] = M[i - 1][j]

  // 덮어 씌웁니다.
  // M[i][j] = M[i - 1][j - 1]
  // M[i][j] = M[i - 1][j - 1]
  // M[i][j] = M[i][j - 2]
  // M[i][j] = M[i][j - 2]
  // M[i][j] = M[i - 1][j - 2]
  // M[i][j] = M[i - 1][j]
  // Observation: from above, we can see to get M[i][j], we need to know previous elements in M, i.e. we need to compute them first. 
  // which determines i goes from 1 to m - 1, j goes from 1 to n + 1

  for (let i = 1; i < sLength + 1; i++) {
    for (let j = 1; j < pLength + 1; j++) {
      const curS = s.charAt(i - 1);
      const curP = p.charAt(j - 1);
      if (curS == curP || curP == '.') {
        M[i][j] = M[i - 1][j - 1];
      } else if (curP == '*') {
        const preCurP = p.charAt(j - 2);
        if (preCurP != '.' && preCurP != curS) {
          M[i][j] = M[i][j - 2];
        } else {
          M[i][j] = (M[i][j - 2] || M[i - 1][j - 2] || M[i - 1][j]);
        }
      }
    }
  }

  return M[sLength][pLength];
}
// @lc code=end

console.log(isMatch('aab', 'a*a*b'));