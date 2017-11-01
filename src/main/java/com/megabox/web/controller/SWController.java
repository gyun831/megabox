package com.megabox.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.megabox.web.complex.CommentPagingFactory;
import com.megabox.web.domain.Reservation;
import com.megabox.web.mapper.SWMapper;
import com.megabox.web.service.IDeleteService;
import com.megabox.web.service.IGetService;
import com.megabox.web.service.IListService;
import com.megabox.web.service.IPostService;

@RestController
public class SWController {
	@Autowired SWMapper mapper;
	@Autowired Reservation rsv;
	
	@RequestMapping(value="/main/movieList", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> mainList(@RequestBody Map<?,?> reqMap) {
		Map<String,Object> map=new HashMap<>();
		rsv.setCancel(String.valueOf(reqMap.get("sort")));
		rsv.setScreeningNumber("mainChk");
		IListService movieListService=null;
		movieListService=(x)-> {
			return mapper.selectMovieList(rsv);
		};
		map.put("movieList", movieListService.execute(rsv));
		return map;
	};

	@RequestMapping(value="/movie/list", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> list(@RequestBody Map<?,?> reqMap) {
		Map<String,Object> map=new HashMap<>();
		rsv.setCancel(String.valueOf(reqMap.get("sort")));
		rsv.setScreeningNumber("");
		if(reqMap.get("id")!=null) {
			rsv.setId(String.valueOf(reqMap.get("id")));
		}
		IListService movieListService=null;
		movieListService=(x)-> {
			return mapper.selectMovieList(rsv);
		};
		map.put("movieList", movieListService.execute(rsv));
		return map;
	};
	
	@RequestMapping(value="/movie/detail/{movieSeq}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> detail(@PathVariable String movieSeq) {
		Map<String,Object> map=new HashMap<>();
		rsv.setCancel(movieSeq);
		IGetService detailService=null;
		IGetService wishCountService=null;
		IGetService movieStarCountService=null;
		detailService=(x)-> {
			return mapper.selectMovieDetail(rsv);
		};
		wishCountService=(x)-> {
			return mapper.selectMovieWishCount(rsv);
		};
		movieStarCountService=(x)-> {
			return mapper.selectMovieCommentCount(rsv);
		};
		map.put("movieStarCount", movieStarCountService.execute(rsv));
		map.put("movieDetail", detailService.execute(rsv));
		map.put("movieWishCount", wishCountService.execute(rsv));
		return map;
	};
	
	@RequestMapping(value="/movie/stillcut/{movieSeq}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> stillcut(@PathVariable String movieSeq) {
		Map<String,Object> map=new HashMap<>();
		rsv.setCancel(movieSeq);
		IGetService movieStillcutService=null;
		movieStillcutService=(x)-> {
			return mapper.selectStillcut(rsv);
		};
		map.put("movieStillcut", movieStillcutService.execute(rsv));
		return map;
	};

	@RequestMapping(value="/movie/comment/write/{movieSeq}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> commentWrite(@PathVariable String movieSeq, @RequestBody Map<?,?> reqMap) {
		Map<String,Object> map=new HashMap<>();
		rsv.setCancel(movieSeq);
		rsv.setId(String.valueOf(reqMap.get("id")));
		rsv.setScreeningNumber(String.valueOf(reqMap.get("content")));
		rsv.setSeatSeq(String.valueOf(reqMap.get("score")));
		IGetService commentCheckByIdService=null;
		IGetService movieTitleBySeqService=null;
		IPostService movieCommentWriteService=null;
		movieTitleBySeqService=(x)-> {
			return mapper.selectMovieTitleByMovieSeq(rsv);
		};
		rsv.setReservationNumber((String) movieTitleBySeqService.execute(rsv));
		commentCheckByIdService=(x)-> {
			return mapper.selectCommentCountById(rsv);
		};
		int cnt=Integer.parseInt((String)commentCheckByIdService.execute(rsv));
		if(cnt>0) {
			map.put("msg","실패");
		} else {
			movieCommentWriteService=(x)-> {
				mapper.insertMovieComment(rsv);
			};
			movieCommentWriteService.execute(rsv);
			map.put("msg","성공");
		}
		return map;
	};
	
	@RequestMapping(value="/movie/comment/{movieSeq}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> commentList(@PathVariable String movieSeq, @RequestBody Map<?,?> reqMap) {
		Map<String,Object> map=new HashMap<>();
		String pageNum=String.valueOf(reqMap.get("pageNum"));
		rsv.setCancel(movieSeq);
		rsv.setSeatSeq((String) reqMap.get("sort"));
		IGetService movieCommentCountService=null;
		movieCommentCountService=(x)-> {
			return mapper.selectMovieCommentCount(rsv);
		};
		Map<?,?> pagingMap=CommentPagingFactory.create(String.valueOf(movieCommentCountService.execute(rsv)), pageNum);
		rsv.setReservationNumber(String.valueOf(pagingMap.get("start")));
		rsv.setScreeningNumber(String.valueOf(pagingMap.get("pageSize")));
		IListService movieCommentListService=null;
		movieCommentListService=(x)-> {
			return mapper.selectMovieCommentList(rsv);
		};
		map.put("commentPaging", pagingMap);
		map.put("commentCount", movieCommentCountService.execute(rsv));
		map.put("commentList", movieCommentListService.execute(rsv));
		return map;
	};
	
	@RequestMapping(value="/movie/comment/delete/{replyNum}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> commentDelete(@PathVariable String replyNum) {
		Map<String,Object> map=new HashMap<>();
		rsv.setCancel(replyNum);
		IDeleteService commentDeleteService=null;
		IGetService commentCheckByIdService=null;
		commentDeleteService=(x)-> {
			mapper.deleteMovieComment(rsv);
		};
		commentDeleteService.execute(rsv);
		commentCheckByIdService=(x)-> {
			return mapper.selectCommentCountById(rsv);
		};
		map.put("commentDeleteChk", commentCheckByIdService.execute(rsv));
		return map;
	};
	
	@RequestMapping(value="/movie/myComment", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> myCommentList(@RequestBody Map<?,?> reqMap) {
		Map<String,Object> map=new HashMap<>();
		String pageNum=String.valueOf(reqMap.get("pageNum"));
		rsv.setId((String) reqMap.get("id"));
		rsv.setSeatSeq((String) reqMap.get("sort"));
		IListService myMovieCommentListService=null;
		IGetService myMovieCommentCountService=null;
		myMovieCommentCountService=(x)-> {
			return mapper.selectMyMovieCommentCountById(rsv);
		};
		Map<?,?> pagingMap=CommentPagingFactory.create(String.valueOf(myMovieCommentCountService.execute(rsv)), pageNum);
		rsv.setReservationNumber(String.valueOf(pagingMap.get("start")));
        rsv.setScreeningNumber(String.valueOf(pagingMap.get("pageSize")));
		myMovieCommentListService=(x)-> {
			return mapper.selectMyMovieCommentListById(rsv);
		};
		map.put("commentPaging", pagingMap);
		map.put("myMovieCommentCount", myMovieCommentCountService.execute(rsv));
		map.put("myMovieCommentList", myMovieCommentListService.execute(rsv));
		return map;
	};
	
	@RequestMapping(value="/movie/deleteMyComment", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> deleteMyComment(@RequestBody Map<?,?> reqMap) {
		Map<String,Object> map=new HashMap<>();
		rsv.setCancel(String.valueOf(reqMap.get("replyNum")));
		IDeleteService myCommentDeleteService=null;
		myCommentDeleteService=(x)-> {
			mapper.deleteMyMovieComment(rsv);
		};
		myCommentDeleteService.execute(rsv);
		return map;
	};	
	
	@RequestMapping(value="/movie/seen/chk", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> seenChk(@RequestBody Map<?,?> reqMap) {
		Map<String,Object> map=new HashMap<>();
		rsv.setCancel(String.valueOf(reqMap.get("movieSeq")));
		rsv.setId(String.valueOf(reqMap.get("id")));
		rsv.setSeatSeq(String.valueOf(reqMap.get("movieCheck")));
		IGetService movieTitleBySeqService=null;
		movieTitleBySeqService=(x)-> {
			return mapper.selectMovieTitleByMovieSeq(rsv);
		};
		rsv.setReservationNumber((String.valueOf(movieTitleBySeqService.execute(rsv))));
		IGetService seenCheckService=null;
		seenCheckService=(x)-> {
			return mapper.selectMovieCheckById(rsv);
		};
		map.put("chk", seenCheckService.execute(rsv));
		return map;
	};
	
	@RequestMapping(value="/movie/seen/add", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> seenAdd(@RequestBody Map<?,?> reqMap) {
		Map<String,Object> map=new HashMap<>();
		rsv.setCancel(String.valueOf(reqMap.get("movieSeq")));
		rsv.setId(String.valueOf(reqMap.get("id")));
		rsv.setSeatSeq(String.valueOf(reqMap.get("movieCheck")));
		IGetService movieTitleBySeqService=null;
		movieTitleBySeqService=(x)-> {
			return mapper.selectMovieTitleByMovieSeq(rsv);
		};
		rsv.setReservationNumber((String.valueOf(movieTitleBySeqService.execute(rsv))));
		IPostService insertSeenService=null;
		insertSeenService=(x)-> {
			mapper.insertMovieCheck(rsv);
		};
		insertSeenService.execute(rsv);
		return map;
	};
	
	@RequestMapping(value="/movie/seen/remove", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> seenRemove(@RequestBody Map<?,?> reqMap) {
		Map<String,Object> map=new HashMap<>();
		rsv.setCancel(String.valueOf(reqMap.get("movieSeq")));
		rsv.setId(String.valueOf(reqMap.get("id")));
		rsv.setSeatSeq(String.valueOf(reqMap.get("movieCheck")));
		IGetService movieTitleBySeqService=null;
		movieTitleBySeqService=(x)-> {
			return mapper.selectMovieTitleByMovieSeq(rsv);
		};
		rsv.setReservationNumber((String.valueOf(movieTitleBySeqService.execute(rsv))));
		IDeleteService deleteSeenService=null;
		deleteSeenService=(x)-> {
			mapper.deleteMovieCheck(rsv);
		};
		deleteSeenService.execute(rsv);
		return map;
	};
	
	@RequestMapping(value="/movie/interesting/chk", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> interestingChk(@RequestBody Map<?,?> reqMap) {
		Map<String,Object> map=new HashMap<>();
		rsv.setCancel(String.valueOf(reqMap.get("movieSeq")));
		rsv.setId(String.valueOf(reqMap.get("id")));
		rsv.setSeatSeq(String.valueOf(reqMap.get("movieCheck")));
		IGetService movieTitleBySeqService=null;
		movieTitleBySeqService=(x)-> {
			return mapper.selectMovieTitleByMovieSeq(rsv);
		};
		rsv.setReservationNumber(String.valueOf(movieTitleBySeqService.execute(rsv)));
		IGetService interestingCheckService=null;
		interestingCheckService=(x)-> {
			return mapper.selectMovieCheckById(rsv);
		};
		map.put("chk", interestingCheckService.execute(rsv));
		return map;
	};
	
	@RequestMapping(value="/movie/interesting/add", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> interestingAdd(@RequestBody Map<?,?> reqMap) {
		Map<String,Object> map=new HashMap<>();
		rsv.setCancel(String.valueOf(reqMap.get("movieSeq")));
		rsv.setId(String.valueOf(reqMap.get("id")));
		rsv.setSeatSeq(String.valueOf(reqMap.get("movieCheck")));
		IGetService movieTitleBySeqService=null;
		movieTitleBySeqService=(x)-> {
			return mapper.selectMovieTitleByMovieSeq(rsv);
		};
		rsv.setReservationNumber((String.valueOf(movieTitleBySeqService.execute(rsv))));
		IPostService insertInterestingService=null;
		insertInterestingService=(x)-> {
			mapper.insertMovieCheck(rsv);
		};
		insertInterestingService.execute(rsv);
		return map;
	};
	
	@RequestMapping(value="/movie/interesting/remove", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> interestingRemove(@RequestBody Map<?,?> reqMap) {
		Map<String,Object> map=new HashMap<>();
		rsv.setCancel(String.valueOf(reqMap.get("movieSeq")));
		rsv.setId(String.valueOf(reqMap.get("id")));
		rsv.setSeatSeq(String.valueOf(reqMap.get("movieCheck")));
		IGetService movieTitleBySeqService=null;
		movieTitleBySeqService=(x)-> {
			return mapper.selectMovieTitleByMovieSeq(rsv);
		};
		rsv.setReservationNumber((String.valueOf(movieTitleBySeqService.execute(rsv))));
		IDeleteService deleteInterestingService= null;
		deleteInterestingService=(x)-> {
			mapper.deleteMovieCheck(rsv);
		};
		deleteInterestingService.execute(rsv);
		return map;
	};
	@RequestMapping(value="/movie/commentChkById", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> commentChkById(@RequestBody Map<?,?> reqMap) {
		Map<String,Object> map=new HashMap<>();
		rsv.setCancel(String.valueOf(reqMap.get("movieSeq")));
		rsv.setId(String.valueOf(reqMap.get("id")));
		IGetService movieTitleBySeqService=null;
		IGetService commentCheckByIdService=null;
		movieTitleBySeqService=(x)-> {
			return mapper.selectMovieTitleByMovieSeq(rsv);
		};
		rsv.setReservationNumber((String) movieTitleBySeqService.execute(rsv));
		commentCheckByIdService=(x)-> {
			return mapper.selectCommentCountById(rsv);
		};
		map.put("idChk", String.valueOf(commentCheckByIdService.execute(rsv)));
		return map;
	};
	
	@RequestMapping(value="/movie/booking", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> bookingList(@RequestBody Map<?,?> reqMap) {
		Map<String,Object> map=new HashMap<>();
		String pageNum=String.valueOf(reqMap.get("pageNum"));
		rsv.setId(String.valueOf(reqMap.get("id")));
		rsv.setCancel(String.valueOf(reqMap.get("cancel")));
		IGetService bookingCountService=null;
		bookingCountService=(x)-> {
			return mapper.selectBookingCountById(rsv);
		};
		Map<?,?> pagingMap=CommentPagingFactory.create(String.valueOf(bookingCountService.execute(rsv)), pageNum);
		rsv.setReservationNumber(String.valueOf(pagingMap.get("start")));
        rsv.setScreeningNumber(String.valueOf(pagingMap.get("pageSize")));
        IListService bookingListService=null;
        bookingListService=(x)-> {
			return mapper.selectBookingListById(rsv);
		};
		map.put("commentPaging", pagingMap);
		map.put("bookingCount",bookingCountService.execute(rsv));
		map.put("bookingList",bookingListService.execute(rsv));
		return map;
	};
	
	@RequestMapping(value="/movie/booking/cancel", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> bookingCancel(@RequestBody Map<?,?> reqMap) {
		Map<String,Object> map=new HashMap<>();
		rsv.setCancel("Y");
		rsv.setId(String.valueOf(reqMap.get("reservationNumber")));
		IDeleteService bookingCancelService=null;
		bookingCancelService=(x)-> {
			mapper.updateCancelById(rsv);
		};
		bookingCancelService.execute(rsv);
		return map;
	};
}