function foo(x, y, z){
	argunments.length; //2
	argunments[0]; //1
	argunments[0] = 10;
	x; //change to 10;

	argunments[2] = 100;
	z; //still undefined!
	argunments.callee == foo; //true
}

foo(1, 2);
foo.length; //3
foo.name; //"foo"
