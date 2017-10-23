var seungwoo=seungwoo || {};

seungwoo.common=(()=>{
	var init=ctx=> {
		seungwoo.session.init(ctx);
	};
	return {init:init}
})();

seungwoo.movieMain=(()=>{
	var init=()=>{
		ctx=$$('x');
		$("#mega_main").empty();
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
		seungwoo.movieHeader.init();
		seungwoo.movieSubmenu.init();
		
		/* 정렬 */
		$('<a/>').text('개봉일순').appendTo($('.sort_wrap li').eq(0))
			.click(e=>{
				alert('개봉일순');
			});
		$('<a/>').text('가나다순').appendTo($('.sort_wrap li').eq(1))
			.click(e=>{
				alert('가나다순');
			});
		
		/* 나중에 $.ajax로 바꾸기 */
		$.getJSON(ctx+'/get/board/none', data=>{
			var li='';
			$.each(data,function(i,j){
				li+='<li class="item">'
		                +'<div id="item_1" class="thumb flip">'
		                    +'<div class="upper">'
		                        +'<span class="boxoffice n3">03</span>'
		                        +'</div>'
			                    +'<div class="lower">'
				                    +'<div class="back_wrap">'
				                    +'<button type="button" name="btnSeenMovie_012675" class="img_you_ck btn_01 " data-code="012675">본영화</button>'
				                    +'<button type="button" name="btnInterestingMovie_012675" class="img_you_ck btn_02 " data-code="012675">보고싶어</button>'
			                    +'</div>'
			                    +'<a href="javascript:void(0);" class="blank"></a>'
			                    +'<img src="http://image2.megabox.co.kr/mop/poster/2017/D7/32EA72-3589-4F85-B131-94A199ABE31A.large.jpg" class="back_poster">'
		                    +'</div>'
		                +'</div>'
		                +'<div class="front-info">'
		                    +'<div class="rating">'
		                        +'<span class="fz14 pt2 pr9"><span>평점</span>'
		                        +'<span>7.2</span></span>'
		                        +'<span class="star">'
		                            +'<span class="fill" style="width:72.4%;"></span>'
		                        +'</span>'
		                    +'</div>'
		                    +'<div class="movie_info">'
		                        +'<h3 class="sm_film">'
		                            +'<span class="film_rate age_15">15세관람가</span>'
		                            +'<a class="film_title">남한산성</a>'
		                        +'</h3>'
		                        +'<div class="btn_wrap sm_btn">'
		                            +'<a id="goMovieDetail_1" class="img_btn movie pull-left">상세정보</a>'
		                            +'<a id="goMovieReservation_1" class="img_btn movie pull-right">예매하기</a>'
		                        +'</div>'
		                    +'</div>'
		                +'</div>'
		            +'</li>';
			});
		});
		
		var arr=[
            'http://image2.megabox.co.kr/mop/poster/2017/46/F8B4A0-0392-4366-8344-9F210B198398.large.jpg',
            'http://image2.megabox.co.kr/mop/poster/2017/28/5CCD96-6F15-4C2F-8F4E-CF9A9E9CF37D.large.jpg',
            ];
		
         $.each(arr,(i,j)=>{
            $('#movieList').append(seungwoo.movieUI.boxoffice(arr[i]));
            $('<a/>')
            .appendTo('.lower')
            .attr('class','blank')
            .attr('title','영화상세 보기')
            .click(()=>{
            	seungwoo.movieDetail.init();
            });
             $(".thumb").mouseover(function(){
                $(this).attr('class','thumb flip flipIt');
             });
             $(".thumb").mouseout(function(){
                $(this).attr('class','thumb flip');
             });

         });
		/*each 안에 들어갈 것-끝*/
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
			.appendTo('.full-width');

		$('<div/>')
			.addClass('movielist_util_wrap')
			.appendTo('#flip_wrapper');
		$('<ul/>')
			.addClass('sort_wrap')
			.appendTo('.movielist_util_wrap');	
		$('.sort_wrap')
			.append($('<li/>'))
			.append($('<li/>'));
		
		$('<ul/>',{id:"movieList"})
			.appendTo('#flip_wrapper');
	};
	return {init:init}
})();

