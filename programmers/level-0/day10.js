/**
 * 1. 점의 위치 구하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120841
 * 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다.
 * x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
 * x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
 * x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
 * x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
 * x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다.
 * 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를
 * return 하도록 solution 함수를 완성해주세요.
 * 예) [2, 4] => 1 // [-7, 9] => 2
 *
 * 기본적인 방법은 if, else if, else를 이용하면 쉽게 해결할 수 있다.
 * 조금 다르게 삼항 연산자를 이용하여 x 또는 y 중 하나를 기준으로
 * 상함 영산자로 참 그룹과 거짓 그룹을 나누어서 또 비교하는 방식으로 풀었다.
 * x가 양이라고 가정하고 y가 양수인지 음수인지 비교하는 삼항 연산자 그룹과
 * x가 음이라고 가정하고 y가 양수인지 음수인지 비교하는 삼항 연산자 그룹으로
 * 나누어서 판별한다.
 */
function solution(dot) {
  return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;
}

// ------------------------------------------------------------------------

/**
 * 2. 2차원으로 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120842
 * 정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를
 * 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
 * num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로
 * num_list를 2 * 4 배열로 다음과 같이 변경합니다. 2차원으로 바꿀 때에는
 * num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.
 * 예) num_list, n => result
 * [1, 2, 3, 4, 5, 6, 7, 8], 2 => [[1, 2], [3, 4], [5, 6], [7, 8]]
 * [100, 95, 2, 4, 5, 6, 18, 33, 948], 3 => [[100, 95, 2], [4, 5, 6], [18, 33, 948]]
 *
 */
function solution(num_list, n) {
  const answer = [];
  // splice 메서드를 통해 원본 배열에 일부를 떼어 반환하여 length가 줄어든다.
  while (num_list.length) answer.push(num_list.splice(0, n));
  return answer;
}

// 다른 사람의 풀이
function solution(num_list, n) {
  const answer = [];
  for (let i = 0; i < num_list.length / n; ++i) {
    // slice 메서드를 이용하여 원본 배열에는 영향이 가지 않는다.
    answer.push(num_list.slice(i * n, i * n + n));
  }
  return answer;
}

// ------------------------------------------------------------------------

/**
 * 3. 공 던지기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120843
 * 머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 공은 1번부터 던지며
 * 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다.
 * 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때,
 * k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요
 * 예) numbers, k => result
 * [1, 2, 3, 4], 2 => 3 // [1, 2, 3, 4, 5, 6], 5 => 3 // [1, 2, 3], 3 => 2
 */
function solution(numbers, k) {
  let answer = 0,
    length = numbers.length;

  while (--k > 0) {
    answer += 2;
    if (answer > length) {
      answer -= length;
    }
  }

  return numbers[answer];
}

// ------------------------------------------------------------------------

/**
 * 4. 배열 회전시키기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120844
 * 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
 * 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을
 * return하도록 solution 함수를 완성해주세요.
 * 예) numbers, direction => result
 * [1, 2, 3], "right" => [3, 1, 2]
 * [4, 455, 6, 4, -1, 45, 6], "left" => [455, 6, 4, -1, 45, 6, 4]
 */
function solution(numbers, direction) {
  if (direction === 'right') {
    const element = numbers.pop();
    return [element, ...numbers];
  } else {
    const element = numbers.shift();
    return [...numbers, element];
  }
}
