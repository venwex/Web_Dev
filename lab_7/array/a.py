N = int(input())
arr = list(map(int, input().split())) 

for i in range (0, N):
    if i % 2 == 0:
        print(arr[i])