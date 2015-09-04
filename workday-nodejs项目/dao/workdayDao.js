var util = require('util');
var logger = require('../tools/log4js').logger;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto'); //加密类库
/*
 * 日报DAO
 * 日报信息
 * */
var WorkObj = {
	title:String,
	content:String,
	sdate:String
}
var WorkSchema = new Schema(WorkObj);
var WorkModel = mongoose.model('tab_works',WorkSchema); // 表明 tab_works

// 保存数据
exports.saveWork = function(req,callback){
	var title = req.body.title;
	var Work = new WorkModel(req.body);//保存数据
	var info = {};//返回信息接口 例子 info = {'status':'1','msg':'保存成功'}
	if(title!==""){
		//保存数据
		Work.save(function(err){
			if(err){
				logger.info('dao->saveWork->' + err);//输出日志 
				info = {'status':'0','msg':'日报填写失败'};
			}else{
		    	info = {'status':'1','msg':'用户填写成功'};
		    }
			callback(info);
		});
	}
}

// 查询所有数据
exports.findWorks = function(req,callback){
	WorkModel.find(function(err,doc){
		if(err){
			logger.info('dao->findWorks->' + err);//输出日志 
	    }else{
	    	callback(doc);
	    }
	}).sort({'_id':-1});
}

// 删除单一数据
exports.deleteWork = function(req,callback){
   var $id = req.params.id;
   var $conditions = {'_id':$id};
   WorkModel.find($conditions, function(err,doc){
		if(err){console.log(err);}
		else{
	   		WorkModel.remove($conditions,function(error){
	   			if(error){logger.info('dao->删除失败->' + err);}
	   			else{
	   				info = {'status':'1','msg':'删除成功'};
	   				callback(info);
	   			}
	   		})
	    }
	});
}

// 修改数据
exports.editOneWork = function(req,callback){
	var $id = req.body._id;
	var $title = req.body.title;
	var $content = req.body.content;
	var $sdate = req.body.sdate;
	var $conditions = {'_id':$id};
	var $update =  {$set:{title:$title,content:$content,sdate:$sdate}};
	var info = {'status':'0','msg':'修改失败'};
	WorkModel.update($conditions,$update,{},function(err,doc){
		if(err){logger.info('dao->修改失败->' + err);}
		else{
			exports.findWorks(req,callback); //返回所有数据列表
		}
	})
}

// 查询单一数据
exports.findOneWord = function(req,callback){
	var $id = req.params.id;
    var $conditions = {'_id':$id};
    WorkModel.find($conditions, function(err,doc){
		if(err){console.log(err);}
		else{
			info = {'status':'1','msg':'查询成功','doc':doc};
	   		callback(info); //返回查询数据
	    }
	});
}