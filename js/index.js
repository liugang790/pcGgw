(function($){

$(".send-wl span").click(function(){
    alert("aa");
})

/*导航*/
var _index5=0;
$(".nav a").hover(function(){
    _index5=$(this).index();
      $(".nav a").eq(_index5).addClass("s_bg").siblings("a").removeClass("s_bg");
}) 






var _index6=0;
$(".city span").click(function(){
   _index6=$(this).index();
   $(".city span").eq(_index6).addClass("current").siblings("span").removeClass("current");
})


var _index7=0;
$(".search_type span").click(function(){
   _index7=$(this).index();
   $(".search_type span").eq(_index7).addClass("current").siblings().removeClass("current")
})



/*展开列表*/
$(".nav .p_s").hover(function(){
   $(".nav .menu").slideDown("slow");
});


$(".font").hover(function(){
  $(".triangle-up").show();
  $(".city").show();
})

$(".form,.nav,.site_nav,.top_slide_wrap").hover(function(){
  $(".city").hide();
  $(".triangle-up").hide();
})

$(".sel_hide,.top_slide_wrap,nav").hover(function(){
  $(".menu").slideUp("fast");
})

  var _index3 = 0;
function autoPlay1(){
   bannerTime=setInterval(function(){
           _index3++;
          if(_index3>2){
              _index3=0;
           $(".new .banlist").css("bottom","50px");
           $(".new .banlist").stop().animate({bottom:-50*_index3+"px"},300)
          }
           $(".new .banlist").stop().animate({bottom:-50*_index3+"px"},300)
   },1000)
}
autoPlay1();

var  domindex = 0;
$(".goods_sel span").click(function(){
   domindex = $(this).index();
   $(".goods_sel span").eq(domindex).addClass("do_sla").siblings().removeClass("do_sla");
})

/*页面跳转*/
var tindex = 0;
$(".tz span").click(function(){
  tindex = $(this).index();
   $(".tz span").eq(tindex).addClass("current").siblings().removeClass("current");
})

$(".tz .total_page").click(function(){
  $(this).removeClass("current")
})


var cindex = 0;
$(".florid_goods_left .florid_colors span").click(function(){
  cindex = $(this).index();
  $(".florid_goods_left .florid_colors span").eq(cindex).addClass("fi").siblings().removeClass("fi");
})




/*item轮播*/





var _index2=0;
var  autoTime=null;
$("ul.banner_list li").hover(function(){
      clearInterval(autoTime);
         $(this).addClass("hover").siblings("li").removeClass("hover");
         _index2=$(this).index();
     $(".f_pic li").eq(_index2).stop().fadeIn("slow").siblings("li").fadeOut();
},function(){
     autoPlayb();
})

var _index0=0;
var  autoTime=null;
$("ul.h_banner_list li").hover(function(){
      clearInterval(autoTime);
         $(this).addClass("hover").siblings("li").removeClass("hover");
         _index0=$(this).index();
     $(".h_f_pic li").eq(_index0).stop().fadeIn("slow").siblings("li").fadeOut();
},function(){
     autoPlayc();
})


//自动轮播
function autoPlayb(){
        autoTime=setInterval(function(){
                 _index2++;
           var len=$("ul.banner_list li").length;
               if(_index2>len){
                  _index2=0;
             }
             banfn();
         },3000)
}
autoPlayb();
function banfn(){
          $("ul.banner_list li").eq(_index2).addClass("hover").siblings("li").removeClass("hover");
          $(".f_pic li").eq(_index2).stop().fadeIn("slow").siblings("li").fadeOut();
}


function autoPlayc(){
        autoTime=setInterval(function(){
                 _index0++;
           var len=$("ul.h_banner_list li").length;
               if(_index0>len){
                  _index0=0;
             }
             banfnc();
         },3000)
}
autoPlayc();
function banfnc(){
          $("ul.h_banner_list li").eq(_index0).addClass("hover").siblings("li").removeClass("hover");
          $(".h_f_pic li").eq(_index0).stop().fadeIn("slow").siblings("li").fadeOut();
}

/*返回顶部*/
$(".tk_top").click(function(){
    $("html,body").animate({
      scrollTop:0
    },2000);
  });
})(jQuery);


