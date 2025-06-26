/*
 * @lc app=leetcode id=541 lang=javascript
 *
 * [541] Reverse String II
 */

// @lc code=start
/**
 * 문제를 제대로 이해하지 못해서 GPT-4o의 해설을 참고하여 풀었다.
 * 첫 번째 문자열부터 마지막 문자열까지 2k 개수 만큼 마다 문자열을 뒤집는다.
 * - 앞의 k 만큼의 문자는 뒤집고, 그 다음 k 만큼의 문자는 그대로 유지한다.
 *
 * 예외 상황은 아래와 같다.
 * - 남은 글자가 k보다 작으면 전부 뒤집는다.
 * - 남은 글자가 k이상이고 2k 미만이면 앞의 k만 뒤집고 나머지는 그대로 유지한다.
 * 예) s = "abcdefg", k = 2
 * 1. "abcd" => "ab"는 뒤집어서 "ba", "cd"는 그대로 유지 => "ba" + "cd" = "bacd"
 * 2. "efg" => "ef"는 뒤집어서 "fe", "g"는 그대로 유지 => "fe" + "g" = "feg"
 * 3. "bacd" + "feg" = "bacdfeg"
 *
 * 결국 쉽게 생각하면 앞에 k만큼만 뒤집으면 된다.
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
  const arr = s.split('');

  // 매 2k 블록마다 뒤집는다.
  for (let i = 0; i < s.length; i += 2 * k) {
    // 현재 블록의 앞쪽 k개 문자를 뒤집기 위한 시작과 끝 인덱스를 설정한다.
    let left = i;
    let right = Math.min(i + k - 1, s.length - 1);

    // 양 끝에서 중앙으로 오며 문자를 교환한다.
    while (left < right) {
      // [arr[left], arr[right]] = [arr[right], arr[left]] 이런 방법도 있다.
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  return arr.join('');
};
// @lc code=end


console.log(reverseStr("abcdefg", 2));
