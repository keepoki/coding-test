/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 * Tags: string | stack
 */

// @lc code=start
/**
 * ## 문제
 * 괄호로 이루어진 문자열 s가 유효한지 판단하세요. 문자열 s는 오직
 * '(', ')', '{', '}', '[', ']' 문자들로만 구성됩니다.
 * 입력 문자열이 유효한 경우는 다음과 같습니다:
 * - 여는 괄호는 같은 종류의 닫는 괄호로 닫혀야 합니다.
 * - 여는 괄호는 올바른 순서로 닫혀야 합니다.
 * - 모든 닫는 괄호는 상응하는 같은 종류의 여는 괄호를 가지고 있어야 합니다.
 *
 * ## 예시
 * 예시 1:
 * 입력: s = "()"
 * 출력: true
 *
 * 예시 2:
 * 입력: s = "()[]{}"
 * 출력: true
 *
 * 예시 3:
 * 입력: s = "(]"
 * 출력: false
 *
 * 예시 4:
 * 입력: s = "([])"
 * 출력: true
 *
 * 예시 5:
 * 입력: s = "([)]"
 * 출력: false
 *
 * ## 제약 조건
 * 1. 1 <= s.length <= 104
 * 2. s는 오직 괄호 문자 '()[]{}'로만 구성됩니다.
 *
 * ## 문제 요약
 * 올바른 순서로 괄호의 쌍이 열리고 닫혀있는지 판단하여 반환한다.
 *
 * ## 풀이 과정
 * Gemini-2.5 Flash에게 스택에 대한 힌트를 얻어서 풀었다.
 *
 * 1. 문자열을 순회하면서 열린 괄호이면 스택에 추가한다.
 * 2. 닫힌 괄호를 만나면 스택이 비어 있는지 확인한다. 비어 있으면 괄호 쌍이 맞지 않으므로
 *    false를 반환한다.
 * 3. 스택에 요소가 있으면 마지막 요소를 내보내고 짝이 맞는지 확인한다. 아니라면 false를
 *    반환한다.
 * 4. 모든 문자열의 순회가 끝날 때 스택이 비어있다면 모든 짝을 찾았으니 true를 반환한다.
 *
 * ## 풀이 요약
 * 스택을 사용하여 여는 괄호는 push하고 닫는 괄호를 만날 때 스택에서 pop한 괄호와
 * 매칭되는지 확인하여 유효한 괄호 문자열인지 판단한다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(n)
 *
 * ## 제출 결과
 * 100/100 cases passed (1 ms)
 * Your runtime beats 85.58 % of javascript submissions
 * Your memory usage beats 51.77 % of javascript submissions (55.8 MB)
 *
 * ## 점검
 * 재미난 실험이 있었다.
 * 기존에 ['(', '{', '['].includes(char) 순서로 하니깐 테스트 결과가 5 ms가 나와버렸다.
 *
 * 괄호의 순서를 바꾸면 처리 속도의 결과가 다르게 나타난다.
 * ['{', '[', '('].includes(char)는 테스트 결과가 최대 1 ms 까지 나타난다.
 * 테스트 케이스에 '{'를 앞 부분에 배치하는 분포도가 높은 것으로 판단된다.
 *
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  // 홀수 길이면 괄호의 짝이 맞지 않는다.
  if (s.length % 2 !== 0) return false;

  const parentheses = {
    '[': ']',
    '{': '}',
    '(': ')',
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (['{', '[', '('].includes(char)) {
      stack.push(char);
    } else if (stack.length < 1) {
      return false;
    } else {
      const last = stack.pop();
      if (char !== parentheses[last]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
// @lc code=end

/**
 * 다른 사람의 풀이 (Pratik)
 * 정말 깔끔하고 처리 속도도 빠른 방식이다.
 *
 * ## 풀이 과정
 * 1. 여는 괄호를 만나면 대응하는 닫는 괄호를 스택에 저장
 * 2. 닫는 괄호를 만나면 스택에서 pop한 값과 현재 문자가 같은지 확인
 *    - 같으면 올바른 매칭
 *    - 다르거나 스택이 비어있으면 false 반환
 * 3. 모든 순회 후 스택이 비어있으면 true
 *
 * ## 풀이 요약
 * 여는 괄호를 만나면 대응하는 닫는 괄호를 스택에 저장하고, 닫는 괄호를 만나면 스택에서
 * pop한 값과 비교하여 매칭을 확인하는 방식
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(n)
 *
 * ## 제출 결과
 * 100/100 cases passed (0 ms)
 * Your runtime beats 100 % of javascript submissions
 * Your memory usage beats 49.3 % of javascript submissions (55.8 MB)
 *
 * ## 점검
 * claude - Sonnet 4가 이 방식이 빠른 이유를 다음과 같이 안내한다.
 * 1. 조건문 최소화:
 *  - 기존: 여는 괄호인지 확인 → 스택에 저장 → 닫는 괄호인지 확인 → 매칭 확인
 *  - 최적화: 여는 괄호면 바로 대응 괄호 저장 → 아니면 바로 매칭 확인
 *
 * 2. 객체 lookup 제거: 매핑 객체나 switch문 없이 직접 값 저장
 *
 * 3. 연산 단순화: stack.pop() !== s[idx] 한 번의 비교로 모든 검증 완료
 *  - 스택이 비어있으면 pop()이 undefined 반환 → 자동으로 false
 *  - 매칭 안 되면 바로 false
 *
 * 4. 분기 최적화: else-if 체인으로 불필요한 조건 검사 최소화
 *
 */
const isValid2 = function (s) {
  // 닫는 괄호를 저장할 스택을 초기화합니다.
  const stack = [];
  // 입력 문자열의 각 문자를 순회합니다.
  for (let idx = 0; idx < s.length; idx++) {
    // 여는 괄호가 있다면, 해당 괄호에 상응하는 닫는 괄호를 스택에 push 합니다.
    if (s[idx] == '{') {
      stack.push('}');
    } else if (s[idx] == '[') {
      stack.push(']');
    } else if (s[idx] == '(') {
      stack.push(')');
    } else if (stack.pop() !== s[idx]) {
      // 닫는 괄호가 발견되면, 스택에서 가장 최근에 저장된 여는 괄호와 일치하는지 확인합니다.
      return false;
    }
  }
  return !stack.length;
};