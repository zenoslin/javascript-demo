function Stack() {
	this._size = 0;
	this._storage = {};
}

Stack.prototype.push = function (data) {
    let size = ++this._size;
    this._storage[size] = data;
};

Stack.prototype.pop = function () {
    let size = this._size;
    let deletedData;

    if (size) {
        deletedData = this._storage[size];
        delete this._storage[size];
        this._size--;
        return deletedData;
    }
};

function verify (text) {
	let reg = /[^\(\)\{\}\[\]\<\>]/g;
	let str = text.replace(reg, '');
	let arr = str.split('');
	let stack = new Stack();
	let check = '({[<>]})';
	let index = Number;

	for (let i = 0; i < arr.length; i++) {
		let item = arr[i];

		index = check.indexOf(item);
		if (index < 4) {
			stack.push(item);
		} else {
			let target = stack.pop();

			if (!target) {
				return 0;
			}
			if (target !== check.charAt(7-index)) {
				return 0;
			}
		}
	}
	if (stack._size) {
		return 0;
	}
    return 1;
}
