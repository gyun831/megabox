package com.megabox.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.megabox.web.command.Command;
import com.megabox.web.domain.Reservation;
import com.megabox.web.domain.RespMap;
import com.megabox.web.mapper.GHMapper;
import com.megabox.web.service.IGetService;
import com.megabox.web.service.IListService;
import com.megabox.web.service.IPostService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/gh")
public class GHController {
	private static final Logger logger = LoggerFactory.getLogger(GHController.class);
	@Autowired GHMapper gmapper;
	@Autowired Command cmd;
	@Autowired RespMap resp;

	@RequestMapping("/list")
	public @ResponseBody Map<?, ?> list(){
		Map<String,Object> map=new HashMap<>();
		IListService list=null;
		list =(x)->{
			return gmapper.selectList(cmd);
		};
		System.out.println(list.execute(cmd));
		map.put("list", list.execute(cmd));
		
		return map;
	}
	@RequestMapping("/seat/{screen}")
	public @ResponseBody Map<?, ?> seat(@PathVariable String screen){
		Map<String,Object> map=new HashMap<>();
		IListService slist=null;
		cmd= new Command();
		cmd.setSearch(screen);
		System.out.println(cmd.getSearch());
		slist =(x)->{
			return gmapper.seatList(cmd);
		};
	
		map.put("seatlist", slist.execute(cmd));
		//System.out.println(map.get("seatlist"));
		
		return map;
	}
	@RequestMapping(value="/timelist",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Map<?, ?> timelist(@RequestBody RespMap rm){
		Map<String,Object> map=new HashMap<>();
		IListService list=null;
		resp=new RespMap();
		resp.setDay(rm.getDay().trim());
		resp.setOfficeName(rm.getOfficeName().trim());
		//System.out.println(rm.getMovieTitle());
		if(rm.getMovieTitle()!=null) {
			resp.setMovieTitle(rm.getMovieTitle().trim());
			if(rm.getMovieTitle2()!=null) {
				resp.setMovieTitle2(rm.getMovieTitle2().trim());
				if(rm.getMovieTitle3()!=null) {
					resp.setMovieTitle3(rm.getMovieTitle3().trim());
					if(rm.getMovieTitle4()!=null){
						resp.setMovieTitle4(rm.getMovieTitle4().trim());
						}
				}
			}
		}
		list =(x)->{
			return gmapper.timeList(resp);
		};
		map.put("timelist", list.execute(resp));
		//System.out.println(map.get("timelist"));
		return map;
	}
	
	@RequestMapping(value="/reservation/insert",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Map<?, ?> put(@RequestBody Reservation re){
		Map<String,Object> map=new HashMap<>();
		IPostService post=null;
		post = (x)->{
			gmapper.insert(re);
		};
		post.execute(re);
		map.put("msg", "successed");
		
		return map;
	};
}