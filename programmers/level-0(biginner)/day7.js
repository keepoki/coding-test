/**
 * 1. 특정 문자 제거하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120826
 * 문자열 my_string과 문자 letter이 매개변수로 주어집니다.
 * my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
 * 예) my_string, letter => result
 * "abcdef", "f" => "abcde"
 */
function solution(my_string, letter) {
  return my_string.replaceAll(letter, '');
}

// ------------------------------------------------------------------------

/**
 * 2. 각도기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120829
 * 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각,
 * 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1,
 * 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.
 * 예) 70 => 1 // 91 => 3 // 180 => 4
 */
function solution(angle) {
  let answer = 0;

  if (angle < 90) {
    // 예각
    answer = 1;
  } else if (angle === 90) {
    // 직각
    answer = 2;
  } else if (angle < 180) {
    // 둔각
    answer = 3;
  } else {
    // 평각
    answer = 4;
  }

  return answer;
}

// ------------------------------------------------------------------------

/**
 * 3. 양꼬치
 * https://school.programmers.co.kr/learn/courses/30/lessons/120830
 * 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다.
 * 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로
 * 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지
 * return 하도록 solution 함수를 완성해보세요.
 * 예) n, k => result
 * 10, 3 => 124000
 * 64, 6 => 768000
 */
function solution(n, k) {
  const lambSkewersPrice = 12000;
  const drinkPrice = 2000;
  return (
    n * lambSkewersPrice + k * drinkPrice - parseInt(n / 10, 10) * drinkPrice
  );
}

// ------------------------------------------------------------------------

/**
 * 4. 짝수의 합
 * https://school.programmers.co.kr/learn/courses/30/lessons/120831
 * 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록
 * solution 함수를 작성해주세요.
 * 예) 10 => 30 // 4 => 6
 */
function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i += 2) {
    answer += i;
  }

  return answer;
}
