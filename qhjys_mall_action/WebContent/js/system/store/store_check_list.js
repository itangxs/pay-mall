function gehang(){var a=document.getElementsByTagName("tr");a[0].style.background="#00FF66";a[a.length-1].style.background="#00FF66"}function xuan(d){var a=document.getElementsByName("ids");if(d=="qx"){for(var c=0;c<=a.length;c++){a[c].checked=true}}if(d=="fx"){for(var c=0;c<=a.length;c++){a[c].checked=false}}if(d=="qxx"){var b=document.getElementById("quan");for(var c=0;c<=a.length;c++){a[c].checked=b.checked}}if(d=="dx"){var a=document.getElementsByName("ids");var f=true;var b=document.getElementsByName("quan");for(var c=0;c<=a.length;c++){if(a[c].checked){f=false}}}}function updateStauts(c){var g="确认审核通过该店铺";if(c==1){g="确认审核不通过该店铺"}var d=document.getElementsByName("ids");var f=new Array();for(var e=d.length-1;e>=0;e--){if(d[e].checked==true){f.push(d[e].value)}}if(f.length>0){if(confirm(g)){var b="updateStoreCheckStauts.do";var a="ids="+f+"&status="+c;$.ajax({async:false,type:"post",url:b,data:a,success:function(h){if(h=="success"){alert("审核成功");window.location.href=window.location.href}else{alert("审核失败");window.location.href=window.location.href}},error:function(){alert("服务器忙")}})}else{}}else{alert("请先选择要审核的店铺")}};