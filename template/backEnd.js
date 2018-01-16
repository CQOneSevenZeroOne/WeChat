var express = require("express");
var app = express();
var mysql = require("mysql");
//创建数据库连接
var connect = mysql.createConnection({
	host:'10.40.153.73',
	user:'pyj',
	password:'123',
	database:'wechat'
});
// 处理post请求的请求体模块
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//开始连接
connect.connect();
app.post("/getChatList",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query('SELECT * FROM chat', function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
app.post("/getMessAll",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM person_info where id = ${req.body.id}`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//登录
app.post("/login",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT id FROM person_info where my_name = '${req.body.username}' and password = '${req.body.password}'`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//搜索
app.post("/getSearchList",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log(req.body.sea)
	connect.query(`SELECT * FROM chat where mycont like '%${req.body.sea}%' or youcont like '%${req.body.sea}%'`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//监听端口
app.listen(3000);
console.log("开启服务器");