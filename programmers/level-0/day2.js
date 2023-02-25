/**
 * 1. 두 수의 나눗셈
 * https://school.programmers.co.kr/learn/courses/30/lessons/120806
 * 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로
 * 나눈 값에 1,000을 곱한 후 정수 부분을
 * return 하도록 soltuion 함수를 완성해주세요.
 */
function solution(num1, num2) {
  return parseInt((num1 / num2) * 1000, 10);
}

// ------------------------------------------------------------------------

/**
 * 2. 숫자 비교하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120807
 * 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을
 * retrun하도록 solution 함수를 완성해주세요.
 */
function solution(num1, num2) {
  return num1 === num2 ? 1 : -1;
}

// ------------------------------------------------------------------------

/**
 * 3. 분수의 덧셈(폴더 참고)
 * https://school.programmers.co.kr/learn/courses/30/lessons/120808
 * 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1,
 * 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다.
 * 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을
 * return 하도록 solution 함수를 완성해보세요.
 *
 * 첫 번째 방법: 두 분모의 곱을 공통분모로 하여 값을 계산한다.
 * 직관적으로는 '소인수분해'로 가능하지만, '유클리드 호제법'을 이용하여 최적화한다.
 * - 최대공약수는 영어로 GCD(Greatest Common Divisor)이다.
 */
function solution(denum1, num1, denum2, num2) {
  // 1. 두 분모의 곱을 공통 분모로 하여 값을 계산한다.
  let numerator = denum1 * num2 + denum2 * num1;
  let denominator = num1 * num2;

  // 2. 분자와 분모의 최대공약수를 구하여 값을 나눈다.
  const getGCD = (a, b) => (b ? getGCD(b, a % b) : a);
  const gcd = getGCD(numerator, denominator);
  numerator /= gcd;
  denominator /= gcd;

  return [numerator, denominator];
}

/**
 * 두 번째 방법: 두 분모의 '최소공배수'를 공통분모로 하여 값을 계산한다.
 * 직관적으로는 '소인수분해'로 가능하지만, '유클리드 호제법'을 이용하여 최적화한다.
 *  - 최소공배수는 영어로 LCM(Least Common Multiple)이다.
 */
function solution(denum1, num1, denum2, num2) {
  // 1. 두 분모의 최소공배수를 공통분모로 하여 값을 계산한다.
  const getGCD = (a, b) => (b ? getGCD(b, a % b) : a);
  const getLCM = (a, b) => (a * b) / getGCD(a, b);
  const lcm = getLCM(num1, num2);

  let numerator = (denum1 * lcm) / num1 + (denum2 * lcm) / num2;
  let denominator = lcm;

  // 2. 분자와 분모의 최대공약수를 구하여 값을 나눈다.
  const gcd = getGCD(numerator, denominator);
  numerator /= gcd;
  denominator /= gcd;

  return [numerator, denominator];
}

// ------------------------------------------------------------------------

/**
 * 4. 배열 두배 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120809
 * 정수 배열 numbers가 매개변수로 주어집니다.
 * numbers의 각 원소에 두배한 원소를 가진 배열을
 * return하도록 solution 함수를 완성해주세요.
 */
function solution(numbers) {
  return numbers.map(value => value * 2);
}
