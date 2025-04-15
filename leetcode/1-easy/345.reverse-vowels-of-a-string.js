/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
  let left = 0; right = s.length - 1;
  const strArr = s.split('');
  while (left < right) {
    if (!isVowel(strArr[left])) {
      left++;
    } else if (!isVowel(strArr[right])) {
      right--;
    } else {
      const temp = strArr[left];
      strArr[left] = strArr[right];
      strArr[right] = temp;
      left++;
      right--;
    }
  }

  return strArr.join('');
};

/**
 * 문자 모음에 포함되는 문자인지 확인한다.
 * @param {string} char
 * @return {boolean}
 */
function isVowel(char) {
  if ('aeiouAEIOU'.includes(char)) {
    return true;
  }
  return false;
}

function swap(s, left, right) {
  const temp = s[left];
  s[left] = s[right];
  s[right] = temp;
  return s;
}

// @lc code=end

console.log(reverseVowels("hello")); // "holle"
console.log(reverseVowels("IceCreAm")); // "AceCreIm"
console.log(reverseVowels("leetcode")); // "leotcede"


/**
 * AI의 풀이, 데이터를 교환하는데 구조 분해 할당을 사용했다는 점이 인상적이다.
 * @param {string} s
 * @return {string}
 */
const reverseVowels2 = (s) => {
  const vowels = 'aeiouAEIOU';
  const arr = s.split('');
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (!vowels.includes(arr[left])) {
      left++;
    } else if (!vowels.includes(arr[right])) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join('');
};