seungwoo.movieDetail=((()=>{
	var init=()=>{
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
		
		/* [영화상세 정보] */
		$('<i/>')
			.addClass('age_l age_12_l')
			.text('XX세관람가')
			.appendTo($("#title_clearfix h2"));
		$('<span/>')
			.text('영화이름')
			.insertAfter($("#title_clearfix h2 i"));
		$('<p/>')
			.addClass('right_p')
			.html('예매율<strong>xx</strong>위<span> x.x% </span>')
			.appendTo('.reservation_wrap');
		$('<button/>')
			.addClass('img_btn movie btn_reservation')
			.text('예매하기')
			.appendTo('.reservation_wrap')
			.click(e=>{
				alert('예매하기');
			});
		$($(".info_wrap")).html(
				'<li><strong>타입</strong> : 디지털(자막)</li>'
				+'<li><strong>개봉일</strong> : 2017.00.00</li>'
				+'<li><strong>감독</strong> : 감독명</li>'
				+'<li><strong>출연진</strong> :'
				+'	배우1,&nbsp;배우2,&nbsp;배우3'
				+'</li>'
				+'<li><strong>장르</strong> : XX / XX 분</li>'
				+'<li>'
				+'	<strong>누적관객</strong> : XX,XXX명<span class="divider"></span><strong>전일관객</strong> : XXX명 <a href="#" class="audience_tooltips" id="btn_tooltips" title="누적관객 도움말 보기">누적관객 도움말</a>'
				+'	<div class="tooltips_box">누적관객 및 전일관객은 영화진흥 위원회<br>'
				+'		영화관 입장권 통합전상망제공 기준입니다. <br>'
				+'		(<span id="tooltipsDate">2017.XX.XX</span>기준)'
				+'	</div>'
				+'</li>'	
		);
		
		$('<button/>',{class:"img_btn btn_seen",id:"btnSeenMovie"})
			.text('본영화')
			.appendTo($("#btn_wrap_1"))
			.click(e=>{
				alert('본영화');
			});
		$('<button/>',{class:"img_btn btn_inte",id:"btnInterestingMovie"})
			.text('보고싶어')
			.appendTo($("#btn_wrap_1"))
			.click(e=>{
				alert('보고싶어');
			});
		$('<span/>')
			.addClass('like')
			.html('<span>xx<i></i></span>')
			.appendTo($("#btn_wrap_1"));
		$('<a/>')
			.addClass('img_btn btn_timeSchedule')
			.attr('target',"_self")
			.text('상영시간표')
			.appendTo($("#btn_wrap_1"))
			.click(e=>{
				alert('상영시간표');
			});
		
		$('<span/>')
			.addClass("stillCount")
			.text('(xx)')
			.appendTo($("#btn_steelCut"));
		
		$('<a/>')
			.addClass('still_prev')
			.text('이전 스틸컷')
			.appendTo($('.still_prevNext'))
			.click(e=>{
				alert('이전 스틸컷');
			});
		$('<a/>')
			.addClass('still_next')
			.text('다음 스틸컷')
			.appendTo($('.still_prevNext'))
			.click(e=>{
				alert('다음 스틸컷');
			});
		
		$('<a/>',{id:"stlll_cut_x",title:"스틸컷x",class:"on"})
			.appendTo($(".stillLi"));
		$('<span/>')
			.addClass('blind')
			.text('스틸컷x')
			.appendTo($(".stillLi a"));
		
		$('<a/>')
			.addClass('still_prev2')
			.text('이전 스틸컷')
			.appendTo($('.still_prevNext2'))
			.click(e=>{
				alert('이전 스틸컷2');
			});
		$('<a/>')
			.addClass('still_next2')
			.text('다음 스틸컷')
			.appendTo($('.still_prevNext2'))
			.click(e=>{
				alert('다음 스틸컷2');
			});
		
		/* [영화상세 댓글] */
		
		$('<span/>',{id:"movieCommentTotalCount"})
			.text('(x)')
			.appendTo($("#popup_box_row5 h3"));
		
		$("#myStarScore input")
			.eq(0)
			.hover(e=>{
				alert('별점1');
			});
		$("#myStarScore input")
			.eq(1)
			.hover(e=>{
				alert('별점2');
			});
		$("#myStarScore input")
			.eq(2)
			.hover(e=>{
				alert('별점3');
			});
		$("#myStarScore input")
			.eq(3)
			.hover(e=>{
				alert('별점4');
			});
		$("#myStarScore input")
			.eq(4)
			.hover(e=>{
				alert('별점5');
			});
		
		/* textarea 글자수 제한 */
		$('.textarea textarea').keyup(function(e) {
	        if($(this).val().length > 100) {
	        	alert("글자수는 100자로 제한됩니다.!");  
	            $(this).val($(this).val().substring(0, 100));
	        }
	    });
		$('.textarea textarea').keyup(function(e){
	          var content = $(this).val();
	          $(this).height(((content.split('\n').length + 1) * 1.5) + 'em');
	          $('#wordCheckCount').html(content.length + '/100');
	      });
		
		$('<button/>',{type:"submit",class:"img_btn movie"})
			.text('등록')
			.appendTo($("#btn_wrap_2"))
			.click(e=>{
				alert('등록');
			});
		
		/* 정렬 */
		$('<li/>')
			.addClass('c_mint')
			.text('최신순')
			.appendTo($("#movieCommentList ul").eq(0))
			.click(e=>{
				alert('최신순');
			});
		$('<li/>')
			.text('추천순')
			.appendTo($("#movieCommentList ul").eq(0))
			.click(e=>{
				alert('추천순');
			});
		$('<li/>')
			.text('평점순')
			.appendTo($("#movieCommentList ul").eq(0))
			.click(e=>{
				alert('평점순');
			});
		
		/* 나중에 $.ajax로 바꾸기 */
		$.getJSON(ctx+'/get/board/none', data=>{
			var li='';
			$.each(data,function(i,j){
				li+='<li>'
	                +'<div class="text">'
	                    +'<div class="name"><strong>gkdud3**</strong></div>'
	                    +'<p><span class="comment">윽 진짜 노잼이였는데 다시 상영하네..</span></p>'
	                    +'<div class="name">'
	                        +'<span>17.10.03</span>'
	                        +'<span class="small_star2">'
	                            +'<span class="fill" style="width:0.0%;"><span class="blind">별점1 괜히봤어요</span></span>'
	                        +'</span>'
	                        +'<div class="report"><i class="i_report" aria-hidden="true"></i>신고하기</div>'
	                    +'</div>'
	                +'</div>'
	                +'<div class="recommend">'
	                    +'<p><strong>1</strong></p>'
	                    +'<p><a style="color:#333" title="추천하기">추천</a></p>'
	                +'</div>'
	            +'</li>';
			});
			$("#movieCommentList ul").eq(1).append();
		});
		$("#movieCommentList ul").eq(1).append('<li>'
                +'<div class="text">'
                    +'<div class="name"><strong>gkdud3**</strong></div>'
                    +'<p><span class="comment">윽 진짜 노잼이였는데 다시 상영하네..</span></p>'
                    +'<div class="name">'
                        +'<span>17.10.03</span>'
                        +'<span class="small_star2">'
                            +'<span class="fill" style="width:0.0%;"><span class="blind">별점1 괜히봤어요</span></span>'
                        +'</span>'
                        +'<div class="report"><i class="i_report" aria-hidden="true"></i>신고하기</div>'
                    +'</div>'
                +'</div>'
                +'<div class="recommend">'
                    +'<p><strong>1</strong></p>'
                    +'<p><a style="color:#333" title="추천하기">추천</a></p>'
                +'</div>'
            +'</li>'
		);
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
		$('<div/>')
			.addClass('text')
			.text('영화설명')
			.appendTo($("#popup_box_row2"));
		
		$('<div/>',{id:"popup_box_row3",class:"popup_box row3"})
			.appendTo($("#movieDetail"));
		$('<h3/>')
			.appendTo($("#popup_box_row3"));
		$('<a/>',{id:"btn_steelCut"})
			.addClass('btn_steelCut active')
			.text('스틸컷')
			.appendTo($("#popup_box_row3 h3"));
		
		$('<div/>')
			.addClass('stillcut_list')
			.appendTo($("#popup_box_row3"));
		$('<div/>')
			.addClass('still_prevNext')
			.appendTo($('.stillcut_list'));
	
		$('<div/>')
			.addClass('still_slide')
			.appendTo($('.stillcut_list'));
		$('<ul/>')
			.css({'style':"width:1510px",'left':"0px",'right':"0px"})
			.appendTo($(".still_slide"));
		$('<li/>')
			.addClass('stillLi')
			.appendTo($(".still_slide ul"));
		
		$('<div/>')
			.addClass('still_view_box')
			.appendTo($("#popup_box_row3"));
		$('<div/>')
			.addClass('still_img')
			.appendTo($('.still_view_box'));
		$('<div/>')
			.addClass('still_prevNext2')
			.appendTo($('.still_view_box'));
		
		$('<div/>',{id:"popup_box_row5",class:"popup_box row5"})
			.appendTo($("#movieDetail"));
		
		$('<h3/>')
			.text('한줄평')
			.appendTo($("#popup_box_row5"));
		
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
			.attr({'alt':"별점1 괜히봤어요"})
			.appendTo($("#myStarScore"));
		$('<input/>',{type:"image",src:"http://image2.megabox.co.kr/mop/home/star_mid_off.png"})
			.attr({'alt':"별점2 기대하진 말아요"})
			.appendTo($("#myStarScore"));
		$('<input/>',{type:"image",src:"http://image2.megabox.co.kr/mop/home/star_mid_off.png"})
			.attr({'alt':"별점3 무난했어요"})
			.appendTo($("#myStarScore"));
		$('<input/>',{type:"image",src:"http://image2.megabox.co.kr/mop/home/star_mid_off.png"})
			.attr({'alt':"별점4 기대해도 좋아요!"})
			.appendTo($("#myStarScore"));
		$('<input/>',{type:"image",src:"http://image2.megabox.co.kr/mop/home/star_mid_off.png"})
			.attr({'alt':"별점5 너무 멋진 영화였어요!"})
			.appendTo($("#myStarScore"));
		$('<input/>',{type:"hidden",name:"starScore"}).appendTo($("#myStarScore"));
		$('<p/>')
			.addClass('text-center')
			.text('평점을 입력해주세요')
			.appendTo($(".rate"));
		
		$('<div/>')
			.addClass('textarea')
			.appendTo($(".input"));
		$('<textarea/>',{title:"댓글쓰기",name:"comment",cols:"30",rows:"10"})
			.text('로그인 후 이용가능한 서비스입니다.')
			.appendTo($(".textarea"));
		
		$('<div/>',{id:"btn_wrap_2"})
			.addClass('btn_wrap')
			.appendTo($(".input"));
		
		$('<div/>',{id:"movieCommentList",class:"list"})
			.appendTo($("#popup_box_row5"));
		$('<ul/>')
			.addClass('sort pull-right mb15')
			.css({'overflow':'visible'})
			.appendTo($("#movieCommentList"));
		
		$('<ul/>')
			.addClass('item')
			.appendTo($("#movieCommentList"));
		/*
		 <ul class="item">
			<li>
				<div class="text">
					<div class="name"><strong>gkdud3**</strong></div>
					<p><span class="comment">윽 진짜 노잼이였는데 다시 상영하네..</span></p>
					<div class="name">
						<span>17.10.03</span>
						<span class="small_star2">
							<span class="fill" style="width:0.0%;"><span class="blind">별점1 괜히봤어요</span></span>
						</span>
						<div class="report"><i class="i_report" aria-hidden="true"></i>신고하기</div>
					</div>
				</div>
				<div class="recommend">
					<p><strong>1</strong></p>
					<p><a style="color:#333" title="추천하기">추천</a></p>
				</div>
			</li>
		</ul>
		
		<ul class="custom-pagination mt20">
			<li><a class="active" id="page1">1</a></li>
			<li><a id="page2">2</a></li>
			<li><a id="page3">3</a></li>
			<li><a id="page4">4</a></li>
			<li><a id="page5">5</a></li>
			<li><a title="다음 10페이지 보기" class="img_btn customer next"></a></li>
			<li><a title="마지막 페이지 보기" class="img_btn customer last"></a></li>
		</ul>
		 */
	};
	return {init:init}
}))();

