a = int(input())
ans = 0

for i in range(1, a + 1):
    if (a % i == 0):
        ans += 1

print(ans)