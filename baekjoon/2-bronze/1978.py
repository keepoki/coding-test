"""
## 난이도
브론즈-2

## 알고리즘 분류
수, 정수, 소수 판정

## 문제
주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

## 입력
첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는
1,000 이하의 자연수이다.

## 출력
주어진 수들 중 소수의 개수를 출력한다.

## 풀이 과정
1. 숫자 1은 소수가 아니다.
2. 입력 받은 숫자들을 순회하면서, 제곱근을 구하고 2부터 제곱근까지의 숫자로 나누어서 0으로
나누어 떨어지면 소수가 아니다.
3. 반복문이 끝날 때 까지 나누어 떨어지지 않으면 소수이다. 소수의 개수를 더한다.
4. 소수의 개수를 반환한다.

## 풀이 요약
1를 제외하고 2부터 제곱근까지의 숫자를 나누어 떨어지는 숫자들을 찾아서 소수 개수에 더하고
반환한다.

## 시간 복잡도: O(n x √m), 공간 복잡도: O(1)

## 제출 결과
32412 KB 36 ms

"""

n = int(input())
numbers = list(map(int, input().split()))

prime_count = 0
is_prime = False

for number in numbers:
    if number < 2:
        continue

    sqrt = int(number**0.5) + 1
    is_prime = True

    for i in range(2, sqrt):
        if number % i == 0:
            is_prime = False
            break
        else:
            is_prime = True

    if is_prime == True:
        prime_count += 1

print(prime_count)


"""
Gemini-2.5 Flash의 풀이
"""
def is_prime(number):
    """
    주어진 숫자가 소수인지 판별하는 함수
    """
    if number < 2:  # 0, 1은 소수가 아님
        return False
    if number == 2: # 2는 유일한 짝수 소수
        return True
    if number % 2 == 0: # 2를 제외한 짝수는 소수가 아님
        return False

    # 3부터 홀수만 확인 sqrt(number)까지
    # range(start, stop, step)
    for i in range(3, int(number**0.5) + 1, 2):
        if number % i == 0:
            return False # 나누어 떨어지면 소수가 아님
    return True # 모든 조건을 통과하면 소수

n = int(input())
numbers = list(map(int, input().split()))

primeCount = 0

for number in numbers:
    if is_prime(number):
        primeCount += 1

print(primeCount)


"""
Gemini-2.5 Flash의 풀이, 에라토스테네스의 체 원리를 이용하였다.
"""

# 입력 받기
n = int(input())
numbers = list(map(int, input().split()))

# 입력된 숫자들 중 가장 큰 값을 찾아 체의 상한선으로 설정
# 1은 소수가 아니므로, 최소 2부터 시작하기 위해 max(2, ...)를 사용합니다.
max_num = 0
if numbers: # numbers 리스트가 비어있지 않은 경우에만 최대값을 찾습니다.
    max_num = max(numbers)
# max_num이 1보다 작으면 (0 또는 음수) 체를 만들 필요가 없으므로 최소 2로 설정합니다.
# 예를 들어 입력이 [1, 0] 이면 max_num이 1이 되므로, 체 크기는 최소 2는 되어야 합니다.
sieve_limit = max(2, max_num)

# 에라토스테네스의 체 초기화
# is_prime[i]가 True이면 i는 소수, False이면 합성수(또는 소수가 아님)를 의미합니다.
# 0과 1은 소수가 아니므로 False로 초기화합니다.
is_prime = [True] * (sieve_limit + 1)
is_prime[0] = False
is_prime[1] = False

# 2부터 시작하여 (sqrt(sieve_limit) + 1)까지 반복합니다.
# 어떤 합성수 N은 반드시 sqrt(N) 이하의 소인수를 가집니다.
for p in range(2, int(sieve_limit**0.5) + 1):
    # p가 아직 소수로 표시되어 있다면
    if is_prime[p]:
        # p의 배수들을 제거 (합성수로 표시)
        # p*p 부터 시작하는 이유는, p*k (k<p) 형태의 배수들은
        # 이미 k를 소인수로 가지는 더 작은 소수에 의해 제거되었기 때문입니다.
        for multiple in range(p*p, sieve_limit + 1, p):
            is_prime[multiple] = False

# 입력된 숫자들 중에서 소수의 개수를 셉니다.
prime_count = 0
for number in numbers:
    # numbers 리스트에 0이나 음수가 들어올 경우를 대비한 방어 로직입니다.
    if number >= 0 and number <= sieve_limit and is_prime[number]:
        prime_count += 1
    # 참고: 문제 조건에 따라 0이나 음수가 포함되지 않는다면 number >= 2 and is_prime[number] 로 단순화할 수 있습니다.

print(prime_count)