seungwoo.movieInteresting=(()=>{
	var init=()=>{
		ctx=$$('x');
		$("#mega_main").empty();
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
		seungwoo.movieHeader.init();
		seungwoo.movieSubmenu.init();
		
		/* 정렬 */
		$('<a/>')
			.text('개봉일순')
			.appendTo($('.movielist_util_wrap li').eq(0))
			.click(e=>{
				alert('개봉일순');
			});
		$('<a/>')
			.text('가나다순')
			.appendTo($('.movielist_util_wrap li').eq(1))
			.click(e=>{
				alert('가나다순');
			});
	};
	var setContentView=()=>{
		$("#mega_main").append($('<div/>',{class:'content_wrap'}));
		$(".content_wrap").append($('<div/>',{class:"header-btn-wrap"}))
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
		$('<div/>',{id:"flip_wrapper"}).css({'width':'984px'})
			.appendTo('.full-width');

		$('<div/>')
			.addClass('movielist_util_wrap')
			.appendTo('#flip_wrapper');
		$('<ul/>')
			.addClass('sort_wrap')
			.appendTo('.movielist_util_wrap');
		$($(".sort_wrap"))
			.append('<li/>')
			.append('<li/>');
		
		$('<ul/>',{id:"movieList"})
			.appendTo('#flip_wrapper');
	};
	return {init:init}
})();

