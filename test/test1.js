/*
* @Author: zenoslin
* @Date:   2018-03-23 00:46:06
* @Last Modified by:   zenoslin
* @Last Modified time: 2018-03-23 01:13:24
*/
var foo = {n:1};
(function(foo){
	console.log(foo.n);
	foo.n = 3;
	var foo = {n:2};
	console.log(foo.n);
})(foo);
console.log(foo.n);

var A = {n:4399};
var B = function(){
	this.n = 9999
};
var C = function(){
	var n = 8888;
};
B.prototype = A;
C.prototype = A;
var b = new B();
var c = new C();
A.n++;
console.log(b.n);//9999
console.log(c.n);//4400
