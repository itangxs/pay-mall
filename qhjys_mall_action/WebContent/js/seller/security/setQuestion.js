$(function(){$("#question").on("blur",function(){$(this).siblings("label.error").remove();if(this.value==""){$(this).after('<label class="error">请输入密保问题！</label>');return false}else{$(this).siblings("label.error").remove()}}).on("change",function(){$(this).siblings("label.error").remove()});$("#answer").on("blur",function(){$(this).siblings("label.error").remove();if(this.value==""){$(this).after('<label class="error">请输入密保答案！</label>');return false}else{$(this).siblings("label.error").remove()}}).on("change",function(){$(this).siblings("label.error").remove()});$("#addQuestion").on("click",function(){var a=$("#question"),b=$("#answer");if(a.val()==""){a.after('<label class="error">请输入密保问题！</label>');return false}if(b.val()==""){email.after('<label class="error">请输入密保答案！</label>');return false}$.ajax({async:true,type:"POST",url:"addQuestion.do",data:{question:a.val(),answer:md5(b.val())},success:function(c){if(c=="timeout"){location.href="/seller/login.do"}else{if(c){location.href="center.do"}else{alert("添加邮箱错误！")}}}})});$("#verifyAnswer").on("click",function(){var a=$("#answer");if(a.val()==""){$("#answer").siblings("label.error").remove();a.after('<label class="error">请输入密保答案！</label>');return false}$.ajax({async:true,type:"POST",url:"verifyAnswer.do",data:{answer:md5(a.val())},success:function(b){if(b=="timeout"){location.href="/seller/login.do"}else{if(b){location.href="toSetQuestion.do"}else{alert("密保答案错误！")}}}})})});