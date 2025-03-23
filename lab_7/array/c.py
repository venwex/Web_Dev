N = int(input())
arr = list(map(int, input().split())) 
ans = 0

for i in range (0, N):
    if arr[i] > 0:
        ans += 1

print(ans)