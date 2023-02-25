/**
 * 1. 주사위의 개수
 * https://school.programmers.co.kr/learn/courses/30/lessons/120845
 * 머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체
 * 모양의 주사위를 최대한 많이 채우고 싶습니다. 상자의 가로, 세로, 높이가
 * 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때,
 * 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.
 * 예) box, n => result
 * [1, 1, 1], 1 => 1
 * [10, 8, 6], 3 => 12
 *
 * 2번째 예시를 기준으로 결과가 12가 되는 공식을 찾아가 보았다.
 * 수학적 지식이 짧아서 그림을 그리기 시작했다.
 * 가로, 세로만 기준으로 최대한 넣을 수 있는 상자의 갯수는 6개였다.
 * 높이 6을 추가하면 한 층을 더 넣을 수 있어서 12개가 된다.
 * 가로만 놓고 보면 10이라는 길이 제한안에 3이라는 길이의 줄을 몇번 그을 수 있는지
 * 생각해보면 10 / 3에 몫인 3이 나온다. 세로, 높이도 각각 해보면 2, 2가 나온다
 * 가로가 10이고 세로가 8인 [10, 8]과 [3, 3]인 상자를 넣을 수 있는 갯수는 3 * 2로 6개다.
 * 여기서 높이를 추가하여 곱해주면 3 * 2 * 2로 넣을 수 있는 상자의 갯수를 구할 수 있다.
 */
function solution(box, n) {
  return parseInt(box[0] / n) * parseInt(box[1] / n) * parseInt(box[2] / n);
}

// ------------------------------------------------------------------------

/**
 * 2. 합성수 찾기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120846
 * 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로
 * 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
 * 예) 10 => 5 // 15 => 8
 *
 * Math.sqrt() 메서드는 제곱근(루트)를 반환하는 함수이다.
 * 매개변수의 수가 음수라면 NaN을 반환한다.
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
 *
 * 간단한 방법으로는 1부터 원하는 숫자까지 모두 순회하면서 소수를 구하는 방법인데,
 * 최적화를 위해 자기 자신으로 나누는 수는 제외하여 count가 2이상을 합성수로 처리한다.
 * 제곱근 만큼의 숫자까지만 순회하도록 하였다.
 * 예를들어 9의 약수를 구해보자. 1, 3, 9, 3개 9는 합성수다.
 * 소수 13의 약수를 구해보자. 1, 13, 2개로 13는 합성수가 아니다.
 * 10의 약수를 구해보자. 1, 2, 5, 10 4개로 10은 합성수다.
 * 10의 제곱근(루트)은 3.1622... 이다. 이 조건으로 보자면 약수는 1, 2, 2개가 구해지고,
 * 자기자신의 숫자인 10은 약수이므로 결국 3개가되어 합성수의 조건에 부합하다.
 * 불필요한 숫자는 확인하지 않는 방법으로 순회하는 횟수를 많이 줄일 수 있다.
 */
function solution(n) {
  let answer = 0,
    count = 0,
    operand = 0;
  for (let i = 1; i <= n; ++i) {
    count = 0;
    operand = Math.sqrt(n);

    while (operand > 0) {
      if (i % operand-- === 0) {
        count++;
      }

      if (count > 1) {
        answer++;
        break;
      }
    }
  }

  return answer;
}

// 두 번째 방법: 에라토스테네스의 체를 활용한다.
function solution(n) {
  let answer = 0;
  // 초기값 설정
  const arr = new Array(n + 1).fill(true);
  const end = Math.sqrt(n);

  for (let i = 2; i <= end; ++i) {
    // 이미 소수가 아닌 인덱스는 건너뛴다.
    if (arr[i] === false) {
      continue;
    }
    // 소수가 아닌 데이터는 false로 입력한다.
    for (let k = i * i; k <= n; k += i) {
      arr[k] = false;
    }
  }
  // 소수의 갯수를 구한다.
  for (let i = 2; i <= n; ++i) {
    if (arr[i] === true) {
      answer++;
    }
  }
  return n - answer - 1;
}

// ------------------------------------------------------------------------

/**
 * 3. 최댓값 만들기(1)
 * https://school.programmers.co.kr/learn/courses/30/lessons/120847
 * 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를
 * 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
 * 예) [1, 2, 3, 4, 5] => 20 // [0, 31, 24, 10, 1, 9] => 744
 */
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

// ------------------------------------------------------------------------

/**
 * 4. 팩토리얼
 * https://school.programmers.co.kr/learn/courses/30/lessons/120848
 * i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.
 * 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때
 * 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
 * 예) 3628800 => 10 // 7 => 3
 */
function solution(n) {
  let answer = 0,
    count = 1;
  const factorial = n => (n === 1 ? 1 : n * factorial(n - 1));

  while (true) {
    if (n >= factorial(count)) {
      answer = count++;
    } else {
      break;
    }
  }

  return answer;
}
