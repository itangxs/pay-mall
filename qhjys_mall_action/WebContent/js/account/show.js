(function(a){a.fn.extend({xTaber:function(c){var m=a.extend({tab:true,content:a("#xtaberWrap"),prev:null,next:null,style:"opacity",activeClass:"current",delay:100,speed:300,timeout:3000,auto:false,setup:1,defaultShow:1,mouseEvent:"mouseover",tabedCallback:null},c);if(typeof m.setup!=Number&&m.setup<1){m.setup=1}var o=m.content,r=o.find('[rel="xtaberItems"]'),l=r.find(".xtaber-item"),g=l.length,v=parseInt(l.height())+parseInt(l.css("marginTop"))+parseInt(l.css("marginBottom"))+parseInt(l.css("paddingTop"))+parseInt(l.css("paddingBottom")),k=parseInt(l.width())+parseInt(l.css("marginLeft"))+parseInt(l.css("marginRight"))+parseInt(l.css("paddingLeft"))+parseInt(l.css("paddingRight")),t=v*m.setup,j=k*m.setup,n,q=0,i,b,u=null;if(m.setup==1){n=g}else{var p=(g%m.setup),h=parseInt(g/m.setup);n=(p>0)?(h+1):h}var s=function(){if(m.tab&&typeof m.tab!="object"){var y='<ol rel="xtaberTabs" class="xtaber-tabs">';for(var x=1;x<=n;x++){y+='<li rel="xtaberTabItem">'+x+"</li>"}y+="</ol>";o.append(y);m.tab=o.find('[rel="xtaberTabs"]')}else{if(typeof m.tab=="object"){m.tab=o.find('[rel="xtaberTabs"]')}else{m.tab=null}}if(m.tab!=null){u=m.tab.find('[rel="xtaberTabItem"]')}if(typeof m.next=="boolean"&&m.next){m.next=a('<span rel="xtaberNext">next</span>');m.next.appendTo(o)}if(typeof m.prev=="boolean"&&m.prev){m.prev=a('<span rel="xtaberPrev">prev</span>');m.prev.appendTo(o)}switch(m.style){case"left":d("left");break;case"top":d("top");break}w(m.defaultShow-1);e();if(m.auto){f()}};var d=function(A){var y,z,x,B;if(A=="top"){B=v*g;x=k}else{if(A=="left"){B=v;x=k*g}}r.css({left:0,top:0,position:"absolute",width:x,height:B})};var w=function(x){clearInterval(i);clearTimeout(b);q=x;switch(m.style){case"top":r.stop().animate({top:-(x*t)},m.speed);break;case"left":r.stop().animate({left:-(x*j)},m.speed);break;case"opacity":l.eq(x).fadeIn().siblings().hide();break;default:l.eq(x).show().siblings().hide();break}if(m.tab!=null){u.eq(x).addClass(m.activeClass).siblings().removeClass(m.activeClass)}if(m.auto){f()}if(m.tabedCallback){tabedCallback()}};var f=function(){if(m.auto){clearInterval(i);i=setInterval(function(){if(q+1>=n){w(0)}else{w(q+1)}},m.timeout)}};var e=function(){if(m.tab!=null){u.each(function(){var x=a(this);x.bind(m.mouseEvent,function(){clearInterval(i);clearTimeout(b);b=setTimeout(function(){w(x.index())},m.delay)});x.bind("mouseleave",function(){clearTimeout(b);f()})})}if(m.next){m.next.click(function(){var x=(q+1>=n)?0:q+1;w(x)})}if(m.prev){m.prev.click(function(){var x=(q-1<0)?n-1:q-1;w(x)})}};s()}})})(jQuery);var isNeeded=function(d){var d=(typeof d=="string")?[d]:d,b;for(var c=0;c<d.length;c++){var a=d[c];if($(a).length>0){b=true;break}}return b};$(function(){if(isNeeded("#j_idx_focus")){var a=$("#j_idx_focus");$.fn.xTaber({content:a,tab:a,auto:true,style:"left",prev:a.find(".btn-prev"),next:a.find(".btn-next")})}});