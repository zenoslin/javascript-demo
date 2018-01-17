/*
JavaScript数据结构（2）：栈与队列
来源：https://segmentfault.com/a/1190000010344706
翻译来源：https://code.tutsplus.com/articles/data-structures-with-javascript-stack-and-queue--cms-23348
*/



//栈
function Stack() {
    // this._size 属性反映了当前栈中数据的个数.
    this._size = 0;
    //this._storage 属性使栈的每一个实例都具有自己的用来存储数据的容器.
    this._storage = {};
}

Stack.prototype.push = function(data) {
    //增加储存容量
    var size = ++this._size;
    //指定size为this._storage.
    //并将数据赋给相应键的值.
    this._storage[size] = data;
};

Stack.prototype.pop = function() {
    var size = this._size;//size用来初始化栈的大小.
    var deletedData;//deletedData用来保存栈中最后一次添加的数据.
    //只有在储存中有数据时才被执行.
    if (size) {
        deletedData = this._storage[size];
        //删除最后一次添加的数据的键值对。
        delete this._storage[size];
        //把栈的大小减少1.
        this._size--;
        //返回从栈中删除的数据.
        return deletedData;
    }
};



//队列
function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}
//返回当前队列的长度.
//保持队列中键的正确范围.
Queue.prototype.size = function() {
    return this._newestIndex - this._oldestIndex;
};
//使用_newestIndex的值作为this._storage的键，并使用要添加的数据作为该键的值.
//将_newestIndex 的值增加1.
Queue.prototype.enqueue = function(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
};
//删除队列中最旧的数据.
//属性 _oldestIndex 加1.
Queue.prototype.dequeue = function() {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;
    //只有在储存中有数据时才被执行.
    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
        //返回刚刚被删除的数据.
        return deletedData;
    }
};
