# 분수의 덧셈

출처: <https://school.programmers.co.kr/learn/courses/30/lessons/120808>

## 문제 설명

첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

## 제한 사항

- 0 < denum1, num1, denum2, num2 < 1,000

## 입출력 예

|denum1|num1|denum2|num2|result|
|---|---|---|---|---|
|1|2|3|4|[5, 4]|
|9|2|1|3|[29, 6]|

### 입출력 예 설명

입출력 예 #1

- 1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.

입출력 예 #2

- 9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.

## 풀이

통분을 통해 해결해야 할 문제로 파악된다.

**통분**이란 둘 이상의 분수의 분모를 같게 만드는 것을 말한다.
통분한 분모를 **공통분모**라고 한다.

### 첫 번째 해결 방법

1. 두 분모의 곱을 공통 분모로 하여 값을 계산한다.
2. 분자와 분모의 [최대공약수](https://ko.wikipedia.org/wiki/%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98)를 구하여 값을 나눈다.
   - [소인수분해](https://ko.wikipedia.org/wiki/%EC%86%8C%EC%9D%B8%EC%88%98%EB%B6%84%ED%95%B4)로 가능하지만, [유클리드 호제법](https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95)을 이용하여 최적화한다.

```js
function solution(denum1, num1, denum2, num2) {
    // 1. 두 분모의 곱을 공통 분모로 하여 값을 계산한다.
    let numerator = denum1 * num2 + denum2 * num1;
    let denominator = num1 * num2;

    // 2. 분자와 분모의 최대공약수를 구하여 값을 나눈다.
    const getGCD = (a, b) => (b ? getGCD(b, a % b) : a);
    const gcd = getGCD(numerator, denominator);
    numerator /= gcd;
    denominator /= gcd;

    return [numerator, denominator];
}
```

### 두 번째 해결 방법

1. 두 분모의 [최소공배수](https://ko.wikipedia.org/wiki/%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98)를 공통분모로 하여 값을 계산한다.
   - 소인수분해로 가능하지만, 유클리드 호제법을 이용하여 최적화한다.
   - (두 자연수의 곱) = (최대공약수) × (최소공배수)
(최소공배수) = (두 자연수의 곱) / (최대공약수)
(최대공약수) = (두 자연수의 곱) / (최소공배수)

2. 분자와 분모의 최대공약수를 구하여 값을 나눈다.

```js
function solution(denum1, num1, denum2, num2) {
    // 1. 두 분모의 최소공배수를 공통분모로 하여 값을 계산한다.
    const getGCD = (a, b) => (b ? getGCD(b, a % b) : a);
    const getLCM = (a, b) => (a * b) / getGCD(a, b);
    const lcm = getLCM(num1, num2);

    let numerator = (denum1 * lcm) / num1 + (denum2 * lcm) / num2;
    let denominator = lcm;

    // 2. 분자와 분모의 최대공약수를 구하여 값을 나눈다.
    const gcd = getGCD(numerator, denominator);
    numerator /= gcd;
    denominator /= gcd;

    return [numerator, denominator];
}
```

---

## 참고 자료

<https://mathbang.net/206>
<https://susuni11.tistory.com/67>