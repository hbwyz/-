import axios  from "axios"

function request(options){
    let {
        url={},
        method="get",
        params={},
        data={},
        headers={}
    }=options

    return new Promise((resolve,reject)=>{
         axios({
             url,
             method,
             params,
             data,
             headers
         }).then(res=>{
            resolve({
                code:"000",
                msg:"请求成功",
                data:res.data.data
            })
         }).catch(err=>{
             reject({
                 code:"001",
                 msg:"请求失败"
             })
         })
    })
}

export default request