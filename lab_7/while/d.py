n = int(input())
d = 1
isOkay = False

while (d <= n):
    if d == n:
        print("YES")
        isOkay = True
        break
    d *= 2

if not isOkay:
    print("NO")        