package com.megabox.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.megabox.web.domain.Reservation;
import com.megabox.web.domain.RespMap;

@Repository
public interface SWMapper {
	public List<RespMap> selectMovieList(Reservation rsv);
	public RespMap selectMovieDetail(Reservation rsv);
	public String selectMovieWishCount(Reservation rsv);
	public String selectMovieCommentCount(Reservation rsv);
	public List<RespMap> selectMovieCommentList(Reservation rsv);
	public String selectCommentCountById(Reservation rsv);
	public String selectMovieTitleByMovieSeq(Reservation rsv);
	public void insertMovieComment(Reservation rsv);
	public void deleteMovieComment(Reservation rsv);
	public String selectMyMovieCommentCountById(Reservation rsv);
	public List<RespMap> selectMyMovieCommentListById(Reservation rsv);
	public void deleteMyMovieComment(Reservation rsv);
	public String selectMovieCheckById(Reservation rsv);
	public void insertMovieCheck(Reservation rsv);
	public void deleteMovieCheck(Reservation rsv);
	public RespMap selectStillcut(Reservation rsv);
	public String selectBookingCountById(Reservation rsv);
	public List<RespMap> selectBookingListById(Reservation rsv);
	public void updateCancelById(Reservation rsv);
}