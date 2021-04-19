function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} listNode
 * @return {array}
 */
var ListNode2Array = (list) => {
    let temp = list;
    let arr = [];
    while (temp) {
        arr.push(temp.val);
        temp = temp.next;
    }
    return arr;
};
/**
 * @param {array} arr
 * @return {ListNode}
 */
var Array2ListNode = (arr) => {
    let temp = arr.concat();
    let listNode = null;
    let nextNode = null;
    while (temp.length > 0) {
        if (!listNode) {
            listNode = nextNode = new ListNode(temp.shift());
        } else {
            nextNode.next = new ListNode(temp.shift());
            nextNode = nextNode.next;
        }
    }
    return listNode;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head = null;
    let temp = null;
    let carry = 0;
    while (l1 || l2) {
        let n1 = l1 ? l1.val : 0;
        let n2 = l2 ? l2.val : 0;
        let sum = n1 + n2 + carry;
        if (!head) {
            head = temp = new ListNode(sum % 10);
        } else {
            temp.next = new ListNode(sum % 10);
            temp = temp.next;
        }
        carry = Math.floor(sum / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry > 0) {
        temp.next = new ListNode(carry);
    }
    return head;
};

// console.log(ListNode2Array({"val":7,"next":{"val":0,"next":{"val":8,"next":null}}}));
// console.log(Array2ListNode([7, 0, 8]));
