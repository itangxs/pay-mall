$(function(){var a=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;$("#email").on("blur",function(){$(this).siblings("label.error").remove();if(this.value==""){$(this).after('<label class="error">请邮箱地址密码！</label>');return false}else{if(!a.exec(this.value)){$(this).after('<label class="error">邮箱地址格式错误！</label>');return false}else{$(this).siblings("label.error").remove()}}}).on("change",function(){$(this).siblings("label.error").remove()});$("#sendEmail1").on("click",function(){var b=$("#email").val();$.ajax({async:true,type:"POST",url:"/sendRequestEmailCaptcha.do",data:{emailUrl:b},success:function(c){if(c!="succeess"){alert("邮箱发送异常！")}}})});$("#addEmail").on("click",function(){var c=$("#email");var b=$("#captcha");if(c.val()==""){c.after('<label class="error">请输入邮箱地址！</label>');return false}else{if(!a.exec(c.val())){c.after('<label class="error">邮箱地址格式错误！</label>');return false}}$.ajax({async:true,type:"POST",url:"addEmail.do",data:{email:c.val(),captcha:b.val()},success:function(d){if(d=="timeout"){location.href="/seller/login.do"}else{if(d=="验证码错误"){alert(d)}else{if(d=="您修改的邮箱和原邮箱重复！"){alert("您修改的邮箱和原邮箱重复,请重新输入邮箱！")}else{if(d){location.href="changedEmail.do"}else{alert("添加邮箱错误！")}}}}}})});$("#sendEmail").on("click",function(){var b=$("#sellerEmail").val();$.ajax({async:true,type:"POST",url:"/sendRequestEmailCaptcha.do",data:{emailUrl:b},success:function(c){if(c!="succeess"){alert("邮箱发送异常！")}}})});$("#verifyEmail").on("click",function(){var b=$("#captcha").val();$.ajax({async:true,type:"POST",url:"verifyEmail.do",data:{captcha:b},success:function(c){if(c=="timeout"){location.href="/seller/login.do"}else{if(c=="验证码错误"){alert(c)}else{if(c){location.href="changNewEmail.do"}}}}})})});