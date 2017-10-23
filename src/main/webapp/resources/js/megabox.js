
var megabox=megabox || {};

megabox.common=(()=>{
	var init=(ctx)=>{
		megabox.session.init(ctx);
		megabox.index.init();
	};
	return {init:init}
})();
megabox.index =(()=>{
	var $main,$header,$footer,ctx,img,js,css,index,sw,jy;
	var init=()=>{
		$header=$('header')
		$footer=$('#footer-wrap');
		$main=$('#mega_main');
		ctx=$$('x');
		js=$$('j');
		index=js+'/index.js';
		sw=js+'/seungwoo.js';
		jy=js+'/jooyoul.js';
		onCreate();
	};
	var onCreate=()=>{
		header();
		main();
		
	};
	var main=()=>{
		$.getScript(index,()=>{
			$main.html(mainUI.slide());
			$footer.html(compUI.footer());
				var arr=[
					'http://image2.megabox.co.kr/mop/poster/2017/46/F8B4A0-0392-4366-8344-9F210B198398.large.jpg',
					'http://image2.megabox.co.kr/mop/poster/2017/28/5CCD96-6F15-4C2F-8F4E-CF9A9E9CF37D.large.jpg',
					'http://image2.megabox.co.kr/mop/poster/2017/4D/E63310-9DAD-4A68-91BD-CDCBB8031901.large.jpg',
					'http://image2.megabox.co.kr/mop/poster/2017/C3/6557FA-E32C-4F36-8AB2-2A347FE8D324.large.jpg'
					];
				$.each(arr,(i,j)=>{
					$('#boxul').append(compUI.boxoffice(arr[i]));
					$('<a/>')
					.appendTo($('#main_btn_wrap'))
					.attr('class','img_btn movie pull-left')
					.attr('title','영화상세 보기')
					.text('상세정보')
					.click(()=>{
						$.getScript(sw,()=>{
			            	seungwoo.movieDetail.init();
				    	});
					});
					$('<a/>')
					.appendTo($('#main_btn_wrap'))
					.attr('class','img_btn movie pull-right')
					.attr('data-toggle','modal')
					.attr('data-target','#myModal')
					.attr('title','영화 예매하기')
					.text('예매하기');
					$('<button/>')
					.appendTo('.back_wrap')
					.attr('type','button')
					.addClass('img_you_ck btn_01')
					.click(e=>{
						alert('dd');
					});
					$('<button/>')
					.appendTo('.back_wrap')
					.attr('type','button')
					.addClass('img_you_ck btn_02')
					.click(e=>{
						alert('dd');
					});
				    $(".thumb").mouseover(function(){
				    	$(this).attr('class','thumb flip flipIt');
				    });
				    $(".thumb").mouseout(function(){
				    	$(this).attr('class','thumb flip');
				    });
					});
			    $(document).scroll(function(){
			    	var height = $(document).scrollTop();
					$('#grand1').css({'background-position-y':1600-height});
			    });
		})
	    slide();
	};
	var header=()=>{
		$.getScript(index,()=>{
		$header.html(compUI.header());
		$('<li/>',{id:"open_myinfo"})
		.addClass('login')
		.appendTo($('#nav_head'));
		$('<a/>',{title:"로그인"})
		.addClass('icon i7')
		.text('로그인').appendTo($('#open_myinfo'));
		$('.header-wrap').append(compUI.loginUI());
	    $("#main_movie").click(()=>{
	    	$.getScript(sw,()=>{
	    		seungwoo.movieMain.init();
	    		$('#top_logo').click(()=>{
	    			onCreate();
	    		})
	    	})
	    });
		    $('#open_myinfo').click(()=>{
		    	$('#login_wrap').attr('class','login_info remove_loginInfo open_myinfo_open');
		    	$.getScript(jy,()=>{
		    	$('.col2').click(()=>{
		    			$('#login_wrap').attr('class','login_info remove_loginInfo');
		    			$main.empty();
		    			joo.mega.nonmember().appendTo($main);
		    		});
		    	$('.col3').click(()=>{
		    		$('#login_wrap').attr('class','login_info remove_loginInfo');
	    			$main.empty();
	    			joo.mega.findbyid().appendTo($main);
		    		});
		    	$('.col4').click(()=>{
		    		$('#login_wrap').attr('class','login_info remove_loginInfo');
	    			$main.empty();
	    			joo.mega.memberadd().appendTo($main);
		    	})
		    	$('#main_login').click(()=>{
		    		main();
		    		$('#login_wrap').attr('class','login_info remove_loginInfo');
		    		$('#open_myinfo').attr('class','login hide');
		    		$('.navigation').after(compUI.afterlogin());
	    			$('.member_info').after(joo.mega.loginbox());
	    			$('#login_drop').click(()=>{
	    				$('#myinfo_wrap').attr('class','login_info remove_loginInfo open_myinfo_open');
	    			});
		    		$('#top_logo').click(()=>{
		    			onCreate();
		    		})
		    	});
		    	});
		    	});
		    $('#exit').on('click',()=>{
		    	$('#login_wrap').attr('class','login_info remove_loginInfo');
		    });
		});
	}
	return {init:init,main:main,header:header};
})();
megabox.session={
	init : (ctx)=>{
		sessionStorage.setItem('x',ctx);
		sessionStorage.setItem('j',ctx+'/resources/js');
		sessionStorage.setItem('i',ctx+'/resources/img');
		sessionStorage.setItem('c',ctx+'/resources/css');
	},
	getPath : (x)=>{
		return sessionStorage.getItem(x);
	}
};
var $$=(x)=>{return megabox.session.getPath(x);};
var slide=()=>{return $(function(){
    var slideIndex = 0;
    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1} 
        x[slideIndex-1].style.display = "block"; 
    }
	//초기설정
	$(".sm_mv_slide dd:eq(0)").show();
	$(".sm_mv_slide dt:eq(0) a").addClass("on");

	//자동롤링
	var Timer = '';

	if(Timer) clearInterval(timer);
	Timer = setInterval(function(){
		carousel();
		}, 4000);

	//무비재생버튼클릭시 롤링정지
	$(".vd_playStop a.vd_play").click(function(){

		var vdstopBtn = $(this).attr("class");

		if( vdstopBtn == "vd_play"){
			$(".autoOff a.stop").removeClass("stop").addClass("play");
			clearInterval(Timer);
			$(this).removeClass("vd_play").addClass("vd_stop");
			$(this).text("비디오 정지");
			// 해당무비 클래스 추출
			var Ptag = $(this).parent().parent();
			// 가림처리
			Ptag.find('.sm_mv_detail').hide();//해당 전체링크
			$('.prevNext, .autoOff, .sm_mv_slide dt').hide();//이전다음, 자동정지, 목록버튼
			// 보이기
			Ptag.find('.mv_view').show();//해당무비

			/*
			 웹 표준화용이므로 일단 홈페이지는 숨김처리
			 추후에 표시 예정
			*/
// 			Ptag.find(".mv_caption").hide();
			//자막있을시에만 보임
			if(Ptag.find(".mv_caption p").text() == ""){
				Ptag.find(".mv_caption").hide();
			}else{
				Ptag.find(".mv_caption").show();
			}
			// 무비재생
			var myVid = Ptag.find('.mv_full video').get(0);
			myVid.play();
			return false;
		}else{//무비정지
			$(this).removeClass("vd_stop").addClass("vd_play");
			$(this).text("비디오 재생");

			// 해당무비 클래스 추출
			var Ptag = $(this).parent().parent();

			// 가림처리
			Ptag.find('.mv_view').hide();//해당무비
			Ptag.find(".mv_caption").hide();//자막

			// 보이기
			Ptag.find('.sm_mv_detail').show();//해당 전체링크
			$('.prevNext, .autoOff, .sm_mv_slide dt').show();//이전다음, 자동정지, 목록버튼

			// 무비재생
			var myVid = Ptag.find('.mv_full video').get(0);
			myVid.pause();
			return false;

		}
		return false;
	});
	//롤링정지버튼
	$(".autoOff a.stop").click(function(){
		var stopBtn = $(this).attr("class");

		if( stopBtn == "stop"){
			clearInterval(Timer);
			$(this).removeClass("stop").addClass("play");
			$(this).text("메인비주얼 재생");
		}else{
			$(this).removeClass("play").addClass("stop");
			$(this).text("메인비주얼 정지");
			Timer = setInterval(function(){
				carousel();
			}, 4000);
		}
		return false;
	});
	//ie7,ie8예외처리
	var ie7 = navigator.userAgent.indexOf("MSIE 7");
	var ie8 = navigator.userAgent.indexOf("MSIE 8");
	if( ie7 < 0 && ie8 < 0) {
		//마우스동작 설정
		$(".sm_mv").hover(function () {//전체영역에서 벗어날경우
			}, function () {//아웃
				$(".prevNext, .vd_playStop").fadeOut("fast"); //무비재생정지버튼, 이전다음버튼 가림처리
		});

		$(".sm_mv_detail").hover(function () {//해당링크영역에 접근했을경우

				var vdnone = $(this).parent().find(".sm_mv_bg .mv_view .mv_full video source").attr("src");//무비존재여부
				if(vdnone == ""){
					$(".vd_playStop").hide();//무비없을시 무비재생정지버튼 가림처리
				}else{
					$(".vd_stop").hide();//정지버튼 기본가림설정
					$(".vd_playStop").fadeIn("fast");//무비존재시 무비재생정지버튼 보이기
				}
				$(".prevNext").fadeIn("fast");//전체링크오버시에만 이전다음버튼 보이기

			}, function () {});

		$(".sm_mv_bg").hover(function () {//해당무비영역에 접근했을경우
			$(".vd_playStop").fadeIn("fast");
			}, function () {});

		//탭이동 설정
		$(".autoOff a, .sm_mv_slide dt a").focus(function(){
			$(".prevNext").fadeIn("fast");//무비재생정지버튼, 이전다음버튼 보이기
		});

		$(".sm_mv_detail").focus(function(){
			var vdnone = $(this).parent().find('.sm_mv_bg .mv_view .mv_full video source').attr("src");//무비존재여부
			if(vdnone == ""){
					$(".vd_playStop").hide();//무비없을시 무비재생정지버튼 가림처리
				}else{
					$(".vd_stop").hide();//정지버튼 기본가림설정
					$(".vd_playStop").fadeIn("fast");//무비존재시 무비재생정지버튼 보이기
			}
		});
		$(".sm_mv_text").each(function(){
			if($("strong",this).text() == ""){
				$(this).hide();
			}
		});

		//자막디자인
		$(".mv_caption a").click(function(){
			if($(this).attr("class").indexOf("subscript_open") != -1){
				$(this).removeClass("subscript_open");
				$(this).addClass("subscript_close");
				$(this).text("자막닫기");
				$(this).parent().animate({
					top:412
				},"slow","swing",function(){});
				$(this).parent().find("p").show();

			}else{
				$(this).removeClass("subscript_close");
				$(this).addClass("subscript_open");
				$(this).text("자막열기");
				$(this).parent().animate({
					top:552
				},"slow","swing",function(){
					$(this).find("p").hide();
				});
			}
		});

	}else{
		//ie7,ie8일경우
		//마우스동작 설정
		$(".sm_mv_text").each(function(){
			if($("strong",this).text() == ""){
				$(this).hide();
			}
		});
		$(".mv_caption p").hide();
		$(".sm_mv_detail, .prevNext").hover(function () {
				$(".prevNext").show();	//전체링크오버시에만 이전다음버튼 보이기
			}, function () {
				$(".prevNext").hide();	//전체링크오버시에만 이전다음버튼 보이기
		});
		//탭이동 설정
		$(".autoOff a, .sm_mv_slide dt a").focus(function(){
			$(".prevNext").fadeIn("fast");//무비재생정지버튼, 이전다음버튼 보이기
		});
	}
});}