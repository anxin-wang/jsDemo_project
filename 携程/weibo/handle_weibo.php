<?php include('head_config.php') ?>
<body>
	<?php include('nav.php') ?>
	<div class="main-container handle-weibo">
		<div class="breadcrumb">
			处理投诉微博
		</div>
		<ul class="weibo-list">
			<li class="weibo">
				<div class="weibo-info">
					编号：121112000001&emsp;信息来源：搜索&emsp;时间：2012-08-09 14:34:48
				</div>
				<div class="weibo-content">
					<strong>携程旅行网</strong>&emsp;&emsp;来自新浪企业版微博
					<p>#转发赢Surface 拍年味赢单反#赶集办年货，贴贴红春联，窗外年味正浓，屋内年饭正香……关注@携程旅行网 +转发微博 赢Surface平板庆新年！转发有奖，上传年味照片更有奖！2月25日前，以#2013新年味#为主题，@携程旅行网 随手拍新年，尼康单反大奖送给你！ http://t.cn/zY4hbh0</p>
				</div>
				<div class="weibo-footer">
					<div class="weibo-btn"><a href="handle_weibo.php">交接</a>|<a href="handle_weibo.php">继续处理</a></div>
					<!--查看，开始处理 -->
					状态：<em title="最后操作人：王向">已分配</em>&emsp;&emsp;
					<!--未分配（没有title）,已处理-投诉已删,处理中-投诉已删,处理中,已处理-->
					分类：投诉<a href="#">修改</a>&emsp;&emsp;
				</div>
			</li>
		</ul>
		<div class="mod mod-gray">
			<p>
				原微博
			</p>
			<div>
				<span class="commentator-name">笑冰冰：</span>携程，请问你们的客服在搞什么灰机？
			</div>
		</div>

		<a href="#" class="expand-related">点击展开关联信息</a>
		<p>有3条关联信息，可勾选进行批量操作</p>
		<div class="weibo-related">
			<p>以下关联信息可勾选进行批量操作</p>
			<ul class="weibo-list">
				<?php for($i=0; $i<4; $i++){ ?>
				<li class="label-box">
					<label class="checkbox">
						<input type="checkbox" />
					</label>
				</li>
				
				<li class="weibo">
					<div class="weibo-info">
						
						编号：121112000001&emsp;信息来源：搜索&emsp;时间：2012-08-09 14:34:48
						
					</div>
					<div class="weibo-content">
						<strong>携程旅行网</strong>&emsp;&emsp;来自新浪企业版微博
						<p>#转发赢Surface 拍年味赢单反#赶集办年货，贴贴红春联，窗外年味正浓，屋内年饭正香……关注@携程旅行网 +转发微博 赢Surface平板庆新年！转发有奖，上传年味照片更有奖！2月25日前，以#2013新年味#为主题，@携程旅行网 随手拍新年，尼康单反大奖送给你！ http://t.cn/zY4hbh0</p>
					</div>
					<div class="weibo-footer">
						<div class="weibo-btn"><a href="handle_weibo.php">交接</a>|<a href="handle_weibo.php">继续处理</a></div>
						<!--查看，开始处理 -->
						状态：<em title="最后操作人：王向">已分配</em>&emsp;&emsp;
						<!--未分配（没有title）,已处理-投诉已删,处理中-投诉已删,处理中,已处理-->
						分类：投诉<a href="#">修改</a>&emsp;&emsp;
						
						
					</div>
				</li>
				<?php } ?>
				<li class="title-box">以下关联信息已由他人处理，不可进行批量操作</li>
				<li class="weibo no-batch-processing">
					<div class="weibo-info">
						编号：121112000001&emsp;信息来源：搜索&emsp;时间：2012-08-09 14:34:48
					</div>
					<div class="weibo-content">
						<strong>携程旅行网</strong>&emsp;&emsp;来自新浪企业版微博
						<p>#转发赢Surface 拍年味赢单反#赶集办年货，贴贴红春联，窗外年味正浓，屋内年饭正香……关注@携程旅行网 +转发微博 赢Surface平板庆新年！转发有奖，上传年味照片更有奖！2月25日前，以#2013新年味#为主题，@携程旅行网 随手拍新年，尼康单反大奖送给你！ http://t.cn/zY4hbh0</p>
					</div>
					<div class="weibo-footer">
						<div class="weibo-btn"><a href="handle_weibo.php">交接</a>|<a href="handle_weibo.php">继续处理</a></div>
						<!--查看，开始处理 -->
						状态：<em title="最后操作人：王向">已分配</em>&emsp;&emsp;
						<!--未分配（没有title）,已处理-投诉已删,处理中-投诉已删,处理中,已处理-->
						分类：投诉<a href="#">修改</a>&emsp;&emsp;
					</div>
				</li>
			</ul>

		</div>
		<!--Comment Tabs-->
		<ul class="nav nav-tabs comment-tabs">
			<li class="active">
				<a href="#">评论微博</a>
			</li>
			<li>
				<a href="#">操作日志</a>
			</li>
		</ul>
		<div class="comment-weibo">
			<!--新建微博-->
			<div class="new-weibo popup">
				<div class="popup-bd">
					<div>
						<span class="remain-letters">还可以输入140字</span>
						回复模板:
						<select>
							<option>空白模板</option>
							<option>模板一</option>
							<option>模板二</option>
							<option>模板三</option>
						</select>
						
					</div>
					<div>
						<textarea rows="3" cols="20"></textarea>
