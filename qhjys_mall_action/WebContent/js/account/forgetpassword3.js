$(document).ready(function(){$.formValidator.initConfig({formID:"signupForm",autoTip:true,onError:function(a){alert(a)},inIframe:true});$("#forgetYzm").formValidator({onShow:"请输入验证码",onFocus:"输入中...",onCorrect:""}).inputValidator({min:1,max:33,onError:"错误"})});$(document).ready(function(){$.formValidator.initConfig({formID:"signupForm1",autoTip:true,onError:function(a){alert(a)},inIframe:true});$("#question").formValidator({onShow:"请输入问题",onFocus:"输入中...",onCorrect:""}).inputValidator({min:1,max:200,onError:"太短或者太长了"});$("#answer").formValidator({onShow:"请输入回答",onFocus:"输入中...",onCorrect:""}).inputValidator({min:1,max:200,onError:"太短或者太长了"})});var wait=120;function timeWait(a){if(wait==0){a.removeAttr("disabled");a.val("获取验证码");wait=120}else{a.attr("disabled",true);a.val("重新发送("+wait+")");wait--;setTimeout(function(){timeWait(a)},1000)}}$(function(){$("#sendSMS").on("click",function(){var a=$("#phoneNum").val();var b=$(this).attr("disabled",true);$.ajax({async:true,type:"POST",url:"/sendSMSCaptcha.do",data:{phone:a},success:function(c){if(c=="0000"){alert("发送成功,请留意手机");timeWait(b)}else{if(c=="0001"){alert("手机号码格式错误！")}else{alert("发送短信异常！")}b.removeAttr("disabled")}}})})});