<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<jsp:include page="/WEB-INF/jsp/public_header.jsp"></jsp:include>
<link rel="stylesheet" type="text/css" href="/easyui/themes/bootstrap/easyui.css" />
<link rel="stylesheet" type="text/css" href="/easyui/themes/icon.css">
<script type="text/javascript" src="/easyui/jquery.easyui.min.js"></script>


<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>飞券网平台管理中心</title>

</head>

<body>
<!-------------------top---------------------------------------------------------------------->
<jsp:include page="/WEB-INF/jsp/system/system_header.jsp"><jsp:param name="val" value="9" /></jsp:include>
<!--------------------------我的账户-------------------------------------------------------->
<div class="membercontent">
	<!----------------左侧----------------------->
	<jsp:include page="/WEB-INF/jsp/system/adminuser/uLeft.jsp" flush="true"  ><jsp:param name="val" value="6" /></jsp:include>
    <!--------------右侧------------------>
	<!--------------右侧------------------>
		<div class="memberright">
			<h3 style="padding-left: 10px; margin-bottom: 25px;">用户组列表</h3>
			<div class="member_myorder">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<th class="td160">用户组</th>
						<th class="td160">修改</th>
					</tr>
					<c:forEach items="${adminGroupList }" var="adminGroup" >
					<tr>
						<td class="td160">${adminGroup.groupName}</td>
						<td class="td160"><a href="/managermall/systemmall/userrole/addGroup.do?id=${adminGroup.id}">修改</a></td>
					</tr>					
					</c:forEach>
				</table>
			</div>
			<!--上一页下一页-->
			<%-- <div class="page">
				<c:if test="${page.getPageNum()>1}"><a href="javascript:;" class="prev">上一页</a></c:if>
				<c:choose>
				<c:when test="${page.getPages()<7}">
					<c:forEach var="i" begin="1" end="${page.getPages()}">
						<c:choose><c:when test="${i==page.getPageNum()}"><em class="current">${i}</em></c:when>
						<c:otherwise><a href="javascript:;">${i}</a></c:otherwise></c:choose>
					</c:forEach>
				</c:when>
				<c:when test="${page.getPages()>6}">
					<c:forEach var="i" begin="1" end="3">
						<c:choose><c:when test="${i==page.getPageNum()}"><em class="current">${i}</em></c:when>
						<c:otherwise><a href="javascript:;">${i}</a></c:otherwise></c:choose>
					</c:forEach>
					<c:if test="${page.getPageNum()>4}"><em>...</em></c:if>
					<c:forEach var="i" begin="4" end="${page.getPages()-3}">
						<c:if test="${i==page.getPageNum()}"><em class="current">${i}</em></c:if>
					</c:forEach>
					<c:if test="${page.getPageNum()<page.getPages()-3}"><em>...</em></c:if>
					<c:forEach var="i" begin="${page.getPages()-2}" end="${page.getPages()}">
						<c:choose><c:when test="${i==page.getPageNum()}"><em class="current">${i}</em></c:when>
						<c:otherwise><a href="javascript:;">${i}</a></c:otherwise></c:choose>
					</c:forEach>
				</c:when>
				</c:choose>
				<c:if test="${page.getPages()>page.getPageNum()}"><a href="javascript:;" class="next">下一页</a></c:if>
				<span>共${page.getPages()}页</span><span>到第</span>
				<input class="input1" id="jumPage" name="jumpPage" type="text" /><span>页</span>
			</div> --%>
		</div>
		<div class="clear"></div>
	</div>
<!------------------------------底部---------------------------------------------->
<jsp:include page="/WEB-INF/jsp/system/uFooter.jsp" flush="true" />
<!--底部-e-->
</body>
</html>
