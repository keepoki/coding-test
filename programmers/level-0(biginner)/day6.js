/**
 * 1. 문자열 뒤집기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120822
 * 문자열 my_string이 매개변수로 주어집니다.
 * my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
 * 예) "jaron" => "noraj"
 */
function solution(my_string) {
  return my_string.split('').reverse().join('');
}

// ------------------------------------------------------------------------
/**
 * 2. 직각삼각형 출력하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120823
 * "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을
 * 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을
 * 출력하도록 코드를 작성해보세요.
 * 예) 3 =>  *
 *           **
 *           ***
 */
{
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on('line', function (line) {
    input = line.split(' ');
  }).on('close', function () {
    const inputNum = Number(input[0]);
    let result = '';
    for (let i = 1; i <= inputNum; ++i) {
      result = '*'.repeat(i);
      console.log(result);
    }
  });
}

// ------------------------------------------------------------------------
/**
 * 3. 짝수 홀수 개수
 * https://school.programmers.co.kr/learn/courses/30/lessons/120824
 * 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의
 * 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 * 예) [1, 2, 3, 4, 5] => [2, 3] // [1, 3, 5, 7] => [0, 4]
 */
function solution(num_list) {
  const answer = [0, 0];
  num_list.forEach(value => value % 2 === 0 ? answer[0]++ : answer[1]++);
  return answer;
}

// ------------------------------------------------------------------------
/**
 * 4. 문자 반복 출력하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120825
 * 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는
 * 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
 * 예) my_string, n => result
 * "hello", 3 => "hhheeellllllooo"
 */
function solution(my_string, n) {
  return my_string.split('').map(value => value.repeat(n)).join('');
}
