function setTab(a){if(a==0){window.location.href="/managermall/seller/message/messageCenterList.do?seen=0"}else{window.location.href="/managermall/seller/message/messageCenterList.do?seen=1"}}function deleteMessage(a){if(confirm("确定要删除吗？")){$.ajax({async:false,type:"POST",url:"/managermall/seller/message/deleteMessage.do",data:{id:a},success:function(b){alert(b.message);window.location.href="/managermall/seller/message/messageCenterList.do?seen=0"},error:function(b){alert("error");return false}})}};