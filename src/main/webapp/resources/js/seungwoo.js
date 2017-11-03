var seungwoo=seungwoo || {};

seungwoo.common=(()=>{
	var init=ctx=> {
		seungwoo.session.init(ctx);
	};
	return {init:init}
})();

seungwoo.mainMovie=(()=>{
	var ctx, $sort, list; 
	var init=x=>{
		ctx=$$('x');
		if(x==null) {
			$sort="movie-boxoffice";
		} else {
			$sort=x;
		}
		list="";
		onCreate();
	};
	var onCreate=()=>{
		$("#btn1").click(e=>{
			$("#btn1").attr('class','icon on');
			$("#btn2").attr('class','icon');
			$("#btn3").attr('class','icon');
			$("#btn4").attr('class','icon');
			$sort="movie-boxoffice";
			$("#boxul").empty();
			seungwoo.mainMovieList.init($sort);
		});
		
		$("#btn2").click(e=>{
			$("#btn1").attr('class','icon');
			$("#btn2").attr('class','icon on');
			$("#btn3").attr('class','icon');
			$("#btn4").attr('class','icon');
			$sort="movie-showing-date";
			$("#boxul").empty();
			seungwoo.mainMovieList.init($sort);
		});
		
		$("#btn3").click(e=>{
			$("#btn1").attr('class','icon');
			$("#btn2").attr('class','icon');
			$("#btn3").attr('class','icon on');
			$("#btn4").attr('class','icon');
			$sort="movie-scheduled-date";
			$("#boxul").empty();
			seungwoo.mainMovieList.init($sort);
		});
		
		$("#btn4").click(e=>{
			$("#btn1").attr('class','icon');
			$("#btn2").attr('class','icon');
			$("#btn3").attr('class','icon');
			$("#btn4").attr('class','icon on');
		});
		seungwoo.mainMovieList.init($sort);
	};
	return {init:init}
})();

seungwoo.mainMovieList=(()=>{
	var ctx, $sort, list; 
	var init=x=>{
		ctx=$$('x');
		if(x==null) {
			$sort="movie-boxoffice";
		} else {
			$sort=x;
		}
		list="";
		onCreate();
	};
	var onCreate=()=>{
		$.ajax({
			url : ctx+'/main/movieList',
			method : 'post',
			dataType : 'json',
			data : JSON.stringify({
				"sort" : $sort
			}),
			contentType : 'application/json',
			success : d=> {
				$.each(d.movieList, (i,j)=>{
					list+='<li class="item" style="display:none;">'
		                +'<div id="item_'+j.movieSeq+'" class="thumb flip">'
		                +'	<div class="upper">'
		                +'		<span class="boxoffice n'+(i+1)+'">'+(i+1)+'</span>'
		                +'		<img src="'+j.image+'">'
		                +'	</div>'
		                +'	<div class="lower">'
			            +'		<div class="back_wrap">'
			                    +'<button id="btnSeenMovie_'+j.movieSeq+'" class="img_you_ck btn_01" data-code="'+j.movieSeq+'">본영화</button>'
			                    +'<button id="btnInterestingMovie_'+j.movieSeq+'" class="img_you_ck btn_02" data-code="'+j.movieSeq+'">보고싶어</button>'
		                +'	</div>'
		                +'<img src="'+j.image+'" class="back_poster">'
		                +'</div>'
		                +'</div>'
		                +'<div class="front-info">'
		                    +'<div class="rating">'
		                        +'<span class="fz14 pt2 pr9"><span>평점</span>'
		                        +'<span>'+(j.score*1).toFixed(1)+'</span></span>'
		                        +'<span class="star">'
		                            +'<span class="fill" style="width:'+j.score*10+'%;"></span>'
		                        +'</span>'
		                    +'</div>'
		                    +'<div class="movie_info">'
		                        +'<h3 class="sm_film">'
		                            +'<span class="film_rate '+j.filmRate+'"></span>'
		                            +'<a class="film_title">'+j.movieTitle+'</a>'
		                        +'</h3>'
		                        +'<div class="btn_wrap sm_btn">'
		                            +'<a id="goMovieDetail_'+j.movieSeq+'" class="img_btn movie pull-left">상세정보</a>'
		                            +'<a id="goMovieReservation_'+j.movieSeq+'" class="img_btn movie pull-right" data-toggle="modal" data-target="#myModal">예매하기</a>'
		                        +'</div>'
		                    +'</div>'
		                +'</div>'
		            +'</li>'
					+'<script>'
					+'if(seungwoo.fx.seenChk('+j.movieSeq+')>0) {'
					+'	$("#btnSeenMovie_'+j.movieSeq+'").attr("class","img_you_ck btn_01 active")'	
					+'}'
					+'if(seungwoo.fx.interestingChk('+j.movieSeq+')>0) {'
					+'	$("#btnInterestingMovie_'+j.movieSeq+'").attr("class","img_you_ck btn_02 active")'	
					+'}'
					+'$("#btnSeenMovie_'+j.movieSeq+'").click(e=>{'
				    +'	if(seungwoo.fx.loginChk()<0) {'
				    +'		alert("로그인 후 이용가능한 서비스입니다.");'
				    +'		return false;'
				    +'	} else {'
				    +'		seungwoo.fx.listMovieCheck('+j.movieSeq+',"'+$sort+'")'
				    +'	}'
				    +'});'
				    +'$("#btnInterestingMovie_'+j.movieSeq+'").click(e=>{'
				    +'	if(seungwoo.fx.loginChk()<0) {'
				    +'		alert("로그인 후 이용가능한 서비스입니다.");'
				    +'		return false;'
				    +'	} else {'
				    +'		seungwoo.fx.listMovieCheck('+j.movieSeq+',"'+$sort+'")'	
				    +'	}'
				    +'});'
			        +'$("#item_'+j.movieSeq+'").hover(e=>{'
					+'			$("#item_'+j.movieSeq+'").addClass("thumb flip flipIt");'
					+'			$("<a/>",{class:"blank"})'
					+'				.appendTo($("#item_'+j.movieSeq+' div").eq(1))'
					+'				.click(e=>{'
					+'					seungwoo.movieDetail.init('+j.movieSeq+');'
					+'				});'
					+'		},'
					+'		e=>{'
					+'			$("#item_'+j.movieSeq+'").removeClass();'
					+'			$("#item_'+j.movieSeq+'").addClass("thumb flip");'
					+'			$("#item_'+j.movieSeq+' div a").remove()'
					+'		}'
					+'	); '
					+'$("#goMovieDetail_'+j.movieSeq+'").click(e=>{'
					+'	seungwoo.movieDetail.init('+j.movieSeq+');'
					+'});'
					+'</script>'
				});
				$("#boxul").append(list);

				$(document).ready(()=>{
					$(".item:hidden").slice(0,4).show();
				});
				$("#slide_prev").click(e=>{
					if($(".item").length>4){
						$(".item:visible").slice(0,4).hide();
						$(".item:hidden").slice(0,4).show();
					}
				});
				$("#slide_next").click(e=>{
					if($(".item").length>4){
						$(".item:hidden").slice(0,4).show();
						$(".item:visible").slice(0,4).hide();
					}
				});
				
			},
			error : (x,s,m)=>{
				alert("에러 : "+m);
			}
		});
	};
	return {init:init}
})();

seungwoo.movieMain=(()=>{
	var ctx, $sort; 
	var init=x=>{
		ctx=$$('x');
		if(x==null) {
			$sort="movie-boxoffice";
		} else {
			$sort=x;
		}
		$("#mega_main").empty();
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
		seungwoo.movieHeader.init();
		seungwoo.movieSubmenu.init();
	
		seungwoo.movieMainSort.init($sort);
	};
	var setContentView=()=>{
		$("#mega_main")
			.append($('<div/>',{class:"content_wrap"}));
		
		$(".content_wrap")
			.append($('<div/>',{class:"header-btn-wrap"}))
			.append($('<div/>',{class:"sub_navi"}))
			.append($('<div/>',{id:"main-content",class:"main-content"}))
			.append($('<div/>',{id:"movie_detail",class:"modal fade"}));
		
		$(".header-btn-wrap")
			.append($('<button/>',{id:"btn_menu_all_sub_c"}))
			.append($('<div/>',{id:"btn_social_sub_c"}))
			.append($('<div/>',{class:"btn_theater"}));
		
		$(".sub_navi")
			.append($('<div/>',{class:"sub_navi_wrap"}));
		
		$(".main-content")
			.append($('<div/>',{id:"movie_container",class:"movie_container"}));
		$(".movie_container")
			.append($('<div/>',{class:"full-width"}));
		
		$('<div/>',{id:"flip_wrapper"})
			.css({'width':'984px'})
			.appendTo($(".full-width"));
		$('<div/>')
			.addClass('movielist_util_wrap')
			.appendTo($("#flip_wrapper"));
		$('<ul/>')
			.addClass('sort_wrap')
			.appendTo($(".movielist_util_wrap"));
		$('<ul/>',{id:"movieList"})
			.appendTo($("#flip_wrapper"));
	};
	return {init:init}
})();

