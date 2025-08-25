/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 * Tags: math | string
 */

// @lc code=start
/**
 * ## 문제
 * 로마 숫자는 7개의 다른 기호로 표현됩니다.
 * Symbol       Value
 *   I            1
 *   V            5
 *   X            10
 *   L            50
 *   C            100
 *   D            500
 *   M            1000
 *
 * 예를 들어, 숫자 2는 로마 숫자로 II라고 쓰는데, 단순히 1 두 개를 더한 것입니다.
 * 12는 XII라고 쓰는데, 이는 간단히 X + II입니다. 숫자 27은 XXVII라고 쓰는데,
 * 이는 XX + V + II입니다.
 *
 * 로마 숫자는 일반적으로 왼쪽에서 오른쪽으로 큰 값부터 작은 값 순서로 쓰여집니다.
 * 그러나 숫자 4는 IIII가 아닙니다. 대신 숫자 4는 IV라고 쓰여집니다. 이는 1이 5 앞에
 * 오기 때문에 5에서 1을 빼서 4를 만듭니다. 같은 원리가 숫자 9에도 적용되어 IX라고
 * 쓰여집니다. 뺄셈이 사용되는 경우는 다음과 같이 6가지가 있습니다:
 *
 * - I는 V (5)와 X(10) 앞에 놓여 4와 9를 만들 수 있습니다.
 * - X는 L (50)과 C(100) 앞에 놓여 40과 90을 만들 수 있습니다.
 * - C는 D (500)와 M(1000) 앞에 놓여 400과 900을 만들 수 있습니다.
 *
 * 로마 숫자가 주어지면, 이를 정수로 변환하세요.
 *
 * ## 예시
 * 예시 1:
 * 입력: s = "III"
 * 출력: 3
 * 설명: III = 3.
 *
 * 예시 2:
 * 입력: s = "LVIII"
 * 출력: 58
 * 설명: L = 50, V = 5, III = 3.
 *
 * 예시 3:
 * 입력: s = "MCMXCIV"
 * 출력: 1994
 * 설명: M = 1000, CM = 900, XC = 90, IV = 4.
 *
 * ## 제약 조건
 * 1. 1 <= s.length <= 15
 * 2. s는 오직 ('I', 'V', 'X', 'L', 'C', 'D', 'M') 문자만을 포함합니다.
 * 3. s는 [1, 3999] 범위 내의 유효한 로마 숫자임이 보장됩니다.
 *
 * ## 문제 요약
 * 주어진 로마 숫자를 정수로 변환하여 반환한다.
 *
 * ## 풀이 과정
 * 로마 숫자는 왼쪽에서 오른쪽으로 큰 값부터 작은 값 순서로 쓰여진다.
 * 1. 로마 심볼과 숫자를 key, value 쌍으로 정의한다. => romanObj
 *    정수형으로 값을 누적시킬 변수를 정의한다. => result
 * 2. 문자 전체를 순회하며, 왼쪽 요소와 오른쪽 요소를 합쳐서 확인하고 romanObj의 key에
 *    존재하면 해당 숫자를 더해주고 한 칸 건너뛴다. 없다면 왼쪽 요소만 더해준다.
 * 3. 순회를 마치고 더해주었던 값들을 반환한다.
 *
 * ## 풀이 요약
 * 로마 숫자 문자열을 순회하며, 두 글자 조합(예: IV) 또는 단일 글자 심볼에 해당하는 값을
 * 찾아 정수에 더해 변환한다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 3999/3999 cases passed (5 ms)
 * Your runtime beats 53.58 % of javascript submissions
 * Your memory usage beats 31.15 % of javascript submissions (61.3 MB)
 *
 * ## 점검
 * 처리 속도가 우선 너무 느린 것 같다는 생각이드는데, IV, IX, XL, XC, CD, CM와 같은
 * 값을 미리 정의하지 않고 판단해서 값을 빼주는 방식으로도 구현이 가능할 것 같아서
 * 다른 방식으로 또 풀어본다.
 *
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const romanObj = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const symbol = char + (s[i + 1] ?? '');
    if (romanObj[symbol]) {
      result += romanObj[symbol];
      i++;
    } else {
      result += romanObj[char];
    }
  }

  return result;
};
// @lc code=end

// console.log(romanToInt('LVIII'));
// console.log(romanToInt('MCMXCIV'));

/**
 * ## 목표
 * 뺄셈이 사용되는 문자를 미리 정의하지 않고 조건으로 판단하여 계산하는 방식으로 풀어보자.
 *
 * ## 풀이 과정
 * 로마 숫자는 일반적으로 가장 큰 숫자가 왼쪽에서부터 배치되는데, 로마 숫자 조합 IV같이
 * 뻴샘을 이용하는 경우에 대해 판단한다. 왼쪽 값(I)이 오른쪽 값(V) 보다 작다.
 * 1. 로마 문자열을 순회하여 현재 값보다 다음 값이 크면, 현재 값을 뺀다.
 *    아니라면 현재 값을 더해준다.
 * 2. 더해준 값을 반환한다.
 *
 * ## 풀이 요약
 * 로마 문자열을 순회하여 현재 값보다 다음 값이 크면, 현재 값을 빼고 아니라면 현재 값을
 * 더해준다. 누적해서 대해준 값을 반환한다.
 *
 * ## 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * ## 제출 결과
 * 3999/3999 cases passed (3 ms)
 * Your runtime beats 90.69 % of javascript submissions
 * Your memory usage beats 67.81 % of javascript submissions (60.7 MB)
 */
const romanToInt2 = (s) => {
  const romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currentValue = romanObj[s[i]];
    const nextValue = romanObj[s[i + 1]];

    if (nextValue && currentValue < nextValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
  }

  return result;
};

console.log(romanToInt2('LVIII'));
console.log(romanToInt2('MCMXCIV'));