var isSplash = true;
var posArr = [[0,0,0], [268,0,0], [536,0,0], [0,268,0], [268,268,0], [536,268,0]]
var posArr2 = [[0,0,0],[173,0,0],[346,0,0],[519,0,0],[692,0,0],[865,0,0]]
var xOfset=115;
var yOfset=8;
var yOfset2=-10;

$(document).ready(function(){
	var MSIE8 = ($.browser.msie) && ($.browser.version == 8);
	$.fn.ajaxJSSwitch({
		topMargin:80,//mandatory property for decktop
		bottomMargin:460,//mandatory property for decktop
		topMarginMobileDevices:0,//mandatory property for mobile devices
		bottomMarginMobileDevices:0,//mandatory property for mobile devices
		bodyMinHeight:850,
		menuInit:function (classMenu, classSubMenu){
			classMenu.find(">li").each(function(){
				$(">a", this).append("<div class='openPart'></div>");
			})
		},
		buttonOver:function (item){
			if(MSIE8){
				item.css({"color":"#fff"});
				$(".openPart", item).css({"visibility":"visible"});
				$(".base_text", item).css({"color":"#fff"});
				$(".num_text", item).css({"color":"#fff"});

				$(".menu_img_over", item).css({"display":"block"});
				$(".menu_img", item).css({"display":"none"});


			}else{
				item.stop(true).animate({"color":"#fff"}, 200, "easeOutCubic");
				$(".openPart", item).stop(true).animate({"opacity":"1","top":"0px"}, 400, "easeOutCubic");
				$(".menu_img_over", item).css({"opacity":"1"});
				$(".menu_img", item).css({"opacity":"0"});
				$(".base_text", item).css({"color":"#fff"});
				$(".num_text", item).css({"color":"#fff"});
			}
		},
		buttonOut:function (item){
			if(MSIE8){
				item.css({"color":"#bbb8b6"});
				$(".openPart", item).css({"visibility":"hidden"});
				$(".base_text", item).css({"color":"#fecc5d"});
				$(".num_text", item).css({"color":"#50372d"});

				$(".menu_img_over", item).css({"display":"none"});
				$(".menu_img", item).css({"display":"block"});
			}else{
				item.stop(true).animate({"color":"#bbb8b6"}, 200, "easeOutCubic");
				$(".openPart", item).stop(true).animate({"opacity":"0","top":"0px"}, 400, "easeOutCubic");
				$(".base_text", item).css({"color":"#fecc5d"});
				$(".num_text", item).css({"color":"#50372d"});
				$(".menu_img_over", item).css({"opacity":"0"});
				$(".menu_img", item).css({"opacity":"1"});
			}
		},
		subMenuButtonOver:function (item){ 
		      item.stop().animate({"color":"#50372d"}, 300, "easeOutCubic");
        },
		subMenuButtonOut:function (item){
		      item.stop().animate({"color":"#50372d"}, 300, "easeOutCubic");
        },
		subMenuShow:function(subMenu){
			if(!isSplash) {
	            if(MSIE8){
					subMenu.css({"display":"block"});
				}else{
					subMenu.stop(true).css({"display":"block"}).animate({"opacity":"1"}, 400, "easeOutCubic");
				}
			}
        },
		subMenuHide:function(subMenu){
            if(MSIE8){
				subMenu.css({"display":"none"});
			}else{
				subMenu.stop(true).delay(300).animate({"opacity":"0"}, 400, "easeOutCubic", function(){
					$(this).css({"display":"none"})
				});
      
			}
        },
		pageInit:function (pages){
		},
		currPageAnimate:function (page){
              page.css({left:'-1500px'}).stop(true).css({"top":"0"}).delay(100).animate({left:0}, 500, "easeInOutExpo");
              isSplash = false;
              $(window).trigger('resize');   
        },
		prevPageAnimate:function (page){
              page.stop(true).animate({"top":$(window).height()+20}, 500, "easeInSine");
              $("#wrapper>section>#content_part").css({"visibility":"visible"}).stop(true).animate({"top":0}, 100, "easeInOutCubic");
              $("#splash").stop(true).delay(0).animate({opacity:0, marginLeft:"500px"}, 500, "easeInOutCubic");

              if(isSplash) {
	              $(".sf-menu>li").each( function(index){
			            _delay = (index*50)+200;
			            _delay2 = (index*80)+200;
		            	$(this).stop(true).delay(_delay).animate({left:posArr2[index][0]+"px", top:posArr2[index][1]-yOfset2+"px", width:"172px", height:"172px"}, 600, "easeInOutCubic", function(){$(this).css({"overflow":"visible"})});
		            	$("img", this).stop(true).delay(_delay2).animate({width:"59px", height:"59px", marginTop:57, left:"55px"}, 1100, "easeInOutCubic");
		            	/*$("this").stop().delay(_delay).animate({width:"172px", height:"172px"}, 700, "easeInOutCubic", function(){$(this).css({"overflow":"visible"})});*/
			         });

          	  }

              
              /*$(".sf-menu>li img").stop(true).delay(0).animate({width:"59px", height:"59px", marginTop:57}, 500, "easeInOutCubic");*/
              $(".sf-menu >li>a .base_text, .sf-menu >li>a .num_text").stop(true).delay(50).animate({marginBottom:7}, 500, "easeInOutCubic");
        },
		backToSplash:function (){
		      isSplash = true;
              $("#wrapper>section>#content_part").stop(true).delay(500).animate({"top":$(window).height()+20}, 700, "easeInOutCubic", function(){$(this).css({"visibility":"hidden"})});
              $("#splash").stop(true).delay(0).animate({opacity:1, marginLeft:0}, 500, "easeInOutCubic");
              /*$(".sf-menu>li").stop(true).delay(0).animate({width:"267px", height:"268px"}, 500, "easeInOutCubic");
              $(".sf-menu>li img").stop(true).delay(0).animate({width:"126px", height:"126px", marginTop:75}, 500, "easeInOutCubic");*/
              $(".sf-menu >li>a .base_text, .sf-menu >li>a .num_text").stop(true).delay(50).animate({marginBottom:0}, 500, "easeInOutCubic");
              $(window).trigger('resize');  

              $(".sf-menu>li").each( function(index){
		            _delay = (index*150)+20;
		            _delay2 = (index*200)+20;
	            	$(this).stop(true).delay(_delay).animate({left:posArr[index][0]+xOfset+"px", top:posArr[index][1]+yOfset+"px", width:"267px", height:"267px"}, 500, "easeInOutCubic", function(){$(this).css({"overflow":"visible"})});
	            	$("img", this).stop(true).delay(_delay2).animate({width:"126px", height:"126px", marginTop:75, left:"72px"}, 800, "easeInOutCubic");
		         });      
        },
		pageLoadComplete:function (){
		},
	});
})
$(window).load(function(){	
	$("#webSiteLoader").delay(100).animate({opacity:0}, 400, "easeInCubic", function(){$("#webSiteLoader").remove()});


	$('#prev_arr, #next_arr')
	.sprites({
		method:'simple',
		duration:400,
		easing:'easeOutQuint',
		hover:true
	})

	
	$('.social_icons > li').hoverSprite({onLoadWebSite:true}); 


//-----Window resize------------------------------------------------------------------------------------------
	$(window).resize(
        function(){
            resize_function();
        }
    ).trigger('resize');

	function resize_function(){
	    var h_cont = $('header').height();
	    var wh = $(window).height();
		m_top = ~~(wh-h_cont)/2-100;
            if(isSplash){
                /*$("header").stop(true).delay(300).animate({"top":m_top}, 350, "easeOutSine");*/
                /*$("footer").stop(true).animate({"height":88}, 350, "easeOutSine");*/
            }else{
                /*$("header").stop(true).animate({"top":0}, 500, "easeOutCubic");*/
            }          
    }
    $(document).resize(
        function(){}
    ).trigger('resize');


    $('#description li').each(function(){
        if($(this).index() != 0)
            $(this).fadeOut();
    })  

	//bgStretch ---------------------------------------------------------------------------------------------
            $('#bgStretch')
		.bgStretch({
			align:'leftTop',
			navigs:$('#bgNav').navigs({autoPlay:1200000000, prevBtn:$('#prev_arr'), nextBtn:$('#next_arr')})
		})
	


});