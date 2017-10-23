package com.megabox.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.megabox.web.command.Command;
import com.megabox.web.domain.Member;
import com.megabox.web.mapper.JYMapper;
import com.megabox.web.service.IGetService;

@RestController
public class JYController {
	@Autowired Command cmd;
	@Autowired Member member;
	@Autowired JYMapper JYmapper;
	
	
	@RequestMapping(value="/login",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Map<?,?> login(@RequestBody Map<String,String> login){
		Map<String,Object> map = new HashMap<>();
		IGetService loginService = null;
		cmd.setSearch(login.get("id"));
		loginService=(x)->{
			return JYmapper.selectOne(cmd);
		};
		member = (Member) loginService.execute(cmd);
		
		if(member.getPassword().equals(login.get("password"))) {
			map.put("msg", "성공");
			map.put("member", member);
		}else {
			map.put("msg", "실패");
		}
		return map;
		
	}
	

}
