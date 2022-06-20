// 1.引入express
const express=require('express');

// 2.创建应用对象
const app=express();

// 3.创建路由规则
 // request是对请求报文的封装
 // response是对响应报文的封装

// jsonp服务
app.all('/jsonp-server',(request,response)=>{
    // response.send('hello jsonp-server');   会报错，应该返回 函数调用的内容（js代码）
    // response.send('console.log("hello jsonp-server")');

    const data={
        name:'尚硅谷'
    };
    //  将数据转化为字符串
    let str=JSON.stringify(data);
    // 返回结果
    response.end(`handle(${str})`)    // 用end不用send 因为end不会加特殊响应头
    // 注：返回结果的形式是函数调用  函数参数是我们想给客户端返回的结果数据  （函数要提前声明）
});

// jsonp案例 检测用户名是否存在
app.all('/check-name-server',(request,response)=>{
    const data={
        exist:1,
        msg:'用户名已经存在'
    };
    //  将数据转化为字符串
    let str=JSON.stringify(data);
    // 返回结果
    response.end(`handle(${str})`);    // 用end不用send 因为end不会加特殊响应头
    // 注：返回结果的形式是函数调用  函数参数是我们想给客户端返回的结果数据  （函数要提前声明）
});



// jQuery发送jsonp请求
app.all('/jquery-jsonp-server',(request,response)=>{
    const data={
        name:'尚硅谷',
        city:['北京','上海','西安']
    };
    //  将数据转化为字符串
    let str=JSON.stringify(data);

    // 接收callback参数
    let cb=request.query.callback;

    // 返回结果
    response.end(`${cb}(${str})`)    // 用end不用send 因为end不会加特殊响应头
    // 注：返回结果的形式是函数调用  函数参数是我们想给客户端返回的结果数据  （函数要提前声明）
});

// 4.监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中....");
})
