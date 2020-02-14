# hw3

What code draws the blades of grass?
Lines 10 and 11

  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));

What code makes the "lawnmower" come by? How often does it come by?
The lines 21-25 are what make the lawnmower. The chances the lawnmower will cut the grass is 1/1000.

What's the point of the h variable?

The h var increasing the height the grass can grow.

What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?

the -10 in the second and fourth argument are placing the grass on the soil. like moving the grass up 10 pixels from the bottom.
