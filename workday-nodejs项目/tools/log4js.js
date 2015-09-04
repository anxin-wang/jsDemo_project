var log4js = require('log4js');
/*配置文件*/
log4js.configure({
    appenders: [
        {
            type: 'console',
            category: "console"
        }, //控制台输出
        {
            type: "dateFile",
            filename: 'logs/log.log',
            pattern: "_yyyy-MM-dd",
            alwaysIncludePattern: false,
            category: 'myLog'
        }//日期文件格式
    ],
    replaceConsole: true,   //替换console.log
    levels:{
        dateFileLog: 'INFO'
    }
});
var dateFileLog = log4js.getLogger('myLog');
exports.logger = dateFileLog;
exports.use = function(app) {
    //页面请求日志,用auto的话,默认级别是WARN
	//app.use(log4js.connectLogger(dateFileLog, {level:'auto', format:':method :url'}));
    app.use(log4js.connectLogger(dateFileLog, {level:'debug', format:':method :url'}));
}
