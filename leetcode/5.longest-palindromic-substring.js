/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * DawChihLiou님의 풀이, 심플하고 가독성이 좋아서 해당 풀이를 선택
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    let odd = expandAroundCenter(s, i, i);
    let even = expandAroundCenter(s, i, i + 1);

    if (odd.length > longest.length) {
      longest = odd;
    }

    if (even.length > longest.length) {
      longest = even;
    }
  }

  return longest;
};

function expandAroundCenter(str, left, right) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  return str.substring(left + 1, right);
}
// @lc code=end

/*
  문제에 대한 이해가 부족하여 정해진 시간 내에 풀지 못해서 다른 사람의 풀이를 
  확인했다. 따라서 이해를 위해 동작 원리를 분석해 보았다.
  
  반복되는 문자 중에 시작과 끝이 같은 문자 중에 가장 긴 문자를 찾는 문제이다.
  
  패턴은 첫 번째 인덱스부터 문자의 마지막까지 반복하면서 
  좌측과 우측의 문자가 같은지 확인하면서 영역을 넓혀간다.

  홀수(odd)는 'aba'같이 처음과 끝 문자가 같은 것 중에 홀수인 것을 찾는다.
  짝수(even)는 'bb', 'abba'같이 처음과 끝 문자가 같은 것 중에 짝수인 것을 찾는다.

  'babadoioioi'를 예시로 들겠다. 홀수(odd) 찾기의 경우 순서는 다음과 같다.
  b -> bab -> aba -> a -> d -> o -> oio -> oioio -> ioioi -> ioi -> i

  'babadoioioi'에서 index 1의 'a' 순서라고 가정하고 생각해보자.
  처음에 좌우의 index 값이 같아서 좌우로 이동한다.
  index 0의 'b'와 index 2의 'b'가 같아서 좌우로 이동한다.
  index -1은 undefined, index 3은 'a'로 같지 않으므로
  index 0 ~ 2에 해당하는 'bab'를 리턴 한다.
  
  'cabbab'를 예시로 들겠다. 짝수(even) 찾기의 경우 순서는 다음과 같다.
  '' -> '' -> 'abba' -> '' -> '' -> ''
  
  'cabbab'에서 index 2의 'b' 순서라고 가정하고 생각해보자.
  index 2와 3이 같지 않는 경우 str.substring(3, 3)이 되어버려 
  빈 문자열을 반환한다.
  index 2의 'b'와 index 3의 'b'는 같아서 좌우로 이동한다.
  index 1의 'a'와 index 4의 'a'는 같아서 좌우로 이동된다.
  index 0의 'c'와 index 5의 'b'는 같지 않으므로
  index 1 ~ 4에 해당하는 'abba'를 리턴한다.
 */

console.log(longestPalindrome('babadoioioi')); // oioio, odd
console.log(longestPalindrome('cbbdcicici')); // cicic, odd
console.log(longestPalindrome('cabbab')); // abba, even
console.log(longestPalindrome('ccbbdd')); // cc, even
