--
-- @lc app=leetcode id=181 lang=mysql
--
-- [181] Employees Earning More Than Their Managers
--

-- @lc code=start
SELECT E2.name AS `Employee`
FROM Employee AS E1
JOIN Employee AS E2
ON E1.id = E2.managerId
WHERE E1.salary < E2.salary
-- @lc code=end

-- 매니저보다 많은 판매 수익을 달성한 직원을 찾아야 한다.
-- Employee 테이블에서 매니저는 managerId가 null이다.
-- 매니저와, 일반 직원의 판매 수익을 비교하여 찾는다.