-- SELECT 관련 문제
-- 역순 정렬하기  
-- https://school.programmers.co.kr/learn/courses/30/lessons/59035
-- ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. 
-- ANIMAL_INS 테이블 구조는 다음과 같으며, 
-- ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 
-- 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

SELECT ANIMAL_INS.NAME, ANIMAL_INS.DATETIME 
FROM ANIMAL_INS ORDER BY ANIMAL_ID DESC

-- FROM에 ANIMAL_INS 테이블을 지정해두었기 때문에 
-- ANIMAL_INS.NAME에서 테이블명을 생략하고 NAME으로 입력해도 된다.