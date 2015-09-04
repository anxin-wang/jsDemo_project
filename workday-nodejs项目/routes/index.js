var report_routes = require('../routes/report');
module.exports = function(app){
	/*index router*/
	app.get('/',function(req, res){
	  res.render('index', { title: '首页' });
	});
	app.get('/index',function(req, res){
	  workdayDao.findWorks(req,function(data){
	  	res.render('index', { title: '首页', data:data});
	  });
	});

	// 输入查询信息
	report_routes.report(app);
	
	//发送邮件
	app.get('/sendMail',function(req, res){
		res.render('sendMail', { title: '发送邮件' });
	});
	app.post('/sendMail',function(req, res){
		var $tomail = req.body.Tomail;
		var $title = req.body.title;
		var $content = req.body.content;
		
		res.render('sendMail', { title: '发送邮件' });
	});
}