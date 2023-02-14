-- SELECT 관련 문제
-- 아픈 동물 찾기
-- https://school.programmers.co.kr/learn/courses/30/lessons/59036
-- ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. 
-- ANIMAL_INS 테이블 구조는 다음과 같으며, 
-- ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 
-- 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

-- 문자열은 작은따옴표(') 또는 큰따옴표("_로 감싸면 된다.
-- Oracle과 MySQL의 차이점 중 하나는 문자열의 대소문자 구분이다.
-- Oracle은 대소문자를 구분하지 않는다.
-- MySQL은 기본적으로 대소문자를 구분하고, 변경이 가능하다.

SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION = "Sick"
ORDER BY ANIMAL_ID