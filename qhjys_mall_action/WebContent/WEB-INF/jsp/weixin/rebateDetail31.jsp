<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath().equals("/")?"":request.getContextPath();
%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-itunes-app"/>
<meta name="apple-mobile-web-app-capable" content="yes">
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<script src="/js/jquery-1.11.2.min.js" type="text/javascript"></script>
<c:if test="${map.payType == 1}"><script src="/js/weixin/jweixin-1.0.0.js"/></script></c:if>
<c:if test="${map.payType == 2}"><script src="/js/weixin/qqapi.js"></script></c:if>
<c:if test="${map.payType == 0}"><script src="https://as.alipayobjects.com/g/component/antbridge/1.1.1/antbridge.min.js"></script></c:if>
<script src="/js/weixin/rebatestore.js" type="text/javascript"></script>
<title>向商家付款-${map.name}</title>
<link href="/css/zhifu2.css" type="text/css" rel="stylesheet" />
</head>

<body style="background:#fff" onload="javascript:form1.text1.focus();">

	<input type ="hidden" id="rebateId" name="rebateId" value="${map.id}" > 
    <input type ="hidden" id="sellerId" name="sellerId" value="${map.sellerId} "> 
    <input type ="hidden" id="storeId" name="storeId" value="${map.storeId}"> 
    <input type ="hidden" id="rebate" name="rebate" value="${map.rebate}">
    <input type ="hidden" id="storeName" name="storeName" value="${map.name} ">
    <input type ="hidden" id="openId" name="openId" value="${map.openId}">
    <input type ="hidden" id="nickname" name="nickname" value="${map.nickname}">
    <input type ="hidden" id="headimgurl" name="headimgurl" value="${map.headimgurl}">
	<input type ="hidden" id="channelValidation" name="channelValidation" value="${map.channelValidation}">
    <input type="hidden" id="path" name="path" value="<%=path%>"/>
     <input type="hidden" value="${map.payType}" id="payType">
<div class="paymentallbox">
	<div class="paytitle"><img src="/images/weixin/payjxw.png" >${map.name}</div>
	<div class="payinput">
	<!-- <span>输入消费金额(￥)</span> -->
    	<form name="form1">
        <input id="totamt" readonly="readonly" class="less2" value="" placeholder="输入消费金额(￥)"  name="text1" type="text" step="0.01"/>
       <!--   <label for="totamt" contenteditable="true" class="totamt"></label> -->
        <script>
        	 $("#totamt").ontouchstart = function (e) { e.preventDefault(); }
         </script>
      </form>
    </div> 
</div>
<div class="payadv">
  <div class="bg"><span><img src="/images/weixin/payfq.png" > | 提供技术支持服务</span></div>
</div>
<script type="text/javascript" src="/js/weixin/keyboardnew.js"></script>
<script type="text/javascript">

(function(){
	var input1 = document.getElementById('totamt');
	//alert("1")
		new KeyBoard(input1);
	 // alert("2")
	input1.ontouchstart = function(){
		new KeyBoard(input1);
	};
	/* 给input禁止软键盘的弹出   */
	 $("#totamt").focus(function(){
        document.activeElement.blur();
    /* 给td添加点击阴影  */
      $("td:not(#readypay)").on("touchstart", function(){  
          this.style.background = "#777";  
      });  
      $("td:not(#readypay)").on("touchend", function(){  
          this.style.background = "#fff";
      });  
        
    });
})();

 (function(){
    document.getElementById("totamt").addEventListener("touchstart",function(e)
    {
        var _x=e.touches[0].pageX;
    	var _y=e.touches[0].pageY;
        console.log("start",_x);
    });
    document.getElementById("totamt").addEventListener("touchmove",function(e)
    {
        var _x=e.touches[0].pageX;
        var _y=e.touches[0].pageY;
        console.log("move",_x);
    });
    document.getElementById("totamt").addEventListener("touchend",function(e)
    {
        var _x=e.changedTouches[0].pageX;
        var _y=e.changedTouches[0].pageY;
        console.log("end",_x);
    });
  });
</script>
</body>
</html>