seungwoo.movieMainSort=(()=>{
	var ctx, $sort;
	var init=x=>{
		ctx=$$("x");
		if(x==null) {
			$sort="movie-boxoffice";
		} else {
			$sort=x;
		}
		$(".sort_wrap").empty();
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
		if($sort=="movie-boxoffice") {
			$("#movie_sm01").addClass('movie sm01 active');
			seungwoo.movieList.init($sort);
		} else if($sort=="movie-showing-date") {
			$("#movie_sm02").addClass('movie sm02 active');
			$('.sort_wrap').append($('<li/>')).append($('<li/>')).append($('<li/>'));
			$('<a/>').addClass("active").text('개봉일순').appendTo($('.sort_wrap li').eq(0))
				.click(e=>{
					$sort="movie-showing-date";
					$(".sort_wrap li a").removeClass();
					$(".sort_wrap li a").eq(0).addClass("active");
					seungwoo.movieList.init($sort);
				});
			$('<a/>').text('평점순').appendTo($('.sort_wrap li').eq(1))
				.click(e=>{
					$sort="movie-showing-score";
					$(".sort_wrap li a").removeClass();
					$(".sort_wrap li a").eq(1).addClass("active");
					seungwoo.movieList.init($sort);
				});
			$('<a/>').text('가나다순').appendTo($('.sort_wrap li').eq(2))
				.click(e=>{
					$sort="movie-showing-character";
					$(".sort_wrap li a").removeClass();
					$(".sort_wrap li a").eq(2).addClass("active");
					seungwoo.movieList.init($sort);
				});
			seungwoo.movieList.init("movie-showing-date");
		} else if($sort=="movie-scheduled-date") {
			$("#movie_sm03").addClass('movie sm03 active');
			$('.sort_wrap').append($('<li/>')).append($('<li/>'));
			$('<a/>').addClass("active").text('개봉일순').appendTo($('.sort_wrap li').eq(0))
				.click(e=>{
					$sort="movie-scheduled-date";
					$(".sort_wrap li a").removeClass();
					$(".sort_wrap li a").eq(0).addClass("active");
					seungwoo.movieList.init($sort);
				});
			$('<a/>').text('가나다순').appendTo($('.sort_wrap li').eq(1)).click(e=>{
					$sort="movie-scheduled-character";
					$(".sort_wrap li a").removeClass();
					$(".sort_wrap li a").eq(1).addClass("active");
					seungwoo.movieList.init($sort);
				});
			seungwoo.movieList.init($sort);
		} else if($sort=="movie-interesting-date") {
			$("#movie_sm11").addClass('movie sm11 active');
			$('.sort_wrap').append($('<li/>')).append($('<li/>'));
			$('<a/>').addClass("active").text('개봉일순').appendTo($('.sort_wrap li').eq(0))
				.click(e=>{
					$sort="movie-interesting-date";
					$(".sort_wrap li a").removeClass();
					$(".sort_wrap li a").eq(0).addClass("active");
					seungwoo.movieList.init($sort);
				});
			$('<a/>').text('가나다순').appendTo($('.sort_wrap li').eq(1)).click(e=>{
					$sort="movie-interesting-character";
					$(".sort_wrap li a").removeClass();
					$(".sort_wrap li a").eq(1).addClass("active");
					seungwoo.movieList.init($sort);
				});
			seungwoo.movieList.init($sort);
		}
	};
	var setContentView=()=>{
		
	};
	return {init:init}
})();

seungwoo.movieList=(()=>{
	var ctx, $sort, $id;
	var init=x=>{
		if(x==null) {
			$sort="movie-boxoffice";
		} else {
			$sort=x;
		}
		$id=$$("id");
		$("#movieList").empty();
		$("#moreMovieList").remove();
		ctx=$$('x');
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
		$.ajax({
			url : ctx+'/movie/list',
			method : 'post',
			dataType : 'json',
			data : JSON.stringify({
				"sort" : $sort,
				"id" : $id
			}),
			contentType : 'application/json',
			success : d=> {
				var list='';
				$.each(d.movieList,(i,j)=>{
					list+='<li class="item" style="display:none;">'
		                +'<div id="item_'+j.movieSeq+'" class="thumb flip">'
		                +'	<div class="upper">'
		                +'		<span class="boxoffice n'+(i+1)+'">'+(i+1)+'</span>'
		                +'		<img src="'+j.image+'">'
		                +'	</div>'
		                +'	<div class="lower">'
			            +'		<div class="back_wrap">'
			                    +'<button id="btnInterestingMovie_'+j.movieSeq+'" class="img_you_ck btn_02" data-code="'+j.movieSeq+'">보고싶어</button>'
			                    +'<button id="btnSeenMovie_'+j.movieSeq+'" class="img_you_ck btn_01" data-code="'+j.movieSeq+'">본영화</button>'
			            +'</div>'
		                +'<img src="'+j.image+'" class="back_poster">'
		                +'</div>'
		                +'</div>'
		                +'<div class="front-info">'
		                    +'<div class="rating">'
		                        +'<span class="fz14 pt2 pr9"><span>평점</span>'
		                        +'<span>'+(j.score*1).toFixed(1)+'</span></span>'
		                        +'<span class="star">'
		                            +'<span class="fill" style="width:'+j.score*10+'%;"></span>'
		                        +'</span>'
		                    +'</div>'
		                    +'<div class="movie_info">'
		                        +'<h3 class="sm_film">'
		                            +'<span class="film_rate '+j.filmRate+'"></span>'
		                            +'<a class="film_title">'+j.movieTitle+'</a>'
		                        +'</h3>'
		                        +'<div class="btn_wrap sm_btn">'
		                            +'<a id="goMovieDetail_'+j.movieSeq+'" class="img_btn movie pull-left">상세정보</a>'
		                            +'<a id="goMovieReservation_'+j.movieSeq+'" class="img_btn movie pull-right" data-toggle="modal" data-target="#myModal">예매하기</a>'
		                        +'</div>'
		                    +'</div>'
		                +'</div>'
		            +'</li>'
					+'<script>'
					+'if(seungwoo.fx.seenChk('+j.movieSeq+')>0) {'
					+'	$("#btnSeenMovie_'+j.movieSeq+'").attr("class","img_you_ck btn_01 active")'	
					+'}'
					+'if(seungwoo.fx.interestingChk('+j.movieSeq+')>0) {'
					+'	$("#btnInterestingMovie_'+j.movieSeq+'").attr("class","img_you_ck btn_02 active")'	
					+'}'
					+'$("#btnSeenMovie_'+j.movieSeq+'").click(e=>{'
				    +'	if(seungwoo.fx.loginChk()<0) {'
				    +'		alert("로그인 후 이용가능한 서비스입니다.");'
				    +'		return false;'
				    +'	} else {'
				    +'		seungwoo.fx.listMovieCheck('+j.movieSeq+',"'+$sort+'")'
				    +'	}'
				    +'});'
				    +'$("#btnInterestingMovie_'+j.movieSeq+'").click(e=>{'
				    +'	if(seungwoo.fx.loginChk()<0) {'
				    +'		alert("로그인 후 이용가능한 서비스입니다.");'
				    +'		return false;'
				    +'	} else {'
				    +'		seungwoo.fx.listMovieCheck('+j.movieSeq+',"'+$sort+'")'	
				    +'	}'
				    +'});'
			        +'$("#item_'+j.movieSeq+'").hover(e=>{'
					+'			$("#item_'+j.movieSeq+'").addClass("thumb flip flipIt");'
					+'			$("<a/>",{class:"blank"})'
					+'				.appendTo($("#item_'+j.movieSeq+' div").eq(1))'
					+'				.click(e=>{'
					+'					seungwoo.movieDetail.init('+j.movieSeq+');'
					+'				});'
					+'		},'
					+'		e=>{'
					+'			$("#item_'+j.movieSeq+'").removeClass();'
					+'			$("#item_'+j.movieSeq+'").addClass("thumb flip");'
					+'			$("#item_'+j.movieSeq+' div a").remove()'
					+'		}'
					+'	); '
					+'$("#goMovieDetail_'+j.movieSeq+'").click(e=>{'
					+'	seungwoo.movieDetail.init('+j.movieSeq+');'
					+'});'
					+'</script>'
				});
				$("#movieList").removeClass().append(list);

				$(document).ready(()=>{
					$(".item:hidden").slice(0, 4).show();
					if($(".item:hidden").length==0) {
						$("#moreMovieList").remove();
					}
				});
				$("#moreMovieList").click(e=>{
					$(".item:hidden").slice(0, 4).show();
					if($(".item:hidden").length==0) {
						$("#moreMovieList").remove();
					}
				});
			},
			error : (x,s,m)=> {
				alert('에러 발생 : '+m);
			}
		});
	};
	var setContentView=()=>{
		$('<button>',{id:"moreMovieList", class:"view_more full_width"})
			.text('더보기 +')
			.appendTo($("#flip_wrapper"));
	};
	return {init:init};
})();

