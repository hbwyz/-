<template>
    <div class="classify">
           <h3>分组</h3>
           <div v-for="(item,index) in classifyList" :key="index"  @click="toDetail(item)">
                   <p >{{item.title}}</p> 
           </div>
    </div>
</template>

<script>
import {getClassify} from "@/api"
export default {
      name:"classify",
      data () {
          return {
              classifyList:[]
          }
      },
      created(){
          this.getclassify()
      },
      methods:{
          getclassify(){
             getClassify().then(res=>{
                 console.log(res);
                 this.classifyList=res.data.list
             })
          },
          toDetail(item){
              
              console.log(this.$router)
              this.$router.history.path=`/detail/${item.id}`
         
          }
      }
}
</script>

<style>
  
</style>