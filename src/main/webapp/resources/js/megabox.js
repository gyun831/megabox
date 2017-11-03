
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
				$.getScript(sw,()=>{
					seungwoo.mainMovie.init("movie-boxoffice");
		    	})
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
		$('#top_logo').click(()=>{
			onCreate();
		})
	    $("#main_movie").click(()=>{
	    	$.getScript(sw,()=>{
	    		seungwoo.movieMain.init("movie-boxoffice");
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
		    			$main.append(memberUI.nonmember());
		    		});
		    	$('.col3').click(()=>{
		    		$('#login_wrap').attr('class','login_info remove_loginInfo');
	    			$main.empty();
	    			$main.append(memberUI.findbyid());
	    			$('#id_send').click(e=>{
	    				e.preventDefault();
	    				$.ajax({
	    					url : $$('x')+'/sendMail',
	    					method : 'post',
	    					data : JSON.stringify({
	    						'email' : $('#userfind-id-email').val()
	    					}),
	    					contentType : 'application/json',
	    					success : m=>{
	    						alert('전송');
	    						$('#find_id').click(e=>{
	    							e.preventDefault();
	    							if(m.joinCode==$('#userfind-id-code').val()){
		    							alert('인증완료');
		    							$.ajax({
	    			    					url : $$('x')+'/selectid/email',
	    			    					method : 'post',
	    			    					data : JSON.stringify({
	    			    						'value' : $('#userfind-id-email').val()
	    			    					}),
	    			    					contentType : 'application/json',
	    			    					success : m=>{
	    			    						if(m.msg=="성공"){
	    			    							alert('ID는'+m.member.id+'입니다.');
	    			    						}else{
	    			    							alert('존재하지않습니다.');
	    			    						}
	    			    					},
	    			    					error : ()=>{
	    			    						alert('실패');
	    			    					}
		    							})
		    						}	
	    						})	
	    					},
	    					error : ()=>{
	    						alert('실패');
	    					}
	    				})	
	    			})
	    			$('#pass_send').click(e=>{
	    				e.preventDefault();
	    				$.ajax({
	    					url : $$('x')+'/sendMail',
	    					method : 'post',
	    					data : JSON.stringify({
	    						'email' : $('#userfind-pass-email').val()
	    					}),
	    					contentType : 'application/json',
	    					success : m=>{
	    						alert('전송');
	    						$('#img_btn_pass').click(e=>{
	    							e.preventDefault();
	    							if(m.joinCode==$('#userfind-pass-code').val()){
	    								alert('인증완료');
		    							$.ajax({
	    			    					url : $$('x')+'/select/email',
	    			    					method : 'post',
	    			    					data : JSON.stringify({
	    			    						'value' : $('#userfind-pass-email').val()
	    			    					}),
	    			    					contentType : 'application/json',
	    			    					success : m=>{
	    			    						if(m.msg=="성공"){
	    			    							alert('password는'+m.member.password+'입니다.');
	    			    						}else{
	    			    							alert('존재하지않습니다.');
	    			    						}
	    			    					},
	    			    					error : ()=>{
	    			    						alert('실패');
	    			    					}
		    							})
	    							}
	    						})
	    					},
	    					error : ()=>{
	    						alert('실패');
	    					}
	    					})
	    			})
		    		});
		    	$('.col4').click(()=>{
		    		$('#login_wrap').attr('class','login_info remove_loginInfo');
	    			$main.empty();
	    			$main.append(memberUI.membertext());
	    			$('#check_send').click(e=>{
	    				e.preventDefault();
	    				$.ajax({
	    					url : $$('x')+'/sendMail',
	    					method : 'post',
	    					data : JSON.stringify({
	    						'email' : $('#check_mail').val()
	    					}),
	    					contentType : 'application/json',
	    					success : m=>{
	    						alert('전송');
	    						$('#email_check').click(()=>{
		    						if(m.joinCode==$('#check_code').val()){
		    							alert('인증완료');
		    							megabox.func.memberadd();
		    						}else{
		    							alert('인증번호 다시입력');
		    						}
	    						})
	    					},
	    					error : ()=>{
	    						alert('실패');
	    					}
	    				})
	    			})

		    	})
		    	$('#exit').on('click',()=>{
					$('#login_wrap').attr('class','login_info remove_loginInfo');
				});
		    	$('#main_login').click(e=>{
		    		e.preventDefault();
		    		$.ajax({
		    			url : $$('x')+'/login',
		    			method : 'post',
		    			data : JSON.stringify({
		    				'id' : $('#login-id').val(),
		    				'password' : $('#login-pw').val()
		    			}),
		    			contentType : 'application/json',
		    			success : m=>{
		    				if(m.msg==("성공")){
		    					megabox.func.login(m);
		    					sessionStorage.setItem('id',m.member.id);
		    					sessionStorage.setItem('name',m.member.name);
		    					sessionStorage.setItem('birth',m.member.birth);
		    					sessionStorage.setItem('phone',m.member.phone);
		    					sessionStorage.setItem('email',m.member.email);
					    		$('#top_logo').click(()=>{
					    			megabox.func.login(m);
					    		})
		    				}else{
		    					alert('실패');
		    					onCreate();
		    				}
		    			},
		    			error : ()=>{
		    				alert('실패');
		    			}
		    		})
		    	});
		    	});
		    	});

		});
	}
	return {init:init,main:main,header:header,onCreate:onCreate};
})();
megabox.func=(()=>{
	var index,jy,js,$main;
	var login=(m)=>{
		$main=$('#mega_main');
		js=$$('j');
		index=js+'/index.js';
		jy=js+'/jooyoul.js';
		$.getScript(index,()=>{
			$.getScript(jy,()=>{
				megabox.index.main();
				$('#login_wrap').attr('class','login_info remove_loginInfo');
				$('#open_myinfo').attr('class','login hide');
				$('.navigation').after(compUI.afterlogin(m));
				
				$('.member_info').after(memberUI.loginbox());
				$('#login_drop').click(()=>{
					$('#myinfo_wrap').attr('class','login_info remove_loginInfo open_myinfo_open');
				});
				$('.item1').click(()=>{
	    			$('#myinfo_wrap').attr('class','login_info remove_loginInfo');
	    			mymegabox();
				})
				$('#name_membership_c_mint').click(()=>{
					$.getScript($$('j')+'/seungwoo.js',()=>{
						seungwoo.checkBookingMenu.init();
					})
				})
				$('.myinfo_close').click(()=>{
					$('#myinfo_wrap').attr('class','login_info remove_loginInfo');
				})
				$(".log_out").click(()=>{
					sessionStorage.removeItem('id');
					sessionStorage.removeItem('name');
					sessionStorage.removeItem('birth');
					sessionStorage.removeItem('phone');
					sessionStorage.removeItem('email');
					megabox.index.onCreate();
				});
			})
		})
	}
	var mymegabox=()=>{
		$main.empty();
		$main.append(memberUI.mymegabox());
		$.getScript($$('j')+'/seungwoo.js',()=>{
			$('#col3').click(()=>{
				seungwoo.checkBookingMenu.init();
			})
			$('#col5').click(()=>{
				seungwoo.movieStoryMenu.init("movie-interesting-date");
			})
			$('#col7').click(()=>{
				myinfoupdate();
			})
		})
	}
	var myinfoupdate=()=>{
		$('#mega_main').empty();
		$('#mega_main').append(memberUI.myinfoupdate());
		$('#myinfocan').click(()=>{
			mymegabox();
		})
		$.getScript($$('j')+'/seungwoo.js',()=>{
		$('#col3').click(()=>{
			seungwoo.checkBookingMenu.init();
		})
		$('#col5').click(()=>{
			seungwoo.movieStoryMenu.init("movie-interesting-date");
	    })
		})
		
		$('#myinfoup').click(e=>{
			e.preventDefault();
			$.ajax({
				url : $$('x')+'/selectid/id',
				method : 'post',
				dataType : 'json',
				data :JSON.stringify({
					'value' : $$('id')
				}),
				contentType : 'application/json',
				success : m=>{
					var phone = $('[name="mobile1"]').val()+'-'+$('[name="mobile2"]').val()+'-'+$('[name="mobile3"]').val();
					var email = $('[name="emailaddr"]').val();
					if(phone==""){
						phone = m.member.phone;
					}
					if(email==""){
						email = m.member.email;
					}
					if(m.member.password==$('#inputtext2').val()){
						$.ajax({
							url : $$('x')+'/update',
							method : 'post',
							dataType : 'json',
							data : JSON.stringify({
								'id' : m.member.id,
								'phone' : phone,
								'email' : email
							}),
							contentType : 'application/json',
							success : m=>{
								alert('수정 완료');
								sessionStorage.setItem('phone',phone);
								sessionStorage.setItem('email',email);
								myinfoupdate();
							},
							error : (x,m,s)=>{
								alert(s);
							}
							
						})
					}else if($('#inputtext2').val()==""){
						alert('비밀번호를 입력해주세요');
					}else{
						alert('비밀번호가 틀립니다.');
					}
					
				},
				error : (x,m,s)=>{
					alert(s);
				}
			})
			
		})
		$('#passUpdate').click(()=>{
			passupdate();
		})
		$('#memberdel').click(e=>{
			e.preventDefault();
			alert('탈퇴');
			$.ajax({
				url : $$('x')+'/delete',
				method : 'post',
				dataType : 'json',
				data : JSON.stringify({
					id : $$('id')
				}),
				contentType : 'application/json',
				success : d=>{
					alert('탈퇴하셨습니다.');
					sessionStorage.removeItem('id');
					sessionStorage.removeItem('name');
					sessionStorage.removeItem('birth');
					sessionStorage.removeItem('phone');
					sessionStorage.removeItem('email');
					megabox.index.onCreate();
					
				},
				error : (x,m,s)=>{
					alert(s);
				}
				
			})
		})
	}
	var passupdate=()=>{
		$main.empty();
		$main.append(memberUI.passchange());
		$("#pw_change button").eq(0).click(e=>{
			myinfoupdate();
		});
		$("#pw_change button").eq(1).click(e=>{	
			e.preventDefault();
		    var id =$$('id');
			var oldpass=$('#inputtext1').val();
	     	var newpass=$("#inputtext2").val();
	     	var confirmpass=$("#inputtext3").val();
	     	if(oldpass==""){
	     		alert("현재 비밀번호 입력하세요.");		     		   
	     	}else if(newpass==""){
	     		alert( "새 비밀번호 입력하세요.");
	     	}else if(confirmpass==="" || newpass!==confirmpass){
	     		alert( "새 비밀번호 확인 입력하세요.");
	     	}else{
		     	$.ajax({
			  		 url :$$('x')+'/get/pwupdate', 
					 method : 'POST',					
					 data  : JSON.stringify({
						 'oldpass' : oldpass,
						 'newpass' : newpass,
						 'id'      : id
					 }),
					 contentType : 'application/json',
					 success : d=>{ // d 는 컨트롤러 리턴값.
						 alert('비밀번호 변경이 완료되었습니다.');
						 myinfoupdate();
					 },
					 error : (x,s,m)=>{
						alert('ajax에러'+m);
					}
		    	});	
	 	   }    	
					     	
		});	
	}
	var memberadd=()=>{
		$('#mega_main').empty();
		$('#mega_main').append(memberUI.memberadd());
		$('#img_btn_user_input_id_pull-left').click(e=>{
			e.preventDefault();
			$.ajax({
				url : $$('x')+'/selectid/id',
				method : 'post',
				data : JSON.stringify({
					'value' : $('#inputtext1').val()
				}),
				contentType : 'application/json',
				success :m=>{
					if(m.msg==("성공")){
						alert('사용가능');
					}else{
						alert('중복입니다. 다른ID를 입력해주세요');
					}
					$('#passwordfirm').click(()=>{
						if($('#inputtext2').val()==$('#inputtext3').val()){
							alert('일치합니다.');
						}else{
							alert('일치하지않습니다.');
						}
					})
					$('#joinconfirm').click(e=>{
						e.preventDefault();
						$.ajax({
							url : $$('x')+'/join',
							method : 'post',
							data : JSON.stringify({
								'id' : $('#inputtext1').val(),
								'password' : $('#inputtext2').val() ,
								'name' : $('#inputtext4').val(),
								'birth' : $('[name="birthYear"]').val()+'-'+$('[name="birthMonth"]').val()+'-'+$('[name="birthDate"]').val(),
								'phone' : $('[name="mobile1"]').val()+'-'+$('[name="mobile2"]').val()+'-'+$('[name="mobile3"]').val(),
								'email' : $('#inputtext9').val()
							}),
							contentType : 'application/json',
							success : m=>{
								alert('회원가입성공');
								megabox.index.onCreate();
							},
							error : ()=>{
								alert('실패');
							}
						})
					})
				},
				error : ()=>{
					alert('실패');
				}
			})
		})
	}
	return {login:login,mymegabox:mymegabox,myinfoupdate:myinfoupdate,passupdate:passupdate,memberadd:memberadd}
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
var slide=(m)=>{return $(function(){
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

	if(Timer) clearInterval(Timer);
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