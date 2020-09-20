# Complex
A Javascript Class that allows for complex numbers to be used, based off of the generic Math library already available in vanilla Javascript.
# Defining a Complex Number
You may define a complex number in multiple ways. Below are a few examples:
```js
new Complex(-1,0);
new Complex([-1,0]);
new Complex({re: -1, im: 0});
new Complex({phi: Math.PI, r: 1});
```
All of which output a complex number, -1+0i.
# Allowed functions, in alphabetical order
```js
abs() // Returns the distance away from 0
acos() // Returns the inverse cosine of a complex number
acosh() // Returns the inverse hyperbolic cosine of a complex number
add() // Adds 2 complex numbers
arg() // Returns the angle of a complex number
asin() // Returns the inverse sine of a complex number
asinh() // Returns the inverse hyperbolic sine of a complex number
atan() // Returns the inverse tangent of a complex number
atanh() // Returns the inverse hyperbolic tangent of a complex number
cbrt() // Returns the cube root of a complex number
conj() // Returns the conjugate of a complex number
cos() // Returns the cosine of a complex number
cosh() // Returns the hyperbolic cosine of a complex number
div() // Divides two complex numbers
exp() // Returns e raised to the power of a complex number
log() // Returns the natural log of a complex number
log10() // Returns the log base 10 of a complex number
log2() // Returns the log base 2 of a complex number
mul() // Multiplies 2 complex numbers
pow() // Returns a complex number raised to the power of another complex number
random() // Returns a random complex number, with the natural and complex parts being between 0 and 1
sin() // Returns the sine of a complex number
sinh() // Returns the hyperbolic sine of a complex number
sqrt() // Returns the square root of a complex number
sub() // Subtracts 2 complex numbers
tan() // Returns the tangent of a complex number
tanh() // Returns the hyperbolic tangent of a complex number
```
# Examples of usage
Adding two complex numbers (applies to addition, subtraction, multiplication, division, and exponentiation)
```js
let number = new Complex(2,3);
let newNumber = number.add(3,3); // Returns a new complex number that has the value 5+6i
```
Running a complex number through a function (applies to functions that aren't addition, subtraction, multiplication, division, and exponentiation)
```js
let number = new Complex(0,Math.PI);
let newNumber = number.exp(); // Returns a new complex number that has the value -1+0i, 
// although slightly innacurate due to weirdness with javascript rounding
```
