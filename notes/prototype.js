/*
Object.create继承模拟
*/

//ES5之后才支持
function Person(){

}

function Student(){

}

Student.prototype = Object.create(Person,prototype);
Student.prototype.constructor = Person;

//在ES5之前的环境模拟Object.create方法
if (!Object.create){
	Object.create = function(proto){
		function F(){}
			F.prototype = proto;
			return new F;
	};
}
