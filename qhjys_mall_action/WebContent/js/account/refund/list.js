function cancelRefund(b){if(confirm("确定取消退款吗?")){var a="/managermall/account/refund/cancelRefund.do";$.ajax({type:"post",url:a,data:{detailId:b},success:function(c){if(c=="success"){alert("取消退款提交成功");window.location.href="/managermall/account/refund/list.do"}if(c=="error"){alert("取消退款提交失败")}if(c=="tokenError"){alert("请不要重复提交");window.location.href="/managermall/account/refund/list.do"}},error:function(){alert("服务器忙")}})}else{}};