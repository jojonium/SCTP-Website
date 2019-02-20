#!/bin/bash

SIZE=250;
i=1;

rm th_*;

for file in *.jpg; do
	mv "$file" $(printf "%02d.jpg" $i);
	i=$((i+1))
done
echo Done renaming

for file in *.jpg; do
	echo -n Converting ${file}...
	convert -resize ${SIZE}x${SIZE}^ "$file" temp.png
	convert -crop $(identify temp.png | awk -F'[ x]' -v SIZE=$SIZE '{ printf "%ux%u+%u+%u", SIZE, SIZE, ($3-SIZE)/2, ($4-SIZE)/2 }') temp.png "th_$file"
	echo done
done
rm temp.png
