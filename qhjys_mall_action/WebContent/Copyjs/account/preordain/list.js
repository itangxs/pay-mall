function delet(id){ 
	if(confirm("确定取消关注吗?")){
		var param = 'id='+id;
		var urlval = '/managermall/account/preordain/deletePrordain.do';
	   $.ajax({
	    	type:'post',//可选get
	    	url:urlval,//这里是接收数据的后台程序
	    	data:param,//传给后台的数据，多个参数用&连接
	    	success:function(msg){
	    		if (msg=='success'){
	    			alert("取消关注成功");
	    			window.location.href="/managermall/account/preordain/list.do";
	    		}
				if (msg=='error'){
					alert("取消关注失败");
	    		}
	    	//这里是ajax提交成功后，java程序返回的数据处理函数。msg是返回的数据，数据类型在dataType参数里定义！如果是josn,就可以直接点属性出来，列如：msg.name,msg.url 等等
	    	},
	    	error:function(){
	    	//ajax提交失败的处理函数！
	    	}
	    });
	}else{
		//alert("删除失败");
	}
}