
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , ejs = require('ejs')
  , path = require('path');

var app = express();
var siteMap = require('./siteMap.json'); // 网站配置
var log4js = require('./tools/log4js');// 日志输出
var connect = require('./tools/db'); //创建数据库链接
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('html', require('ejs-mate'));
app.locals._layoutFile = 'layout.html';
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.locals.config = siteMap;
app.use(app.router);
routes(app);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
