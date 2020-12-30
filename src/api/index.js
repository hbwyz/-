import request from "@/utils/request"


export function getClassify(data){
    return request({
        url:"/api/classify",
        method:"post",
        data
    })
}