$(function(){});$.fn.datebox.defaults.formatter=function(b){var e=b.getFullYear();var a=b.getMonth()+1;var c=b.getDate();return e+"-"+(a<10?("0"+a):a)+"-"+(c<10?("0"+c):c)};$.fn.datebox.defaults.parser=function(c){if(!c){return new Date()}var b=c.split("-");var f=parseInt(b[0],10);var a=parseInt(b[1],10);var e=parseInt(b[2],10);if(!isNaN(f)&&!isNaN(a)&&!isNaN(e)){return new Date(f,a-1,e)}else{return new Date()}};function gehang(){var a=document.getElementsByTagName("tr");a[0].style.background="#00FF66";a[a.length-1].style.background="#00FF66"}function xuan(d){var a=document.getElementsByName("ids");if(d=="qx"){for(var c=0;c<=a.length;c++){a[c].checked=true}}if(d=="fx"){for(var c=0;c<=a.length;c++){a[c].checked=false}}if(d=="qxx"){var b=document.getElementById("quan");for(var c=0;c<=a.length;c++){a[c].checked=b.checked}}if(d=="dx"){var a=document.getElementsByName("ids");var f=true;var b=document.getElementsByName("quan");for(var c=0;c<=a.length;c++){if(a[c].checked){f=false}}}}function updateStauts(c){var d=document.getElementsByName("ids");var f=new Array();for(var e=d.length-1;e>=0;e--){if(d[e].checked==true){f.push(d[e].value)}}if(f.length>0){if(confirm("id="+f+"修改状态?")){var b="/managermall/systemmall/task/changeStatus.do";var a="ids="+f+"&status="+c;$.ajax({async:false,type:"post",url:b,data:a,success:function(g){if(g=="success"){alert("修改成功");window.location.href=window.location.href}else{alert("修改失败");window.location.href=window.location.href}},error:function(){alert("服务器忙")}})}else{}}else{alert("请先选择要改变状态的任务")}};