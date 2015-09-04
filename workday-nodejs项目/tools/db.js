/**
 * 链接数据库公用类库
 */
var mongoose = require('mongoose');
var config = require('../config');
var dburl = config.dburl;//数据库地址
mongoose.connect(dburl);
/*启动数据库*/
mongoose.connection.on('connected',function(){
    console.log( "数据库启动成功！"+ dburl);
});
mongoose.connection.on('error',function(err){
    console.log( "数据库启动失败"+ err);
});
mongoose.connection.on('disconnected',function(){
    console.log( "数据库关闭" );
});
process.on('SIGINT',function(){
	mongoose.connection.close(function(){
		console.log('意外终止程序关闭 ');
		process.exit(0);
	});
});
exports.mongoose = mongoose;//导出