seungwoo.movieDetail=((()=>{
	var ctx, $movieSeq, $sort, $pageNum;
	var init=(x,y,z)=>{
		$("#movie_detail").empty();
		$movieSeq=x;
		if(y==null) {
			$sort='movie-comment-date';
		} else {
			$sort=y;
		}
		if(z==null) {
			$pageNum=1;
		} else {
			$pageNum=z;
		}
		ctx=$$('x');
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
		
		$('<button/>',{class:"custom_close"})
			.attr({'data-dismiss':"modal",'aria-hidden':"true"})
			.appendTo($("#contents_clearfix"))
			.click(e=>{
				$("#movie_detail").hide();
				$("#movie_detail").empty();
			});
		
		$.ajax({
			url : ctx+'/movie/detail/'+$movieSeq,
			method : 'post',
			dataType : 'json',
			contentType : 'application/json',
			success : d=>{
				$('<img>')
					.attr('src',d.movieDetail.image)
					.appendTo($(".left_wrap"))
				$('<i/>')
					.addClass('age_l '+d.movieDetail.filmRate+'_l')
					.appendTo($("#title_clearfix h2"));
				$('<span/>')
					.text(d.movieDetail.movieTitle)
					.insertAfter($("#title_clearfix h2 i"));
				
				$('<span/>')
					.addClass("small_star")
					.appendTo($(".reservation_wrap"));
				$(".small_star")
					.append('<span class="fill" style="width:'+d.movieDetail.score*10+'%;"></span>');
			
				$('<p/>')
					.addClass('left_p')
					.appendTo($(".reservation_wrap"));
				$(".left_p")
					.append('<span>'+d.movieStarCount+'</span><span>명 참여</span>');
				
				$(".left_p")
					.append('<strong>'+(d.movieDetail.score*1).toFixed(1)+'</strong><span class="divider"></span>');
				
				/*
				$('<p/>')
					.addClass('right_p')
					.html('예매율 <strong>0</strong>위<span> 0.0% </span>')
					.appendTo($(".reservation_wrap"));
					
				*/
				/*
				$('<button/>')
					.addClass('img_btn movie btn_reservation')
					.text('예매하기')
					.appendTo($(".reservation_wrap"))
					.click(e=>{
						alert('예매하기');
					});
				*/
				$($(".info_wrap")).html('<li><strong>개봉일</strong> : '+d.movieDetail.startDay.substring(0,4)+'.'+d.movieDetail.startDay.substring(4,6)+'.'+d.movieDetail.startDay.substring(6,8)+'</li>'
						+'<li><strong>감독</strong> : '+d.movieDetail.director+'</li>'
						+'<li><strong>출연진</strong> : '
						+d.movieDetail.actor
						+'</li>'
						+'<li><strong>장르</strong> : '+d.movieDetail.genre+' / '+d.movieDetail.runningtime+'</li>'
				);
				
				$('<button/>',{class:"img_btn btn_inte",id:"btnInterestingMovie"})
					.text('보고싶어')
					.appendTo($("#btn_wrap_1"));
				$('<button/>',{class:"img_btn btn_seen",id:"btnSeenMovie"})
					.text('본영화')
					.appendTo($("#btn_wrap_1"));

				if(seungwoo.fx.loginChk()>0) {
					if(seungwoo.fx.seenChk($movieSeq)>0) {
						$("#btnSeenMovie").attr("class","img_btn btn_seen active");
					} 
				} 
				
				if(seungwoo.fx.loginChk()>0) {
					if(seungwoo.fx.interestingChk($movieSeq)>0) {
						$("#btnInterestingMovie").attr("class","img_btn btn_inte active");
					} 
				}
				
				seungwoo.fx.detailMovieCheck($movieSeq,$sort,$pageNum);
				
				$('<span/>')
					.addClass('like')
					.html('<span>'+d.movieWishCount+'<i></i></span>')
					.appendTo($("#btn_wrap_1"));
				/*
				$('<a/>')
					.addClass('img_btn btn_timeSchedule')
					.attr('target',"_self")
					.text('상영시간표')
					.appendTo($("#btn_wrap_1"))
					.click(e=>{
						alert('상영시간표');
					});
				*/
				
				$('<div/>')
					.addClass('text')
					.text(d.movieDetail.contents)
					.appendTo($("#popup_box_row2"));
				},
				error : (x,s,m)=>{
					alert('에러 발생 : '+m);
			}
		});
		seungwoo.movieStillcut.init($movieSeq);
		seungwoo.movieCommentMain.init($movieSeq);
	};
	var setContentView=()=>{
		$("#movie_detail")
			.addClass('modal fade in')
			.attr({'tabindex':'0','role':"dialog",'aria-labelledby':"myModalLabel",'aria-hidden':"false"})
			.css({'display':'block'});
		$('<div/>')
			.addClass('wrapper')
			.appendTo($("#movie_detail"));
		$('<div/>',{id:"contents_clearfix",class:"contents clearfix"})
			.appendTo('.wrapper');
		
		$('<div/>',{id:"movieDetail"})
			.appendTo($("#contents_clearfix"));
		
		$('<div/>',{id:"popup_box_row1_clearfix",class:"popup_box row1 clearfix"})
			.appendTo($("#movieDetail"));
		$('<div/>',{class:"left_wrap"})
			.appendTo($("#popup_box_row1_clearfix"));
		$('<div/>',{class:"right_wrap"})
			.appendTo($("#popup_box_row1_clearfix"));
		$('<div/>',{id:"title_clearfix",class:"title clearfix"})
			.appendTo($(".right_wrap"));
		$("#title_clearfix")
			.append('<h2/>');
		
		$('<div/>',{id:"right_wrap_text"})
			.addClass('text')
			.appendTo($(".right_wrap"));
		
		$('<div/>')
			.addClass('reservation_wrap')
			.appendTo($("#right_wrap_text"));
		
		$('<ul/>')
			.addClass('info_wrap')
			.insertAfter($('.reservation_wrap'));
		
		$('<div/>',{id:"detail_rating"})
			.addClass('rating')
			.appendTo($(".right_wrap"));
		$('<div/>',{id:"btn_wrap_1"})
			.addClass('btn_wrap')
			.appendTo($("#detail_rating"));
		
		$('<div/>',{id:"popup_box_row2",class:"popup_box row2"})
			.appendTo($("#movieDetail"));
		
		$('<h3/>')
			.text('줄거리')
			.appendTo($("#popup_box_row2"));
	};
	return {init:init}
}))();

seungwoo.movieStillcut=(()=>{
	var ctx, $movieSeq;
	var init=x=>{
		ctx=$$("x");
		$movieSeq=x;
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
		$.ajax({
			url : ctx+'/movie/stillcut/'+$movieSeq,
			method : 'post',
			dataType : 'json',
			contentType : 'application/json',
			success : d=>{
				if(d.movieStillcut.stillcut!=null) {
					var array=d.movieStillcut.stillcut.split(",");
					$('<span/>')
						.addClass("stillCount")
						.text(" ("+array.length+")")
						.appendTo($("#btn_steelCut"));
				} else {
					$('<span/>')
						.addClass("stillCount")
						.text("(0)")
						.appendTo($("#btn_steelCut"));
				}
				
				$('.still_prevNext2')
					.append('<a class="still_prev2" onclick="plusDivs(-1)"></a>');
				$('.still_prevNext2')
					.append('<a class="still_next2" onclick="plusDivs(1)"></a>');
				
				if(d.movieStillcut.stillcut!=null) {
					var img='';
					$.each(array,(i,j)=>{
						img+='<img class="stillcutImage" src="'+array[i]+'" style="margin:0 auto;">'
					});
					$(".still_img").append(img);
				}
				
				$(".still_prevNext2").append('<script>'
						+'var slideIndex = 1;'
						+'showDivs(slideIndex);'
						+'function plusDivs(n) {'
						  +'showDivs(slideIndex += n);'
						+'}'
						+'function showDivs(n) {'
						  +'var i;'
						  +'var x = $(".stillcutImage");'
						  +'if (n > x.length) {slideIndex = 1}    '
						  +'if (n < 1) {slideIndex = x.length}'
						  +'for (i = 0; i < x.length; i++) {'
						     +'x[i].style.display = "none";  '
						  +'}'
						  +'x[slideIndex-1].style.display = "block";  '
						+'}'
						+'</script>'
				);
				
			},
			error : (x,s,m)=>{
				alert("에러 : "+m);
			}
		});
	};
	var setContentView=()=>{
		$('<div/>',{id:"popup_box_row3",class:"popup_box row3"})
			.appendTo($("#movieDetail"));
		$('<h3/>')
			.appendTo($("#popup_box_row3"));
		$('<a/>',{id:"btn_steelCut"})
			.addClass('btn_steelCut active')
			.text('스틸컷')
			.appendTo($("#popup_box_row3 h3"));
	
		$('<div/>')
			.addClass('still_slide')
			.appendTo($('.stillcut_list'));
		$('<ul/>')
			.css({'style':"width:1510px",'left':"0px",'right':"0px"})
			.appendTo($(".still_slide"));

		$('<div/>')
			.addClass('still_view_box')
			.appendTo($("#popup_box_row3"));
		$('<div/>')
			.addClass('still_img')
			.appendTo($('.still_view_box'));
		$('<div/>')
			.addClass('still_prevNext2')
			.appendTo($('.still_view_box'));
	};
	return {init:init}
})();

