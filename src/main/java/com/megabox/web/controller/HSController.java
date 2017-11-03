package com.megabox.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.megabox.web.domain.Member;
import com.megabox.web.domain.Reservation;
import com.megabox.web.mapper.HSMapper;
import com.megabox.web.service.IGetService;
import com.megabox.web.service.IListService;
import com.megabox.web.service.IPostService;
import com.megabox.web.service.IPutService;



@RestController
public class HSController {
	private static final Logger logger = LoggerFactory.getLogger(HSController.class);
	@Autowired HSMapper hsMapper;
	@Autowired Reservation resv;
	@Autowired Member m;
	@RequestMapping(value="/post/reservation")
	public @ResponseBody Map<?,?> makeReservation(/*@RequestBody Reservation resv*/){
		logger.info("예약{}","진입");
		Map<String,String> map = new HashMap<>();
		resv.setId("hanseul");
		resv.setScreeningNumber("1");
		resv.setSeatSeq("A3");
		resv.setCancel("N");
		
		new IPostService() {
			@Override
			public void execute(Object o) {
				hsMapper.insert(resv);
			}
		}.execute(null);
		map.put("result", "success");
		return map;
	}
	@RequestMapping(value="/count/movie")
	public @ResponseBody Map<?,?> countMovie(){
		logger.info("카운트{}","진입");
		Map<String, Object> map = new HashMap<>();
		List<?> list = new IListService() {
			@Override
			public List<?> execute(Object o) {
				return hsMapper.selectMovieList(o);
			}
		}.execute(null);
		logger.info("카운트는 몇이니?  {}",list.size());	
		return map;
	}
	@RequestMapping(value="/list/movie")
	public @ResponseBody List<?> movieList(){
		logger.info("무비리스트{}","진입");
		return new IListService() {
			@Override
			public List<?> execute(Object o) {
				return hsMapper.selectMovieList(o);
			}
		}.execute(null);
	}
	@RequestMapping(value="/list/office")
	public @ResponseBody List<?> officeList(){
		logger.info("지역리스트{}","진입");
		return new IListService() {
			@Override
			public List<?> execute(Object o) {
				return hsMapper.selectOfficeList(o);
			}
		}.execute(null);
	}
	@RequestMapping(value="/login/member"/*, method=RequestMethod.POST*/ )
	public @ResponseBody Map<?,?> login(/*@RequestBody Member m , HttpSession session*/){
		logger.info("로그인{}","진입");
		Map<String,Object> map = new HashMap<>();
		m.setId("master");
		/*Member mem =new Member();
		 * m.setId(m.getId());*/
		Member mem = (Member) new IGetService() {
			@Override
			public Object execute(Object o) {
				return hsMapper.selectUser(m);
			}
		}.execute(null);
		
		/*String errorMsg ="";
		try {
			if (!s.getPassword().equals(param.getPassword())) {
				errorMsg = "패스워드가 다릅니다.";
			}
		}
		catch (NullPointerException e) {
				errorMsg = "가입되지 않은 사용자입니다.";
		}
		session.setAttribute("id", m.getId());
		map.put("msg",errorMsg);
		map.put("checkval", "ok");*/
		
		return map;
	}
	@RequestMapping(value="/cancel/reservation")
	public @ResponseBody Map<?,?> cancelReservation(){
		Map<String,String> map = new HashMap<>();
		resv.setReservationNumber("4");
		new IPutService() {
			@Override
			public void execute(Object o) {
				hsMapper.update(resv);
			}
		}.execute(null);
		map.put("result", "success");
		return map;
	}
}