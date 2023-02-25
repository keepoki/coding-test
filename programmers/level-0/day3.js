/**
 * 1. 나머지 구하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120810
 * 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를
 * return 하도록 solution 함수를 완성해주세요.
 */
function solution(num1, num2) {
  return num1 % num2;
}

// ------------------------------------------------------------------------

/**
 * 2. 중앙값 구하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120811
 * 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때
 * 가장 중앙에 위치하는 값을 의미합니다.
 * 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다.
 * 정수 배열 array가 매개변수로 주어질 때, 중앙값을
 * return 하도록 solution 함수를 완성해보세요.
 */
function solution(array) {
  // 오름차순 정렬
  array.sort((a, b) => a - b);

  // 배열의 가운데 인덱스를 찾음
  const index = parseInt(array.length / 2, 10);

  return array[index];
}

// ------------------------------------------------------------------------

/**
 * 3. 최빈값 구하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120812
 * 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
 * 정수 배열 array가 매개변수로 주어질 때, 최빈값을
 * return 하도록 solution 함수를 완성해보세요.
 * 최빈값이 여러 개면 -1을 return 합니다.
 * 예) [1, 2, 3, 3, 3, 4]	=> 3, [1, 1, 2, 2] => -1, [1] => 1,
 * [1, 5, 10, 10] => 10
 */
function solution(array) {
  let answer = 0;
  const obj = {};

  // 배열을 순회하여 요소의 값에 대하여 가산
  array.forEach(value => {
    // obj[value]가 있으면 1을 더해주고 없으면 1을 대입
    obj[value] = ++obj[value] || 1;
  });

  // 가장 큰 빈도 값 그리고 같은 값이 있는지 확인
  let max = -1;
  for (const key in obj) {
    const value = obj[key];

    if (max < value) {
      // 가장 큰 빈도 값 교체 및 결과를 대입
      max = value;
      answer = key;
    } else if (max === value) {
      // 가장 큰 빈도 값이 여러 개인 경우 -1를 결과에 대입
      answer = -1;
    }
  }

  return parseInt(answer, 10);
}

// ------------------------------------------------------------------------

/**
 * 4. 짝수는 싫어요
 * https://school.programmers.co.kr/learn/courses/30/lessons/120813
 * 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을
 * return하도록 solution 함수를 완성해주세요.
 */
function solution(n) {
  const answer = [];
  for (let i = 1; i <= n; ++i) {
    if (i % 2 === 1) {
      answer.push(i);
    }
  }
  return answer;
}
