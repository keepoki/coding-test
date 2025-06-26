--
-- @lc app=leetcode id=175 lang=mysql
--
-- [175] Combine Two Tables
--

-- @lc code=start
SELECT firstName, lastName, city, state
FROM Person AS P1
LEFT JOIN Address AS A1
ON P1.personId = A1.personId
-- @lc code=end

-- personId를 기준으로 outer join을 사용하여
-- 일치하지 않는 레코드의 값은 null으로 채워진다.