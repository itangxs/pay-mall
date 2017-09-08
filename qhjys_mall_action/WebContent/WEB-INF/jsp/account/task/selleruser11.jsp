<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta name="format-detection" content="telephone=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<title>金钥匙商城</title>
<script type="text/javascript" src="/js/jquery-1.11.2.min.js"></script>
<link href="/css/taskjindu1.css" rel="stylesheet" type="text/css" />  
<link rel="stylesheet" type="text/css" href="/easyui/themes/bootstrap/easyui.css" />
<link rel="stylesheet" type="text/css" href="/easyui/themes/icon.css">
<script type="text/javascript" src="/easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="/easyui/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="/js/account/selleruser.js"></script>  
</head>

<body class="taskjindubg">
<form id="selleruserform1" action="/account/task/selleruser1.do" method="post">
<div class="taskjindubox">
	<!--进度条-->  
    <div class="jindu jd0"><i class="text40">0</i><em class="text25">%</em></div>	
	<div class="taskjindubox1">
        <div class="taskjindunr">      
          <input type="hidden" name="userId" value="${user.id }">  	
            <!--问卷-->
            <div class="marginbottom30"><span class="namebox">姓名：</span><input class="inputbox" id="realname" name="realname"  type="text" value="${user.realname }" /></div>
            <div class="marginbottom30"><span class="namebox">年龄：</span><input class="easyui-datebox" style=" width:50%; height:40px; line-height:40px; border:none;" id="birthday" name="brithday" value="${expand.birthday }" /></div>
            <div class="marginbottom30"><span class="namebox">站内昵称：</span><input class="inputbox" id="nickname" name="nickname" type="text" value="${user.nickname }" /></div>
            <div class="clear"></div>
        </div>
        
        <div class="centerdiv"><input class="nextanniu" type="button" value="下一题" onclick="submit1();"/></div>
    </div>
</div>
</form>
</body>
</html>
