# @lc app=leetcode id=193 lang=bash
# [193] Valid Phone Numbers

# @lc code=start
# Read from the file file.txt and output all valid phone numbers to stdout.
# 유효한 전화번호는 다음 두 가지 형식 중 하나로 표시되어야 한다고
# 가정할 수 있습니다: (xx) xxx-xxx 또는 xxx-xxxx. (x는 숫자를 의미합니다)
# 987-123-4567, 123 456 7890 -> 987-123-4567, (123) 456-7890

# 정규표현식 관련된 문제이다.
# ^: 문자열의 시작을 의미
# $: 문자열의 끝을 의미
# [0-9]\{3\} : 0-9 범위 사이의 숫자 3개를 의미
# \: 예약어 및 키워드를 문자로 사용하기 위한 문자
# -e: 여러 개의 정규 표현을 포함하는 키워드

grep -e "^[0-9]\{3\}\-[0-9]\{3\}\-[0-9]\{4\}$" -e "^([0-9]\{3\}) [0-9]\{3\}-[0-9]\{4\}$" file.txt

# @lc code=end