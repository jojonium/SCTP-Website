#!/bin/bash

SIZE=250
for file in *.jpg; do
   echo -n Converting ${file}...
   convert -resize ${SIZE}x${SIZE}^ "$file" temp.png
   convert -crop $(identify temp.png | awk -F'[ x]' -v SIZE=$SIZE '{ printf "%ux%u+%u+%u", SIZE, SIZE, ($3-SIZE)/2, ($4-SIZE)/2 }') temp.png "th_$file"
   echo done
done
rm temp.png
