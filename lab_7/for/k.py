n = int(input())
ans = 0

for i in range(1, n + 1):
    num = int(input())
    if (num == 0):
        ans += 1

print(ans)