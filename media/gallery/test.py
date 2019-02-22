of = open("out.txt", "w")

for i in range(4, 55):
    of.write("<div class=\"pic-box\">")
    of.write("\n  <a href=\"media/gallery/" + str(i).zfill(2) + ".jpg\">")
    of.write("\n    <img src=\"media/gallery/th_" + str(i).zfill(2) + ".jpg\">")
    of.write("\n  </a>")
    of.write("\n")
    of.write("\n  <h4>Placeholder Text</h4>")
    of.write("\n</div>\n\n")

