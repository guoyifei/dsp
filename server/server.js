const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const app = express()
app.use(bodyParser.json())
//静态文件
app.use(express.static('./'));
let api = require('./api.js')

// //token验证
// function verifyToken(token){
//     return new Promise((resolve,reject)=>{
//         jwt.verify(token,'1511',function(err,decoded){
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(decoded)
//             }
//         })
//     })
// }

//设置跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080")
    res.header("Access-Control-Allow-Headers", "Content-Type,Token,plantform")//允许设置请求头字段
    res.header("Content-Type", "application/json;charset=utf-8")//响应文件类型
    // verifyToken(req.headers.token).then(res=>{
    //     console.log(res)
    // })
    next()
})

api(app)
app.listen(9000, function () {
    console.log('server listen 9000')
})
