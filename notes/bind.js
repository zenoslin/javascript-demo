/*
ind方法模拟
bind方法 ES5 IE9+
*/

//ES5 IE9.0+
function f00(){
	this.b = 100;
	return this.a;
}

var func = foo.bind({a:1});

func(); //1
new func(); //{b:100}

//老浏览器 IE9.0- 模拟bind方法
if (!Function.prototype.bind){
	Function.prototype.bind = function(oThis){
		if (typeof this !== 'function'){
			//closest thing possible to the ECMAScript 5
			//internal IsCallable function
			throw new TypeError('What is trying to be bound is not callable');
		}
		var aArgs = Array.prototype.slice.call(arguments, 1),
		fToBind = this,
		fNOP = function(){},
		fBound = function(){
			return fToBind.apply(this instanceof fNOP? this : oThis,
				aArgs.concat(Array.prototype.slice.call(arguments)));
		};
	fNOP.prototype = this.prototype;
	fBound.prototype = new fNOP();

	return fBound;
	};
}