seungwoo.movieCommentMain=(()=>{
	var ctx, $movieSeq, $sort, $pageNum;
	var init=(x,y,z)=>{
		ctx=$$("x");
		$movieSeq=x;
		$("#popup_box_row5").remove();
		if(y==null) {
			$sort='movie-comment-date';
		} else {
			$sort=y;
		}
		if(z==null) {
			$pageNum=1;
		} else {
			$pageNum=z;
		}
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
		/* [영화상세 댓글] */
		$("#myStarScore input").eq(0).click(()=>{
			$("#myStarScore input").eq(0).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_on.png');
			$("#myStarScore input").eq(1).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_off.png');
			$("#myStarScore input").eq(2).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_off.png');
			$("#myStarScore input").eq(3).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_off.png');
			$("#myStarScore input").eq(4).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_off.png');
			$("#starScoreExplain").text("괜히 봤어요");
		});
		$("#myStarScore input").eq(1).click(()=>{
			$("#myStarScore input").eq(0).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_on.png');
			$("#myStarScore input").eq(1).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_on.png');
			$("#myStarScore input").eq(2).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_off.png');
			$("#myStarScore input").eq(3).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_off.png');
			$("#myStarScore input").eq(4).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_off.png');
			$("#starScoreExplain").text("기대하진 말아요");
		});
		$("#myStarScore input").eq(2).click(()=>{
			$("#myStarScore input").eq(0).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_on.png');
			$("#myStarScore input").eq(1).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_on.png');
			$("#myStarScore input").eq(2).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_on.png');
			$("#myStarScore input").eq(3).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_off.png');
			$("#myStarScore input").eq(4).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_off.png');
			$("#starScoreExplain").text("무난했어요");
		});
		$("#myStarScore input").eq(3).click(()=>{
			$("#myStarScore input").eq(0).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_on.png');
			$("#myStarScore input").eq(1).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_on.png');
			$("#myStarScore input").eq(2).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_on.png');
			$("#myStarScore input").eq(3).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_on.png');
			$("#myStarScore input").eq(4).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_off.png');
			$("#starScoreExplain").text("기대해도 좋아요!");
		});
		$("#myStarScore input").eq(4).click(()=>{
			$("#myStarScore input").eq(0).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_on.png');
			$("#myStarScore input").eq(1).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_on.png');
			$("#myStarScore input").eq(2).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_on.png');
			$("#myStarScore input").eq(3).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_on.png');
			$("#myStarScore input").eq(4).attr('src','http://image2.megabox.co.kr/mop/home/star_mid_on.png');
			$("#starScoreExplain").text("너무 멋진 영화였어요!");
		});
		
		/* textarea 글자수 제한 */
		$("textarea[name=comment]").keyup(function(e) {
	        if($(this).val().length > 100) {
	        	alert("글자수는 100자로 제한됩니다.!");  
	            $(this).val($(this).val().substring(0, 100));
	        }
	    });
		$("textarea[name=comment]").keyup(function(e){
	          var content = $(this).val();
	          $(this).height(((content.split('\n').length + 1) * 1.5) + 'em');
	          $('#wordCheckCount').html(content.length + '/100');
	      });
		
		if(seungwoo.fx.loginChk()<0) {
			$("textarea[name=comment]").text("로그인 후 이용가능한 서비스입니다.");
		};
		
		$('<button/>',{type:"button",class:"img_btn movie"})
			.css({"width":"100%","height":"100%","vertical-align":"middle","background-position":"-600px -100px"})
			.text('등록')
			.appendTo($("#btn_wrap_2"))
			.click(e=>{
				e.preventDefault();
				if(seungwoo.fx.loginChk()<0) {
					alert("로그인 후 이용가능한 서비스입니다.");
				} else {
					if($("textarea[name=comment]").val().length==0) {
						alert("댓글 내용을 입력해주세요.");
						return false;
					}
					if($("#starScore").val()=="0") {
						alert("평점을 입력해주세요.");
						return false;
					} 
						
					$.ajax({
						url : ctx+'/movie/comment/write/'+$movieSeq,
						method : 'post',
						dataType : 'json',
						data : JSON.stringify({
							"id" : $$("id"),
							"content" : $("textarea[name=comment]").val(),
							"score" : $("#starScore").val()
						}),
						contentType : 'application/json',
						success : d=>{
							if(d.msg=="성공") {
								alert('댓글이 작성되었습니다.');
								seungwoo.movieCommentMain.init($movieSeq,$sort);
							} else {
								alert('이미 댓글을 작성하셨습니다.');
							};
						},
						error : (a,b,c)=> {
							alert("에러 : "+c);
						}
					})
					
				}	
			});
		/*
		var json ={
			"movie_seq":$movieSeq,
			"sort":$sort,
			"page_num":1,
		}
		seungwoo.movieCommentList.init(json);
		위와 같은 방식으로 파라미터에 json 형식으로 보낼 수도 있음
		;*/
		seungwoo.movieCommentList.init($movieSeq,$sort);
	};
	var setContentView=()=>{
		$('<div/>',{id:"popup_box_row5",class:"popup_box row5"})
			.appendTo($("#movieDetail"));
		$('<h3/>')
			.text('한줄평')
			.appendTo($("#popup_box_row5"));
		$('<span/>',{id:"movieCommentTotalCount"})
			.appendTo($("#popup_box_row5 h3"));
		
		$('<div/>')
			.addClass('write_wrap')
			.appendTo($("#popup_box_row5"));
		$('<div/>')
			.addClass('write')
			.appendTo($(".write_wrap"));
		$('<div/>',{id:"write_name"})
			.addClass('name')
			.appendTo($(".write"));
		$('<span/>',{id:"wordCheckCount"})
			.appendTo($("#write_name"));
		
		$('<form/>',{id:"movieCommentFrm"})
			.appendTo($(".write"));
		$('<div/>').addClass('input')
			.appendTo($("#movieCommentFrm"));
		
		$('<div/>')
			.addClass('rate')
			.appendTo($(".input"));
		$('<div/>',{class:"star-wrap-critic",id:"myStarScore"})
			.css({'cursor':'pointer','width':'125px'})
			.appendTo($(".rate"));
		$('<input/>',{type:"image",src:"http://image2.megabox.co.kr/mop/home/star_mid_off.png"})
			.appendTo($("#myStarScore"))
			.click(e=>{
				$("#starScore").val("2");
				return false;
			});
		$('<input/>',{type:"image",src:"http://image2.megabox.co.kr/mop/home/star_mid_off.png"})
			.appendTo($("#myStarScore"))
			.click(e=>{
				$("#starScore").val("4");
				return false;
			});
		$('<input/>',{type:"image",src:"http://image2.megabox.co.kr/mop/home/star_mid_off.png"})
			.appendTo($("#myStarScore"))
			.click(e=>{
				$("#starScore").val("6");
				return false;
			});
		$('<input/>',{type:"image",src:"http://image2.megabox.co.kr/mop/home/star_mid_off.png"})
			.appendTo($("#myStarScore"))
			.click(e=>{
				$("#starScore").val("8");
				return false;
			});
		$('<input/>',{type:"image",src:"http://image2.megabox.co.kr/mop/home/star_mid_off.png"})
			.appendTo($("#myStarScore"))
			.click(e=>{
				$("#starScore").val("10");
				return false;
			});
		$('<input/>',{type:"hidden",id:"starScore",value:"0"})
			.appendTo($("#myStarScore"));
		
		$('<p/>', {id:"starScoreExplain"})
			.addClass('text-center')
			.text('평점을 입력해주세요')
			.appendTo($(".rate"));
		
		$('<div/>')
			.addClass('textarea')
			.appendTo($(".input"));
		$('<textarea/>',{title:"댓글쓰기",name:"comment",cols:"30",rows:"10"})
			.appendTo($(".textarea"));
		
		$('<div/>',{id:"btn_wrap_2"})
			.addClass('btn_wrap')
			.appendTo($(".input"));
		
		$('<div/>',{id:"movieCommentList",class:"list"})
			.appendTo($("#popup_box_row5"));
	};
	return {init:init}
})();

seungwoo.movieCommentList=(()=>{
	var $movieSeq, $sort, $pageNum, ctx, li, paging_li;
	var init=(x,y,z)=>{
		ctx=$$("x");
		$movieSeq=x;
		if(y==null) {
			$sort='movie-comment-date';
		} else {
			$sort=y;
		}
		if(z==null) {
			$pageNum=1;
		} else {
			$pageNum=z;
		}
		$("#movieCommentList").empty();
		li='';
		paging_li='';
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
		/* 정렬 */
		$('<li/>',{id:"movieCommentSort1"}).text('최신순').appendTo($("#movieCommentList ul").eq(0));
		$('<li/>',{id:"movieCommentSort2"}).text('평점순').appendTo($("#movieCommentList ul").eq(0));
	
		if($sort=="movie-comment-date") {
			$("#movieCommentSort1").addClass('c_mint');
		} else if($sort=="movie-comment-score") {
			$("#movieCommentSort2").addClass('c_mint');
		} 
			
		$("#movieCommentSort1").click(e=>{
				$sort='movie-comment-date';
				$("#movieCommentSort1").removeClass();
				$("#movieCommentSort2").removeClass();
				$("#movieCommentSort3").removeClass();
				$("#movieCommentSort1").addClass('c_mint');
				seungwoo.movieCommentMain.init($movieSeq,$sort);
			});
		
		$("#movieCommentSort2").click(e=>{
				$sort='movie-comment-score';
				$("#movieCommentSort1").removeClass();
				$("#movieCommentSort2").removeClass();
				$("#movieCommentSort3").removeClass();
				$("#movieCommentSort2").addClass('c_mint');
				seungwoo.movieCommentMain.init($movieSeq,$sort);
			});
		
		$.ajax({
			url : ctx+'/movie/comment/'+$movieSeq,
			method : 'post',
			dataType : 'json',
			data : JSON.stringify({
				"sort" : $sort,
				"pageNum" : $pageNum
			}),
			contentType : 'application/json',
			success : d=>{
				$("#movieCommentTotalCount")
					.text(" ("+d.commentCount+")")
				if(d.commentCount==0) {
					$("#movieCommentList").append('<div class="item_2block">'
					   +'	<div class="text-center pt50 pb50">등록된 한줄평이 없습니다.</div>'
					   +'</div>');
					
				} else {
					$.each(d.commentList,(i,j)=>{
						li+='<li>'
		                +'<div class="text">'
		                	+'<input type="hidden" id="replyID_'+j.replyNum+'" value="'+j.id+'">'
		                	+'<input type="hidden" id="replyNum_'+j.replyNum+'" value="'+j.replyNum+'">'
		                    +'<div class="name"><strong>'+j.id+'</strong></div>'
		                    +'	<p>'
		                    +'		<span id="comment_'+j.replyNum+'" class="comment">'+j.content+' </span>'
		                    +'	</p>'
		                    +'<div class="name">'
		                        +'<span>'+j.date+'</span>'
		                        +'<span class="small_star2">'
		                            +'<span class="fill" style="width:'+j.score*10+'%;"></span>'
		                        +'</span>'
		                        +'<div id="report_'+j.replyNum+'" class="report"><i class="i_report" aria-hidden="true"></i>신고하기</div>'
		                    +'</div>'
		                +'</div>'
		                +'</li>'
						+'<script>'
						+'if(seungwoo.fx.loginChk()>0) {'
						+'	if($("#replyID_'+j.replyNum+'").val()==$$("id")) {'
								+'$("<span/>",{class:"my_review"}).insertBefore($("#comment_'+j.replyNum+'"));'
								+'$("<button/>",{id:"btn_modify_'+j.replyNum+'", class:"btn_delete"}).insertAfter($("#comment_'+j.replyNum+'"));'
								+'$("#btn_modify_'+j.replyNum+'").click(e=>{'
						+'		seungwoo.fx.deleteComment($("#replyNum_'+j.replyNum+'").val());'
						+' 		seungwoo.movieCommentMain.init('+$movieSeq+');'	
						+'			});'
						+'	 }'
						+'}'
						+'$("#report_'+j.replyNum+'").click(e=>{'
						+'	alert("신고하기");'
						+'});'
						+'$("#recommend_'+j.replyNum+'").click(e=>{'
						+'	alert("추천");'
						+'});'
						+'</script>';
					});
					$("#movieCommentList ul").eq(1).append(li);
					
					$("<ul>", {id:"custom-pagination"})
						.addClass("custom-pagination mt20")
						.appendTo($("#movieCommentList"));

					if(d.commentPaging.cnt>0) {
						if(d.commentPaging.startPage>d.commentPaging.pageBlock) {
							$("#custom-pagination").append('<li><a class="img_btn customer prev" id="page_prev">«</a></li>');
							$("#page_prev").click(e=>{
								seungwoo.movieCommentList.init($movieSeq,$sort,d.commentPaging.startPage - d.commentPaging.pageBlock);
							});
						}
						for(var i=d.commentPaging.startPage; i<=d.commentPaging.endPage; i++) {
							if(i == d.commentPaging.currentPage) {
								paging_li+='<li><a class="active" onclick=seungwoo.movieCommentList.init("'+$movieSeq+'","'+$sort+'","'+i+'")>'+i+'</a></li>';
							}
							if(i != d.commentPaging.currentPage) {
								paging_li+='<li><a onclick=seungwoo.movieCommentList.init("'+$movieSeq+'","'+$sort+'","'+i+'")>'+i+'</a></li>';
							}
						}
						$("#custom-pagination").append(paging_li);
						if(d.commentPaging.pageCount>d.commentPaging.endPage) {
							$("#custom-pagination").append('<li><a class="img_btn customer next" id="page_next">»</a></li>');
							$("#page_next").click(e=>{
								seungwoo.movieCommentList.init($movieSeq,$sort,d.commentPaging.startPage + d.commentPaging.pageBlock);
							});
						}	
					}	
				}
			},
			error : (x,s,m)=>{
				alert('에러 발생 : '+m);
			}
		});
	};
	var setContentView=()=>{
		$('<ul/>')
			.addClass('sort pull-right mb15')
			.css({'overflow':'visible'})
			.appendTo($("#movieCommentList"));
		
		$('<ul/>')
			.addClass('item')
			.appendTo($("#movieCommentList"));
	};
	return {init:init}
})();

