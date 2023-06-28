/**
 * 1. 문자열 출력하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181952?language=javascript
 * 문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.
 */
{
  const readline = require('readline');
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  let input = [];

  rl.on('line', function (line) {
      input = [line];
  }).on('close',function(){
      str = input[0];
      console.log(str);
  });
}

// ------------------------------------------------------------------------
/**
 * 2. a와 b 출력하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181951
 * 정수 a와 b가 주어집니다. 각 수를 입력받아 입출력 예와 같은 형식으로 출력하는 코드를 작성해 보세요.
 * 예) 4, 5 =>
 * a = 4
 * b = 5
 */
{
  const readline = require('readline');
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  let input = [];

  rl.on('line', function (line) {
      input = line.split(' ');
  }).on('close', function () {
      console.log(`a = ${input[0]}`);
      console.log(`b = ${input[1]}`);
  });
}

// ------------------------------------------------------------------------
/**
 * 3. 문자열 반복해서 출력하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181950
 * 문자열 str과 정수 n이 주어집니다. 
 * str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.
 * 예) string 5 => stringstringstringstringstring
 */
{
  const readline = require('readline');
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  let input = [];

  rl.on('line', function (line) {
      input = line.split(' ');
  }).on('close', function () {
      str = input[0];
      const n = Number(input[1]);
      console.log(str.repeat(n));
  });
}

// ------------------------------------------------------------------------
/**
 * 4. 대소문자 바꿔서 출력하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181949
 * 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 
 * 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
 * 예) aBcDeFg => AbCdEfGL
 */
{
  const readline = require('readline');
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  let input = [];

  rl.on('line', function (line) {
      input = [line];
  }).on('close', function (){
      const str = input[0], A = 65, a = 97;
      const diff = a - A;
      let result = '';
      for (let i = 0; i < str.length; ++i) {
          const code = str[i].charCodeAt();
          if (code >= a) {
              result += String.fromCharCode(code - diff);
          } else {
              result += String.fromCharCode(code + diff);
          }
      }
      console.log(result);
  });


}
// ------------------------------------------------------------------------
/** 
 * 5. 특수문자 출력하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181948
 * 다음과 같이 출력하도록 코드를 작성해주세요.
 * 출력: !@#$%^&*(\'"<>?:;
 */
{
  const readline = require('readline');
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  rl.on('close', function () {
      console.log('!@#$%^&*(\\\'\"<>?:\;');
  });
}