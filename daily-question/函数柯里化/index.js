const curry = (fn, ...args) => {
    return args.length >= fn.length
        ? fn(...args)
        : (..._args) => curry(fn, ...args, ..._args);
};

module.exports = { curry };