seungwoo.movieMyCommentList=(()=>{
	var $sort, $pageNum, ctx, paging_li;
	var init=(x,y)=>{
		ctx=$$("x");
		if(x==null) {
			$sort="movie-comment-date";
		} else {
			$sort=x;
		}
		if(y==null) {
			$pageNum=1;
		} else {
			$pageNum=y;
		}
		paging_li='';
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
		$(".sort_wrap").empty();
		$("#movieList").empty();
		$("#custom-pagination").empty();
		$('<li/>',{id:"movieCommentSort1"}).text('최신순').appendTo($(".sort_wrap"));
		$('<li/>',{id:"movieCommentSort2"}).text('평점순').appendTo($(".sort_wrap"));
		
		if($sort=="movie-comment-date") {
			$("#movieCommentSort1").addClass('c_mint');
		} else if($sort=="movie-comment-score") {
			$("#movieCommentSort2").addClass('c_mint');
		}
			
		$("#movieCommentSort1").click(e=>{
				$sort='movie-comment-date';
				$("#movieCommentSort2").removeClass();
				$("#movieCommentSort3").removeClass();
				$("#movieCommentSort1").attr('class','c_mint');
				seungwoo.movieMyCommentList.init($sort);
			});
		
		$("#movieCommentSort2").click(e=>{
				$sort='movie-comment-score';
				$("#movieCommentSort1").removeClass();
				$("#movieCommentSort3").removeClass();
				$("#movieCommentSort2").attr('class','c_mint');
				seungwoo.movieMyCommentList.init($sort);
			});
		
		$.ajax({
			url : ctx+'/movie/myComment',
			method : 'post',
			dataType : 'json',
			data : JSON.stringify({
				"sort" : $sort,
				"id" : $$("id"),
				"pageNum" : $pageNum
			}),
			contentType : 'application/json',
			success : d=>{
				$("#movieCommentTotalCount")
					.text(" ("+d.myMovieCommentCount+")")
				
				var li='';
				$.each(d.myMovieCommentList,(i,j)=>{
					li+='<li>'
					    +'<div class="col1">'
				        +'<img src="'+j.image+'">'
				    +'</div>'
				    +'<div class="col2">'
				        +'<p class="title"><span class="age '+j.filmRate+'"></span><strong>'+j.movieTitle+'</strong></p>'
				        +'<span class="small_star">'
				            +'<span class="fill" style="width:'+j.score*10+'%;"></span>'
				        +'</span>'
				        +'<div class="star-wrap-critic"></div>'
				    +'</div>'
				    +'<div class="col3 view">'
				        +'<div>'
				            +'<p>'+j.content+'</p>'
				            +'<p>'+j.date+'</p>'
				        +'</div>'
				    +'</div>'
				    +'<div class="col4 view">'
				        +'<button type="button" id="deleteBtn_'+j.replyNum+'" class="img_btn mypage review_delete">삭제</button>'
				    +'</div>'
				    +'</li>'
					+'<script>'
					+'$("#deleteBtn_'+j.replyNum+'").click(e=>{'
					+'	seungwoo.fx.deleteMyComment('+j.replyNum+',"'+$sort+'");'
					+'});'
					+'</script>';
				});
				$("#movieList").append(li);
				
				$("<ul>", {id:"custom-pagination"})
					.addClass("custom-pagination mt20")
					.appendTo($("#movieList"));
	
				if(d.commentPaging.cnt>0) {
					if(d.commentPaging.startPage>d.commentPaging.pageBlock) {
						$("#custom-pagination").append('<li><a class="img_btn customer prev" id="page_prev">«</a></li>');
						$("#page_prev").click(e=>{
							seungwoo.movieMyCommentList.init($sort,d.commentPaging.startPage - d.commentPaging.pageBlock);
						});
					}
					for(var i=d.commentPaging.startPage; i<=d.commentPaging.endPage; i++) {
						if(i == d.commentPaging.currentPage) {
							paging_li+='<li><a class="active" onclick=seungwoo.movieMyCommentList.init("'+$sort+'","'+i+'")>'+i+'</a></li>';
						}
						if(i != d.commentPaging.currentPage) {
							paging_li+='<li><a onclick=seungwoo.movieMyCommentList.init("'+$sort+'","'+i+'")>'+i+'</a></li>';
						}
					}
					$("#custom-pagination").append(paging_li);
					if(d.commentPaging.pageCount>d.commentPaging.endPage) {
						$("#custom-pagination").append('<li><a class="img_btn customer next" id="page_next">»</a></li>');
						$("#page_next").click(e=>{
							seungwoo.movieMyCommentList.init($sort,d.commentPaging.startPage + d.commentPaging.pageBlock);
						});
					}	
				}	
			},
			error : (x,s,m)=>{
				alert('에러 발생 : '+m);
			}
		});
	};
	var setContentView=()=>{
		$("#movieList").attr("class","mypage_review");
	};
	return {init:init}
})();

seungwoo.checkBookingMenu=(()=>{
	var ctx, $pageNum;
	var init=()=>{
		ctx=$$('x');
		$("#mega_main").empty();
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
		seungwoo.movieHeader.init();
		seungwoo.myInfoSubmenu.init();
		
		$('<a/>',{id:"ttab1"}).attr({'data-toggle':"tab"})
			.text('예매 내역')
			.appendTo($("#nav-nav-tabs-mb20 li").eq(0))
			.click(e=>{
				seungwoo.checkBookingList.init("N",$pageNum);
			});
		
		$('<a/>',{id:"ttab2"})
			.attr({'data-toggle':"tab"})
			.text('취소 내역')
			.appendTo($("#nav-nav-tabs-mb20 li").eq(1))
			.click(e=>{
				seungwoo.checkBookingList.init("Y",$pageNum);
			});
		seungwoo.checkBookingList.init("N",$pageNum);
	};
	var setContentView=()=>{
		$("#mega_main")
			.append($('<div/>',{class:'content_wrap'}));
		$(".content_wrap")
			.append($('<div/>',{class:"header-btn-wrap"}))
			.append($('<div/>',{class:"sub_navi"}))
			.append($('<div/>',{id:"main-content",class:"main-content"}))
			.append($('<div/>',{id:"movie_detail",class:"modal fade"}));
		
		$(".header-btn-wrap")
			.append($('<button/>',{id:"btn_menu_all_sub_c"}))
			.append($('<div/>',{id:"btn_social_sub_c"}))
			.append($('<div/>',{class:"btn_theater"}));
		
		$(".main-content")
			.append($('<div/>',{id:"mypage_container",class:"mypage_container"}));
		$('<div/>',{id:"width-fixed_mypage_membership_wrap"})
			.addClass('width-fixed mypage_membership_wrap')
			.css({'position':'relative'}).appendTo(".mypage_container");
		
		$('<ul/>')
			.append($('<li/>')).append($('<li/>')).append($('<li/>')).append($('<li/>')).append($('<li/>')).append($('<li/>')).append($('<li/>')).append($('<li/>'))
			.addClass('mypage_menu')
			.appendTo("#width-fixed_mypage_membership_wrap");
	
		$('<div/>')
			.addClass('h2_mypage')
			.appendTo($("#width-fixed_mypage_membership_wrap"));
		$('<h3/>')
			.addClass('sub_title')
			.text('예매 확인/취소')
			.appendTo($(".h2_mypage"));
		$(".h2_mypage").append('<span>예매하신 영화 내역과 취소 내역을 확인할 수 있습니다.</span>');
		
		$('<ul/>',{id:"nav-nav-tabs-mb20"})
			.addClass('nav nav-tabs mb20')
			.appendTo($("#width-fixed_mypage_membership_wrap"));
		$('<li/>').
			addClass('active')
			.appendTo($("#nav-nav-tabs-mb20"));
		$('<li/>')
			.appendTo($("#nav-nav-tabs-mb20"));
		$('<li/>')
			.appendTo($("#nav-nav-tabs-mb20"));
		
		$('<div/>',{class:"tab-content"}).appendTo($("#width-fixed_mypage_membership_wrap"));
		$('<div/>',{class:"tab-pane active", id:"tab1"}).appendTo($(".tab-content"));
		$('<div/>',{id:"flip_wrapper"}).appendTo($("#tab1"));
		$('<div/>',{class:"movielist_util_wrap"}).appendTo($("#flip_wrapper"));
		
		$(".mypage_container").append($("<div/>",{class:"tab-content"}))
		$(".tab-content").append($("<div/>",{class:"tab-pane active",id:"tab_list"}))
	};
	return {init:init}
})();

