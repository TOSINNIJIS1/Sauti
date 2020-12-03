def str(s1, s2):
    flag = False
    for a in s1:
        if a in s2:
            flag = True
    if flag:
        return 'YES'
    return 'NO'


print(str('ba', 'B'))