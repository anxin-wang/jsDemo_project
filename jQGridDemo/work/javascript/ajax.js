/**
 * @author Sophie
 */
$(function(){
		$("#save").click(function(){
		console.log("dsfads");
		var name=$("#username").val();
		var password=$("#password").val();
		$.ajax({
			url: "../../ajaxservlet",
			data: ({username : name,password:password}),
			type:"POST",
			dataType:"json",
			success:function(data) {
				var result=eval(data);
				console.log(result);
			    $('#result').html("<p>username:"+result.username+"</p><p>password:"+result.password+"</p>");			    
			  }

		})
	})
})
