/**
 * @author Administrator
 */
Ext.require('Ext.tab.*');

Ext.onReady(function() {
    var email_tab={
		xtype:'tabpanel',
		items:[{
			title : '收信箱',
			minHeight:500,
			html : "收信箱"
		},{
			title : '写信',
			html : "<p>写信</p><p>写信</p>"
		}]
	};
			
	var tabs7 = Ext.createWidget('tabpanel', {
		id:'tabs7',
		plain : true,
		layout : 'fit',
		defaults : {
			closable : true,
			autoScroll : true,
			bodyPadding : 10
		},
		items : [{
			title : '首页',
			html : "<p>首页</p>"
		}]
	});
	
	Ext.create('Ext.Panel', {
		minHeight:500,
		renderTo : "content7",
		layout : 'fit',
		title : '分组tab演示',
		items : tabs7
	});
     Ext.addBehaviors({
	    // add a listener for click on all anchors in element with id foo
	    '#menu ul li@click' : function(e, t){
	        console.log(Ext.get(t).getHTML());
	        var title=Ext.get(t).getHTML();
	        var html=Ext.get(t).getHTML();
	        var items=null;
	        if(t.id=='email'){
	        	items=email_tab;
	        	html="";
	        }
	        Ext.getCmp('tabs7').add({
	            html: html,
	            items:items,
	            iconCls: 'tabs',
	            title: title
	        }).show();
    		}
	    });
	
    
});