</div>					<div>
						<div class="press-btn">
							<button type="button" class="btn" style="display:none;">
								发送私信
							</button>
							<button type="button" class="btn">
								评论并转发
							</button>
							<button type="button" class="btn btn-primary">
								评论
							</button>
						</div>
						<div class="emotion">
							<ul>
								<li><img src="http://pic.c-ctrip.com/offline/weibo/smilea_thumb.gif" alt=""/>
								</li>
								<li><img src="http://pic.c-ctrip.com/offline/weibo/tootha_thumb.gif" alt=""/>
								</li>
								<li><img src="http://pic.c-ctrip.com/offline/weibo/laugh.gif" alt=""/>
								</li>
								<li><img src="http://pic.c-ctrip.com/offline/weibo/tza_thumb.gif" alt=""/>
								</li>
								<li><img src="http://pic.c-ctrip.com/offline/weibo/shamea_thumb.gif" alt=""/>
								</li>
								<li><img src="http://pic.c-ctrip.com/offline/weibo/smilea_thumb.gif" alt=""/>
								</li>
								<li><img src="http://pic.c-ctrip.com/offline/weibo/88_thumb.gif" alt=""/>
								</li>
								<li><img src="http://pic.c-ctrip.com/offline/weibo/mb_thumb.gif" alt=""/>
								</li>
							</ul>
							<div class="btn-group">
								<a class="btn dropdown-toggle" data-toggle="dropdown" href="#"> 更多表情 <span class="caret"></span> </a>
							</div>
							<img src="http://pic.c-ctrip.com/offline/weibo/emotion_list.png" alt=""/>
						</div>
						
					</div>
				</div>
			</div>
			<!--评论列表-->
			<ul class="comment-list">
				<li>
					<div>
						<span class="commentator-name">笑冰冰：</span>
						<span class="comment-content">我的携程登录名是xiaobingbing，订单号12345678。</span>
						<span class="comment-time">(2012-08-10 14:35:01)</span>
					</div>
					<div class="operation-btn-list">
						<a href="">评论</a>
					</div>
				</li>
				<li>
					<div>
						<span class="commentator-name">携程客服：</span>
						<span class="comment-content">请你尽快提供订单号，以便我们核实并做出善后安排，谢谢。订单号可以通过您访问携程账号来查询，如果出现问题，请向工作人员咨询。</span>
						<span class="comment-time">(2012-08-10 14:35:01)</span>
					</div>
					<div class="operation-btn-list">
						<a href="">删除</a><span>|</span><a href="">评论</a>
					</div>
				</li>
				<li>
					<div>
						<span class="commentator-name">笑冰冰：</span>
						<span class="comment-content">@携程客服 请尽快解决问题</span>
						<span class="comment-time">(2012-08-10 14:35:01)</span>
					</div>
					<div class="operation-btn-list">
						<a href="">评论</a>
					</div>
					<div>
						<input class="input-xxlarge text" type="text" placeholder="请输入评论..." />
						<button type="button" class="btn btn-small btn-primary">
							评论
						</button>
					</div>
				</li>
				<!--分页-->
			<div class="pager">
				<div class="page-simple">
					<a href="###" class="page-ctrl disable"><b class="left"></b></a>
					<a href="###" class="current">1</a>
					<a href="###">2</a>
					<a href="###">3</a>
					<a href="###">4</a>
					<span class="ellipsis">...</span>
					<a href="###">99</a>
					<a href="###">100</a>
					<a href="###" class="page-ctrl"><b class="right"></b></a>
				</div>
			</div>
			</ul>
			

		</div>
		<div class="">
			<table class="table table-hover table-level1">
				<thead>
					<tr>
						<th>编号</th>
						<th>操作时间</th>
						<th>操作人员</th>
						<th>操作内容</th>
						<th>备注</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>65464</td>
						<td>2012-08-09 14:40:33</td>
						<td>王向</td>
						<td>结束处理</td>
						<td>备注备注备注备注备注备注备注</td>
					</tr>
					<tr>
						<td>65464</td>
						<td>2012-08-09 14:41:59</td>
						<td>王向</td>
						<td>发表评论</td>
						<td>备注备注备注备注备注备注备注</td>
					</tr>
					<tr>
						<td>65464</td>
						<td>2012-10-22 15:46:43</td>
						<td>王向</td>
						<td>开始微博处理</td>
						<td>备注备注备注备注备注备注备注</td>
					</tr>
					<tr>
						<td>65464</td>
						<td>2013-01-25 14:12:38</td>
						<td>王向</td>
						<td>将微博设置“投诉”类型</td>
						<td>备注备注备注备注备注备注备注</td>
					</tr>
					<tr>
						<td>65464</td>
						<td>2013-01-25 14:13:10</td>
						<td>王向</td>
						<td>将微博设置“咨询”类型</td>
						<td>备注备注备注备注备注备注备注</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!--删除评论Mask-->
		<div class="mask" style="width:350px;">
            <div class="mask-hd">
				<a href="###" class="mask-close">×</a>信息提醒
			</div>
			<div class="mask-bd">
				<p>
					确认删除该评论吗？
				</p>
				<button type="button" class="btn btn-small btn-primary">
					确认
				</button>
				<button type="button" class="btn btn-small">
					返回
				</button>
			</div>
		</div>
	</div>
	<div class="aside">
		<?php include('sidebar.php') ?>
	</div>

</body>
</html>