# N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오.
# 출력 형식에 맞춰서 출력하면 된다.
n = int(input())
for i in range(1, 10):
  print(f"{n} * {i} = {n*i}")

# 다른 풀이 방법
# n = int(input())
# for i in range(1, 10):
#   print("{} * {} = {}".format(n, i, n*i))

# 다른 풀이 방법 2
# n = int(input())
# for i in range(1, 10):
#   print("%d * %d = %d" % (n, i, n*i))