$(function() {
$("#sendType").change(function(){
	if($("#sendType").val()==0 || $("#sendType").val()==2){
		$(".accountv").hide();
	}else if($("#sendType").val()==1){
		$(".accountv").show();
	}
});
});
