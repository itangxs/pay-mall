function refresh(b,c,a){$.ajax({async:false,type:"POST",url:"/account/task/refresh.do",data:{userId:b,project:c,taskId:a},success:function(d){if(d=="success"){window.location.href=window.location.href}else{if(d=="noinfo"){alert("您还没进行游戏体验")}else{alert("刷新游戏信息失败")}}},error:function(d){alert("刷新游戏信息失败")}})}function changec(a){$.ajax({async:false,type:"POST",url:"/account/task/changec.do",data:{utid:a},success:function(b){if(b=="success"){window.location.href=window.location.href}else{if(b=="alread"){alert("已领取");window.location.href=window.location.href}else{alert("领取失败")}}},error:function(b){alert("领取失败")}})};