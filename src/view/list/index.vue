<template>
     <div>
         列表
         <br>
         <button @click="toDetail">详情也as</button>
     </div>
</template>

<script>
export default {
    name:"detail",
    methods:{
        toDetail(){
            this.$router.push('/detail')
        }
    },
    created:{
        
    }
}
</script>