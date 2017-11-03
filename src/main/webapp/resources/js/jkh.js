var reservation=reservation || {};

reservation.index=(function(){
	var init=function(){

		onCreate();
		reservation.event.init();
	};
	var onCreate=()=>{
		var mainUI=  '<!-- Modal -->'
		      +' <div id="myModal" class="modal fade" role="dialog">'
	          +' <div tabindex="0" id="booking">'
	            +' <div tabindex="0" class="modal fade booking_lp in" id="reservation"'
	              +' role="dialog" aria-hidden="false" aria-labelledby="myModalLabel"'
	              +' style="display: block;" data-backdrop="static">'
	              +' <input name="movieCode" type="hidden" value="">'
	              +' <div class="wrapper">'
	                +' <div tabindex="0" class="contents clearfix ReservationBn_ok">'
	                  +' <!-- 언어버튼 -->'
	                  +' <!--      <button type="button" class="img_btn booking lang_ko">한국어</button> -->'
	                  +' <!-- <button type="button" class="img_btn booking lang_en" onclick="alert("준비중")">English</button> -->'
	                  +' <!-- 콘텐츠// -->'
	                  +' <div class="left_wrap">'
	                    +' <!-- 날짜// -->'
	                    +' <div class="date">'
	                      +' <div class="title clearfix">'
	                        +' <h2 class="h2_date">날짜</h2>'
	                        +' <div class="util" id="datepicker_wrap">'
	                          +' <button class="img_btn booking btn_util cal"'
	                            +' id="datepicker_sel" type="button"'
	                            +' data-date-format="yyyy-mm-dd" data-date="2017-10-17">날짜선택</button>'
	                          +' <div tabindex="0" id="datepicker_display"'
	                            +' class="datepicker dropdown-menu"'
	                            +' style="left: 699.5px; top: 129px; display: none;">'
	                            +' <div class="datepicker-days" style="display: block;">'
	                              +' <table class=" table-condensed" cellspacing="0"'
	                                +' cellpadding="0">'
	                                +' <caption class="blind2">날짜선택 달력:각 날짜별로 상영 시간표를'
	                                  +' 확인하실 수 있습니다.</caption>'
	                                +' <thead>'
	                                  +' <tr>'
	                                    +' <th class="prev" scope="col"><a title="이전달 보기"'
	                                      +' class="fa fa-chevron-left a_block"'
	                                      +' href="javascript:void(0);"><span class="blind">이전달</span></a></th>'
	                                    +' <th colspan="5" scope="col">10월 2017</th>'
	                                    +' <th class="next" scope="col"><a title="다음달 보기"'
	                                      +' class="fa fa-chevron-right a_block"'
	                                      +' href="javascript:void(0);"><span class="blind">다음달</span></a></th>'
	                                  +' </tr>'
	                                  +' <tr>'
	                                    +' <th class="dow" scope="col">일</th>'
	                                    +' <th class="dow" scope="col">월</th>'
	                                    +' <th class="dow" scope="col">화</th>'
	                                    +' <th class="dow" scope="col">수</th>'
	                                    +' <th class="dow" scope="col">목</th>'
	                                    +' <th class="dow" scope="col">금</th>'
	                                    +' <th class="dow" scope="col">토</th>'
	                                  +' </tr>'
	                                +' </thead>'
	                                +' <tbody>'
	                                  +' <tr>'
	                                    +' <td class="day  old"><a title=""'
	                                      +' href="javascript:void(0);">24</a></td>'
	                                    +' <td class="day  old"><a title=""'
	                                      +' href="javascript:void(0);">25</a></td>'
	                                    +' <td class="day  old"><a title=""'
	                                      +' href="javascript:void(0);">26</a></td>'
	                                    +' <td class="day  old"><a title=""'
	                                      +' href="javascript:void(0);">27</a></td>'
	                                    +' <td class="day  old"><a title=""'
	                                      +' href="javascript:void(0);">28</a></td>'
	                                    +' <td class="day  old"><a title=""'
	                                      +' href="javascript:void(0);">29</a></td>'
	                                    +' <td class="day  old"><a title=""'
	                                      +' href="javascript:void(0);">30</a></td>'
	                                  +' </tr>'
	                                  +' <tr>'
	                                    +' <td class="day "><a title=""'
	                                      +' href="javascript:void(0);">1</a></td>'
	                                    +' <td class="day "><a title=""'
	                                      +' href="javascript:void(0);">2</a></td>'
	                                    +' <td class="day "><a title=""'
	                                      +' href="javascript:void(0);">3</a></td>'
	                                    +' <td class="day "><a title=""'
	                                      +' href="javascript:void(0);">4</a></td>'
	                                    +' <td class="day "><a title=""'
	                                      +' href="javascript:void(0);">5</a></td>'
	                                    +' <td class="day "><a title=""'
	                                      +' href="javascript:void(0);">6</a></td>'
	                                    +' <td class="day "><a title=""'
	                                      +' href="javascript:void(0);">7</a></td>'
	                                  +' </tr>'
	                                  +' <tr>'
	                                    +' <td class="day "><a title=""'
	                                      +' href="javascript:void(0);">8</a></td>'
	                                    +' <td class="day "><a title=""'
	                                      +' href="javascript:void(0);">9</a></td>'
	                                    +' <td class="day "><a title=""'
	                                      +' href="javascript:void(0);">10</a></td>'
	                                    +' <td class="day "><a title=""'
	                                      +' href="javascript:void(0);">11</a></td>'
	                                    +' <td class="day "><a title=""'
	                                      +' href="javascript:void(0);">12</a></td>'
	                                    +' <td class="day "><a title=""'
	                                      +' href="javascript:void(0);">13</a></td>'
	                                    +' <td class="day "><a title=""'
	                                      +' href="javascript:void(0);">14</a></td>'
	                                  +' </tr>'
	                                  +' <tr>'
	                                    +' <td class="day "><a title=""'
	                                      +' href="javascript:void(0);">15</a></td>'
	                                    +' <td class="day "><a title=""'
	                                      +' href="javascript:void(0);">16</a></td>'
	                                    +' <td class="day  active c_mint active"><a title="선택됨"'
	                                      +' href="javascript:void(0);">17</a></td>'
	                                    +' <td class="day  c_mint"><a title="선택 가능일"'
	                                      +' href="javascript:void(0);">18</a></td>'
	                                    +' <td class="day  c_mint"><a title="선택 가능일"'
	                                      +' href="javascript:void(0);">19</a></td>'
	                                    +' <td class="day  c_mint"><a title="선택 가능일"'
	                                      +' href="javascript:void(0);">20</a></td>'
	                                    +' <td class="day  c_mint"><a title="선택 가능일"'
	                                      +' href="javascript:void(0);">21</a></td>'
	                                  +' </tr>'
	                                  +' <tr>'
	                                    +' <td class="day  c_mint"><a title="선택 가능일"'
	                                      +' href="javascript:void(0);">22</a></td>'
	                                    +' <td class="day  c_mint"><a title="선택 가능일"'
	                                      +' href="javascript:void(0);">23</a></td>'
	                                    +' <td class="day  c_mint"><a title="선택 가능일"'
	                                      +' href="javascript:void(0);">24</a></td>'
	                                    +' <td class="day  c_mint"><a title="선택 가능일"'
	                                      +' href="javascript:void(0);">25</a></td>'
	                                    +' <td class="day  c_mint"><a title="선택 가능일"'
	                                      +' href="javascript:void(0);">26</a></td>'
	                                    +' <td class="day  c_mint"><a title="선택 가능일"'
	                                      +' href="javascript:void(0);">27</a></td>'
	                                    +' <td class="day  c_mint"><a title="선택 가능일"'
	                                      +' href="javascript:void(0);">28</a></td>'
	                                  +' </tr>'
	                                  +' <tr>'
	                                    +' <td class="day  c_mint"><a title="선택 가능일"'
	                                      +' href="javascript:void(0);">29</a></td>'
	                                    +' <td class="day  c_mint"><a title="선택 가능일"'
	                                      +' href="javascript:void(0);">30</a></td>'
	                                    +' <td class="day  c_mint"><a title="선택 가능일"'
	                                      +' href="javascript:void(0);">31</a></td>'
	                                    +' <td class="day  new c_mint"><a title="선택 가능일"'
	                                      +' href="javascript:void(0);">1</a></td>'
	                                    +' <td class="day  new c_mint"><a title="선택 가능일"'
	                                      +' href="javascript:void(0);">2</a></td>'
	                                    +' <td class="day  new c_mint"><a title="선택 가능일"'
	                                      +' href="javascript:void(0);">3</a></td>'
	                                    +' <td class="day  new c_mint"><a title="선택 가능일"'
	                                      +' href="javascript:void(0);">4</a></td>'
	                                  +' </tr>'
	                                +' </tbody>'
	                              +' </table>'
	                              +' <div class="date_info">'
	                                +' <p class="blind2">날짜를 선택하면,</p>'
	                                +' <p class="selected_date ml5 displ_in_b fl ml20">선택한 날짜</p>'
	                                +' <p class="blind2">,</p>'
	                                +' <p class="possible_date ml30 displ_in_b fl">선택 가능일</p>'
	                                +' <p class="blind2 clearB">을 확인할 수 있습니다.</p>'
	                              +' </div>'
	                            +' </div>'
	                          +' </div>'
	                        +' </div>'
	                      +' </div>'
	                      +' <div class="slidebar" id="sel_date">'
	                        +' <ul class="slidebar_control">'
	                          +' <li onclick="reservation.event.date_prev()"><i class="glyphicon glyphicon-triangle-left"><span'
	                              +' class="blind">이전날짜보기</span></i></li>'
	                          +' <li onclick="reservation.event.date_next()"><i class="glyphicon glyphicon-triangle-right"><span'
	                              +' class="blind">다음날짜보기</span></i></li>'
	                        +' </ul>'
	                        +' <div tabindex="0" class="slidebar_item">'
	                          +' <ol id=datey style="width: 2040px;">'
	                          +' </ol>'
	                        +' </div>'
	                      +' </div>'
	                    +' </div>'
	                    +' <!-- //날짜 -->'
	                    +' <!-- 극장// -->'
	                    +' <div class="theater">'
	                      +' <div class="title clearfix">'
	                        +' <h2 class="h2_theater">극장</h2>'
	                        +' <div class="util">'
	                          +' <button'
	                            +' class="img_btn booking btn_util fav pull-left mr4 active"'
	                            +' id="getMyCinemaBtn" style="display: none;" type="button">선호영화관</button>'
	                          +' <button class="img_btn booking btn_util refresh"'
	                            +' id="refreshCinemaBtn" type="button">전부제거</button>'
	                        +' </div>'
	                      +' </div>'
	                      +' <!-- 극장선택// -->'
	                      +' <div class="list" id="cinemaList">'
	                        +' <ul>'
	                          +' <li class="selected mr13 mb10">'
	                            +' <button id="th_btn1" title="극장선택 빈프레임" class="btn_add"'
	                              +' type="button" onclick="reservation.event.theater_click(this)">'
	                          +' </li>'
	                          +' <li class="none_select mb10">'
	                            +' <button title="극장선택 빈프레임" class="btn_add" type="button"></button>'
	                          +' </li>'
	                          +' <li class="none_select mr13">'
	                            +' <button title="극장선택 빈프레임" class="btn_add" type="button"></button>'
	                          +' </li>'
	                          +' <li class="none_select ">'
	                            +' <button title="극장선택 빈프레임" class="btn_add" type="button"></button>'
	                          +' </li>'
	                        +' </ul>'
	                      +' </div>'
	                      +' <!-- //극장선택 -->'
	                    +' </div>'
	                    +' <!-- //극장 -->'
	                    +' <!-- 영화선택// -->'
	                    +' <div class="movie">'
	                      +' <div class="title clearfix">'
	                        +' <h2 class="h2_movie">영화</h2>'
	                        +' <div class="util">'
	                          +' <button'
	                            +' class="img_btn booking btn_util btn_select_all pull-left mr4 active"'
	                            +' id="getAllMovieBtn" type="button">All</button>'
	                          +' <button class="img_btn booking btn_util refresh"'
	                            +' id="refreshMovieBtn" type="button">전부제거</button>'
	                        +' </div>'
	                      +' </div>'
	                      +' <!-- 전체선택// -->'
	                      +' <div class="select_all" id="selectedAllMovie">'
	                        +' <div class="glass">'
	                          +' <p>모든영화</p>'
	                        +' </div>'
	                        +' <div class="btn_wrap">'
	                          +' <button class="img_btn select_movie" '
	                            +' id="showMovieListBtn" type="button">영화선택</button>'
	                        +' </div>'
	                      +' </div>'
	                      +' <!-- //전체선택 -->'
	                      +' <!-- 개별선택// -->'
	                      +' <div class="list selected" id="selectedMovieList"'
	                        +' style="display: none;">'
	                        +' <ul id="movie_slist"></ul>'
	                        +' <div class="check">'
	                          +' <span class="icheckbox_minimal hover disabled checked" aria-checked="false"'
	                            +' aria-disabled="false"'
	                            +' style="width: 18px; height: 18px; vertical-align: middle; display: inline-block; position: relative;"><input'
	                            +' name="movieTypeYnAll" title="전체" class="icheck movieType"'
	                            +'id="movieTypeYnAll" style="background: rgb(255, 255, 255); margin: 0px; padding: 0px; border: 0px currentColor; border-image: none; left: 0px; top: 0px; width: 16px; he ight: 16px; display: block; position: absolute; z-index: 0; opacity: 1;"'
	                            +' type="checkbox" value="all">'
	                          +' <ins class="iCheck-helper"'
	                              +' style="left: 0px; top: 0px; width: 16px; height: 16px; position: absolute; z-index: 0; background-color: rgb(255, 255, 255);"></ins></span>'
	                          +' <label for="movieTypeYnAll">전체</label> <span'
	                            +' class="icheckbox_minimal" aria-checked="false"'
	                            +' aria-disabled="false"'
	                            +' style="width: 18px; height: 18px; vertical-align: middle; display: inline-block; position: relative;"><input'
	                            +' name="movieTypeYn2D" title="2D" class="icheck movieType"'
	                            +'id="movieTypeYn2D" style="background: rgb(255, 255, 255); margin: 0px; padding: 0px; border: 0px currentColor; border-image: none; left: 0px; top: 0px; width: 16px; he ight: 16px; display: block; position: absolute; z-index: 0; opacity: 1;"'
	                            +' type="checkbox" value="2D">'
	                          +' <ins class="iCheck-helper"'
	                              +' style="left: 0px; top: 0px; width: 16px; height: 16px; position: absolute; z-index: 0; background-color: rgb(255, 255, 255);"></ins></span>'
	                          +' <label for="movieTypeYn2D">2D</label> <span'
	                            +' class="icheckbox_minimal" aria-checked="false"'
	                            +' aria-disabled="false"'
	                            +' style="width: 18px; height: 18px; vertical-align: middle; display: inline-block; position: relative;"><input'
	                            +' name="movieTypeYn3D" title="3D" class="icheck movieType"'
	                            +'id="movieTypeYn3D" style="background: rgb(255, 255, 255); margin: 0px; padding: 0px; border: 0px currentColor; border-image: none; left: 0px; top: 0px; width: 16px; he ight: 16px; display: block; position: absolute; z-index: 0; opacity: 1;"'
	                            +' type="checkbox" value="3D">'
	                          +' <ins class="iCheck-helper"'
	                              +' style="left: 0px; top: 0px; width: 16px; height: 16px; position: absolute; z-index: 0; background-color: rgb(255, 255, 255);"></ins></span>'
	                          +' <label for="movieTypeYn3D">3D</label> <span'
	                            +' class="icheckbox_minimal" aria-checked="false"'
	                            +' aria-disabled="false"'
	                            +' style="width: 18px; height: 18px; vertical-align: middle; display: inline-block; position: relative;"><input'
	                            +' name="movieTypeYnDubbing" title="더빙" class="icheck movieType"'
	                            +'id="movieTypeYnDubbing" style="background: rgb(255, 255, 255); margin: 0px; padding: 0px; border: 0px currentColor; border-image: none; left: 0px; top: 0px; width: 16 px; height: 16px; display: block; position: absolute; z-index: 0; opacity: 1;"'
	                            +' type="checkbox" value="dubbing">'
	                          +' <ins class="iCheck-helper"'
	                              +' style="left: 0px; top: 0px; width: 16px; height: 16px; position: absolute; z-index: 0; background-color: rgb(255, 255, 255);"></ins></span>'
	                          +' <label for="movieTypeYnDubbing">더빙</label> <span'
	                            +' class="icheckbox_minimal" aria-checked="false"'
	                            +' aria-disabled="false"'
	                            +' style="width: 18px; height: 18px; vertical-align: middle; display: inline-block; position: relative;"><input'
	                            +' name="movieTypeYnCaption" title="자막" class="icheck movieType"'
	                            +'id="movieTypeYnCaption" style="background: rgb(255, 255, 255); margin: 0px; padding: 0px; border: 0px currentColor; border-image: none; left: 0px; top: 0px; width: 16 px; height: 16px; display: block; position: absolute; z-index: 0; opacity: 1;"'
	                            +' type="checkbox" value="caption">'
	                          +' <ins class="iCheck-helper"'
	                              +' style="left: 0px; top: 0px; width: 16px; height: 16px; position: absolute; z-index: 0; background-color: rgb(255, 255, 255);"></ins></span>'
	                          +' <label for="movieTypeYnCaption">자막</label> <span'
	                            +' class="icheckbox_minimal" aria-checked="false"'
	                            +' aria-disabled="false"'
	                            +' style="width: 18px; height: 18px; vertical-align: middle; display: inline-block; position: relative;"><input'
	                            +' name="movieTypeYnAtmos" title="ATMOS"'
	                            +' class="icheck movieType" id="movieTypeYnAtmos"'
	                            +'style="background: rgb(255, 255, 255); margin: 0px; padding: 0px; border: 0px currentColor; border-image: none; left: 0px; top: 0px; width: 16px; height: 16px; di splay:block; position: absolute; z-index: 0; opacity: 1;"'
	                            +' type="checkbox" value="atmos">'
	                          +' <ins class="iCheck-helper"'
	                              +' style="left: 0px; top: 0px; width: 16px; height: 16px; position: absolute; z-index: 0; background-color: rgb(255, 255, 255);"></ins></span>'
	                          +' <label class="hover_pop" for="movieTypeYnAtmos">ATMOS'
	                            +' <i tabindex="0" class="fa fa-info-circle"><span'
	                              +' class="blind">ATMOS 설명보기</span></i>'
	                          +' </label>'
	                        +' </div>'
	                      +' </div>'
	                      +' <!-- //개별선택 -->'
	                      +' <div class="pop_atmos" id="popAtmos">'
	                        +' <strong>｜ 청각을 만족시킬 단 하나의 기술 ATMOS ｜</strong> <span><i>-</i>'
	                          +' 소리를 내는 개체의 위치와 이동에 기반하여<br>사운드와 함께 이동하는 영화관</span> <span><i>-</i>'
	                          +' 최대 64개의 스피커가 각각 다른 사운드를 <br>재생하는 혁신적인 시스템</span> <span'
	                          +' class="last"><i>-</i> 오버헤드 스피커를 추가하여 청중을<br>몰입시키는'
	                          +' 자연스럽고 실감나는 사운드</span>'
	                      +' </div>'
	                    +' </div>'
	                    +' <!-- //영화선택 -->'
	                  +' </div>'
	                  +' <div class="right_wrap">'
	                    +' <!-- 시간// -->'
	                    +' <div class="time">'
	                      +' <div class="title clearfix">'
	                        +' <h2 class="h2_time">시간</h2>'
	                      +' </div>'
	                      +' <div class="slidebar" id="sel_time">'
	                        +' <ul class="slidebar_control">'
	                          +' <li onclick="reservation.event.hour_prev()"><i class="glyphicon glyphicon-triangle-left"><span'
	                              +' class="blind">1시간 이전 영화목록 보기</span></i></li>'
	                          +' <li onclick="reservation.event.hour_next()"><i class="glyphicon glyphicon-triangle-right"><span'
	                              +' class="blind">1시간 이후 영화목록 보기</span></i></li>'
	                        +' </ul>'
	                        +' <div tabindex="0" class="slidebar_item">'
	                          +' <ol id="slidebarItems" style="left: -220px; width: 1364px;">'
	                            +' <li data-select="00"><a title=""'
	                              +' href="javascript:void(0)">0</a><span class="arrow"></span></li>'
	                            +' <li data-select="01"><a title=""'
	                              +' href="javascript:void(0)">1</a><span class="arrow"></span></li>'
	                            +' <li data-select="02"><a title=""'
	                              +' href="javascript:void(0)">2</a><span class="arrow"></span></li>'
	                            +' <li data-select="03"><a title=""'
	                              +' href="javascript:void(0)">3</a><span class="arrow"></span></li>'
	                            +' <li data-select="04"><a title=""'
	                              +' href="javascript:void(0)">4</a><span class="arrow"></span></li>'
	                            +' <li data-select="05"><a title=""'
	                              +' href="javascript:void(0)">5</a><span class="arrow"></span></li>'
	                            +' <li data-select="06"><a title=""'
	                              +' href="javascript:void(0)">6</a><span class="arrow"></span></li>'
	                            +' <li data-select="07"><a title=""'
	                              +' href="javascript:void(0)">7</a><span class="arrow"></span></li>'
	                            +' <li data-select="08"><a title=""'
	                              +' href="javascript:void(0)">8</a><span class="arrow"></span></li>'
	                            +' <li data-select="09"><a title=""'
	                              +' href="javascript:void(0)">9</a><span class="arrow"></span></li>'
	                            +' <li data-select="10"><a title=""'
	                              +' href="javascript:void(0)">10</a><span class="arrow"></span></li>'
	                            +' <li data-select="11"><a title=""'
	                              +' href="javascript:void(0)">11</a><span class="arrow"></span></li>'
	                            +' <li data-select="12"><a title=""'
	                              +' href="javascript:void(0)">12</a><span class="arrow"></span></li>'
	                            +' <li data-select="13"><a title=""'
	                              +' href="javascript:void(0)">13</a><span class="arrow"></span></li>'
	                            +' <li data-select="14"><a title=""'
	                              +' href="javascript:void(0)">14</a><span class="arrow"></span></li>'
	                            +' <li data-select="15"><a title=""'
	                              +' href="javascript:void(0)">15</a><span class="arrow"></span></li>'
	                            +' <li data-select="16"><a title=""'
	                              +' href="javascript:void(0)">16</a><span class="arrow"></span></li>'
	                            +' <li data-select="17"><a title=""'
	                              +' href="javascript:void(0)">17</a><span class="arrow"></span></li>'
	                            +' <li data-select="18"><a title=""'
	                              +' href="javascript:void(0)">18</a><span class="arrow"></span></li>'
	                            +' <li data-select="19"><a title=""'
	                              +' href="javascript:void(0)">19</a><span class="arrow"></span></li>'
	                            +' <li data-select="20"><a title=""'
	                              +' href="javascript:void(0)">20</a><span class="arrow"></span></li>'
	                            +' <li data-select="21"><a title=""'
	                              +' href="javascript:void(0)">21</a><span class="arrow"></span></li>'
	                            +' <li data-select="22"><a title=""'
	                              +' href="javascript:void(0)">22</a><span class="arrow"></span></li>'
	                            +' <li data-select="23"><a title=""'
	                              +' href="javascript:void(0)">23</a><span class="arrow"></span></li>'
	                            +' <li data-select="24"><a title=""'
	                              +' href="javascript:void(0)">24</a><span class="arrow"></span></li>'
	                            +' <li data-select="25"><a title=""'
	                              +' href="javascript:void(0)">25</a><span class="arrow"></span></li>'
	                            +' <li data-select="26"><a title=""'
	                              +' href="javascript:void(0)">26</a><span class="arrow"></span></li>'
	                            +' <li data-select="27"><a title=""'
	                              +' href="javascript:void(0)">27</a><span class="arrow"></span></li>'
	                            +' <li data-select="28"><a title=""'
	                              +' href="javascript:void(0)">28</a><span class="arrow"></span></li>'
	                            +' <li data-select="29"><a title=""'
	                              +' href="javascript:void(0)">29</a><span class="arrow"></span></li>'
	                            +' <li data-select="30"><a title=""'
	                              +' href="javascript:void(0)">30</a><span class="arrow"></span></li>'
	                          +' </ol>'
	                        +' </div>'
	                      +' </div>'
	                    +' </div>'
	                    +' <!-- //시간 -->'
	                    +' <!-- 영화목록// -->'
	                    +' <div class="movie_list" id="time-movie-list">'
	                      +' <ul id="movieTimeList">'
	                        +' <li class="no_movie_list"><span class="blind">조회된'
	                            +' 상영목록이 없습니다</span></li>'
	                      +' </ul>'
	                    +' </div>'
	                  +' </div>'
	                  +' <!-- 광고영역추가 -->'
	                  +' <div class="ad_wrapper clearfix">'
	                    +' <p>'
	                      +' <iframe width="966" height="80"'
	                        +' src="http://mlink-vad.netinsight.co.kr/NetInsight/html/megabox/reservation/fastreserve@bottom"'
	                        +' frameborder="0" marginwidth="0" marginheight="0" scrolling="no"'
	                        +' topmargin="0" leftmargin="0"></iframe>'
	                    +' </p>'
	                  +' </div>'
	                  +' <!-- 광고영역추가// -->'
	                  +' <script type="text/javascript">'
	                    +' $(function() {'
	                      +' $(".contents", "#reservation.booking_lp")'
	                          +' .addClass("ReservationBn_ok");'
	                    +' });'
	                  +' </script>'
	                  +' <!-- //콘텐츠 -->'
	                  +' <button class="custom_close focus_modal_close" id="closeAll2" aria-hidden="true" type="button" data-dismiss="modal">'
	                    +' <span class="blind">창닫기</span>'
	                  +' </button>'
	                +' </div>'
	              +' </div>'
	            +' </div>'
	          +' </div>'
	        +' </div>';
		
		var theaterUI=' <div tabindex="0" class="modal fade booking_lp booking_lp2"'
            +' id="select_theater" role="dialog" aria-hidden="true"'
            +' aria-labelledby="myModalLabel">'
            +' <div class="wrapper">'
              +' <div tabindex="0" class="contents">'
                +' <div class="movie_header">'
                  +' <div class="pull-left clearfix" id="h3_wrap">'
                    +' <h3 class="h3_theater1 pull-left active overflow_visible">'
                      +' <a class="blank theaterTabBtn" href="#body_theater1"'
                        +' data-toggle="tab">지역별</a>'
                    +' </h3>'
                    +' <i class="icon h3_split pull-left"></i>'
                    +' <h3 class="h3_theater2 pull-left ml10 overflow_visible">'
                      +' <a class="blank theaterTabBtn" href="#body_theater2"'
                        +' data-toggle="tab">특별관</a>'
                    +' </h3>'
                  +' </div>'
                +' </div>'
                +' <div class="util">'
                  +' <div class="selected" id="cinemaSelected"></div>'
                +' </div>'
                +' <!-- 지역별 -->'
                +' <div class="tab-pane active movie_body body_theater1"'
                  +' id="body_theater1">'
                  +' <div class="theater_list">'
                    +' <ul class="depth1">'
                      +' <li class="blind" onclick="" data-depthtype="myCinema">선호'
                        +' 영화관<span><i class="fa fa-angle-right"></i></span>'
                      +' </li>'
                      +' <li title="서울 (16)" class="active" data-areacode="10">서울'
                        +' (16)</li>'
                      +' <li title="경기 (24)" data-areacode="30">경기 (24)</li>'
                      +' <li title="인천 (4)" data-areacode="35">인천 (4)</li>'
                      +' <li title="대전/충청/세종 (9)" data-areacode="45">대전/충청/세종 (9)</li>'
                      +' <li title="부산/대구/경상 (23)" data-areacode="55">부산/대구/경상 (23)</li>'
                      +' <li title="광주/전라 (13)" data-areacode="65">광주/전라 (13)</li>'
                      +' <li title="강원 (4)" data-areacode="70">강원 (4)</li>'
                      +' <li title="제주 (2)" data-areacode="80">제주 (2)</li>'
                    +' </ul>'
                    +' <ul class="depth2">'
                      +' <li data-cinemacode="1372" data-screencode=""><a'
                        +' title="강남 선택"'
                        +' style="left: 232px; top: 275px; letter-spacing: inherit;"'
                        +' href="javascript:void(0);">강남</a></li>'
                      +' <li data-cinemacode="1359" data-screencode=""><a'
                        +' title="강남대로(씨티) 선택"'
                        +' style="left: 238px; top: 273px; letter-spacing: -1px;"'
                        +' href="javascript:void(0);">강남대로(씨티)</a></li>'
                      +' <li data-cinemacode="1003" data-screencode=""><a'
                        +' title="동대문 선택"'
                        +' style="left: 215px; top: 180px; letter-spacing: inherit;"'
                        +' href="javascript:void(0);">동대문</a></li>'
                      +' <li data-cinemacode="1572" data-screencode=""><a'
                        +' title="마곡 선택"'
                        +' style="left: 34px; top: 180px; letter-spacing: inherit;"'
                        +' href="javascript:void(0);">마곡</a></li>'
                      +' <li data-cinemacode="1581" data-screencode=""><a'
                        +' title="목동 선택"'
                        +' style="left: 70px; top: 225px; letter-spacing: inherit;"'
                        +' href="javascript:void(0);">목동</a></li>'
                      +' <li data-cinemacode="1311" data-screencode=""><a'
                        +' title="상봉 선택"'
                        +' style="left: 289px; top: 146px; letter-spacing: inherit;"'
                        +' href="javascript:void(0);">상봉</a></li>'
                      +' <li data-cinemacode="1371" data-screencode=""><a'
                        +' title="센트럴 선택"'
                        +' style="left: 211px; top: 265px; letter-spacing: inherit;"'
                        +' href="javascript:void(0);">센트럴</a></li>'
                      +' <li data-cinemacode="1381" data-screencode=""><a'
                        +' title="송파파크하비오 선택"'
                        +' style="left: 340px; top: 293px; letter-spacing: inherit;"'
                        +' href="javascript:void(0);">송파파크하비오</a></li>'
                      +' <li data-cinemacode="1421" data-screencode=""><a'
                        +' title="수유 선택"'
                        +' style="left: 231px; top: 72px; letter-spacing: inherit;"'
                        +' href="javascript:void(0);">수유</a></li>'
                      +' <li data-cinemacode="1202" data-screencode=""><a'
                        +' title="신촌 선택"'
                        +' style="left: 140px; top: 185px; letter-spacing: inherit;"'
                        +' href="javascript:void(0);">신촌</a></li>'
                      +' <li data-cinemacode="1221" data-screencode=""><a'
                        +' title="은평 선택"'
                        +' style="left: 120px; top: 113px; letter-spacing: inherit;"'
                        +' href="javascript:void(0);">은평</a></li>'
                      +' <li data-cinemacode="1561" data-screencode=""><a'
                        +' title="이수 선택"'
                        +' style="left: 186px; top: 285px; letter-spacing: inherit;"'
                        +' href="javascript:void(0);">이수</a></li>'
                      +' <li data-cinemacode="1321" data-screencode=""><a'
                        +' title="창동 선택"'
                        +' style="left: 242px; top: 65px; letter-spacing: inherit;"'
                        +' href="javascript:void(0);">창동</a></li>'
                      +' <li data-cinemacode="1351" data-screencode=""><a'
                        +' title="코엑스 선택"'
                        +' style="left: 269px; top: 255px; letter-spacing: inherit;"'
                        +' href="javascript:void(0);">코엑스</a></li>'
                      +' <li data-cinemacode="1571" data-screencode=""><a'
                        +' title="화곡 선택"'
                        +' style="left: 32px; top: 216px; letter-spacing: inherit;"'
                        +' href="javascript:void(0);">화곡</a></li>'
                      +' <li data-cinemacode="1562" data-screencode=""><a'
                        +' title="ARTNINE 선택"'
                        +' style="left: 186px; top: 285px; letter-spacing: inherit;"'
                        +' href="javascript:void(0);">ARTNINE</a></li>'
                    +' </ul>'
                  +' </div>'
                  +' <!-- 지도 -->'
                  +' <div class="map map_h"'
                    +' style="padding: 0px; width: 639px; background-color: rgb(238, 238, 238);">'
                    +' <ul>'
                      +' <li class="mapArea defult_img blind"><sapn class="bilnd">선호'
                        +' 영화관</sapn></li>'
                      +' <li class="mapArea" style="display: list-item;"'
                        +' data-areacode="10"><a title="서울 선택"'
                        +' href="javascript:void(0);">서울</a>'
                        +' <ul class="depth2 area_10" style="left: 0px; top: 0px;">'
                          +' <li data-cinemacode="1372" data-screencode=""><a'
                            +' title="강남 선택" class=""'
                            +' style="left: 232px; top: 275px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">강남</a></li>'
                          +' <li data-cinemacode="1359" data-screencode=""><a'
                            +' title="강남대로(씨티) 선택"'
                            +' style="left: 238px; top: 273px; letter-spacing: -1px;"'
                            +' href="javascript:void(0);">강남대로(씨티)</a></li>'
                          +' <li data-cinemacode="1003" data-screencode=""><a'
                            +' title="동대문 선택"'
                            +' style="left: 215px; top: 180px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">동대문</a></li>'
                          +' <li data-cinemacode="1572" data-screencode=""><a'
                            +' title="마곡 선택"'
                            +' style="left: 34px; top: 180px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">마곡</a></li>'
                          +' <li data-cinemacode="1581" data-screencode=""><a'
                            +' title="목동 선택"'
                            +' style="left: 70px; top: 225px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">목동</a></li>'
                          +' <li data-cinemacode="1311" data-screencode=""><a'
                            +' title="상봉 선택"'
                            +' style="left: 289px; top: 146px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">상봉</a></li>'
                          +' <li data-cinemacode="1371" data-screencode=""><a'
                            +' title="센트럴 선택"'
                            +' style="left: 211px; top: 265px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">센트럴</a></li>'
                          +' <li data-cinemacode="1381" data-screencode=""><a'
                            +' title="송파파크하비오 선택"'
                            +' style="left: 340px; top: 293px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">송파파크하비오</a></li>'
                          +' <li data-cinemacode="1421" data-screencode=""><a'
                            +' title="수유 선택"'
                            +' style="left: 231px; top: 72px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">수유</a></li>'
                          +' <li data-cinemacode="1202" data-screencode=""><a'
                            +' title="신촌 선택"'
                            +' style="left: 140px; top: 185px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">신촌</a></li>'
                          +' <li data-cinemacode="1221" data-screencode=""><a'
                            +' title="은평 선택"'
                            +' style="left: 120px; top: 113px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">은평</a></li>'
                          +' <li data-cinemacode="1561" data-screencode=""><a'
                            +' title="이수 선택"'
                            +' style="left: 186px; top: 285px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">이수</a></li>'
                          +' <li data-cinemacode="1321" data-screencode=""><a'
                            +' title="창동 선택"'
                            +' style="left: 242px; top: 65px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">창동</a></li>'
                          +' <li data-cinemacode="1351" data-screencode=""><a'
                            +' title="코엑스 선택"'
                            +' style="left: 269px; top: 255px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">코엑스</a></li>'
                          +' <li data-cinemacode="1571" data-screencode=""><a'
                            +' title="화곡 선택"'
                            +' style="left: 32px; top: 216px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">화곡</a></li>'
                          +' <li data-cinemacode="1562" data-screencode=""><a'
                            +' title="ARTNINE 선택"'
                            +' style="left: 186px; top: 285px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">ARTNINE</a></li>'
                        +' </ul></li>'
                      +' <li class="mapArea" data-areacode="30"><a title="경기 선택"'
                        +' href="javascript:void(0);">경기</a>'
                      +' <ul class="depth2 area_30" style="left: 0px; top: 0px;">'
                          +' <li data-cinemacode="4121" data-screencode=""><a'
                            +' title="고양스타필드 선택"'
                            +' style="left: 140px; top: 150px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">고양스타필드</a></li>'
                          +' <li data-cinemacode="4151" data-screencode=""><a'
                            +' title="김포 선택"'
                            +' style="left: 70px; top: 180px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">김포</a></li>'
                          +' <li data-cinemacode="4721" data-screencode=""><a'
                            +' title="남양주 선택"'
                            +' style="left: 205px; top: 155px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">남양주</a></li>'
                          +' <li data-cinemacode="4451" data-screencode=""><a'
                            +' title="동탄 선택"'
                            +' style="left: 149px; top: 310px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">동탄</a></li>'
                          +' <li data-cinemacode="4113" data-screencode=""><a'
                            +' title="백석 선택"'
                            +' style="left: 120px; top: 154px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">백석</a></li>'
                          +' <li data-cinemacode="4722" data-screencode=""><a'
                            +' title="별내 선택"'
                            +' style="left: 181px; top: 156px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">별내</a></li>'
                          +' <li data-cinemacode="4631" data-screencode=""><a'
                            +' title="분당 선택"'
                            +' style="left: 190px; top: 230px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">분당</a></li>'
                          +' <li data-cinemacode="4411" data-screencode=""><a'
                            +' title="수원 선택"'
                            +' style="left: 140px; top: 280px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">수원</a></li>'
                          +' <li data-cinemacode="4421" data-screencode=""><a'
                            +' title="수원남문 선택"'
                            +' style="left: 170px; top: 250px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">수원남문</a></li>'
                          +' <li data-cinemacode="4291" data-screencode=""><a'
                            +' title="시흥배곧 선택"'
                            +' style="left: 83px; top: 245px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">시흥배곧</a></li>'
                          +' <li data-cinemacode="4253" data-screencode=""><a'
                            +' title="안산중앙 선택"'
                            +' style="left: 110px; top: 290px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">안산중앙</a></li>'
                          +' <li data-cinemacode="4821" data-screencode=""><a'
                            +' title="양주 선택"'
                            +' style="left: 170px; top: 90px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">양주</a></li>'
                          +' <li data-cinemacode="4431" data-screencode=""><a'
                            +' title="영통 선택"'
                            +' style="left: 190px; top: 270px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">영통</a></li>'
                          +' <li data-cinemacode="4471" data-screencode=""><a'
                            +' title="오산 선택"'
                            +' style="left: 155px; top: 340px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">오산</a></li>'
                          +' <li data-cinemacode="4804" data-screencode=""><a'
                            +' title="의정부민락 선택"'
                            +' style="left: 175px; top: 120px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">의정부민락</a></li>'
                          +' <li data-cinemacode="4111" data-screencode=""><a'
                            +' title="일산 선택"'
                            +' style="left: 115px; top: 120px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">일산</a></li>'
                          +' <li data-cinemacode="4104" data-screencode=""><a'
                            +' title="일산벨라시타 선택"'
                            +' style="left: 125px; top: 160px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">일산벨라시타</a></li>'
                          +' <li data-cinemacode="4112" data-screencode=""><a'
                            +' title="킨텍스 선택"'
                            +' style="left: 75px; top: 165px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">킨텍스</a></li>'
                          +' <li data-cinemacode="4132" data-screencode=""><a'
                            +' title="파주금촌 선택"'
                            +' style="left: 90px; top: 120px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">파주금촌</a></li>'
                          +' <li data-cinemacode="4115" data-screencode=""><a'
                            +' title="파주운정 선택"'
                            +' style="left: 95px; top: 150px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">파주운정</a></li>'
                          +' <li data-cinemacode="4131" data-screencode=""><a'
                            +' title="파주출판도시 선택"'
                            +' style="left: 70px; top: 140px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">파주출판도시</a></li>'
                          +' <li data-cinemacode="4501" data-screencode=""><a'
                            +' title="평택 선택"'
                            +' style="left: 130px; top: 375px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">평택</a></li>'
                          +' <li data-cinemacode="4651" data-screencode=""><a'
                            +' title="하남스타필드 선택"'
                            +' style="left: 230px; top: 210px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">하남스타필드</a></li>'
                          +' <li data-cinemacode="4461" data-screencode=""><a'
                            +' title="DriveM(용인) 선택"'
                            +' style="left: 210px; top: 270px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">DriveM(용인)</a></li>'
                        +' </ul></li>'
                      +' <li class="mapArea" data-areacode="35"><a title="인천 선택"'
                        +' href="javascript:void(0);">인천</a>'
                      +' <ul class="depth2 area_35" style="left: 0px; top: 0px;">'
                          +' <li data-cinemacode="4041" data-screencode=""><a'
                            +' title="검단 선택"'
                            +' style="left: 290px; top: 200px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">검단</a></li>'
                          +' <li data-cinemacode="4062" data-screencode=""><a'
                            +' title="송도 선택"'
                            +' style="left: 315px; top: 345px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">송도</a></li>'
                          +' <li data-cinemacode="4051" data-screencode=""><a'
                            +' title="인천논현 선택"'
                            +' style="left: 362px; top: 340px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">인천논현</a></li>'
                          +' <li data-cinemacode="4042" data-screencode=""><a'
                            +' title="청라 선택"'
                            +' style="left: 280px; top: 240px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">청라</a></li>'
                        +' </ul></li>'
                      +' <li class="mapArea" data-areacode="45"><a'
                        +' title="대전/충청/세종 선택" href="javascript:void(0);">대전/충청/세종</a>'
                      +' <ul class="depth2 area_45" style="left: 0px; top: 0px;">'
                          +' <li data-cinemacode="3141" data-screencode=""><a'
                            +' title="공주 선택"'
                            +' style="left: 135px; top: 217px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">공주</a></li>'
                          +' <li data-cinemacode="3021" data-screencode=""><a'
                            +' title="대전 선택"'
                            +' style="left: 180px; top: 246px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">대전</a></li>'
                          +' <li data-cinemacode="3551" data-screencode=""><a'
                            +' title="보령 선택"'
                            +' style="left: 41px; top: 243px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">보령</a></li>'
                          +' <li data-cinemacode="3391" data-screencode=""><a'
                            +' title="세종 선택"'
                            +' style="left: 167px; top: 185px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">세종</a></li>'
                          +' <li data-cinemacode="3901" data-screencode=""><a'
                            +' title="제천 선택"'
                            +' style="left: 335px; top: 70px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">제천</a></li>'
                          +' <li data-cinemacode="3651" data-screencode=""><a'
                            +' title="진천 선택"'
                            +' style="left: 185px; top: 133px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">진천</a></li>'
                          +' <li data-cinemacode="3301" data-screencode=""><a'
                            +' title="천안 선택"'
                            +' style="left: 140px; top: 142px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">천안</a></li>'
                          +' <li data-cinemacode="3801" data-screencode=""><a'
                            +' title="충주 선택"'
                            +' style="left: 278px; top: 92px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">충주</a></li>'
                          +' <li data-cinemacode="3501" data-screencode=""><a'
                            +' title="홍성내포 선택"'
                            +' style="left: 50px; top: 172px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">홍성내포</a></li>'
                        +' </ul></li>'
                      +' <li class="mapArea" data-areacode="55"><a'
                        +' title="부산/대구/경상 선택" href="javascript:void(0);">부산/대구/경상</a>'
                      +' <ul class="depth2 area_55" style="left: 0px; top: 0px;">'
                          +' <li data-cinemacode="6701" data-screencode=""><a'
                            +' title="거창 선택"'
                            +' style="left: 70px; top: 220px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">거창</a></li>'
                          +' <li data-cinemacode="6311" data-screencode=""><a'
                            +' title="경남대 선택"'
                            +' style="left: 178px; top: 305px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">경남대</a></li>'
                          +' <li data-cinemacode="7122" data-screencode=""><a'
                            +' title="경산하양 선택"'
                            +' style="left: 210px; top: 160px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">경산하양</a></li>'
                          +' <li data-cinemacode="7801" data-screencode=""><a'
                            +' title="경주 선택"'
                            +' style="left: 275px; top: 175px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">경주</a></li>'
                          +' <li data-cinemacode="7304" data-screencode=""><a'
                            +' title="구미 선택"'
                            +' style="left: 134px; top: 140px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">구미</a></li>'
                          +' <li data-cinemacode="7303" data-screencode=""><a'
                            +' title="구미강동 선택"'
                            +' style="left: 145px; top: 144px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">구미강동</a></li>'
                          +' <li data-cinemacode="7401" data-screencode=""><a'
                            +' title="김천 선택"'
                            +' style="left: 105px; top: 135px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">김천</a></li>'
                          +' <li data-cinemacode="7901" data-screencode=""><a'
                            +' title="남포항 선택"'
                            +' style="left: 298px; top: 155px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">남포항</a></li>'
                          +' <li data-cinemacode="7022" data-screencode=""><a'
                            +' title="대구(칠성로) 선택"'
                            +' style="left: 173px; top: 178px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">대구(칠성로)</a></li>'
                          +' <li data-cinemacode="6161" data-screencode=""><a'
                            +' title="덕천 선택"'
                            +' style="left: 233px; top: 297px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">덕천</a></li>'
                          +' <li data-cinemacode="7011" data-screencode=""><a'
                            +' title="동대구 선택"'
                            +' style="left: 183px; top: 180px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">동대구</a></li>'
                          +' <li data-cinemacode="7451" data-screencode=""><a'
                            +' title="문경 선택"'
                            +' style="left: 110px; top: 42px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">문경</a></li>'
                          +' <li data-cinemacode="6001" data-screencode=""><a'
                            +' title="부산극장 선택"'
                            +' style="left: 245px; top: 318px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">부산극장</a></li>'
                          +' <li data-cinemacode="6906" data-screencode=""><a'
                            +' title="부산대 선택"'
                            +' style="left: 253px; top: 293px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">부산대</a></li>'
                          +' <li data-cinemacode="7021" data-screencode=""><a'
                            +' title="북대구(칠곡) 선택"'
                            +' style="left: 172px; top: 168px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">북대구(칠곡)</a></li>'
                          +' <li data-cinemacode="6641" data-screencode=""><a'
                            +' title="사천 선택"'
                            +' style="left: 110px; top: 332px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">사천</a></li>'
                          +' <li data-cinemacode="6642" data-screencode=""><a'
                            +' title="삼천포 선택"'
                            +' style="left: 102px; top: 360px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">삼천포</a></li>'
                          +' <li data-cinemacode="6141" data-screencode=""><a'
                            +' title="서면 선택"'
                            +' style="left: 255px; top: 307px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">서면</a></li>'
                          +' <li data-cinemacode="7601" data-screencode=""><a'
                            +' title="안동 선택"'
                            +' style="left: 190px; top: 45px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">안동</a></li>'
                          +' <li data-cinemacode="6261" data-screencode=""><a'
                            +' title="양산 선택"'
                            +' style="left: 235px; top: 285px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">양산</a></li>'
                          +' <li data-cinemacode="6811" data-screencode=""><a'
                            +' title="울산 선택"'
                            +' style="left: 285px; top: 233px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">울산</a></li>'
                          +' <li data-cinemacode="6421" data-screencode=""><a'
                            +' title="창원 선택"'
                            +' style="left: 200px; top: 302px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">창원</a></li>'
                          +' <li data-cinemacode="6121" data-screencode=""><a'
                            +' title="해운대(장산) 선택"'
                            +' style="left: 267px; top: 302px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">해운대(장산)</a></li>'
                        +' </ul></li>'
                      +' <li class="mapArea" data-areacode="65"><a title="광주/전라 선택"'
                        +' href="javascript:void(0);">광주/전라</a>'
                      +' <ul class="depth2 area_65" style="left: 0px; top: 0px;">'
                          +' <li data-cinemacode="5011" data-screencode=""><a'
                            +' title="광주(충장로) 선택"'
                            +' style="left: 185px; top: 214px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">광주(충장로)</a></li>'
                          +' <li data-cinemacode="5021" data-screencode=""><a'
                            +' title="광주상무 선택"'
                            +' style="left: 175px; top: 211px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">광주상무</a></li>'
                          +' <li data-cinemacode="5061" data-screencode=""><a'
                            +' title="광주하남 선택"'
                            +' style="left: 165px; top: 208px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">광주하남</a></li>'
                          +' <li data-cinemacode="5901" data-screencode=""><a'
                            +' title="남원 선택" style="left: 285px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">남원</a></li>'
                          +' <li data-cinemacode="5301" data-screencode=""><a'
                            +' title="목포 선택"'
                            +' style="left: 70px; top: 308px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">목포</a></li>'
                          +' <li data-cinemacode="5302" data-screencode=""><a'
                            +' title="목포하당(포르모) 선택"'
                            +' style="left: 82px; top: 304px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">목포하당(포르모)</a></li>'
                          +' <li data-cinemacode="5612" data-screencode=""><a'
                            +' title="송천 선택"'
                            +' style="left: 215px; top: 10px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">송천</a></li>'
                          +' <li data-cinemacode="5401" data-screencode=""><a'
                            +' title="순천 선택"'
                            +' style="left: 318px; top: 270px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">순천</a></li>'
                          +' <li data-cinemacode="5402" data-screencode=""><a'
                            +' title="신대(순천) 선택"'
                            +' style="left: 330px; top: 275px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">신대(순천)</a></li>'
                          +' <li data-cinemacode="5551" data-screencode=""><a'
                            +' title="여수 선택"'
                            +' style="left: 355px; top: 315px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">여수</a></li>'
                          +' <li data-cinemacode="5001" data-screencode=""><a'
                            +' title="전대(광주) 선택"'
                            +' style="left: 185px; top: 206px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">전대(광주)</a></li>'
                          +' <li data-cinemacode="5063" data-screencode=""><a'
                            +' title="전주(객사) 선택"'
                            +' style="left: 225px; top: 20px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">전주(객사)</a></li>'
                          +' <li data-cinemacode="5064" data-screencode=""><a'
                            +' title="첨단 선택"'
                            +' style="left: 175px; top: 191px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">첨단</a></li>'
                        +' </ul></li>'
                      +' <li class="mapArea" data-areacode="70"><a title="강원 선택"'
                        +' href="javascript:void(0);">강원</a>'
                      +' <ul class="depth2 area_70" style="left: 0px; top: 0px;">'
                          +' <li data-cinemacode="2001" data-screencode=""><a'
                            +' title="남춘천 선택"'
                            +' style="left: 85px; top: 181px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">남춘천</a></li>'
                          +' <li data-cinemacode="2171" data-screencode=""><a'
                            +' title="속초 선택"'
                            +' style="left: 225px; top: 105px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">속초</a></li>'
                          +' <li data-cinemacode="2201" data-screencode=""><a'
                            +' title="원주 선택"'
                            +' style="left: 120px; top: 280px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">원주</a></li>'
                          +' <li data-cinemacode="2202" data-screencode=""><a'
                            +' title="원주센트럴 선택"'
                            +' style="left: 130px; top: 290px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">원주센트럴</a></li>'
                        +' </ul></li>'
                      +' <li class="mapArea" data-areacode="80"><a title="제주 선택"'
                        +' href="javascript:void(0);">제주</a>'
                      +' <ul class="depth2 area_80" style="left: 0px; top: 0px;">'
                          +' <li data-cinemacode="6901" data-screencode=""><a'
                            +' title="제주 선택"'
                            +' style="left: 205px; top: 125px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">제주</a></li>'
                          +' <li data-cinemacode="6902" data-screencode=""><a'
                            +' title="제주아라 선택"'
                            +' style="left: 230px; top: 140px; letter-spacing: inherit;"'
                            +' href="javascript:void(0);">제주아라</a></li>'
                        +' </ul></li>'
                    +' </ul>'
                  +' </div>'
                  +' <!-- //지도 -->'
                +' </div>'
                +' <!-- 특별관 -->'
                +' <div class="tab-pane movie_body body_theater2" id="body_theater2"'
                  +' style="display: none;">'
                  +' <div class="theater_list">'
                    +' <ul class="depth1">'
                      +' <li data-screencode="10"><a title="THE BOUTIQUE 선택"'
                        +' href="javascript:void(0);">THE BOUTIQUE</a><span><i'
                          +' class="fa fa-angle-right"></i></span></li>'
                      +' <li data-screencode="01"><a title="MX 선택"'
                        +' href="javascript:void(0);">MX</a><span><i'
                          +' class="fa fa-angle-right"></i></span></li>'
                      +' <li data-screencode="12"><a title="COMFORT 선택"'
                        +' href="javascript:void(0);">COMFORT</a><span><i'
                          +' class="fa fa-angle-right"></i></span></li>'
                      +' <li data-screencode="09"><a title="DRIVE M 선택"'
                        +' href="javascript:void(0);">DRIVE M</a><span><i'
                          +' class="fa fa-angle-right"></i></span></li>'
                      +' <li data-screencode="04"><a title="OPEN M 선택"'
                        +' href="javascript:void(0);">OPEN M</a><span><i'
                          +' class="fa fa-angle-right"></i></span></li>'
                      +' <li data-screencode="07"><a title="MEGA KIDS BOX 선택"'
                        +' href="javascript:void(0);">MEGA KIDS BOX</a><span><i'
                          +' class="fa fa-angle-right"></i></span></li>'
                      +' <li data-screencode="02"><a title="THE FIRST CLUB 선택"'
                        +' href="javascript:void(0);">THE FIRST CLUB</a><span><i'
                          +' class="fa fa-angle-right"></i></span></li>'
                      +' <li data-screencode="11"><a title="BALCONY M 선택"'
                        +' href="javascript:void(0);">BALCONY M</a><span><i'
                          +' class="fa fa-angle-right"></i></span></li>'
                    +' </ul>'
                    +' <ul tabindex="0" class="depth2"></ul>'
                    +' <div class="detail_wrap"></div>'
                  +' </div>'
                +' </div>'
                +' <div class="last_btns">'
                  +' <button class="img_btn booking cancel" id="btnCinemaCancel"'
                    +' type="button" >취소</button>'
                  +' <button class="img_btn booking ok" id="btnCinemaConfirm" type="button">확인</button>'
                +' </div>'
                +' <button class="custom_close" aria-hidden="true" type="button"'
                  +' >'
                  +' <span class="blind">창닫기</span>'
                +' </button>'
                +' <!-- data-dismiss="modal" -->'
              +' </div>'
              +' <!-- /.modal-content -->'
            +' </div>'
            +' <!-- /.modal-dialog -->'
          +' </div>'
          +' <!-- /.modal -->';
		
		var movieUI=' <div tabindex="0" class="modal fade booking_lp booking_lp2"'
            +' id="select_movie" role="dialog" aria-hidden="true"'
            +' aria-labelledby="myModalLabel">'
            +' <div class="wrapper">'
              +' <div tabindex="0" class="contents">'
                +' <div class="movie_header">'
                  +' <h3 class="h3_movie_all active pull-left overflow_visible">'
                    +' <a title="모든영화 보기" class="blank movieListTabBtn"'
                      +' href="javascript:void(0);" data-tabtype="movie">모든영화</a>'
                  +' </h3>'
                  +' <i class="icon h3_split pull-left"></i>'
                  +' <h3 class="h3_specialcontent pull-left overflow_visible">'
                    +' <a title="특별컨텐트 보기" class="blank movieListTabBtn"'
                      +' href="javascript:void(0);" data-tabtype="special">특별컨텐트</a>'
                  +' </h3>'
                +' </div>'
                +' <div class="util">'
                  +' <div class="selected" id="movieSelected">'
                    +' <button class="img_btn booking sel_all mr10 ml0"'
                      +' id="selectAllMoovieBtn">All</button>'
                  +' </div>'
                  +' <ul class="sort">'
                    +' <li><a title="예매율순 정렬하기" class="sortBtn active"'
                      +' href="javascript:void(0)" data-sorttype="rank">예매율순</a></li>'
                    +' <li><a title="가나다순 정렬하기" class="sortBtn"'
                      +' href="javascript:void(0)" data-sorttype="title">가나다순</a></li>'
                    +' <li class="last"><a title="개봉일순 정렬하기" class="sortBtn"'
                      +' href="javascript:void(0)" data-sorttype="releaseDate">개봉일순</a></li>'
                  +' </ul>'
                +' </div>'
                +' <div class="movie_body movie">'
                  +' <!--  영화목록 -->'
                  +' <ul class="movie_list" id="selectMovieList">'
                      +' </ui>'
                +' </div>'
                +' <div class="movie_body specialContent" style="display: none;">'
                  +' <div class="movie_list" id="selectSpecialContentList"></div>'
                +' </div>'
                +' <div class="last_btns">'
                  +' <button class="img_btn booking cancel" id="btnMovieCancel"'
                    +' type="button" >취소</button>'
                  +' <!-- data-dismiss="modal" -->'
                  +' <button class="img_btn booking ok" id="btnMovieConfirm"'
                    +' type="button">확인</button>'
                +' </div>'
              +' </div>'
              +' <!-- /.modal-content -->'
            +' </div>'
            +' <!-- /.modal-dialog -->'
          +' </div>'
          +' <!-- /.modal -->'
          +' <!-- //영화선택 -->';
		
		var seatUI=' <div tabindex="0" id="bookingSeat">'
            +' <div tabindex="0" class="modal fade booking_lp booking_lp2"'
            +' id="select_seat" role="dialog" aria-hidden="false"'
            +' aria-labelledby="myModalLabel" data-backdrop="static">'
            +' <div class="wrapper">'
              +' <div tabindex="0" class="contents">'
                +' <button class="img_btn booking refresh_all"'
                  +' onclick="bookingRefresh()" type="button">'
                  +' <span class="blind">다시예매</span>'
                +' </button>'
                +' <!-- 언어버튼 -->'
                +' <!-- <button type="button" class="img_btn booking lang_ko">한국어</button>-->'
                +' <!-- <button type="button" class="img_btn booking lang_en" onclick="alert("준비중")">English</button> -->'
                +' <div class="movie_header">'
                  +' <h3 class="h3_seat pull-left">좌석선택</h3>'
                +' </div>'
                +' <div class="seat_body">'
                  +' <div class="left_wrap">'
                    +' <div class="row1" id="bookingSeatTicket">'
                      +' <label for="ticketTypeCode_01">일반</label> <select'
                        +' name="ticketTypeCode_01" class="mr10" id="ticketTypeCode_01"'
                        +' style="display: none;" data-pre-value="0"'
                        +' data-style="btn-info" exclusiveyn="N" popupyn="N"'
                        +' tickettypecode="01">'
                        +' <option value="0">0</option>'
                        +' <option value="1">1</option>'
                        +' <option value="2">2</option>'
                        +' <option value="3">3</option>'
                        +' <option value="4">4</option>'
                        +' <option value="5">5</option>'
                        +' <option value="6">6</option>'
                        +' <option value="7">7</option>'
                        +' <option value="8">8</option>'
                      +' </select>'
                      +' <div class="btn-group bootstrap-select mr10">'
                        +' <button title="0"'
                          +' class="btn dropdown-toggle selectpicker btn-info"'
                          +' type="button" data-toggle="dropdown"'
                          +' data-id="ticketTypeCode_01">'
                          +' <span class="filter-option pull-left" id=selectno>0</span>&nbsp;<span'
                            +' class="caret"></span>'
                        +' </button>'
                        +' <div class="dropdown-menu open"'
                          +' style="overflow: hidden; min-height: 70px; max-height: 607px;">'
                          +' <ul class="dropdown-menu inner selectpicker dropselectno" role="menu" style="-ms-overflow-y: auto; min-height: 68px; max-height: 605px;">'
                            +' <li class="selected" rel="0"><a tabindex="0"><span class="text">0</span><i class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="1"><a tabindex="0"><span class="text">1</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="2"><a tabindex="0"><span class="text">2</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="3"><a tabindex="0"><span class="text">3</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="4"><a tabindex="0"><span class="text">4</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="5"><a tabindex="0"><span class="text">5</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="6"><a tabindex="0"><span class="text">6</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="7"><a tabindex="0"><span class="text">7</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li class="" rel="8"><a tabindex="0"><span class="text">8</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                          +' </ul>'
                        +' </div>'
                      +' </div>'
                      +' <label for="ticketTypeCode_02">청소년</label> <select'
                        +' name="ticketTypeCode_02" class="mr10" id="ticketTypeCode_02"'
                        +' style="display: none;" data-pre-value="0"'
                        +' data-style="btn-info" exclusiveyn="N" popupyn="N"'
                        +' tickettypecode="02">'
                        +' <option value="0">0</option>'
                        +' <option value="1">1</option>'
                        +' <option value="2">2</option>'
                        +' <option value="3">3</option>'
                        +' <option value="4">4</option>'
                        +' <option value="5">5</option>'
                        +' <option value="6">6</option>'
                        +' <option value="7">7</option>'
                        +' <option value="8">8</option>'
                      +' </select>'
                      +' <div class="btn-group bootstrap-select mr10">'
                        +' <button title="0"'
                          +' class="btn dropdown-toggle selectpicker btn-info"'
                          +' type="button" data-toggle="dropdown"'
                          +' data-id="ticketTypeCode_02">'
                          +' <span class="filter-option pull-left">0</span>&nbsp;<span'
                            +' class="caret"></span>'
                        +' </button>'
                        +' <div class="dropdown-menu open">'
                          +' <ul class="dropdown-menu inner selectpicker" role="menu">'
                            +' <li class="selected" rel="0"><a tabindex="0"><span'
                                +' class="text">0</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="1"><a tabindex="0"><span class="text">1</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="2"><a tabindex="0"><span class="text">2</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="3"><a tabindex="0"><span class="text">3</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="4"><a tabindex="0"><span class="text">4</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="5"><a tabindex="0"><span class="text">5</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="6"><a tabindex="0"><span class="text">6</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="7"><a tabindex="0"><span class="text">7</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="8"><a tabindex="0"><span class="text">8</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                          +' </ul>'
                        +' </div>'
                      +' </div>'
                      +' <label for="ticketTypeCode_09">어린이</label> <select'
                        +' name="ticketTypeCode_09" class="mr10" id="ticketTypeCode_09"'
                        +' style="display: none;" data-pre-value="0"'
                        +' data-style="btn-info" exclusiveyn="N" popupyn="Y"'
                        +' tickettypecode="09">'
                        +' <option value="0">0</option>'
                        +' <option value="1">1</option>'
                        +' <option value="2">2</option>'
                        +' <option value="3">3</option>'
                        +' <option value="4">4</option>'
                        +' <option value="5">5</option>'
                        +' <option value="6">6</option>'
                        +' <option value="7">7</option>'
                        +' <option value="8">8</option>'
                      +' </select>'
                      +' <div class="btn-group bootstrap-select mr10">'
                        +' <button title="0"'
                          +' class="btn dropdown-toggle selectpicker btn-info"'
                          +' type="button" data-toggle="dropdown"'
                          +' data-id="ticketTypeCode_09">'
                          +' <span class="filter-option pull-left">0</span>&nbsp;<span'
                            +' class="caret"></span>'
                        +' </button>'
                        +' <div class="dropdown-menu open">'
                          +' <ul class="dropdown-menu inner selectpicker" role="menu">'
                            +' <li class="selected" rel="0"><a tabindex="0"><span'
                                +' class="text">0</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="1"><a tabindex="0"><span class="text">1</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="2"><a tabindex="0"><span class="text">2</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="3"><a tabindex="0"><span class="text">3</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="4"><a tabindex="0"><span class="text">4</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="5"><a tabindex="0"><span class="text">5</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="6"><a tabindex="0"><span class="text">6</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="7"><a tabindex="0"><span class="text">7</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="8"><a tabindex="0"><span class="text">8</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                          +' </ul>'
                        +' </div>'
                      +' </div>'
                      +' <label for="ticketTypeCode_14">우대</label> <select'
                        +' name="ticketTypeCode_14" class="mr10" id="ticketTypeCode_14"'
                        +' style="display: none;" data-pre-value="0"'
                        +' data-style="btn-info" exclusiveyn="N" popupyn="Y"'
                        +' tickettypecode="14">'
                        +' <option value="0">0</option>'
                        +' <option value="1">1</option>'
                        +' <option value="2">2</option>'
                        +' <option value="3">3</option>'
                        +' <option value="4">4</option>'
                        +' <option value="5">5</option>'
                        +' <option value="6">6</option>'
                        +' <option value="7">7</option>'
                        +' <option value="8">8</option>'
                      +' </select>'
                      +' <div class="btn-group bootstrap-select mr10">'
                        +' <button title="0"'
                          +' class="btn dropdown-toggle selectpicker btn-info"'
                          +' type="button" data-toggle="dropdown"'
                          +' data-id="ticketTypeCode_14">'
                          +' <span class="filter-option pull-left">0</span>&nbsp;<span'
                            +' class="caret"></span>'
                        +' </button>'
                        +' <div class="dropdown-menu open">'
                          +' <ul class="dropdown-menu inner selectpicker" role="menu">'
                            +' <li class="selected" rel="0"><a tabindex="0"><span'
                                +' class="text">0</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="1"><a tabindex="0"><span class="text">1</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="2"><a tabindex="0"><span class="text">2</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="3"><a tabindex="0"><span class="text">3</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="4"><a tabindex="0"><span class="text">4</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="5"><a tabindex="0"><span class="text">5</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="6"><a tabindex="0"><span class="text">6</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="7"><a tabindex="0"><span class="text">7</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                            +' <li rel="8"><a tabindex="0"><span class="text">8</span><i'
                                +' class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>'
                          +' </ul>'
                        +' </div>'
                      +' </div>'
                      +' <p class="seat_ex" style="margin-top: 0px;">인원 선택은 최대 8명까지'
                        +' 가능합니다.</p>'
                    +' </div>'
                    +' <!-- 티켓종류선택 -->'
                    +' <div class="row3">'
                      +' <button class="alert_seat" style="display: block;" onclick="$(this).fadeOut();" type="button">'
                        +' <i class="fa fa-exclamation-circle"></i> 관람하실 인원을 먼저 선택해주세요.'
                      +' </button>'
                      +' <div class="place"'
                        +' style="position: relative; background-color: rgb(255, 255, 255);">'
                        +' <div class="seat_wrap">'
                          +' <p class="screen">SCREEN</p>'
                          +' <div class="seat_position" id="seatPositionList" style="width: 273px; height: 142px;">'
                          +' </div>'
                        +' </div>'
                        +' <div class="seat_img" id="bookingSelectSeatSeatInfo">'
                          +' <!-- 좌석 안내 동적 설정 -->'
                          +' <p>좌석 안내</p>'
                          +' <ul>'
                            +' <li><span class="seat_selected"></span>선택좌석</li>'
                            +' <li><span class="seat_cant"></span>예매완료</li>'
                            +' <li><span class="seat_done"></span>선택불가</li>'
                            +' <li><span class="seat_normal"></span>일반석</li>'
                            +' <li><span class="ico_wheel"></span>장애인/<br>훨체어석</li>'
                          +' </ul>'
                        +' </div>'
                      +' </div>'
                    +' </div>'
                    +' <div class="row4">'
                      +' <!-- <p class="seat_ex">인원 선택은 최대 8명까지 가능합니다.</p> -->'
                      +' <div class="reset">'
                        +' <button class="img_btn booking btn_reset" type="button">다시선택</button>'
                        +' <div class="selected_man">'
                         /* +' <span>좌석 선택 인원</span> <span><span'
                            +' id="currentCountSelectedTicket">4</span>/<span'
                            +' id="totalCountSelectedTicket">8</span> </span>'*/
                        +' </div>'
                      +' </div>'
                    +' </div>'
                  +' </div>'
                  +' <!-- 예매현황 -->'
                  +' <div class="right_wrap" id="bookingSelectSeatStatusBoard">'
                  +' </div>'
                +' </div>'
                +' <button class="custom_close" id="closeAll" data-dismiss="modal" type="button">'
                  +' <span class="blind">창닫기</span>'
                +' </button>'
              +' </div>'
              +' <!-- /.modal-content -->'
            +' </div>'
            +' <!-- /.modal-dialog -->'
          +' </div>'
        +' </div>';
		$('body').append(mainUI);
		$('#myModal').append(theaterUI);
		$('#myModal').append(movieUI);
		$('#myModal').append(seatUI);
		var today = new Date();
	      var mm=today.getMonth()+1;
	      var dd=today.getDate("dd");
	      if(dd<10){dd='0'+dd} 
	      if(mm<10){mm='0'+mm} 
	      var week = new Array('일','월','화','수','목','금','토');
	      var dui=' <li data-item="'+(today.getFullYear())+(mm)+(dd)+'" ><a title="선택됨" class="active" onclick="reservation.event.dateSelect(this)" href="#"> 오늘 </a></li>';
	        for(var i=1; i <21;i++){
	           today.setDate(today.getDate()+1);
	           mm=today.getMonth()+1;
	           dd=today.getDate();
	           if(dd<10){dd='0'+dd} 
	           if(mm<10){mm='0'+mm} 
	             dui+= ' <li data-item="'+(today.getFullYear())+(mm)+(dd)+'" ><a title="선택됨" class="" onclick="reservation.event.dateSelect(this)" href="#"> '+today.getDate()+'('+week[today.getDay()]+')'+'</a></li>';
	          }
		$('#datey').append(dui);
		
		setContentView();
	};
	var setContentView=()=>{
	
	};
	return {
		init:init
	};
	
})();

