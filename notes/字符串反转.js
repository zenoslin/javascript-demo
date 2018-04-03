var str = 'HelloWorld!';

function reversed () {
	return str.split('').reverse().join('');
}

var restr = reversed();
console.log(restr);