seungwoo.checkBookingList=(()=>{
	var ctx, tr, paging_li, $cancel, $pageNum;
	var init=(x,y)=>{
		ctx=$$('x');
		$("#tab_list").empty();
		if(x==null) {
			$cancel="N";
		} else {
			$cancel=x;
		}
		if(y==null) {
			$pageNum=1;
		} else {
			$pageNum=y;
		}
		tr="";
		paging_li="";
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
		$.ajax({
			url : ctx+'/movie/booking',
			method : 'post',
			dataType : 'json',
			contentType : 'application/json',
			data : JSON.stringify({
				"cancel" : $cancel,
				"id" : $$("id"),
				"pageNum" : $pageNum
			}),
			
			success : d=> {
				if(d.bookingCount==0) {
					tr='<tbody>'
					   +'	<tr>'
					   +'		<td colspan="6" style="height: 201px;">최근 예매 내역이 없습니다.</td>'
					   +'	</tr>'
					   +'</tbody>'
				} else {
					if($cancel=="N") {
						$.each(d.bookingList, (i,j)=>{
							tr+='<tbody>'
								+'<tr>'
								+'	<td>'+j.num+'</td>'
								+'	<td>'+j.reservationNumber+'</td>'
								+'	<td>'+j.movieTitle+'</td>'
								+'	<td>'+j.officeName+'</td>'
								+'	<td>'+j.day+'</td>'
								+'	<td><button onclick=seungwoo.fx.bookingCancel("'+j.reservationNumber+'","'+$cancel+'")>취소</button></td>'
								+'</tr>'
								+'</tbody>'
						});
					} else {
						$.each(d.bookingList, (i,j)=>{
							tr+='<tbody>'
								+'<tr>'
								+'	<td>'+j.num+'</td>'
								+'	<td>'+j.reservationNumber+'</td>'
								+'	<td>'+j.movieTitle+'</td>'
								+'	<td>'+j.officeName+'</td>'
								+'	<td>'+j.day+'</td>'
								+'	<td>취소됨</td>'
								+'</tr>'
								+'</tbody>'
						});
					}
					
				}
				$(".data_table").append(tr);
				
				if(d.commentPaging.cnt>0) {
					if(d.commentPaging.startPage>d.commentPaging.pageBlock) {
						$("#custom-pagination").append('<li><a class="img_btn customer prev" id="page_prev">«</a></li>');
						$("#page_prev").click(e=>{
							seungwoo.checkBookingList.init($cancel,d.commentPaging.startPage - d.commentPaging.pageBlock);
						});
					}
					for(var i=d.commentPaging.startPage; i<=d.commentPaging.endPage; i++) {
						if(i == d.commentPaging.currentPage) {
							paging_li+='<li><a class="active" onclick=seungwoo.checkBookingList.init("'+$cancel+'","'+i+'")>'+i+'</a></li>';
						}
						if(i != d.commentPaging.currentPage) {
							paging_li+='<li><a onclick=seungwoo.checkBookingList.init("'+$cancel+'","'+i+'")>'+i+'</a></li>';
						}
					}
					$("#custom-pagination").append(paging_li);
					if(d.commentPaging.pageCount>d.commentPaging.endPage) {
						$("#custom-pagination").append('<li><a class="img_btn customer next" id="page_next">»</a></li>');
						$("#page_next").click(e=>{
							seungwoo.checkBookingList.init($cancel,d.commentPaging.startPage + d.commentPaging.pageBlock);
						});
					}	
				}	
			},
			error : (x,s,m)=>{
				
			}
		});
	};
	var setContentView=()=>{
		$("<table>",{class:"data_table"}).appendTo($("#tab_list"));
		$(".data_table").append('<colgroup>'
				    +'<col width="80px">'
				    +'<col width="140px">'
				    +'<col>'
				    +'<col width="100px">'
				    +'<col width="110px">'
				    +'<col width="110px">'
				+'</colgroup>'
		);
		$(".data_table").append('<thead>'
				    +'<tr>'
			        +'<th scope="col" id="th_booklist_no">NO</th>'
			        +'<th scope="col" id="th_booklist_reserveno">예매번호</th>'
			        +'<th scope="col" id="th_booklist_moviename">영화명</th>'
			        +'<th scope="col" id="th_booklist_cinemaname">영화관</th>'
			        +'<th scope="col" id="th_booklist_playdate">상영일시</th>'
			        +'<th scope="col" id="th_booklist_refunddate">예매취소</th>'
			    +'</tr>'
			+'</thead>'
		);
		
		$("<ul>", {id:"custom-pagination"})
			.addClass("custom-pagination mt20")
			.appendTo($("#tab_list"));
	};
	return {init:init}
})();

seungwoo.movieStoryMenu=(()=>{
	var $sort;
	var init=x=>{
		ctx=$$('x');
		if(x==null) {
			$sort="movie-interesting-date";
		} else {
			$sort=x;
		}
		$("#mega_main").empty();
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
		seungwoo.movieHeader.init();
		seungwoo.myInfoSubmenu.init();

		$('<a/>',{id:"ttab1"}).attr({'data-toggle':"tab"})
			.text('보고싶어')
			.appendTo($("#nav-nav-tabs-mb20 li").eq(0))
			.click(e=>{
				$(".sort_wrap").empty();
				$sort="movie-interesting-date";
				seungwoo.movieStorySort.init($sort);
			});
		$('<a/>',{id:"ttab2"})
			.attr({'data-toggle':"tab"})
			.text('본영화')
			.appendTo($("#nav-nav-tabs-mb20 li").eq(1))
			.click(e=>{
				$(".sort_wrap").empty();
				$sort="movie-seen";
				seungwoo.movieStorySort.init($sort);
			});
		$('<a/>',{id:"ttab4"})
			.attr({'data-toggle':"tab"})
			.text('나의 한줄평')
			.appendTo($("#nav-nav-tabs-mb20 li").eq(2))
			.click(e=>{
				$(".sort_wrap").empty();
				$("#movieList").empty();
				$sort="movie-comment-date";
				seungwoo.movieStorySort.init($sort);
			});
		
		if($sort=="movie-interesting-date") {
			$("#ttab1").attr("aria-expanded","true");
			$("#ttab2").attr("aria-expanded","false");
			$("#ttab4").attr("aria-expanded","false");
		} else if($sort=="movie-seen") {
			$("#ttab1").attr("aria-expanded","false");
			$("#ttab2").attr("aria-expanded","true");
			$("#ttab4").attr("aria-expanded","false");
		} else if($sort=="movie-comment-date") {
			$("#ttab1").attr("aria-expanded","false");
			$("#ttab2").attr("aria-expanded","false");
			$("#ttab4").attr("aria-expanded","true");
		}
		
		seungwoo.movieStorySort.init($sort);
	};
	var setContentView=()=>{
		$("#mega_main")
			.append($('<div/>',{class:'content_wrap'}));
		$(".content_wrap")
			.append($('<div/>',{class:"header-btn-wrap"}))
			.append($('<div/>',{class:"sub_navi"}))
			.append($('<div/>',{id:"main-content",class:"main-content"}))
			.append($('<div/>',{id:"movie_detail",class:"modal fade"}));
		
		$(".header-btn-wrap")
			.append($('<button/>',{id:"btn_menu_all_sub_c"}))
			.append($('<div/>',{id:"btn_social_sub_c"}))
			.append($('<div/>',{class:"btn_theater"}));
		
		$(".main-content")
			.append($('<div/>',{id:"mypage_container",class:"mypage_container"}));
		$('<div/>',{id:"width-fixed_mypage_membership_wrap"})
			.addClass('width-fixed mypage_membership_wrap')
			.css({'position':'relative'}).appendTo(".mypage_container");
		
		$('<ul/>')
			.append($('<li/>')).append($('<li/>')).append($('<li/>')).append($('<li/>')).append($('<li/>')).append($('<li/>')).append($('<li/>')).append($('<li/>'))
			.addClass('mypage_menu')
			.appendTo("#width-fixed_mypage_membership_wrap");

		$('<div/>')
			.addClass('h2_mypage')
			.appendTo($("#width-fixed_mypage_membership_wrap"));
		$('<h3/>')
			.addClass('sub_title')
			.text('나의 무비스토리')
			.appendTo($(".h2_mypage"));
		
		$('<ul/>',{id:"nav-nav-tabs-mb20"})
			.addClass('nav nav-tabs mb20')
			.appendTo($("#width-fixed_mypage_membership_wrap"));
		$('<li/>').
			addClass('active')
			.appendTo($("#nav-nav-tabs-mb20"));
		$('<li/>')
			.appendTo($("#nav-nav-tabs-mb20"));
		$('<li/>')
			.appendTo($("#nav-nav-tabs-mb20"));
		
		$('<div/>',{class:"tab-content"}).appendTo($("#width-fixed_mypage_membership_wrap"));
		$('<div/>',{class:"tab-pane active", id:"tab1"}).appendTo($(".tab-content"));
		$('<div/>',{id:"flip_wrapper"}).appendTo($("#tab1"));
		$('<div/>',{class:"movielist_util_wrap"}).appendTo($("#flip_wrapper"));
		
		$('<ul/>',{class:"sort_wrap"}).appendTo($(".movielist_util_wrap"));
		
		$('<ul/>',{id:"movieList"}).appendTo($("#flip_wrapper"));
	};
	return {init:init}
})();

