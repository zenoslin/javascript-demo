<template>
    <div class="long-list" @scroll="onScroll"><slot></slot></div>
</template>

<script>
export default {
    name: 'longList',
    props: {
        loading: {
            default: false,
        },
        finished: {
            default: false,
        },
        loadDistance: {
            default: 20,
        },
    },
    methods: {
        onScroll(event) {
            if (this.loading || this.finished) return;
            if (event.srcElement.scrollTop + event.srcElement.offsetHeight >= event.srcElement.scrollHeight - this.loadDistance) {
                this.$emit('load');
            }
        },
    },
};
</script>

<style lang="less" scoped>
.long-list {
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
