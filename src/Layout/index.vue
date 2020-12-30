<template>
    <div class="layout-box">
        <div class="layout-body">
            <router-view></router-view>
        </div>
        <div class="layout-footer">
            <div v-for="(item, idx) in footerList" :key="idx" @click="toRoter(item.path)" class="footer-item">
                {{item.title}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'layout',
    data() {
        return {
            footerList: []
        }
    },
    created() {
        this.footerList = this.$router.options.routes.find(item => item.name === 'layout').children
        console.log(this.footerList)
    },
    methods: {
        toRoter(path) {
            this.$router.push(path)
        }
    }
}
</script>

<style scoped>
.layout-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column
}

.layout-body {
    flex: 1;
}

.layout-footer {
    height: 50px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
}
.footer-item {
    flex: 1;
    display: flex;
    justify-content: center;
}
</style>

