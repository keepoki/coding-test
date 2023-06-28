/**
 * 1. 개미 군단
 * https://school.programmers.co.kr/learn/courses/30/lessons/120837
 * 개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을
 * 데리고 나가려고 합니다. 장군개미는 5의 공격력을, 병정개미는 3의 공격력을
 * 일개미는 1의 공격력을 가지고 있습니다. 예를 들어 체력 23의 여치를 사냥하려고
 * 할 때, 일개미 23마리를 데리고 가도 되지만, 장군개미 네 마리와
 * 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다.
 * 사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의
 * 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를
 * 완성해주세요.
 * 예) 23 => 5 // 24 => 6 // 999 => 201
 */
function solution(hp) {
  const generalAntAttackPower = 5;
  const soldierAntAttackPower = 3;
  const workAntAttackPower = 1;
  let answer = 0;

  answer += parseInt(hp / generalAntAttackPower, 10);
  hp %= generalAntAttackPower;
  answer += parseInt(hp / soldierAntAttackPower, 10);
  hp %= soldierAntAttackPower;
  answer += parseInt(hp / workAntAttackPower, 10);

  return answer;
}

// ------------------------------------------------------------------------
/**
 * 2. 모스부호 (1)
 * https://school.programmers.co.kr/learn/courses/30/lessons/120838
 * 머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다. 그냥은 읽을 수 없어 
 * 이를 해독하는 프로그램을 만들려고 합니다. 문자열 letter가 매개변수로 주어질 때,
 * letter를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
 * 모스부호는 다음과 같습니다.
 * morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z' 
  }
  예) ".... . .-.. .-.. ---" => "hello"
  ".--. -.-- - .... --- -." => "python"
 */
function solution(letter) {
  const morse = {
    '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e',
    '..-.': 'f', '--.': 'g', '....': 'h', '..': 'i', '.---': 'j',
    '-.-': 'k', '.-..': 'l', '--': 'm', '-.': 'n', '---': 'o',
    '.--.': 'p', '--.-': 'q', '.-.': 'r', '...': 's', '-': 't',
    '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x', '-.--': 'y',
    '--..': 'z',
  };

  // 문자열 -> 공백 문자 구분자로 배열로 변환 -> 배열의 value를
  // morse 객체의 키값으로 입력하여 원하는 문자를 찾아서 acc에 붙혀 누적시키고 리턴
  return letter.split(' ').reduce((acc, val) => acc + morse[val], '');
}

// ------------------------------------------------------------------------
/**
 * 3. 가위 바위 보
 * https://school.programmers.co.kr/learn/courses/30/lessons/120839
 * 가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸
 * 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는
 * 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.
 * 예) "2" => "0" // "205" => "052"
 */
// 첫 번째 방법
function solution(rsp) {
  const SCISSORS = '2', ROCK = '0', PAPER = '5';
  // 문자열 -> 배열 -> acc에 이기는 수의 문자를 붙혀나간다. -> acc를 리턴
  return rsp.split('').reduce((acc, val) => {
    switch (val) {
      case SCISSORS:
        acc += ROCK;
        break;
      case ROCK:
        acc += PAPER;
        break;
      default:
        acc += SCISSORS;
    }

    return acc;
  }, '');
}
// 두 번째 방법: 객체의 key에는 가위, 바위, 보를 넣고 
// value에는 이기는 수를 넣는다.
function solution(rsp) {
  // 가위 -> 바위, 바위 -> 보, 보 -> 가위가 되도록 정의
  const define = { 2: '0', 0: '5', 5: '2' };
  // 문자열 -> 배열 -> define을 통한 새로운 배열 -> 문자열
  return rsp.split('').map(value => define[value]).join('');
}

// ------------------------------------------------------------------------
/**
 * 4. 구슬을 나누는 경우의 수
 * https://school.programmers.co.kr/learn/courses/30/lessons/120840
 * 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다.
 * 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이
 * 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한
 * 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
 * 예) balls, share => result
 * 3, 2 => 3
 * 5, 3 => 10
 *
 * 서로 다른 n개 중 m개를 뽑는 경우의 수 공식은 다음과 같습니다.
 *     n!
 * ―――――――――――
 * (n-m)! * m!
 *
 * factorial 값의 데이터 범위가 너무 커서 정확한 정수의 값을 보장하지 못한다.
 * 에를들어 balls = 29, share = 26의 경우
 * getFactorial(balls) / (getFactorial(balls-share) * getFactorial(share))
 * 연산 결과는 3653.9999999999995으로 표현된다.
 *
 * 그래서 Math.round 함수를 사용하여 올바른 정수 값으로 보정하였다.
 * 평균 0.06ms의 성능
 */
// 첫 번째 방법: Math.round 활용
function solution(balls, share) {
  const getFactorial = n => (n ? n * getFactorial(n - 1) : 1);
  return Math.round(
    getFactorial(balls) / (getFactorial(balls - share) * getFactorial(share)),
  );
}
/**
 * 두 번째 방법: BigInt 활용
 * 재귀함수로 하는 경우 스택 오버 플로우가 발생하여 런타임 에러로 인해
 * while문으로 대체하고 BigInt로 데이터 형변환으로 계산해 정확한 값이 나온다.
 * 속도 측면에서는 첫 번째 방법보다 느리다.
 * 평균 0.1ms의 성능
 */
function solution(balls, share) {
  const getFactorial = n => {
    let i = 0, factorial = BigInt(1);
    while (i < n) {
      i++;
      factorial *= BigInt(i);
    }
    return factorial;
  };

  return (
    getFactorial(balls) / (getFactorial(balls - share) * getFactorial(share))
  );
}
