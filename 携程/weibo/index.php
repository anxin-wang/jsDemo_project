<?php include('head_config.php') ?>
<body>
	<?php include('nav.php') ?>
	<div class="main-container index">
		<div class="breadcrumb">
			<a href="#">微博大厅</a>&ensp;&gt;&ensp;投诉微博
		</div>
		<div class="search-bar">
			<select>
				<option>发布时间由近到远</option>
				<option>发布时间由近到远</option>
				<option>重要性由高到低</option>
			</select>
			<a href="#">自定义查询<span class="caret"></span></a>
		</div>
		<?php include('weibo_list.php') ?>
		<div class="mask weibo-type-list">
			<div class="mask-hd">
				修改数据类型
			</div>
			<div class="mask-bd">
				<ul>
					<li>
						<label>
							<input type="radio" value="" name="weibo_type"/>
							建议</label>
					</li>
					<li>
						<label>
							<input type="radio" value="" name="weibo_type"/>
							咨询</label>
					</li>
					<li>
						<label>
							<input type="radio" value="" name="weibo_type"/>
							表扬</label>
					</li>
					<li>
						<label>
							<input type="radio" value="" name="weibo_type"/>
							其他</label>
					</li>
					<li>
						<label>
							<input type="radio" value="" name="weibo_type"/>
							活动</label>
					</li>
					<li>
						<label>
							<input type="radio" value="" name="weibo_type"/>
							无关</label>
					</li>
				</ul>
				<button type="button" class="btn btn-small btn-primary">
					确认
				</button>
				<button type="button" class="btn btn-small">
					取消
				</button>
			</div>
		</div>
		<div class="mask weibo-worker-list">
			<div class="mask-hd">
				交接给
			</div>
			<div class="mask-bd">
				<a class="btn dropdown-toggle" data-toggle="dropdown" href="#"> 主管 <span class="online-status"></span> <span class="caret"></span> </a>
				<ul class="dropdown-menu">
					<li>
						主管<span class="online-status"></span>
					</li>
					<li>
						操作员甲<span class="offline-status"></span>
					</li>
					<li>
						操作员乙<span class="offline-status"></span>
					</li>
				</ul>
				<p>
					说明
				</p>
				<textarea></textarea>
				<button type="button" class="btn btn-small btn-primary">
					确认
				</button>
				<button type="button" class="btn btn-small">
					取消
				</button>
			</div>
		</div>
		<div class="popup weibo-related">
			<div class="popup-hd">
				<a href="###" class="popup-close">×</a>共有3条关联信息
			</div>
			<div class="popup-bd">
				<ul class="weibo-list">
					<?php for($i=0; $i<4; $i++){ ?>
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
				</ul>
			</div>
		</div>
		<div class="mask custom-query">
			<div class="mask-hd">
				自定义查询
			</div>
			<div class="mask-bd">
				<ul>
					<li>
						<label class="keyword">关键词
							<input class="input-xlarge" type="text" placeholder="" />
						</label>
					</li>
					<li>
						<label>微博昵称
							<input class="input-small" type="text" placeholder="" />
						</label>
						<label>用户类型
							<select>
								<option>主管<span></span></option>
								<option>操作员甲<span></span></option>
								<option>操作员乙<span></span></option>
							</select> </label>
					</li>
					<li>
						<label>微博昵称
							<input class="input-small" type="text" placeholder="" />
						</label>
						<label>用户类型
							<select>
								<option>主管<span></span></option>
								<option>操作员甲<span></span></option>
								<option>操作员乙<span></span></option>
							</select> </label>
					</li>
					<li>
						<label>用户类型
							<select>
								<option>主管<span></span></option>
								<option>操作员甲<span></span></option>
								<option>操作员乙<span></span></option>
							</select> </label>
						<label>用户类型
							<select>
								<option>主管<span></span></option>
								<option>操作员甲<span></span></option>
								<option>操作员乙<span></span></option>
							</select> </label>
					</li>
					<li class="time">
						<span>微博发布时间</span>
						<input class="input-mini" type="text" placeholder="" />
						<div class="timer">
							<input class="input-mini" type="text" placeholder="" />
							<div>
								<button type="button">
									<span class="up-arrow"></span>
								</button>
								<button type="button">
									<span class="down-arrow"></span>
								</button>
							</div>
						</div>
						<span>至</span>
						<input class="input-mini" type="text" placeholder="" />
						<div class="timer">
							<input class="input-mini" type="text" placeholder="" />
							<div>
								<button type="button">
									<span class="up-arrow"></span>
								</button>
								<button type="button">
									<span class="down-arrow"></span>
								</button>
							</div>
						</div>
					</li>
					<li class="time last">
						<span>结束处理时间</span>
						<input class="input-mini" type="text" placeholder="" />
						<div class="timer">
							<input class="input-mini" type="text" placeholder="" />
							<div>
								<button type="button">
									<span class="up-arrow"></span>
								</button>
								<button type="button">
									<span class="down-arrow"></span>
								</button>
							</div>
						</div>
						<span>至</span>
						<input class="input-mini" type="text" placeholder="" />
						<div class="timer">
							<input class="input-mini" type="text" placeholder="" />
							<div>
								<button type="button">
									<span class="up-arrow"></span>
								</button>
								<button type="button">
									<span class="down-arrow"></span>
								</button>
							</div>
						</div>
					</li>
				</ul>

				<button type="button" class="btn btn-small btn-primary">
					查询
				</button>
				<button type="button" class="btn btn-small">
					关闭
				</button>
			</div>
			<div class="calendar" style="display:none;">
				<div class="cal_title">
					<a class="last-month" href="javascript:;"></a><a class="next-month" href="javascript:;"></a>2012-10
				</div>
				<ul class="week clearfix">
					<li class="weekend">
						日
					</li>
					<li>
						一
					</li>
					<li>
						二
					</li>
					<li>
						三
					</li>
					<li>
						四
					</li>
					<li>
						五
					</li>
					<li class="weekend">
						六
					</li>
				</ul>
				<div class="date clearfix">
					<a class="disable" href="javascript:;"></a>
					<a class="disable" href="javascript:;"></a>
					<a class="disable" href="javascript:;">1</a>
					<a class="disable" href="javascript:;">2</a>
					<a class="disable" href="javascript:;">3</a>
					<a class="disable" href="javascript:;">4</a>
					<a class="disable" href="javascript:;">5</a>
					<a class="disable" href="javascript:;">6</a>
					<a class="disable" href="javascript:;">7</a>
					<a class="disable" href="javascript:;">8</a>
					<a class="disable" href="javascript:;">9</a>
					<a class="today" href="javascript:;">10</a>
					<a href="javascript:;">11</a>
					<a href="javascript:;">12</a>
					<a href="javascript:;">13</a>
					<a class="select-day" href="javascript:;">14</a>
					<a href="javascript:;">15</a>
					<a href="javascript:;">16</a>
					<a href="javascript:;">17</a>
					<a href="javascript:;">18</a>
					<a href="javascript:;">19</a>
					<a href="javascript:;">20</a>
					<a href="javascript:;">21</a>
					<a href="javascript:;">22</a>
					<a href="javascript:;">23</a>
					<a href="javascript:;">24</a>
					<a href="javascript:;">25</a>
					<a href="javascript:;">26</a>
					<a href="javascript:;">27</a>
					<a href="javascript:;">28</a>
					<a href="javascript:;">29</a>
					<a href="javascript:;">30</a>
					<a href="javascript:;">31</a>
					<a class="disable" href="javascript:;"></a>
					<a class="disable" href="javascript:;"></a>
				</div>
			</div>
		</div>

	</div>
	<div class="aside">
		<?php include('sidebar.php') ?>
	</div>

</body>
</html>