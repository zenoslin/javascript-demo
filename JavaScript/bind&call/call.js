Function.prototype.call = function (context) {
    context = context || window
    context.fn = this
    console.log(arguments)
    const args = [...arguments].slice(1)
    console.log(args)
    const result = context.fn(...args)
    delete context.fn
    return result
}