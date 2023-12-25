/**
 * 1. n의 배수
 * https://school.programmers.co.kr/learn/courses/30/lessons/181937
 * 정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return
 * n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.
 * 예) 98, 2 => 1
 * 34, 3 => 0
 */
{
  const solution = (num, n) => Number(!(num % n));
  console.log(solution(98, 2)); // 1
  console.log(solution(34, 3)); // 0
  console.log('--------------------------------------------------------');
}

// ------------------------------------------------------------------------
/**
 * 2. 공배수
 * https://school.programmers.co.kr/learn/courses/30/lessons/181936
 * 정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을
 * 아니라면 0을 return하도록 solution 함수를 완성해주세요.
 * 예) 60, 2, 3 => 1
 * 55, 10, 5 => 0
 */
{
  const solution = (number, n, m) =>
    (number % n) + (number % m) === 0 ? 1 : 0;
  console.log(solution(60, 2, 3)); // 1
  console.log(solution(55, 10, 5)); // 0
  console.log('--------------------------------------------------------');
}

// ------------------------------------------------------------------------
/**
 * 3. 홀짝에 따라 다른 값 반환하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181935
 * 양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인
 * 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인
 * 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.
 * 예) 7 => 16
 * 10 => 220
 */
{
  function solution(n) {
    let answer = 0;
    if (n % 2 === 1) {
      for (let i = 1; i <= n; i += 2) {
        answer += i;
      }
    } else {
      for (let i = 2; i <= n; i += 2) {
        answer += i ** 2;
      }
    }
    return answer;
  }
  console.log(solution(7)); // 16
  console.log(solution(10)); // 220
  console.log('--------------------------------------------------------');
}

// ------------------------------------------------------------------------
/**
 * 4. 조건 문자열
 * https://school.programmers.co.kr/learn/courses/30/lessons/181934
 * 문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.
 * 두 수가 n과 m이라면
 * - ">", "=" : n >= m
 * - "<", "=" : n <= m
 * - ">", "!" : n > m
 * - "<", "!" : n < m
 * 두 문자열 ineq와 eq가 주어집니다.
 * ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다.
 * 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에
 * 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.
 * 예) ("<", "=", 20, 50) => 1
 * (">", "!", 41, 78) => 0
 */
{
  function solution(ineq, eq, n, m) {
    const sign = ineq + eq;
    let answer;
    switch (sign) {
        case '>=': answer = n >= m;
            break;
        case '<=': answer = n <= m;
            break;
        case '>!': answer = n > m;
            break;
        case '<!': answer = n < m;
            break;
    }
    return Number(answer);
  }
  console.log(solution('<', '=', 20, 50)); // 1
  console.log(solution('>', '!', 41, 78)); // 0
  console.log(solution('<', '=', 30, 30)); // 1
  console.log('--------------------------------------------------------');
}

// ------------------------------------------------------------------------
/**
 * 5. flag에 따라 다른 값 반환하기
 * 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때,
 * flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.
 * 예) (-4, 7, true) => 3
 * (-4, 7, false) => -11
 */
{
  const solution = (a, b, flag) => flag ? a + b : a - b;
  console.log(solution(-4, 7, true)); // 3
  console.log(solution(-4, 7, false)); // 11
}