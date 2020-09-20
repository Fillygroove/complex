class Complex {
	constructor(...number) {
		this.makeObject = number => {
			if (number[0].number !== undefined) number[0] = number[0].number;
			if (Array.isArray(number[0])) number = number[0];
			if (!isNaN(number[0].re) && !isNaN(number[0].im)) return number[0];
			if (!isNaN(number[0].phi) && !isNaN(number[0].r)) return {
				re: number[0].r * Math.cos(number[0].phi),
				im: number[0].r * Math.sin(number[0].phi)
			};
			if (!isNaN(number[0]) && !isNaN(number[1])) return {
				re: number[0],
				im: number[1]
			};
		};
		this.number = this.makeObject(number);
		this.re = this.number.re;
		this.im = this.number.im;
	}
	
	abs() { // Returns the distance away from 0
		return Math.hypot(this.re, this.im);
	}
	
	acos() { // Returns the inverse cosine of a complex number
		return new Complex(Math.PI / 2, 0).add(this.mul(0,1).add(new Complex(1,0).sub(this.pow(2,0)).sqrt()).log().mul(0,1));
	}
	
	acosh() { // Returns the inverse hyperbolic cosine of a complex number
		return this.add(this.pow(2,0).sub(1,0).sqrt()).log();
	}
	
	add(...number) { // Adds 2 complex numbers
		number = this.makeObject(number);
		return new Complex({
			re: this.re + number.re,
			im: this.im + number.im
		});
	}
	
	arg() { // Returns the angle of a complex number
		return Math.atan2(this.im, this.re);
	}
	
	asin() { // Returns the inverse sine of a complex number
		return new Complex(Math.PI / 2, 0).add(this.add(this.pow(2,0).sub(1,0).sqrt()).log().mul(0,1));
	}
	
	asinh() { // Returns the inverse hyperbolic sine of a complex number
		return this.add(this.pow(2,0).add(1,0).sqrt()).log();
	}
	
	atan() { // Returns the inverse tangent of a complex number
		let a = new Complex(0, 1 / 2).mul((new Complex(1,0).sub(this.mul(0,1))).log());
		let b = new Complex(0, 1 / 2).mul((new Complex(1,0).add(this.mul(0,1))).log());
		return a.sub(b);
	}
/*	
	atan2() {
	}*/
	
	atanh() { // Returns the inverse hyperbolic tangent of a complex number
		let a = new Complex(1 / 2, 0).mul(this.add(1,0).log());
		let b = new Complex(1 / 2, 0).mul(new Complex(1,0).sub(this).log());
		return a.sub(b);
	}
	
	cbrt() { // Returns the cube root of a complex number
		return this.log().div(3,0).exp();
	}
	
/*	ceil() {
	}*/
	
/*	clz32() {
	}*/
	
	conj() { // Returns the conjugate of a complex number
		return new Complex({
			re: this.re,
			im: -this.im
		});
	}
	
	cos() { // Returns the cosine of a complex number
		let a = new Complex(-this.im, this.re).exp();
		let b = new Complex(this.im, -this.re).exp();
		return a.add(b).div(2,0);
	}

	cosh() { // Returns the hyperbolic cosine of a complex number
		let a = this.exp();
		let b = this.mul(-1,0).exp();
		return a.add(b).div(2,0);
	}
	
	div(...number) { // Divides 2 complex numbers
		number = this.makeObject(number);
		return new Complex({
			re: (this.re * number.re + this.im * number.im) / (number.re ** 2 + number.im ** 2),
			im: (this.im * number.re - this.re * number.im) / (number.re ** 2 + number.im ** 2)
		});
	}
	
	exp() { // Returns e raised to the power of a complex number
		return new Complex({
			re: Math.exp(this.re) * Math.cos(this.im),
			im: Math.exp(this.re) * Math.sin(this.im)
		});
	}
	
/*	expm1() {
	}*/
	
/*	floor() {
	}*/
	
/*	fround() {
	}*/
	
/*	hypot() {
	}*/
	
/*	imul() {
	}*/
	
	log() { // Returns the natural log of a complex number
		return new Complex({
			re: Math.log(this.abs()),
			im: this.arg()
		});
	}
	
	log10() { // Returns the log base 10 of a complex number
		return this.log().div(new Complex(10,0).log());
	}
	
/*	log1p() {
	}*/
	
	log2() { // Returns the log base 2 of a complex number
		return this.log().div(new Complex(2,0).log());
	}
	
/*	max() {
	}*/
	
/*	min() {
	}*/
	
	mul(...number) { // Multiplies 2 complex numbers
		number = this.makeObject(number);
		return new Complex({
			re: this.re * number.re - this.im * number.im,
			im: this.re * number.im + this.im * number.re
		});
	}
	
	pow(...number) { // Returns a complex number raised to another complex number
		return this.log().mul(number).exp();
	}
	
	random() { // Returns a random complex number, with the natural and complex parts being between 0 and 1
		return new Complex({
			re: Math.random(),
			im: Math.random()
		});
	}
	
/*	round() {
	}*/
	
/*	sign() {
	}*/
	
	sin() { // Returns the sine of a complex number
		let a = new Complex(-this.im, this.re).exp();
		let b = new Complex(this.im, -this.re).exp();
		return a.sub(b).div(0,2);
	}
	
	sinh() { // Returns the hyperbolic sine of a complex number
		let a = this.exp();
		let b = this.mul(-1,0).exp();
		return a.sub(b).div(2,0);
	}
	
	sqrt() { // Returns the square root of a complex number
		return this.log().div(2,0).exp();
	}
	
	sub(...number) { // Subtracts 2 complex numbers
		number = this.makeObject(number);
		return new Complex({
			re: this.re - number.re,
			im: this.im - number.im
		});
	}
	
	tan() { // Returns the tangent of a complex number
		return this.sin().div(this.cos());
	}
	
	tanh() { // Returns the hyperbolic tangent of a complex number
		return this.sinh().div(this.cosh());
	}
	
/*	trunc() {
	}*/
}
