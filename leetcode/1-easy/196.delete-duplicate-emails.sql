--
-- @lc app=leetcode id=196 lang=mysql
--
-- [196] Delete Duplicate Emails
--

-- @lc code=start

-- 내가 푼 방법
DELETE p1 FROM Person AS p1
JOIN Person AS p2
ON p1.email = p2.email
WHERE p1.id > p2.id

-- 다른 사람의 풀이 중 가장 많이 쓰이는 방법
-- DELETE p1 FROM Person p1, Person p2
-- WHERE p1.email = p2.email AND p1.id > p2.id

-- 다른 사람의 풀이 중 GROUP BY를 활용한 방법
-- DELETE
-- FROM Person
-- WHERE id NOT IN (
--     SELECT *
--     FROM (
--         SELECT min(id)
--         FROM Person
--         GROUP BY email
--     ) AS rst
--   )

-- @lc code=end


