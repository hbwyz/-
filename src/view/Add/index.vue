<template>
    <div class="add" :style="{background:info.background}">

            <van-field
            v-model="info.info"
            rows="2"
            autosize
            label="留言"
            type="textarea"
            maxlength="50"
            placeholder="请输入留言"
            show-word-limit
            />
        <div class="imgs">
    
        <img :src="info.imgs" alt="">
            <van-uploader :after-read="afterRead" />
          </div>

          <ul>
              <li 
              v-for="(item,index) in backgroundList"
              :key="index"
              :style="{background:item,height:'30px'}"
              @click="changeBack(item)"
              >
                  
              </li>
          </ul>

          <button @click="prevInfo">点击预览</button>
          <Dialog v-if="isShow" :info="info" @cloaseDialog="prevInfo" />
    </div>
</template>

<script>
import Dialog from "@/components/Dialog"
export default {
    name:"add",
    components:{
        Dialog
    },
    data () {
        return {
            isShow:false,
            info:{
                info:"",
                imgs:"",
                background:""
            },
            backgroundList:["yellow","Hotpink","skyblue"]
        }
    },
  methods: {
    afterRead(file) {
       this.info={
           ...this.info,
           imgs:file.content
       }
    },
    changeBack(item){
       this.info={
           ...this.info,
           background:item
       }
    },
    prevInfo(){//点击切换
        this.isShow=!this.isShow
       
    }
  },
};

</script>

<style> 
    .imgs{
       width: 200px;
       height: 200px;
       display: flex;
    }
    .imgs>img{
        width: 50%;
        height: 50%;
    }
</style>