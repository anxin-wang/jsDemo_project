var workdayDao = require('../dao/workdayDao');
exports.report = function(app){
	/*list router*/
	app.get('/r/list',function(req, res){
	  workdayDao.findWorks(req,function(data){
	  	res.render('report/list', { title: '日报列表', data:data});
	  });
	});

	/*add router*/
	app.get('/r/add',function(req, res){
	  res.render('report/add', { title: '添加日报' });
	});
	app.post('/r/add',function(req, res){
		// 保存信息
		workdayDao.saveWork(req,function(data){
			console.log(data.status);
			if(data.status){
				res.redirect('/r/list');
			}else{
				console.log(data.msg);
			}
		});
	});

	/*delete router*/
	app.get('/r/delete/:id',function(req, res){
		// 删除信息
		workdayDao.deleteWork(req,function(data){
			if(data.status){
				res.redirect('/r/list')
			}else{
				console.log(data.msg);
			}
		});
	});

	/*edit router*/
	app.get('/r/edit/:id',function(req, res){
		var $id = req.params.id;
		//查询数据
		workdayDao.findOneWord(req,function(info){
		   var data = info.doc[0];
		   if(info.status){
		   	  res.render('report/edit', { title: '修改日报',data:data});
		   }else{
		   	  console.log(info.msg);
		   }
		});
		
	});

	app.post('/r/edit',function(req, res){
		//修改数据
		workdayDao.editOneWork(req,function(data){
			res.render('report/list', { title: '修改日报',data:data});
		});
	});

	//
	app.get('/r/full',function(req, res){
		res.render('report/full',{ title:'日历'});
	});
}