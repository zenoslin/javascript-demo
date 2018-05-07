var tree = {
	value : 1,
	left : {
		value : 2,
		left : {
			value :4
		}
	},
	right : {
		value : 3,
		left : {
			value : 5,
			left :{
				value :7
			},
			right :{
				value :8
			}
		},  
		right : {
			value :6
		}
	}
}

//先序遍历
var preOrder = function (node) {
	if (node) {
		console.log(node.value);
		preOrder(node.left);
		preOrder(node.right);
	}
}
var postOrder = function (node) {
	if(node){
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.value);
	}
}
var midOrder = function(node){
	if(node){
		midOrder(node.left);
		console.log(node.value);
		midOrder(node.right);
	}
}
console.log("先序遍历 ：");
preOrder(tree);
console.log("后续遍历 ：");
postOrder(tree);
console.log("中序遍历 ：");
midOrder(tree);
