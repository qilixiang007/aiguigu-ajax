const express = require('express');

const app=express();

app.get('/home',(request,response)=>{
    //响应一个页面
    response.sendFile(__dirname+'/index.html');
});

// 在服务端再加一些规则
app.get('/data',(request,response)=>{
    response.send('这里是用户数据');
})

app.listen(9000,()=>{
    console.log("服务已经启动，9000端口...");
})