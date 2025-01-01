--
-- @lc app=leetcode id=182 lang=mysql
--
-- [182] Duplicate Emails
--

-- @lc code=start
SELECT email AS Email
FROM Person
GROUP BY email
HAVING COUNT(email) > 1
-- @lc code=end

-- email이 중복 되는 것을 찾아야 한다.
-- GROUP BY, HAVING을 이용하면 쉽게 찾을 수 있다.

-- 다른 풀이 방법 01
-- SELECT DISTINCT(p1.email) AS Email
-- FROM Person p1, Person p2
-- WHERE p1.id <> p2.id AND p1.email = p2.email;

-- 다른 풀이 방법 02
-- SELECT DISTINCT(p1.email) AS Email
-- FROM Person p1
-- JOIN Person p2
-- ON p1.email = p2.email AND p1.id <> p2.id;