<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<jsp:include page="/WEB-INF/jsp/public_header.jsp"></jsp:include>




<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript" src="/js/pagingUtil.js"></script>
<link href="/qhjys_mall/seller-manage/css/membernew.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="/easyui/themes/bootstrap/easyui.css" />
<link rel="stylesheet" type="text/css" href="/easyui/themes/icon.css">

<title>飞券网平台管理中心</title>

</head>

<body>
<!-------------------top---------------------------------------------------------------------->
<jsp:include page="/WEB-INF/jsp/system/system_header.jsp"><jsp:param name="val" value="2" /></jsp:include>
<!--------------------------我的账户-------------------------------------------------------->
<div class="membercontent">
	<!----------------左侧----------------------->
	<jsp:include page="/WEB-INF/jsp/system/product/uLeft.jsp" flush="true" ><jsp:param name="val" value="5" /></jsp:include>
    <!--------------右侧------------------>
	<!--------------右侧------------------>
	<div class="memberright">
     <h3 style="padding-left:10px; margin-bottom:25px;">活动管理——活动列表</h3> 
       <form id="from" name="form" action="/managermall/systemmall/activity/list.do" method="post">
    	  	<input id="page" name="page" type="hidden" value="${page.getPageNum()}">
        </form>
          <div class="member_myorder">
          	<input type="button" value="添加活动" class="tanchubutton"  onclick="javascript:window.location.href='/managermall/systemmall/activity/addpage.do'">
         <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <th class="td160">ID</th>
                    <th class="td160">店铺ID</th>
                    <th class="td160">活动名称</th>
                    <th class="td160">活动时间</th>
                    <th class="td160">开始时间</th>
                    <th class="td160">结束时间</th>
                    <th class="td160">状态</th>
                    <th class="td160">操作</th>
                </tr>
              <c:forEach items="${page}" var="ai">
                <tr>
                    <td class="td160">${ai.id}</td>
	                <td class="td160"> 
	                   		${ai.storeId}
	                   </td>
                    <td class="td160">
                    	${ai.lotteryName}
                    </td>
                    <td class="td160">
                    	${ai.lotteryContent}
                    </td>
                    <td class="td160"><fmt:formatDate value="${ai.startDate}" pattern="yyyy-MM-dd"/></td>
                    <td class="td160"><fmt:formatDate value="${ai.endDate}" pattern="yyyy-MM-dd"/></td>
                   	 <td class="td160">
                    	<c:if test="${ai.status==0}">
                    		不可用
                    	</c:if>
                    	<c:if test="${ai.status==1}">
                    		可用
                    	</c:if>
                    </td>
                    <td class="td160"><a href="/managermall/systemmall/activity/updatepage.do?id=${ai.id}">修改</a></td>
                </tr>
              </c:forEach>
              
              </table>
            </div>
            <!--上一页下一页-->
        <div class="page">
            	<c:if test="${page.getPageNum()>1}">
            	<a href="javascript:previousPage(${page.getPageNum()-1},'from','page')" class="prev">上一页</a>
            	</c:if>
            	<c:choose>
            	<c:when test="${page.getPages()<7}">
            		<c:forEach var="i" begin="1" end="${page.getPages()}">
            			<c:choose><c:when test="${i==page.getPageNum()}"><em class="current">${i}</em></c:when>
            			<c:otherwise><a href="javascript:previousPage(${i},'from','page')">${i}</a></c:otherwise></c:choose>
            		</c:forEach>
            	</c:when>
            	<c:when test="${page.getPages()>6}">
            		<c:forEach var="i" begin="1" end="3">
            			<c:choose><c:when test="${i==page.getPageNum()}"><em class="current">${i}</em></c:when>
            			<c:otherwise><a href="javascript:previousPage(${i},'from','page')">${i}</a></c:otherwise></c:choose>
            		</c:forEach>
            		<c:if test="${page.getPageNum()>4}"><em>...</em></c:if>
            		<c:forEach var="i" begin="4" end="${page.getPages()-3}">
            			<c:if test="${i==page.getPageNum()}"><em class="current">${i}</em></c:if>
            		</c:forEach>
            		<c:if test="${page.getPageNum()<page.getPages()-3}"><em>...</em></c:if>
            		<c:forEach var="i" begin="${page.getPages()-2}" end="${page.getPages()}">
            			<c:choose><c:when test="${i==page.getPageNum()}"><em class="current">${i}</em></c:when>
            			<c:otherwise><a href="javascript:previousPage(${i},'from','page')">${i}</a></c:otherwise></c:choose>
            		</c:forEach>
            	</c:when>
            	</c:choose>
            	<c:if test="${page.getPages()>page.getPageNum()}"><a href="javascript:previousPage(${page.getPageNum()+1},'from','page')" class="next">下一页</a></c:if>
               <span>共${page.getPages()}页</span><span>到第</span>
               <input class="input1" id="jumPage" name="pageNum" type="text" value="${page.getPageNum()}" onkeydown="if(event.keyCode==13){previousPage(this.value,'from','page')}"/><span>页</span>
        </div>
	</div>
	<div class="clear"></div>
</div>
<!------------------------------底部---------------------------------------------->
<jsp:include page="/WEB-INF/jsp/system/system_footer.jsp" />
<!--底部-e-->
</body>
</html>
