'''
## 난이도
브론즈-2

## 알고리즘 분류
구현

## 문제
다장조는 c d e f g a b C, 총 8개 음으로 이루어져있다. 이 문제에서 8개 음은 다음과 같이
숫자로 바꾸어 표현한다. c는 1로, d는 2로, ..., C를 8로 바꾼다.

1부터 8까지 차례대로 연주한다면 ascending, 8부터 1까지 차례대로 연주한다면 descending,
둘 다 아니라면 mixed 이다.

연주한 순서가 주어졌을 때, 이것이 ascending인지, descending인지, 아니면 mixed인지
판별하는 프로그램을 작성하시오.

## 입력
첫째 줄에 8개 숫자가 주어진다. 이 숫자는 문제 설명에서 설명한 음이며, 1부터 8까지 숫자가
한 번씩 등장한다.

## 출력
첫째 줄에 ascending, descending, mixed 중 하나를 출력한다.
'''

nums = list(map(int, input().split()))
result = ''

if (nums[0] == 1):
  for i in range(1, len(nums)):
    if (nums[i - 1] > nums[i]):
      result = 'mixed'
      break
  result = 'ascending' if result == '' else result
elif (nums[0] == 8):
  for i in range(1, len(nums)):
    if (nums[i - 1] < nums[i]):
      result = 'mixed'
      break
  result = 'descending' if result == '' else result
else:
  result = 'mixed'

print(result)

'''
## 다른 사람의 풀이
오름차순과 내림차순의 숫자들로 구성된 배열을 정의하고 비교하는
간결한 풀이 방법이다. 파이썬에 대한 문법을 잘 모르는데
배열끼리 비교하는게 가능하다는 것이 인상적이다.

import sys
input = sys.stdin.readline

arr = list(map(int, input().split()))
ad = [i for i in range (1, 9)]
dd = [i for i in range (8, 0, -1)]

if arr == ad:
    print('ascending')
elif arr == dd:
    print('descending')
else:
    print('mixed')


## 다른 사람의 풀이 2
기존의 배열을 정렬시킨 것과 비교하는 더 짧고 간결한 처리 방법이다.

P=list(map(int,input().split()))
if P == sorted(P):
    print("ascending")
elif P == sorted(P,reverse=True):
    print("descending")
else:
    print("mixed")
    

## Gemini 2.5 Flash의 풀이
요소의 숫자가 1씩 증가하거나 감소하고 있는 특징을 잘 살린 풀이이다.
다음 요소의 값과 현재 요소의 값 +- 1로 오름차순과 내림차순을 판별하고 있다.
게다가 함수로 정의하여 재사용할 수 있도록 구현되었다.

def classify_scale(notes):
    """
    주어진 음계가 ascending, descending, 또는 mixed인지 판별합니다.

    Args:
        notes (list): 1부터 8까지의 숫자로 이루어진 8개의 음계 리스트.

    Returns:
        str: "ascending", "descending", 또는 "mixed" 중 하나.
    """
    is_ascending = True
    is_descending = True

    # ascending 판별
    for i in range(7):
        if notes[i] + 1 != notes[i+1]:
            is_ascending = False
            break

    # descending 판별
    for i in range(7):
        if notes[i] - 1 != notes[i+1]:
            is_descending = False
            break

    if is_ascending:
        return "ascending"
    elif is_descending:
        return "descending"
    else:
        return "mixed"

# 입력 받기
input_line = input()
# 문자열을 공백으로 분리하여 정수 리스트로 변환
notes = list(map(int, input_line.split()))

# 결과 출력
print(classify_scale(notes))
'''
