// 1.引入express
const express=require('express');

// 2.创建应用对象
const app=express();

// 3.创建路由规则
 // request是对请求报文的封装
 // response是对响应报文的封装
 
app.get('/server',(request,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send('HELLO AJAX --');
});

//可以接收任意类型的请求
app.all('/json-server',(request,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    // 响应一个数据
    const data={
        name:'atguigu'
    };
    //对对象进行字符转换
    let str=JSON.stringify(data);
    // 设置响应体
    //response.send('HELLO AJAX JSON');
    response.send(str);
});

// 针对IE缓存
app.get('/ie',(request,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send('HELLO IE  --');
});

// 延时响应
app.all('/delay',(request,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // 设置定时器
    setTimeout(()=>{
        // 设置响应体
        response.send('延时响应');
    },3000)
    
});

// jQuery 服务
app.all('/jquery-server',(request,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // 设置响应体
    // response.send('Hello jQuery AJAX');
    const data={name:'尚硅谷'};
    response.send(JSON.stringify(data));
});

// axios 服务
app.all('/axios-server',(request,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // 设置响应体
    // response.send('Hello jQuery AJAX');
    const data={name:'尚硅谷'};
    response.send(JSON.stringify(data));
});

// fetch 服务
app.all('/fetch-server',(request,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // 设置响应体
    // response.send('Hello jQuery AJAX');
    const data={name:'尚硅谷'};
    response.send(JSON.stringify(data));
});

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
app.all('/check-name',(request,response)=>{
    const data={
        exist:1,
        msg:'用户名已经存在'
    };
    //  将数据转化为字符串
    let str=JSON.stringify(data);
    // 返回结果
    response.end(`handle(${str})`)    // 用end不用send 因为end不会加特殊响应头
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

// cors
app.all('/cors-server',(request,response)=>{
    // 设置响应头  (不止这一个响应头，官方设置了一组响应头)
    response.setHeader("Access-Control-Allow-Origin","*");  // * 通配所有网页
    response.setHeader('Access-Control-Allow-Headers','*');
    response.setHeader('Access-Control-Allow-Method','*');
    response.send('hello CORS');
});

// 4.监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中....");
})