seungwoo.movieStorySort=(()=>{
	var ctx, $sort;
	var init=x=>{
		if(x==null) {
			$sort="movie-interesting-date";
		} else {
			$sort=x;
		}
		ctx=$$("x");
		onCreate();
	};
	var onCreate=()=>{
		if($sort=="movie-interesting-date") {
			$('.sort_wrap').append($('<li/>')).append($('<li/>')).append($('<li/>'));
			$('<a/>').addClass("active").text('개봉일순').appendTo($('.sort_wrap li').eq(0))
				.click(e=>{
					$sort="movie-interesting-date";
					$(".sort_wrap li a").removeClass();
					$(".sort_wrap li a").eq(0).addClass("active");
					seungwoo.movieList.init($sort);
				});
			$('<a/>').text('평점순').appendTo($('.sort_wrap li').eq(1))
				.click(e=>{
					$sort="movie-interesting-score";
					$(".sort_wrap li a").removeClass();
					$(".sort_wrap li a").eq(1).addClass("active");
					seungwoo.movieList.init($sort);
				});
			$('<a/>').text('가나다순').appendTo($('.sort_wrap li').eq(2))
				.click(e=>{
					$sort="movie-interesting-character";
					$(".sort_wrap li a").removeClass();
					$(".sort_wrap li a").eq(2).addClass("active");
					seungwoo.movieList.init($sort);
				});
			seungwoo.movieList.init($sort);
		} else if($sort=="movie-seen") {
			seungwoo.movieList.init($sort);
		} else if($sort=="movie-comment-date") {
			$sort="movie-comment-date";
			seungwoo.movieMyCommentList.init($sort);
		}
	};
	return {init:init}
})();

seungwoo.movieHeader=(()=>{
	var init=()=>{
		ctx=$$('x');
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
		$('<i/>',{class:"fa fa-bars"})
			.text('전체메뉴')
			.appendTo($("#btn_menu_all_sub_c"))
			.click(e=>{
				alert('전체메뉴');
			});
		$('<a/>')
			.addClass('film_society')
			.text('필름 소사이어티')
			.appendTo($("#btn_social_sub_c"))
			.click(e=>{
				alert('필름 소사이어티');
			});
		$('<i/>')
			.addClass('split')
			.appendTo($("#btn_social_sub_c"));
		$('<a/>')
			.addClass('classic_society')
			.text("클래식 소사이어티")
			.appendTo($("#btn_social_sub_c"))
			.click(e=>{
				alert('클래식 소사이어티');
			});
		
		$('<a/>',{class:"membership_txt"})
			.text('고객센터')
			.appendTo($("#membership_link_sub_c"))
			.click(e=>{
				alert('고객센터');
			});
		$('<i/>',{class:"split"})
			.appendTo($("#membership_link_sub_c"));
		$('<a/>',{class:"membership_txt"})
			.text('멤버십')
			.appendTo($("#membership_link_sub_c"))
			.click(e=>{
				alert('멤버십');
			});
		$('<i/>',{class:"split"})
			.appendTo($("#membership_link_sub_c"));
		$('<a/>',{class:"membership_txt"})
			.text('VIP')
			.appendTo($("#membership_link_sub_c"))
			.click(e=>{
				alert('VIP');
			});
		$('<button/>')
			.addClass('img_btn header btn_time')
			.text('상영시간표')
			.appendTo($(".btn_theater"))
			.click(e=>{
				alert('상영시간표');
			});
		$('<button/>')
			.addClass('img_btn header btn_reservation focus_modale')
			.attr('data-toggle','modal')
			.attr('data-target','#myModal')
			.text('빠른예매')
			.appendTo($(".btn_theater"))
			.click(e=>{
				
			});
	};
	var setContentView=()=>{
		$("#btn_menu_all_sub_c")
			.addClass('btn_menu_all');
		$("#btn_social_sub_c")
			.addClass('btn_social sub_c');
		$(".btn_theater")
			.append($('<span/>',{id:"membership_link_sub_c"}));
		$("#membership_link_sub_c")
			.addClass('membership_link sub_c');
	};
	return {init:init}
})();

seungwoo.movieSubmenu=(()=>{
	var init=()=>{
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
		$("#movie_sm01").attr('class','movie sm01');
		$("#movie_sm02").attr('class','movie sm02');
		$("#movie_sm03").attr('class','movie sm03');
		$("#movie_sm11").attr('class','movie sm11');
		$("#movie_sm12").attr('class','movie sm12');
		$("#movie_sm01")
			.click(e=>{
				seungwoo.movieMain.init('movie-boxoffice');
			});
		$("#movie_sm02")
			.click(e=>{
				seungwoo.movieMain.init('movie-showing-date');
			});
		$("#movie_sm03")
			.click(e=>{
				seungwoo.movieMain.init('movie-scheduled-date');
			});
		$("#movie_sm11")
			.click(e=>{
				if(seungwoo.fx.loginChk()>0) {
					seungwoo.movieMain.init('movie-interesting-date');
				} else {
					alert("로그인 해주세요.");
				}
			});
		$("#movie_sm12")
			.click(e=>{
				if(seungwoo.fx.loginChk()>0) {
					seungwoo.movieStoryMenu.init("movie-interesting-date");
				} else {
					alert("로그인 해주세요.");
				}
			});
	};
	var setContentView=()=>{
		$(".sub_navi_wrap").html('<ul class="clearfix">'
			      +'<li>'
			        +'<a id="movie_sm01">박스오피스</a>'
			      +'</li>'
			      +'<li>'
			        +'<a id="movie_sm02">최신개봉작</a>'
			      +'</li>'
			      +'<li>'
			        +'<a id="movie_sm03">상영예정작</a>'
			      +'</li>'
			      +'<li>'
			        +'<a id="movie_sm11">보고싶어</a>'
			      +'</li>'
			      +'<li class="pull-right pt10">'
			        +'<a id="movie_sm12">나의 무비스토리</a>'
			      +'</li>'
			    +'</ul>'
		);
	};
	return {init:init};
})();

seungwoo.myInfoSubmenu=(()=>{
	var $main;
	var init=()=>{
		ctx=$$('x');
		$main=$('#mega_main');
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
		$('<a/>',{id:"mypage_sm01",class:"mypage sm01"})
			.text('나의 메가박스')
			.appendTo("#movie_clearfix li");
		
		$('<a/>',{class:"col1",text:"멤버십정보", id:"col1"})
			.appendTo($(".mypage_menu li").eq(0))
			.click(e=>{
				alert('멤버십정보');
			});
		$('<a/>',{class:"col2",text:"포인트교환",id:"col2"})
			.appendTo($(".mypage_menu li").eq(1))
			.click(e=>{
				alert('포인트교환');
			});
		$('<a/>',{class:"col3",text:"예매확인/취소",id:"col3"})
			.appendTo($(".mypage_menu li").eq(2))
			.click(e=>{
				seungwoo.checkBookingMenu.init();
			});
		$('<a/>',{class:"col4",text:"스토어 구매내역",id:"col4"})
			.appendTo($(".mypage_menu li").eq(3))
			.click(e=>{
				alert('스토어 구매내역');
			});
		$('<a/>',{class:"col5",text:"나의무비스토리",id:"col5"})
			.appendTo($(".mypage_menu li").eq(4))
			.click(e=>{
				seungwoo.movieStoryMenu.init("movie-interesting-date");
			});
		$('<a/>',{class:"col6",text:"관람권/VIP쿠폰",id:"col6"})
			.appendTo($(".mypage_menu li").eq(5))
			.click(e=>{
				alert('관람권/VIP쿠폰');
			});
		$('<a/>',{class:"col7",text:"개인정보수정",id:"col7"})
			.appendTo($(".mypage_menu li").eq(6))
			.click(e=>{
				$.getScript($$('j')+'/megabox.js',()=>{
					megabox.func.myinfoupdate();
				})
			});
		$('<a/>',{class:"col8",text:"나의문의내역",id:"col8"})
			.appendTo($(".mypage_menu li").eq(7))
			.click(e=>{
				alert('나의문의내역');
			});
	};
	var setContentView=()=>{
		$(".sub_navi")
			.append($('<div/>',{class:"sub_navi_wrap"}));
		$('<ul/>',{id:"movie_clearfix"})
			.addClass('clearfix')
			.appendTo($(".sub_navi_wrap"));
		$('<li/>').appendTo($("#movie_clearfix"));
	};
	return {init:init}
})();

seungwoo.session={
	init : x=>{
		sessionStorage.setItem('x', x);
		sessionStorage.setItem('j', x+'/resources/js');
		sessionStorage.setItem('c', x+'/resources/css');
		sessionStorage.setItem('i', x+'/resources/img')
	},
	getPath : x=>{
		return sessionStorage.getItem(x);
	}
}

seungwoo.movieUI={
		boxoffice : (img)=>{ return '<li class="item" tabindex="0">'
			+'                              <div class="thumb flip" tabindex="0">'
			+'                                 <div class="upper">'
			+'                                    <span class="boxoffice n1">01</span>'
			+'                                    <img src="'+img+'" alt="범죄도시"> <!-- 포스터 -->'
			+'                                    <!-- 특별관 마크 -->'
			+'                                    <span class="mark_special_wrp">'
			+'                                    <i class="icon m2">m2</i>'
			+'                                    <i class="icon boutiquem">theBoutique</i>'
			+'                                    </span>'
			+'                                 </div>'
			+'                                 <div class="lower">'
			+'                                    <div class="back_wrap">'
			+'                                       <div name="starScore_012675" class="star-wrap" data-code="012675" style="cursor: pointer; width:180px;">'
			+'                                        <input type="image" src="http://image2.megabox.co.kr/mop/home/star_big_off.png" alt="별점1 괜히봤어요" title="별점1 괜히봤어요">'
			+'                                        <input type="image" src="http://image2.megabox.co.kr/mop/home/star_big_off.png" alt="별점2 기대하진 말아요" title="별점2 기대하진 말아요">'
			+'                                        <input type="image" src="http://image2.megabox.co.kr/mop/home/star_big_off.png" alt="별점3 무난했어요" title="별점3 무난했어요">'
			+'                                        <input type="image" src="http://image2.megabox.co.kr/mop/home/star_big_off.png" alt="별점4 기대해도 좋아요!" title="별점4 기대해도 좋아요!">'
			+'                                        <input type="image" src="http://image2.megabox.co.kr/mop/home/star_big_off.png" alt="별점5 너무 멋진 영화였어요!" title="별점5 너무 멋진 영화였어요!">'
			+'                                        <input type="hidden" name="score">'
			+'                                       </div>'
			+'                                       <p class="text" name="starScoreTxt_012675">평점을 입력해주세요</p>'
			+'                                    </div>'
			+'                                    <span class="bg"></span>'
			+'                                    <img src="'+img+'" alt="범죄도시" class="back_poster"> <!-- 포스터 -->'
			+'                                 </div>'
			+'                              </div>'
			+'                              <div class="front-info">'
			+'                                 <!-- 영화정보// -->'
			+'                                 <div class="movie_info">'
			+'                                    <h3 class="sm_film">'
			+'                                       <span class="film_rate age_19">청소년관람불가</span>'
			+'                                       <a class="film_title" title="영화상세 보기">킹스맨: 골든 서클</a>'
			+'                                    </h3>'
			+'                                    <div class="btn_wrap sm_btn">'
			+'                                       <a class="img_btn movie pull-left" title="영화상세 보기">상세정보</a>'
			+'                                       <a href="javascript:void(0);" class="img_btn movie pull-right" data-toggle="modal" data-target="#myModal" title="영화 예매하기">예매하기</a>'
			+'                                    </div>'
			+'                                 </div>'
			+'                                 <!-- //영화정보 -->'
			+'                              </div>'
			+'                           </li>'
		}	
}

