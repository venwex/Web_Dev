def mutate_string(string, position, character):
    return string[:position] + character + string[position + 1:]

if __name__ == '__main__':
    s = input()
    pos, char = input().split()
    print(mutate_string(s, int(pos), char))