seungwoo.movieStory=(()=>{
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
			.text('보고싶어')
			.appendTo($("#nav-nav-tabs-mb20 li").eq(0))
			.click(e=>{
				alert('보고싶어');
			});
		$('<a/>',{id:"ttab2"})
			.attr({'data-toggle':"tab"})
			.text('본영화')
			.appendTo($("#nav-nav-tabs-mb20 li").eq(1))
			.click(e=>{
				alert('본영화');
			});
		$('<a/>',{id:"ttab4"})
			.attr({'data-toggle':"tab"})
			.text('나의 한줄평')
			.appendTo($("#nav-nav-tabs-mb20 li").eq(2))
			.click(e=>{
				alert('나의 한줄평');
			});
		
		$('<span/>',{id:"movieStoryCount_interesting"})
			.text('(x)')
			.appendTo($("#ttab1"));
		$('<span/>',{id:"movieStoryCount_seen"})
			.text('(x)')
			.appendTo($("#ttab2"));
		$('<span/>',{id:"movieStoryCountComment"})
			.text('(x)')
			.appendTo($("#ttab4"));
		
		/* 정렬 */
		$('<a/>')
			.text('최신순')
			.appendTo($(".sort_wrap li").eq(0))
			.click(e=>{
				alert('최신순');
			});
		$('<a/>')
			.text('인기순')
			.appendTo($(".sort_wrap li").eq(1))
			.click(e=>{
				alert('인기순');
			});
		$('<a/>')
			.text('평점순')
			.appendTo($(".sort_wrap li").eq(2))
			.click(e=>{
				alert('평점순');
			});
		$('<a/>')
			.text('가나다순')
			.appendTo($(".sort_wrap li").eq(3))
			.click(e=>{
				alert('가나다순');
			});
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
			.append($('<li/>'))
			.append($('<li/>'))
			.append($('<li/>'))
			.append($('<li/>'))
			.append($('<li/>'))
			.append($('<li/>'))
			.append($('<li/>'))
			.append($('<li/>'))
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
		$(".sort_wrap").append('<li/>').append('<li/>').append('<li/>').append('<li/>');
		
		$('<ul/>',{id:"myInterestingMovieList"}).appendTo($("#flip_wrapper"));
		/*
		<li class="item no_item">
			<img src="http://image2.megabox.co.kr/mop/home/mypage/img_moviestory_want.jpg">
		</li>
		*/
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
				alert('필름');
			});
		$('<i/>')
			.addClass('split')
			.appendTo($("#btn_social_sub_c"));
		$('<a/>')
			.addClass('classic_society')
			.text("클래식 소사이어티")
			.appendTo($("#btn_social_sub_c"))
			.click(e=>{
				alert('클래식');
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
				alert('빠른예매');
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
		$("#movie_sm01")
			.click(e=>{
				alert('박스오피스');
				$("#movie_sm01").removeClass().addClass('movie sm01 active');
				$("#movie_sm02").removeClass().addClass('movie sm02');
				$("#movie_sm03").removeClass().addClass('movie sm03');
				$("#movie_sm11").removeClass().addClass('movie sm11');
				$("#movie_sm12").removeClass().addClass('movie sm12');
				seungwoo.movieMain.init();
			});
		$("#movie_sm02")
			.click(e=>{
				$("#movie_sm01").removeClass().addClass('movie sm01');
				$("#movie_sm02").removeClass().addClass('movie sm02 active');
				$("#movie_sm03").removeClass().addClass('movie sm03');
				$("#movie_sm11").removeClass().addClass('movie sm11');
				$("#movie_sm12").removeClass().addClass('movie sm12');
				alert('최신개봉작');
			});
		$("#movie_sm03")
			.click(e=>{
				$("#movie_sm01").removeClass().addClass('movie sm01');
				$("#movie_sm02").removeClass().addClass('movie sm02');
				$("#movie_sm03").removeClass().addClass('movie sm03 active');
				$("#movie_sm11").removeClass().addClass('movie sm11');
				$("#movie_sm12").removeClass().addClass('movie sm12');
				alert('상영예정작');
			});
		$("#movie_sm11")
			.click(e=>{
				$("#movie_sm01").removeClass().addClass('movie sm01');
				$("#movie_sm02").removeClass().addClass('movie sm02');
				$("#movie_sm03").removeClass().addClass('movie sm03');
				$("#movie_sm11").removeClass().addClass('movie sm11 active');
				$("#movie_sm12").removeClass().addClass('movie sm12');
				alert('보고싶어');
				seungwoo.movieInteresting.init();
			});
		$("#movie_sm12")
			.click(e=>{
				$("#movie_sm01").addClass('movie sm01');
				$("#movie_sm02").addClass('movie sm02');
				$("#movie_sm03").addClass('movie sm03');
				$("#movie_sm11").addClass('movie sm11');
				$("#movie_sm12").addClass('movie sm12 active');
				alert('나의 무비스토리');
				seungwoo.movieStory.init();
			});
	};
	var setContentView=()=>{
		$(".sub_navi_wrap").html('<ul class="clearfix">'
			      +'<li>'
			        +'<a id="movie_sm01" class="movie sm01">박스오피스</a>'
			      +'</li>'
			      +'<li>'
			        +'<a id="movie_sm02" class="movie sm02">최신개봉작</a>'
			      +'</li>'
			      +'<li>'
			        +'<a id="movie_sm03" class="movie sm03">상영예정작</a>'
			      +'</li>'
			      +'<li>'
			        +'<a id="movie_sm11" class="movie sm11">보고싶어</a>'
			      +'</li>'
			      +'<li class="pull-right pt10">'
			        +'<a id="movie_sm12" class="movie sm12">나의 무비스토리</a>'
			      +'</li>'
			    +'</ul>'
		);
		/*
		$('<ul/>')
			.addClass('clearfix')
			.appendTo($(".sub_navi_wrap"));
		$(".clearfix").append($('<li/>',{id:"movieSubmenu1"})).append($('<li/>',{id:"movieSubmenu2"})).append($('<li/>',{id:"movieSubmenu3"})).append($('<li/>',{id:"movieSubmenu4"})).append($('<li/>',{id:"movieSubmenu5",class:"pull-right pt10"}));*/
	};
	return {init:init};
})();

