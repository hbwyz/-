<template>
    <div class="dialog" :style="{background:info.background}">
           <div @click="cloaseDialog">点击关闭</div>
           <p>{{info.info}}</p>
           <img :src="info.imgs" :style="{width:'100%'}" alt="">
           
    </div>
</template>

<script>
export default {
  name:"dialog",
  props:{
      info:{
         
      }
  },
  data () {
      return {
          
      }
  },
  methods:{
      cloaseDialog(){
          this.$emit("cloaseDialog")
      }
  }
}
</script>

<style>
   .dialog{
       width: 100%;
       height: 100%;
       position: fixed;
       background: #eee;
       left: 0;
       top: 0;
   }
</style>