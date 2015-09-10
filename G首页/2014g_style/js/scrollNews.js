function idg(node){
		return document.getElementById(node);
	}

	function getElementsByClassName(str,root,tag){
			if(root){
				root=typeof root=="string"?document.getElementById(root):root;
			}else{
				root=document.body;
			}
			tag=tag||"*";
			var els=root.getElementsByTagName(tag),arr=[];
			for(var i=0,n=els.length;i<n;i++){
				for(var j=0,k=els[i].className.split(" "),l=k.length;j<1;j++){
					if(k[j]==str){
						arr.push(els[i]);
						break;
					}
				}
			}
			return arr;
	}

	function attachEvents(node,eventType,handler){
		node=typeof node=="string"?document.getElementById(node):node;
		if(document.all){
			node.attachEvent("on"+eventType,handler);
		}else{
			node.addEventListener(eventType,handler,false);
		}
	}

		function rolling_news(source,target,width,height,speed,direction){
		this.source=idg(source);
		this.source_content=idg(source).innerHTML;
		this.target=idg(target);
		this.width=width;        //宽
		this.height=height;		 //高
		this.speed=speed;		 //滚动速度
		this.direction=direction;//方向
		this.tag=0;		
	}

	rolling_news.prototype={
		version:"1.00",
		author:"yangfeifei",
		date:"2011-10-23",
		initialize:function(){
			var o=this;
			var target=o.target;
			var content=o.source_content;
			var innerDiv=document.createElement("div");
			innerDiv.setAttribute("class","innerDiv");
			o.source.innerHTML="";
			innerDiv.innerHTML=o.source_content;
			target.appendChild(innerDiv);		
			//显示区域样式
			target.style.width=o.width+"px";
			target.style.height=o.height+"px";
			target.style.overflow="hidden";
			target.getElementsByTagName('div')[0].style.width=o.width+"px";
			target.getElementsByTagName('div')[0].style.height=target.getElementsByTagName('div')[0].scrollHeight>o.height?target.getElementsByTagName('div')[0].scrollHeight+"px":o.height+"px";//当文档实际高度大于容器时，高度为实际文档高度，否则为容器高度
			//显示区域初始化
			switch(o.direction){
				case "up":
				target.scrollTop="0";
				o.addAfterNode();
				break;

				case "down":
				o.addBeforeNode();
				target.scrollTop=target.scrollHeight-o.height;
				break;
			}			
			//初始动作				
			o.autoplay();
			attachEvents(o.target,'mouseover',function(){o.stop()});
			attachEvents(o.target,'mouseout',function(){o.autoplay()});
		},

		up:function(){
			var x=this;
			var divHeight=x.target.getElementsByTagName('div')[0].scrollHeight>x.height?x.target.getElementsByTagName('div')[0].scrollHeight:x.height;
			if((x.target.scrollHeight-x.target.scrollTop)!=x.height){
					x.target.scrollTop=x.tag;
			}else{
				x.addAfterNode();
				x.target.removeChild(x.target.getElementsByTagName('div')[0]);				
				x.tag=x.tag-divHeight;
				x.target.scrollTop=x.tag;					
			}
			x.tag=x.tag+x.speed;
		},

		down:function(){
			var j=this;
			var divHeight=j.target.getElementsByTagName('div')[0].scrollHeight>j.height?j.target.getElementsByTagName('div')[0].scrollHeight:j.height;
			
			if(j.target.scrollTop==0){
				j.addBeforeNode();
				j.target.removeChild(j.target.getElementsByTagName('div')[2]);	
				//j.tag=j.tag-divHeight;
				//j.target.scrollTop=j.target.scrollHeight-j.height-j.tag;
				j.tag=j.tag+divHeight;
				j.target.scrollTop=j.tag;
				
			}else{
				//j.target.scrollTop=j.target.scrollHeight-j.height-j.tag;
				j.target.scrollTop=j.tag;

			}
			
			j.tag=j.tag-j.speed;
		},

		addAfterNode:function(){
			var p=this;
			var newDiv=document.createElement('div');
			newDiv.setAttribute("class","innerDiv");
			newDiv.innerHTML=p.source_content;
			p.target.appendChild(newDiv);
			newDiv.style.width=p.width+"px";
			newDiv.style.height=p.target.getElementsByTagName('div')[0].scrollHeight>p.height?p.target.getElementsByTagName('div')[0].scrollHeight+"px":p.height+"px";//当文档实际高度大于容器时，高度为实际文档高度，否则为容器高度
		},

		addBeforeNode:function(){
			var d=this;
			var newDiv=document.createElement('div');
			newDiv.setAttribute("class","innerDiv");
			newDiv.innerHTML=d.source_content;
			d.target.insertBefore(newDiv,d.target.getElementsByTagName('div')[0]);
			newDiv.style.width=d.width+"px";
			newDiv.style.height=d.target.getElementsByTagName('div')[0].scrollHeight>d.height?d.target.getElementsByTagName('div')[0].scrollHeight+"px":d.height+"px";//当文档实际高度大于容器时，高度为实际文档高度，否则为容器高度
		},
		play:function(){
			var t=this;					
			switch(t.direction){
				//向上
				case "up":
					t.up();
					break;
				//向右
				case "down":	
					t.down();
					break;					
			}	
		},
		
		autoplay:function(){
			var s=this;
			s.auto=setInterval(function(){s.play()},30);
		},

		stop:function(){
			var h=this;
			clearInterval(h.auto);
		}
	}
	var rn=new rolling_news("udcNews","udcNewsShowNews",249,280,1,"up");
	rn.initialize();
	var b=idg('downArrow'),c=idg('upArrow');
	attachEvents(b,'mouseover',function(){rn.stop();rn.direction='down';rn.autoplay()});
	attachEvents(c,'mouseover',function(){rn.stop();rn.direction='up';rn.autoplay()});
	attachEvents(b,'mouseover',function(){this.className='downArrowon';});
	attachEvents(b,'mouseout',function(){this.className='downArrow';});
	attachEvents(c,'mouseover',function(){this.className='upArrowon';});
	attachEvents(c,'mouseout',function(){this.className='upArrow';});