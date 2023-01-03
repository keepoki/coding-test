// 첫 번째 해결 방법
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

// 두 번째 해결 방법
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
