-- SELECT 관련 문제
-- 어린 동물 찾기
-- https://school.programmers.co.kr/learn/courses/30/lessons/59037
-- ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다.
-- ANIMAL_INS 테이블 구조는 다음과 같으며, 
-- ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 
-- 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

-- 백틱(`) 문자는 식별자를 구분할 때 사용한다. 기본적으로 쓰이지는 않는다.
-- 식별자란 데이터베이스, 테이블, 인덱스, 컬럼, 뷰 등등 키워드, 예약어를 말한다.
-- 키워드 또는 예약어를 컬럼이나 테이블명으로 쓰고싶을 때 사용한다.
-- 컬럼이나 테이블명이 숫자로 시작하거나 공백이 있는 경우에도 백틱으로 감싸서 사용해야한다.

SELECT `ANIMAL_ID`, `NAME`
FROM `ANIMAL_INS`
WHERE `INTAKE_CONDITION` != "Aged"
ORDER BY `ANIMAL_ID`