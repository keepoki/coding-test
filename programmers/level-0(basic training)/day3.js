/**
 * 1. 문자열 섞기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181942
 * 길이가 같은 두 문자열 str1과 str2가 주어집니다.
 * 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는
 * 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.
 * 예)
 * | str1    | str2    | result       |
 * |---------|---------|--------------|
 * | "aaaaa" | "bbbbb" | "ababababab" |
 */
{
  function solution(str1, str2) {
    let answer = '';
    for (let i = 0; i < str1.length; ++i) {
      answer += str1[i] + str2[i];
    }
    return answer;
  }
  console.log(solution('aaaaa', 'bbbbb')); // ababababab
  console.log('--------------------------------------------------------');
}

// ------------------------------------------------------------------------
/**
 * 2. 문자 리스트를 문자열로 변환하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181941
 * 문자들이 담겨있는 배열 arr가 주어집니다. arr의 원소들을 순서대로 이어 붙인
 * 문자열을 return 하는 solution함수를 작성해 주세요.\
 * 예) ["a","b","c"] => "abc"
 */
{
  const solution = arr => arr.join('');
  console.log(solution(['a', 'b', 'c'])); // abc
  console.log('--------------------------------------------------------');
}

// ------------------------------------------------------------------------
/**
 * 3. 문자열 곱하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181940
 * 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을
 * return 하는 solution 함수를 작성해 주세요.
 * 예)
 * | my_string | k  | result                                     |
 * |-----------|----|--------------------------------------------|
 * | "string"  | 3  | "stringstringstring"                       |
 * | "love"    | 10 | "lovelovelovelovelovelovelovelovelovelove" |
 */
{
  const solution = (my_string, k) => my_string.repeat(k);
  console.log(solution('love', 4)); // lovelovelovelove
  console.log('--------------------------------------------------------');
}

// ------------------------------------------------------------------------
/**
 * 4. 더 크게 합치기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181939
 * 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다.
 * 예를 들면 다음과 같습니다. 12 ⊕ 3 = 123, 3 ⊕ 12 = 312
 * 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는
 * solution 함수를 완성해 주세요.
 * 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.
 * 예) 9, 91 => 991
 * 89, 8 => 898
 */
{
  function solution(a, b) {
    const ab = Number(`${a}${b}`);
    const ba = Number(`${b}${a}`);
    return ab < ba ? ba : ab;
  }
  console.log(solution(89, 8)); // 898
  console.log('--------------------------------------------------------');
}

// ------------------------------------------------------------------------
/**
 * 5. 두 수의 연산값 비교하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181938
 * 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다.
 * 예를 들면 다음과 같습니다. 12 ⊕ 3 = 123, 3 ⊕ 12 = 312
 * 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 2 * a * b 중 더 큰 값을 return 하는
 * solution 함수를 완성해 주세요.
 * 단, a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 합니다.
 */
{
  function solution(a, b) {
    const ab = Number(a + '' + b);
    const ab2 = 2 * a * b;
    return ab < ab2 ? ab2 : ab;
  }
  console.log(solution(12, 3)); // 123
  console.log('--------------------------------------------------------');
}
