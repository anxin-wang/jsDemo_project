/**
 * @author Sophie
 */
Ext.onReady(function(){
	var tree=new Ext.tree.TreePanel({
		renderTo:'tree-div',
		title: 'My List',
		height: 300,
        width: 400,
        useArrows:true,
		root: {
            nodeType: 'async'
        },
		dataUrl: 'check-nodes.json'
		
	});
	 tree.getRootNode().expand(true);
	
});