reservation.event=(()=>{
	var init=function(){
		/*캘린더*/
		$('#datepicker_sel').click(()=> {
			if ($('#datepicker_display').is(":visible")) {
				$('#datepicker_display').css('display', 'none');
			} else {
				$('#datepicker_display').css('display', 'block');
			}
		});
		/*극장 선택*/
		$('#btnCinemaConfirm').click(()=> {
			if($('#cinemaSelected p').length!=0){
			$('#th_btn1').attr('title', '강남 선택해제');
			$('#th_btn1').addClass('close_small');
			$('#th_btn1').after('<span>'+$('#cinemaSelected').text()+'<span>');
	
			timeline();
			
			}
			$('#btnCinemaCancel').trigger('click');

		});
		$('#btnCinemaCancel').click(()=> {
			$('#select_theater').addClass('modal fade booking_lp booking_lp2');
			$('#select_theater').css('display', 'none');
		});
		/*영화 선택*/
		$('#showMovieListBtn').click(()=> {
			$('#select_movie').addClass('modal fade booking_lp booking_lp2 in');
			$('#select_movie').css('display', 'block');
			$('#select_movie').css('z-index', '1200');
			var url=$$('x')+'/gh/list';
			var ui='';
			var film;
			$.getJSON(url,data=>{
				$.each(data.list,(i,j)=>{
				
					ui+=' <li data-movietitle="'+j.movieTitle+'" data-movieimage="'+j.image+'"><a title="'+j.movieTitle+' 선택" href="javascript:void(0);"><span class="blind">'+j.movieTitle+'</span></a>'
                    +' <div class="poster">'
                    +' <img alt="'+j.movieTitle+'" src="'+j.image+'">'
                  +' </div>'
                  +' <p title="'+j.movieTitle+'" class="title">'
                    +' <span class="'+j.filmRate+'"></span><span>'+j.movieTitle+'</span>'
                  +' </p></li>';
					
				});
				$('#movieSelected p').remove();
				$('#selectMovieList').empty();
				$('#selectMovieList').append(ui);
				
				$('#selectMovieList li').on('click',function(){
					
						if($(this).attr('class')=='selected'){
							var title=$(this).attr('data-movietitle');
							$(this).attr('class','');
							$.each($('#movieSelected p'),function(index,item){
								if($(item).attr('data-title')==title){
									$(item).remove();
								}

							});
						}else{
							if($('#movieSelected p').length <4){
							//$('#selectMovieList li').attr('class','');
							$(this).attr('class','selected');
							var title=$(this).attr('data-movietitle');
							var image=$(this).attr('data-movieimage');
							var ui=' <p class="selected_movie" data-title="'+title+'" data-image="'+image+'">'
				            +' <span>'+title+'</span><a class="fa fa-times a_in_block" href="javascript:void(0);"><span class="blind">'+title
				              +' 선택해제</span></a> </p>';
							//$('#movieSelected p').remove();
							$('#movieSelected').append(ui);
							}else{
								alert('4개까지만 선택할 수 있습니다.');
							}
						}
					
				});
			});
		});
		$('#btnMovieCancel').click(()=> {
			$('#select_movie').addClass('modal fade booking_lp booking_lp2');
			$('#select_movie').css('display', 'none');
		});
		$('#btnMovieConfirm').click(()=> {
			$('#select_movie').addClass('modal fade booking_lp booking_lp2');
			$('#select_movie').css('display', 'none');
			if($('#movieSelected p').length!=0){
			var title;
			var img;
			var ui='';
			$.each($('#movieSelected p'),function(index,item){
				title=$(item).attr('data-title');
				img=$(item).attr('data-image');
				ui+='<li class="poster" data-moviecode="012320"><div class="poster"><button title="'+title+' 선택해제" class="closemovie close_small" type="button"></button>'
				+ '<img alt="'+title+'" src="'+img+'"></div></li>';
				
			});
			switch ($('#movieSelected p').length) {
			case 1:
				ui += '<li><div class="poster"><button title="극장선택 빈프레임" class="openmovie btn_add" type="button"></button></div></li>'
					+ '<li><div class="poster"><button title="극장선택 빈프레임" class="openmovie btn_add" type="button"></button></div></li>'
					+ '<li><div class="poster"><button title="극장선택 빈프레임" class="openmovie btn_add" type="button"></button></div></li>';
				break;
			case 2:
				ui += '<li><div class="poster"><button title="극장선택 빈프레임" class="openmovie btn_add" type="button"></button></div></li>'
					+ '<li><div class="poster"><button title="극장선택 빈프레임" class="openmovie btn_add" type="button"></button></div></li>';
				break;
			case 3:
				ui += '<li><div class="poster"><button title="극장선택 빈프레임" class="openmovie btn_add" type="button"></button></div></li>';
				break;
			default:
				break;
			}
			$('#selectedAllMovie').css('display', 'none');
			$('#selectedMovieList').css('display', 'block');
			$('#movie_slist').empty();
			$('#movie_slist').append(ui);
			
			$('.closemovie').on('click',function(){
				var mtitle=$(this).parent('div').find('img').attr('alt');
				$.each($('#movieSelected p'),function(index,item){
					if($(item).attr('data-title')==mtitle){
						$(item).remove();
					}
				});
				$.each($('#selectMovieList li'),function(index,item){
					if($(item).attr('data-movietitle')==mtitle){
						$(item).attr('class','');
					}
				});
				$(this).parent('div').parent('li').remove();
				$('#movie_slist').append('<li><div class="poster"><button title="극장선택 빈프레임" class="openmovie btn_add" type="button"></button></div></li>');
				if($('#movie_slist li div button').attr('title')=='극장선택 빈프레임'){
					movielist_cancel();
				}
				$('.openmovie').on('click',function(){
					$('#select_movie').addClass('modal fade booking_lp booking_lp2 in');
					$('#select_movie').css('display', 'block');
					$('#select_movie').css('z-index', '1200');
					
				});
			});
			$('.openmovie').on('click',function(){
				$('#select_movie').addClass('modal fade booking_lp booking_lp2 in');
				$('#select_movie').css('display', 'block');
				$('#select_movie').css('z-index', '1200');
				
			});
			timeline();
		}
		});
		
		$('#closeAll').click(()=>{
			$('#selectedAllMovie').css('display', 'block');
			$('#selectedMovieList').css('display', 'none');
			$('#movie_slist').empty();
			$('#movieSelected p').remove();
			var ui = '<li class="no_movie_list"><span class="blind">조회된 상영목록이 없습니다</span></li>';
			$('#movieTimeList').empty();
			$('#movieTimeList').html(ui);
			$('#close_reservation').trigger('click');
			
			$('#cinemaList button').attr('class','btn_add');
			$('#cinemaList button').attr('title','극장선택 빈프레임');
			$('#cinemaList span').remove();
			$('#cinemaSelected').empty();
			$('.depth2 li').attr('class','');
			$('#movieSelected p').remove();
			$('#selectMovieList li').attr('class','');
		});
		$('#closeAll2').click(()=>{
			$('#closeAll').trigger('click');
		});
		
	
		$('.dropselectno li a').on('click',function(){
			$('#countSelectedByTicket').text("일반 "+$(this).text()+"명");
			$('#selectno').text($(this).text());
		});

		$('.depth2 li').on('click',function(){
			$('.depth2 li').attr('class','');
			$(this).attr('class','active');
			var ui='<p class="selected_movie" data-cinemacode="1372">'
				+' <span>'+$(this).text()+'</span>'
				+' <a href="javascript:void(0);" class="fa fa-times a_in_block"></a></p>';
			$('#cinemaSelected').empty();
			$('#cinemaSelected').append(ui);
		});
		$('.depth2 li').on('mouseover',function(){
			var a=$('.area_10 li').eq($(this).index()).find('a');
			a.attr('class','active');
			//alert($(this).index());
		});
		$('.depth2 li').on('mouseout',function(){
			//alert($(this).index());
			$('.area_10 li a').attr('class','');
		});
		$('#refreshCinemaBtn').click(()=>{
			$('#cinemaList button').attr('class','btn_add');
			$('#cinemaList button').attr('title','극장선택 빈프레임');
			$('#cinemaList span').remove();
			$('#cinemaSelected').empty();
			$('.depth2 li').attr('class','');
			var ui = '<li class="no_movie_list"><span class="blind">조회된 상영목록이 없습니다</span></li>';
			$('#movieTimeList').empty();
			$('#movieTimeList').append(ui);
		});
		$('#refreshMovieBtn').click(()=>{
			movielist_cancel();
		});
		/*$('.dateSelect a').click(()=>{
			alert($(this).val());
			//$(this).attr('class','actives');
			//$('.dateSelect a').addClass('');
			//this.firstElementChild.className='active';
		});*/
		
	};
	var theater_click=(o)=>{
		if (o.className == 'btn_add') {
			$('#select_theater').addClass('modal fade booking_lp booking_lp2 in');
			$('#select_theater').css('display', 'block');
			$('#select_theater').css('z-index', '1100');
		} else {
			$('#cinemaSelected').empty();
			o.className = 'btn_add';
			o.title = '극장선택 빈프레임';
			o.nextSibling.outerHTML = '';
			var ui = '<li class="no_movie_list"><span class="blind">조회된 상영목록이 없습니다</span></li>';
			$('#movieTimeList').empty();
			$('#movieTimeList').append(ui);
			$('.depth2 li').attr('class','');
		}
	};
	var movielist_cancel=()=>{
		$('#selectedAllMovie').css('display', 'block');
		$('#selectedMovieList').css('display', 'none');
		$('#movie_slist').empty();
		$('#movieSelected p').remove();
		timeline();
	};
	var date_prev=()=>{
		var obj=$('#datey').position();
		if(obj.left < 0) $('#datey').css('left',obj.left+68);
	};
	var date_next=()=>{
		var obj=$('#datey').position();
		$('#datey').css('left',obj.left-68);
	};
	var hour_prev=()=>{
		var obj=$('#slidebarItems').position();
		if(obj.left < 0) $('#slidebarItems').css('left',obj.left+44);
	};
	var hour_next=()=>{
		var obj=$('#slidebarItems').position();
		$('#slidebarItems').css('left',obj.left-44);
	};
	var dateSelect=(o)=>{
		$('#datey a').attr('class','');
		o.className = 'active';
		timeline();
	};
	var timeline=()=>{
		if($('#cinemaSelected p').length!=0){
			var date=$('#datey li').find('.active').parent('li').attr('data-item');
			
		$.ajax({
			url : $$('x')+'/gh/timelist',
			method : 'post',
			dataType:'json',
			data : JSON.stringify({
				'day':date,
				'officeName':$('#cinemaSelected p').text(),
				'movieTitle':$('#movieSelected p').eq(0).attr('data-title'),
				'movieTitle2':$('#movieSelected p').eq(1).attr('data-title'),
				'movieTitle3':$('#movieSelected p').eq(2).attr('data-title'),
				'movieTitle4':$('#movieSelected p').eq(3).attr('data-title')
			}),
			contentType : 'application/json',
			success : d=>{
				//alert('ajax 통신 성공'+d.msg);
				var ui='';
				var film;
				if(d.timelist.length!=0){
				var timesel=parseInt((d.timelist[0].startTime).substring(0,2));
				$('#slidebarItems li a').attr('class','');
				$('#slidebarItems li').eq(timesel).find('a').attr('class','active');
				//var obj=$('#slidebarItems').position();
				$('#slidebarItems').css('left',-30*timesel);
				
				$.each(d.timelist,(i,j)=>{
					if(j.filmRate=='age_19'){
						film= '청소년관람불가';
					}else if(j.filmRate=='age_15'){
						film='15세관람가';
					}else{
						film='12세관람가';
					}
					ui+='<li>'
						+' <div class="viewing_time"><p class="time_table"><strong>'+j.startTime+'</strong><span>~ '+j.endTime+'</span></p></div>'
						+' <div class="movie"><p title="'+j.movieTitle+'" class="title"><span class="age '+j.filmRate+'">'+film+'</span>'
						+' <a title="'+j.movieTitle+' 선택" href="javascript:void(0);">'+j.movieTitle+'</a></p>'
						+' <p class="subtitle">디지털(자막)</p></div><div class="theater_wrap"><p class="theater">'+j.officeName+'<br>'+j.screen+'관</p><p class="seat">87 / 92</p></div></li>';
				});
				
				$('#movieTimeList').empty();
				$('#movieTimeList').append(ui);
				
				//예매창
				$('#movieTimeList li').on('click',function(){
					$('#select_seat').addClass('modal fade booking_lp booking_lp2 in');
					$('#select_seat').css('display', 'block');
					$('#select_seat').css('z-index', '1200');
					
					var atitle=$(this).find('.movie').find('p').eq(0);
					$.each(d.timelist,(l,k)=>{
					if(k.movieTitle==atitle.attr('title')){
						
						var url=$$('x')+'/gh/seat/'+k.screeningNumber;
						var  lines='';
						var seatcant='';
						var top=-18;
						var left=23;
						var seat_ui=' <span class="exit left_right" style="left: 277px; top: -18px;"></span>';
						$.getJSON(url,data=>{
							$.each(data.seatlist,(i,j)=>{
								if(lines!=j.line){
									lines=j.line;
									top+=18;
									seat_ui+=' <span class="line line_'+j.line+'" style="left: 0px; top: '+top+'px;">'+j.line+'</span>';
									
									left=23;
								}
								if(j.cancel=='N'){
									seatcant='seat_cant';
								}else{
									seatcant=j.type;
								}
								seat_ui+=' <button title="'+j.seat_name+'" class="'+seatcant+'" '
		                              +' style="left: '+left+'px; top: '+top+'px; width: 16px; height: 16px;"'
		                              +' onmouseover="" onmouseout="" onkeyup="" onkeypress=""'
		                              +' onclick="" onblur=""'
		                              +' type="button" popupyn="N" seatlinecnt="6" seattype="10"'
		                              +' seatno="'+j.seatno+'" seatgroup="'+j.line+'">'+j.seatno+'</button>';
								left+=18;
							});
							$('#seatPositionList').empty();
							$('#seatPositionList').append(seat_ui);
							$('#seatPositionList button').on('click',function(){
								if($(this).attr('class')=='seat_normal'){
									if($('#selectno').text() > $('#selectedSeatNumbers1 li').length){
									var seat=$(this).attr('seatgroup')+$(this).attr('seatno');
									$(this).attr('class','seat_selected');
									$(this).attr('title',seat+'(선택됨)');
									
									var ui='<li>'+seat+'</li>'
									$('#selectedSeatNumbers1').append(ui);
									$('#ticketTotalPrice').text($('#selectedSeatNumbers1 li').length*9+',000');
									}else{
										if($('#selectno').text()==0){
											alert('인원을 먼저 선택해주세요.');
										}else{
											alert('좌석 선택이 완료되었습니다.');
										}
									}
								}else if($(this).attr('class')=='seat_selected'){
									var seat=$(this).attr('seatgroup')+$(this).attr('seatno');
									$(this).attr('class','seat_normal');
									$(this).attr('title',seat+'(일반석)');
									//ticketTotalPrice
									//alert($('#selectedSeatNumbers1 li').length);
									$.each($('#selectedSeatNumbers1 li'),function(index,item){
										if($(item).text()==seat){
											$(item).remove();
										}

									});
									$('#ticketTotalPrice').text($('#selectedSeatNumbers1 li').length==0? '0':$('#selectedSeatNumbers1 li').length*9+',000');
								}
							});
						});
						
					var rui= ' <div class="row1" id="re_screen_num" data-screeningnumber="'+k.screeningNumber+'">'
	                +' <img alt="'+k.movieTitle+'"'
	                +' src="'+k.image+'">'
	            +' </div>'
	            +' <div class="row2">'
	              +' <div class="title">'
	                +' <i class="age '+k.filmRate+'"></i>'
	                +' <h4>'+k.movieTitle+'</h4>'
	                +' <span>디지털(자막)</span>'
	              +' </div>'
	              +' <div'
	                +' style="height: 123px; overflow: hidden; -ms-overflow-y: auto;">'
	                +' <ul class="info">'
	                  +' <li>'+k.officeName+'<br>'+k.screen+'관'
	                  +' </li>'
	                  +' <li>'+k.day.substring(0,4)+'.'+k.day.substring(4,6)+'.'+k.day.substring(6,8)+' '+k.startTime+'</li>'
	                  +' <li id="countSelectedByTicket"><span>&nbsp;</span></li>'
	                +' </ul>'
	                +' <ul class="seat" id="selectedSeatNumbers1">'
	                +' </ul>'
	              +' </div>'
	              +' <p class="price">'
	                +' <strong id="ticketTotalPrice">0</strong> 원'
	              +' </p>'
	              +' <div class="pay_final_wrp">'
	                +' <button class="img_btn booking prev" type="button" id="close_reservation">이전</button>'
	                +' <button class="img_btn booking next" type="button" id="reservation_credit">다음</button>'
	              +' </div>'
	            +' </div>';
						$('#bookingSelectSeatStatusBoard').empty();
						$('#bookingSelectSeatStatusBoard').append(rui);
					}
					});
					
					$('#close_reservation').click(()=> {
						$('#select_seat').addClass('modal fade booking_lp booking_lp2');
						$('#select_seat').css('display', 'none');
					});
					
					$('#reservation_credit').click(e=> {
						e.preventDefault();
						if($$('id')!=null){
						if($('#selectno').text() == $('#selectedSeatNumbers1 li').length){
						for(var i=0; i<$('#selectedSeatNumbers1 li').length;i++){
							$.ajax({
								url : $$('x')+'/gh/reservation/insert',
								method : 'post',
								dataType:'json',
								data : JSON.stringify({
									'screeningNumber':$('#re_screen_num').attr('data-screeningnumber'),
									'seatSeq':$('#selectedSeatNumbers1 li').eq(i).text(),
									'cancel':'N',
									'id':$$('id')
								}),
								contentType : 'application/json',
								success : d=>{
									//alert('ajax 통신 성공'+d.msg);
								},
								error : (x,s,m)=>{
									//alert('결제 오류'+m);
								}
							});
						}
						alert('예매가 완료되었습니다.');
						$('#closeAll').trigger('click');
						}else{
							alert('예매하고자 하는 좌석수와 선택한 좌석수가 일치하지 않습니다.');
						}
						}else{
							alert('로그인을 해주세요');
							$('#closeAll').trigger('click');
							$.getScript($$('j')+'megabox.js',()=>{
								megabox.index.init();

							})
						}});
				});
			}else{
				var fui = '<li class="no_movie_list"><span class="blind">조회된 상영목록이 없습니다</span></li>';
				$('#movieTimeList').empty();
				$('#movieTimeList').append(fui);
			}
			},
			error : (x,s,m)=>{
				alert('결제 오류'+m);
			}
		});
		}
	};
	return {
		init:init,
		theater_click:theater_click,
		movielist_cancel:movielist_cancel,
		date_prev:date_prev,
		date_next:date_next,
		hour_prev:hour_prev,
		hour_next:hour_next,
		dateSelect:dateSelect,
		timeline:timeline
	};
})();