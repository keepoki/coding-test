/**
 * 1. 피자 나눠 먹기(1)
 * https://school.programmers.co.kr/learn/courses/30/lessons/120814
 * 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을
 * 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해
 * 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.
 * 예) 7 =>	1, 1 => 1, 15 => 3
 */
function solution(n) {
  let answer = 1;
  while (n > 7) {
    n -= 7;
    answer++;
  }
  return answer;
}

/**
 * 2. 피자 나눠 먹기(2)
 * https://school.programmers.co.kr/learn/courses/30/lessons/120815
 * 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을
 * 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고
 * 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를
 * return 하도록 solution 함수를 완성해보세요.
 * 예) 6 => 1, 10 => 5, 4 => 2
 */
function solution(n) {
  const pieces = 6;
  // 피자 조각의 개수 6과 나눠 먹을 사람의 수 n의 최소 공배수를 구하고
  // 6으로 나누면 몇 판을 시켜야하는지 나온다.
  return getLCM(n, pieces) / pieces;
}

const getGCD = (a, b) => (b ? getGCD(b, a % b) : a);
const getLCM = (a, b) => (a * b) / getGCD(a, b);

/**
 * 3. 피자 나눠 먹기(3)
 * https://school.programmers.co.kr/learn/courses/30/lessons/120816
 * 머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다.
 * 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때,
 * n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야
 * 하는지를 return 하도록 solution 함수를 완성해보세요.
 * 예) slice  n   result,
 *     7      10  2
 *     4      12  3
 */
function solution(slice, n) {
  // Math.ceil() 메서드는 소수점을 올림하여 정수로 반환한다.
  return Math.ceil(n / slice);
}

/**
 * 4. 배열의 평균값
 * 정수 배열 numbers가 매개변수로 주어집니다.
 * numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
 * 예) [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]==> 94.0
 */
function solution(numbers) {
  // 모든 원소의 값을 더하고 원소의 개수만큼 나누어지면 평균이 구해진다.
  return numbers.reduce((acc, val) => acc + val) / numbers.length;
}
