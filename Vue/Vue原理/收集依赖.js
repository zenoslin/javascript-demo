class Dep {
    constructor() {
        // 存储所有的依赖
        this.deps = []
    }
    // 在deps中添加一个监听器对象
    addDep(dep) {
        this.deps.push(dep)
    }
    // 通知所有监听器去更新视图
    notify() {
        this.deps.forEach((dep) => {
            dep.update()
        })
    }
}

class Compile {
    constructor(el, vm) {
        this.$vm = vm
        this.$el = document.querySelector(el)
        if (this.$el) {
            this.Sfragment = this.node2Fragment(this.$el)
            this.compileElement(this.Sfragment)
            this.Sel.appendChild(this.$fragment)
        }
    }
    node2Fragment(el) {
        // 新建文件碎片 dom借口
        let fragment = document.createDocumentFragment()
        let child
        // 将原生节点拷贝到fragment
        while (child = el.firstChild) {
            fragment.appendChild(child)
        }
        return fragment
    }
}

class Watcher {
    constructor(vm, key, cb) {
        // 然后触发属性的 getter 添加监听
        // 最后将 Dep.target 置空
        this.cb = cb
        this.vm = vm
        this.key = key
        this.value = this.get()
    }
    get() {
        Dep.target = this
        let value = this.vm[this.key]
        return value
    }
    update() {
        this.value = this.get()
        this.cb.call(this.vm, this.value)
    }
}

class Vue {
    constructor(options) {
        this.observer(this.$data)
        if (options.created) {
            options.created.call(this)
        }
        //编译模版
        this.$compile = new Compile(options.el, this)
    }

    observer(value) {
        if (!value || (typeof value !== 'object')) {
            return
        }
        Object.keys(value).forEach((key) => {
            this.proxyData(key)
            this.defineReactive(value, key, value[key])
        })
    }
    defineReactive(obj, key, val) {
        const dep = new Dep()
        Object.defineProperty(obj, key, {
            get() {
                //添加依赖
                Dep.target && dep.addDep(Dep.target)
                return val
            },
            set(newVal) {
                if (newVal === val) return
                val = newVal
                dep.notify()
            }
        })
    }
}