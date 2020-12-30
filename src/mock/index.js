import Mock from "mockjs"


const data=Mock.mock({
    "list|4":[{
        title:"@ctitle",
        id:"@id",
        "children|4":[{
            "info":"@cword(10)",
            "id":"@id",
            "background":"@color",
            "img":"@image(100x100,@color)"
        }]
    }]
})

Mock.mock("/api/classify","post",(req)=>{
    return {
        code: '000',
        msg: '请求成功',
        data
    }
})