seungwoo.myInfoSubmenu=(()=>{
	var init=()=>{
		ctx=$$('x');
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
		$('<a/>',{id:"mypage_sm01",class:"mypage sm01"})
			.text('나의 메가박스')
			.appendTo(".clearfix li")
			.click(e=>{
				alert('나의 메가박스');
			});
		
		$('<a/>',{class:"col1",text:"멤버십정보"})
			.appendTo($(".mypage_menu li").eq(0))
			.click(e=>{
				alert('멤버십정보');
			});
		$('<a/>',{class:"col2",text:"포인트교환"})
			.appendTo($(".mypage_menu li").eq(1))
			.click(e=>{
				alert('포인트교환');
			});
		$('<a/>',{class:"col3",text:"예매확인/취소"})
			.appendTo($(".mypage_menu li").eq(2))
			.click(e=>{
				alert('예매확인/취소');
			});
		$('<a/>',{class:"col4",text:"스토어 구매내역"})
			.appendTo($(".mypage_menu li").eq(3))
			.click(e=>{
				alert('스토어 구매내역');
			});
		$('<a/>',{class:"col5",text:"나의무비스토리"})
			.appendTo($(".mypage_menu li").eq(4))
			.click(e=>{
				alert('나의무비스토리');
			});
		$('<a/>',{class:"col6",text:"관람권/VIP쿠폰"})
			.appendTo($(".mypage_menu li").eq(5))
			.click(e=>{
				alert('관람권/VIP쿠폰');
			});
		$('<a/>',{class:"col7",text:"개인정보수정"})
			.appendTo($(".mypage_menu li").eq(6))
			.click(e=>{
				alert('개인정보수정');
			});
		$('<a/>',{class:"col8",text:"나의문의내역"})
			.appendTo($(".mypage_menu li").eq(7))
			.click(e=>{
				alert('나의문의내역');
			});
	};
	var setContentView=()=>{
		$(".sub_navi")
			.append($('<div/>',{class:"sub_navi_wrap"}));
		$('<ul/>')
			.addClass('clearfix')
			.appendTo($(".sub_navi_wrap"));
		$('<li/>').appendTo($(".clearfix"));
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

var $$=x=>{return sessionStorage.getItem(x)};