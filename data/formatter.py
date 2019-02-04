fname = "Ground Level Locations.csv"
i = 0
of = open("out.txt", "w")

def process(line, i):
    values = line.split(',')
    if not values[6]:
        comments = " "
    else:
        comments = values[6].strip()
    of.write("foodAndBeverage[{0}] = new GLL({1}, {2}, \"{3}\", \"{4}\", \"{5}\", \"{6}\");\n".format(i, values[1], values[2], values[3], values[4], values[5], comments))

with open(fname) as f:
    for line in f:
        process(line, i)
        i = i + 1
    of.close()
