var wait=120;function timeWait(a){if(wait==0){a.removeAttr("disabled");a.val("获取验证码");wait=120}else{a.attr("disabled",true);a.val("重新发送("+wait+")");wait--;setTimeout(function(){timeWait(a)},1000)}}$(function(){var a=/^0?1[3|4|5|7|8][0-9]\d{8}$/;$("#newPhone").on("blur",function(){$(this).siblings("label.error").remove();if(this.value==""){$(this).after('<label class="error">请输入手机号码！</label>');return false}if(!a.test(this.value)){$(this).after('<label class="error">手机号码格式错误！</label>');return false}}).on("change",function(){$(this).siblings("label.error").remove()});$("#sendSMS").on("click",function(){var b=$("#newPhone");if(!a.test(b.val())){b.siblings("label.error").remove().after('<label class="error">手机号码格式错误！</label>');return false}var c=$(this).attr("disabled",true);$.ajax({async:true,type:"POST",url:"/sendSMSCaptcha.do",data:{phone:b.val()},success:function(d){if(d=="0000"){timeWait(c)}else{if(d=="0001"){alert("手机号码格式错误！")}else{alert("发送短信异常！")}c.removeAttr("disabled")}}})});$("#update").on("click",function(){var b=$("#newPhone"),c=$("#captcha");if(c.val()==""){c.siblings("label.error").remove().parent().append('<label class="error">请输入验证码！</label>');return false}if(b.val()==""){b.after('<label class="error">请输入手机号码！</label>');return false}if(!a.test(b.val())){b.after('<label class="error">手机号码格式错误！</label>');return false}$.ajax({async:true,type:"POST",url:"changePhone.do",data:{captcha:c.val(),newPhone:b.val()},success:function(d){if(d=="timeout"){location.href="/seller/login.do"}else{if(d){location.href="updatedPhone.do"}else{alert("短信验证码错误！")}}}})})});