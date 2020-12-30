import Vue from 'vue'
import Router from 'vue-router'

import Layout from "../Layout"

import Detail from "@/view/Detail"

import Home from "@/view/Home"
import Add from "@/view/Add"
import Classify from "@/view/Classify"


Vue.use(Router)

export default new Router({
  routes: [
    {
        path:"/layout",
        name:"layout",
        component:Layout,
        children:[
          {
            path:"/home",
            component:Home,
            title:"首页"
          },{
            path:"/add",
            component:Add,
            title:"添加"
          },{
            path:"/classify",
            component:Classify,
            title:"分类"
          }
        ]
    },
    {
       path:"/detail/:id",
       components:Detail
    },{
      path:"/",
      redirect:"/layout"
    }
  ]
})
