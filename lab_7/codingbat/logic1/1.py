def cigar_party(cigars, is_weekend):
    return cigars >= 40 and (is_weekend or cigars <= 60)

# Примеры вызова:
print(cigar_party(30, False))  # → False
print(cigar_party(50, False))  # → True
print(cigar_party(70, True))   # → True