seungwoo.fx={
	loginChk : ()=> {
		if($$("id")==null) {
			return -1;
		} else {
			return 1;
		};
	},
	deleteComment : x=>{
		var ctx=$$("x");
		$.ajax({
			url : ctx+'/movie/comment/delete/'+x,
			method : 'post',
			dataType : 'json',
			contentType : 'application/json',
			success : d=> {
				if(d.commentDeleteChk>0) {
					alert('삭제 실패');
				} else {
					alert('삭제 성공');
				};
			},
			error : (x,s,m)=> {
				alert("에러 : "+m);
			}	
		})
	},
	deleteMyComment : (x,y)=>{
		var ctx=$$("x");
		$.ajax({
			url : ctx+'/movie/deleteMyComment',
			method : 'post',
			dataType : 'json',
			contentType : 'application/json',
			data : JSON.stringify({
				"replyNum" : x
			}),
			success : d=> {
				alert("정상적으로 삭제되었습니다.");
				seungwoo.movieMyCommentList.init(y);
			},
			error : (x,s,m)=> {
				alert("에러 : "+m);
			}	
		})
	},
	seenChk : x=> {
		var returnData=0;
		var ctx=$$("x");
		$.ajax({
			url : ctx+'/movie/seen/chk',
			method : 'post',
			dataType : 'json',
			contentType : 'application/json',
			async: false,
			data : JSON.stringify({
				"movieSeq" : x,
				"id" : $$("id"),
				"movieCheck" : "s"
			}),
			success : d=> {
				returnData=d.chk;
			},
			error : (x,s,m)=> {
				alert("에러 : "+m);
			}	
		})
		return returnData;
	},
	interestingChk : x=> {
		var returnData=0;
		var ctx=$$("x");
		$.ajax({
			url : ctx+'/movie/interesting/chk',
			method : 'post',
			dataType : 'json',
			contentType : 'application/json',
			async: false,
			data : JSON.stringify({
				"movieSeq" : x,
				"id" : $$("id"),
				"movieCheck" : "i"
			}),
			success : d=> {
				returnData=d.chk;
			},
			error : (x,s,m)=> {
				alert("에러 : "+m);
			}	
		})
		return returnData;
	},
	listMovieCheck : (x,y)=>{
		var ctx=$$("x");
		var $movieSeq=x;
		var $sort=y;
		$("#btnSeenMovie_"+$movieSeq).click(e=>{
			e.preventDefault();
			if(seungwoo.fx.loginChk()>0) {
				if(seungwoo.fx.seenChk($movieSeq)>0) {
					$("#btnSeenMovie_"+$movieSeq).attr("class","img_you_ck btn_01");
					$.ajax({
						url : ctx+'/movie/seen/remove',
						method : 'post',
						dataType : 'json',
						data : JSON.stringify({
							"movieSeq" : $movieSeq,
							"id" : $$("id"),
							"movieCheck" : "s"
						}),
						contentType : 'application/json',
						success : d=>{
							seungwoo.movieMainSort.init($sort);
						},
						error : (x,s,m)=>{
							alert("에러 : "+m);
						}
					});
				} else {
					$("#btnSeenMovie_"+$movieSeq).attr("class","img_you_ck btn_01 active");
					$.ajax({
						url : ctx+'/movie/seen/add',
						method : 'post',
						dataType : 'json',
						data : JSON.stringify({
							"movieSeq" : $movieSeq,
							"id" : $$("id"),
							"movieCheck" : "s"
						}),
						contentType : 'application/json',
						success : d=>{
							seungwoo.movieMainSort.init($sort);
						},
						error : (x,s,m)=>{
							alert("에러 : "+m);
						}
					});
				}
			} else {
				alert('로그인 후 이용가능한 서비스입니다.');
			};
		});
		
		$("#btnInterestingMovie_"+$movieSeq).click(e=>{
			e.preventDefault();
			if(seungwoo.fx.loginChk()>0) {
				if(seungwoo.fx.interestingChk($movieSeq)>0) {
					$("#btnInterestingMovie_"+$movieSeq).attr("class","img_you_ck btn_02");
					$.ajax({
						url : ctx+'/movie/interesting/remove',
						method : 'post',
						dataType : 'json',
						data : JSON.stringify({
							"movieSeq" : $movieSeq,
							"id" : $$("id"),
							"movieCheck" : "i"
						}),
						contentType : 'application/json',
						success : d=>{
							seungwoo.movieMainSort.init($sort);
						},
						error : (x,s,m)=>{
							alert("에러 : "+m);
						}
					});
				} else {
					$("#btnInterestingMovie_"+$movieSeq).attr("class","img_you_ck btn_02 active");
					$.ajax({
						url : ctx+'/movie/interesting/add',
						method : 'post',
						dataType : 'json',
						data : JSON.stringify({
							"movieSeq" : $movieSeq,
							"id" : $$("id"),
							"movieCheck" : "i"
						}),
						contentType : 'application/json',
						success : d=>{
							seungwoo.movieMainSort.init($sort);
						},
						error : (x,s,m)=>{
							alert("에러 : "+m);
						}
					});
				}
			} else {
				alert('로그인 후 이용가능한 서비스입니다.');
			};
		});
	},
	detailMovieCheck : (x,y,z)=>{
		var ctx=$$("x");
		var $movieSeq=x;
		$("#btnSeenMovie").click(e=>{
			e.preventDefault();
			if(seungwoo.fx.loginChk()>0) {
				if(seungwoo.fx.seenChk($movieSeq)>0) {
					$("#btnSeenMovie").attr("class","img_btn btn_seen");
					$.ajax({
						url : ctx+'/movie/seen/remove',
						method : 'post',
						dataType : 'json',
						data : JSON.stringify({
							"movieSeq" : $movieSeq,
							"id" : $$("id"),
							"movieCheck" : "s"
						}),
						contentType : 'application/json',
						success : d=>{
							seungwoo.movieDetail.init($movieSeq,y,z);
						},
						error : (x,s,m)=>{
							alert("에러 : "+m);
						}
					});
				} else {
					$("#btnSeenMovie").attr("class","img_btn btn_seen active");
					$.ajax({
						url : ctx+'/movie/seen/add',
						method : 'post',
						dataType : 'json',
						data : JSON.stringify({
							"movieSeq" : $movieSeq,
							"id" : $$("id"),
							"movieCheck" : "s"
						}),
						contentType : 'application/json',
						success : d=>{
							seungwoo.movieDetail.init($movieSeq,y,z);
						},
						error : (x,s,m)=>{
							alert("에러 : "+m);
						}
					});
				}
			} else {
				alert('로그인 후 이용가능한 서비스입니다.');
			};
		});
		
		$("#btnInterestingMovie").click(e=>{
			e.preventDefault();
			if(seungwoo.fx.loginChk()>0) {
				if(seungwoo.fx.interestingChk($movieSeq)>0) {
					$("#btnInterestingMovie").attr("class","img_btn btn_inte");
					$.ajax({
						url : ctx+'/movie/interesting/remove',
						method : 'post',
						dataType : 'json',
						data : JSON.stringify({
							"movieSeq" : $movieSeq,
							"id" : $$("id"),
							"movieCheck" : "i"
						}),
						contentType : 'application/json',
						success : d=>{
							seungwoo.movieDetail.init($movieSeq,y,z);
						},
						error : (x,s,m)=>{
							alert("에러 : "+m);
						}
					});
				} else {
					$("#btnInterestingMovie").attr("class","img_btn btn_inte active");
					$.ajax({
						url : ctx+'/movie/interesting/add',
						method : 'post',
						dataType : 'json',
						data : JSON.stringify({
							"movieSeq" : $movieSeq,
							"id" : $$("id"),
							"movieCheck" : "i"
						}),
						contentType : 'application/json',
						success : d=>{
							seungwoo.movieDetail.init($movieSeq,y,z);
						},
						error : (x,s,m)=>{
							alert("에러 : "+m);
						}
					});
				}
			} else {
				alert('로그인 후 이용가능한 서비스입니다.');
			};
		});
	},
	bookingCancel : (x,y)=>{
		var ctx=$$("x");
		$.ajax({
			url : ctx+'/movie/booking/cancel',
			method : 'post',
			dataType : 'json',
			data : JSON.stringify({
				"reservationNumber" : x
			}),
			contentType : 'application/json',
			success : d=>{
				alert('예매 취소 성공');
				seungwoo.checkBookingList.init(y);
			},
			error : (x,s,m)=>{
				alert("에러 : "+m);
			}
		});	
	}
}

var $$=x=>{return sessionStorage.getItem(x)};