$(document).ready(function(e) { 

    time = window.setInterval(function(){ 
        $('.jiantouafter').click();   
    },4000); 
    linum = $('.mainlist li').length;
    w = linum * 200;
    $('.piclist').css('width', w + 'px');
    $('.swaplist').html($('.mainlist').html());
   
    $('.jiantouafter').click(function(){ 
         
        if($('.swaplist,.mainlist').is(':animated')){ 
            $('.swaplist,.mainlist').stop(true,true); 
        } 
         
        if($('.mainlist li').length>=4){
            ml = parseInt($('.mainlist').css('left'));
            sl = parseInt($('.swaplist').css('left'));
            if(ml<=0 && ml>w*-1){
                $('.swaplist').css({left: '800px'});
                $('.mainlist').animate({left: ml - 800 + 'px'},'slow');             
                if(ml==(w-800)*-1){
                    $('.swaplist').animate({left: '0px'},'slow');
                } 
            }else{
                $('.mainlist').css({left: '800px'})
                $('.swaplist').animate({left: sl - 800 + 'px'},'slow');
                if(sl==(w-800)*-1){
                    $('.mainlist').animate({left: '0px'},'slow');
                } 
            } 
        } 
    }) 
    $('.jiantoubefore').click(function(){ 
         
        if($('.swaplist,.mainlist').is(':animated')){ 
            $('.swaplist,.mainlist').stop(true,true); 
        } 
         
        if($('.mainlist li').length>=4){ 
            ml = parseInt($('.mainlist').css('left')); 
            sl = parseInt($('.swaplist').css('left')); 
            if(ml<=0 && ml>w*-1){ 
                $('.swaplist').css({left:  '-800px'}); 
                $('.mainlist').animate({left: ml +800 + 'px'},'slow');                 
                if(ml==0){ 
                    $('.swaplist').animate({left: 0+ 'px'},'slow'); 
                } 
            }else{ 
                $('.mainlist').css({left:  '-800px'}); 
                $('.swaplist').animate({left: sl + 800 + 'px'},'slow'); 
                if(sl==0){ 
                    $('.mainlist').animate({left: '0px'},'slow'); 
                } 
            } 
        } 
    })     
}); 

$(document).ready(function(){
	$('.jiantoubefore,.jiantouafter').hover(function(){
			$(this).fadeTo('fast',1);
		},function(){
			$(this).fadeTo('fast',0.7);
	})

})