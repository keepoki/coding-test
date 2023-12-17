/**
 * 1. 덧셈식 출력하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181947
 * 두 정수 a, b가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요.
 * a + b = c
 * 예) 4, 5 => 4 + 5 = 9
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
    console.log(
      input[0] +
        ' + ' +
        input[1] +
        ' = ' +
        (Number(input[0]) + Number(input[1])),
    );
  });
}

// ------------------------------------------------------------------------
/**
 * 2. 문자열 붙여서 출력하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181946
 * 두 개의 문자열 str1, str2가 공백으로 구분되어 입력으로 주어집니다.
 * 입출력 예와 같이 str1과 str2을 이어서 출력하는 코드를 작성해 보세요.
 * 예) apple pen => applepen
 * Hello World! => HelloWorld!
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
    console.log(input[0].trim() + input[1].trim());
  });
}

// ------------------------------------------------------------------------
/**
 * 3. 문자열 돌리기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181945
 * 문자열 str이 주어집니다. 문자열을 시계방향으로 90도 돌려서
 * 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.
 * abcde =>
 * a
 * b
 * c
 * d
 * e
 */
{
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on('line', function (line) {
    input = [line];
  }).on('close', function () {
    const str = input[0];
    for (let i = 0; i < str.length; ++i) {
      console.log(str[i]);
    }
  });
}

// ------------------------------------------------------------------------
/**
 * 4. 홀짝 구분하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181944
 * 자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을,
 * 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.
 * 예) 100 => 100 is even
 * 1 => 1 is odd
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
    const n = Number(input[0]);
    const state = n % 2 === 0 ? 'even' : 'odd';
    console.log(`${n} is ${state}`);
  });
}

// ------------------------------------------------------------------------
/**
 * 5. 문자열 겹쳐쓰기
 * 문자열 my_string, overwrite_string과 정수 s가 주어집니다.
 * 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을
 * 문자열 overwrite_string으로 바꾼 문자열을 return 하는
 * solution 함수를 작성해 주세요.
 * my_string와 overwrite_string은 숫자와 알파벳으로 이루어져 있습니다.
 * 예)
 * | my_string        | overwrite_string | s | result           |
 * |------------------|------------------|---|------------------|
 * | "He11oWor1d"     | "lloWorl"        | 2 | "HelloWorld"     |
 * | "Program29b8UYP" | "merS123"        | 7 | "ProgrammerS123" |
 */
{
  function solution(my_string, overwrite_string, s) {
    const answer = my_string.split('');
    for (let i = 0; i < overwrite_string.length; ++i) {
      answer[i + s] = overwrite_string[i];
    }
    return answer.join('');
  }
  
  // 다른 풀이 방법
  // function solution(my_string, overwrite_string, s) {
  //     const bSub = my_string.substring(0, s);
  //     const eSub = my_string.substring(s + overwrite_string.length);
  //     return bSub + overwrite_string + eSub;
  // }
}
