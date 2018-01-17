var express = require("express");
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
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
//获取当前登录者的所有信息
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
	connect.query(`SELECT * FROM person_info where phone = '${req.body.username}' and password = '${req.body.password}'`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//搜索
app.post("/getSearchList",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM chat where mycont like '%${req.body.sea}%' or youcont like '%${req.body.sea}%'`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//修改名字
app.post("/changeName",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`UPDATE person_info SET my_name='${req.body.name}' WHERE id = '${req.body.id}'`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//修改性别
app.post("/changeSex",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`UPDATE person_info SET sex='${req.body.sex}' WHERE id = '${req.body.id}'`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//根据用户id获取当前用户的动态信息
app.post("/getTrend",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM person_trend where person_id = ${req.body.id} ORDER BY time desc`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//聊天
io.on("connection",function(socket){
	socket.on("addUser",function(data){
		console.log(socket.id);
		console.log(data);
	})
})
//监听端口
server.listen(3000);
console.log("开启服务器");