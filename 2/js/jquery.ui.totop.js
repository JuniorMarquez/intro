/*
|--------------------------------------------------------------------------
| UItoTop jQuery Plugin 1.1
| http://www.mattvarone.com/web-design/uitotop-jquery-plugin/
|--------------------------------------------------------------------------
*/
(function(e){e.fn.UItoTop=function(t){var n={text:'<i class="icon-angle-up"></i>',min:200,inDelay:600,outDelay:400,containerID:"toTop",containerHoverID:"toTopHover",scrollSpeed:1200,easingType:"linear"};var r=e.extend(n,t);var i="#"+r.containerID;var s="#"+r.containerHoverID;e("body").append('<a href="#" id="'+r.containerID+'">'+r.text+"</a>");e(i).hide().click(function(){e("html, body").animate({scrollTop:0},r.scrollSpeed,r.easingType);e("#"+r.containerHoverID,this).stop().animate({opacity:0},r.inDelay,r.easingType);return false}).prepend('<span id="'+r.containerHoverID+'"></span>').hover(function(){e(s,this).stop().animate({opacity:1},600,"linear")},function(){e(s,this).stop().animate({opacity:0},700,"linear")});e(window).scroll(function(){var t=e(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){e(i).css({position:"absolute",top:e(window).scrollTop()+e(window).height()-50})}if(t>r.min)e(i).fadeIn(r.inDelay);else e(i).fadeOut(r.Outdelay)})}})(jQuery)