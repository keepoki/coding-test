/**
 * 1. 배열 자르기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120833
 * 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
 * numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을
 * return 하도록 solution 함수를 완성해보세요.
 * 예) numbers, num1, num2 => result
 * [1, 2, 3, 4, 5], 1, 3 => [2, 3, 4]
 * [1, 3, 5], 1, 2 => [3, 5]
 */
function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

// ------------------------------------------------------------------------

/**
 * 2. 외계행성의 나이
 * https://school.programmers.co.kr/learn/courses/30/lessons/120834
 * 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게
 * 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는
 * 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다.
 * 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로
 * 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.
 * 예) 23 => "cd" // 51 => "fb" // 100 => "baa"
 */
function solution(age) {
  const charCodeForLowercaseA = 'a'.charCodeAt();
  return age
    .toString()
    .split('')
    .reduce(
      (acc, val) =>
        (acc += String.fromCharCode(charCodeForLowercaseA + parseInt(val, 10))),
      '',
    );
}

// ------------------------------------------------------------------------

/**
 * 3. 진료순서 정하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120835
 * 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고
 * 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로
 * 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
 * 예) [3, 76, 24] => [3, 1, 2]
 * [30, 10, 23, 6, 100] => [2, 4, 3, 5, 1]
 */
function solution(emergency) {
  const priority = [...emergency].sort((a, b) => b - a);
  return emergency.map(value => priority.indexOf(value) + 1);
}

// ------------------------------------------------------------------------

/**
 * 4. 순서쌍의 개수
 * https://school.programmers.co.kr/learn/courses/30/lessons/120836
 * 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로
 * 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수
 * 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.
 * 예) 20 => 6 // 100 => 9
 *
 * 순서쌍의 개수는 약수의 갯수와 같다.
 */
function solution(n) {
  let answer = 0;
  const half = n / 2;
  for (let i = 1; i <= half; ++i) {
    if (n % i === 0) {
      answer++;
    }
  }
  return answer++;
}

/**
 * 더 최적화 된 다른 사람의 풀이, O(√n)의 시간복잡도를 가진다.
 * 참고 자료 1: https://chwan.tistory.com/entry/Java-%EC%95%BD%EC%88%98%EC%9D%98-%EA%B0%9C%EC%88%98-%EA%B5%AC%ED%95%98%EA%B8%B0
 * 참고 자료 2: https://doodle-ns.tistory.com/32
 */
function solution(n) {
  let answer = 0;
  for (let i = 1; i * i <= n; ++i) {
    if (i * i === n) answer++;
    else if (n % i === 0) answer += 2;
  }

  return answer;
}
