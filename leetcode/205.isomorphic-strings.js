/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * s 문자에서 t로 변환될 때 철자는 달라도 형식은 같아야한다.
 * 예를들어 s=aabb, t=zzcd 라면 마지막 글자인 b와 d가 형식과 일치하지 않는다.
 * t가 zzcc라면 통과한다. t가 ffgg라도 상관 없다.
 * 같은 문자의 순서가 일치하기만 하면 된다.
 */
const isIsomorphic = function(s, t) {
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    // 같은 문자의 위치가 같은지 확인한다.
    if (s.indexOf(sChar) !== t.indexOf(tChar)) {
      return false;
    }
  }

  return true;
};
// @lc code=end

console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic("paper","title")); // true
console.log(isIsomorphic("bbbaaaba","aaabbbba")); // false

