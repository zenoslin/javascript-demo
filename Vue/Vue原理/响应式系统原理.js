class Vue {
    constructor(options) {
        this._data = options.data;
        this.observer(this._data);
    }
    observer(value) {
        if (!value || typeof value !== "object") {
            return;
        }
        Object.keys(value).forEach(key => {
            this.defineReactive(value, key, value[key]);
        });
    }
    defineReactive(obj, key, val) {
        Object.defineProperty(obj, key, {
            get() {
                return val;
            },
            set(newVal) {
                if (newVal === val) return;
                this.cb(newVal);
            }
        });
    }
    cb(val) {
        console.log("更新啦", val);
    }
}