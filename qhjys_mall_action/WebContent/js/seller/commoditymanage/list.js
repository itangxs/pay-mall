function delet(){alert("你好删除")}function select123(c){if(confirm("确定取消关注吗?")){var b="id="+c;var a="/managermall/account/preordain/deletePrordain.do";$.ajax({type:"post",url:a,data:b,success:function(d){if(d=="success"){alert("取消关注成功");window.location.href="/managermall/account/preordain/list.do"}if(d=="error"){alert("取消关注失败")}},error:function(){}})}else{}}function gehang(){var a=document.getElementsByTagName("tr");a[0].style.background="#00FF66";a[a.length-1].style.background="#00FF66"}function xuan(d){var a=document.getElementsByName("ids");if(d=="qx"){for(var c=0;c<=a.length;c++){a[c].checked=true}}if(d=="fx"){for(var c=0;c<=a.length;c++){a[c].checked=false}}if(d=="qxx"){var b=document.getElementById("quan");for(var c=0;c<=a.length;c++){a[c].checked=b.checked}}if(d=="dx"){var f=true;var b=document.getElementById("quan");for(var c=0;c<=a.length;c++){if(a[c].checked){continue}else{f=false}}b.checked=f}}function shelves(){var a=document.getElementsByName("ids");var c=new Array();for(var b=a.length-1;b>=0;b--){if(a[b].checked==true){if(parseInt(a[b].value)>0){c.push(a[b].value)}}}if(c.length>0){if(confirm("确定下架吗?")){window.location.href="/managermall/seller/commoditymanage/shelves.do?ids="+c;return true}else{}}else{alert("请先选择要下架的商品")}};