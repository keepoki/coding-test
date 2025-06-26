--
-- @lc app=leetcode id=197 lang=mysql
--
-- [197] Rising Temperature
--

-- @lc code=start
SELECT w1.id
FROM Weather w1, Weather w2
WHERE DATEDIFF(w1.RecordDate, w2.RecordDate) = 1
  AND w1.Temperature > w2.Temperature;

-- DATEDIFF(date1, date2)는 날짜 일수를 비교한다.
-- date1(days) - date2(days)
-- DATEDIFF('2024-12-27', '2024-12-26') => 1
-- DATEDIFF('2024-12-25', '2024-12-27') => -2

-- @lc code=end

