package com.megabox.web.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.megabox.web.command.Command;
import com.megabox.web.complex.MailService;
import com.megabox.web.domain.Member;
import com.megabox.web.mapper.JYMapper;
import com.megabox.web.service.IDeleteService;
import com.megabox.web.service.IGetService;
import com.megabox.web.service.IPostService;
import com.megabox.web.service.IPutService;

@RestController
public class JYController {
	private static final Logger logger = LoggerFactory.getLogger(JYController.class);
	@Autowired Command cmd;
	@Autowired Member member;
	@Autowired JYMapper JYmapper;
	@Autowired MailService mailService;
	
	
	@RequestMapping(value="/login",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Map<?,?> login(@RequestBody Map<String,String> login){
		Map<String,Object> map = new HashMap<>();
		IGetService loginService = null;
		cmd.setSearch(login.get("id"));
		cmd.setColumn("id");
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
	@RequestMapping(value="/selectid/{column}",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Map<?,?> selectID(@RequestBody Map<String,String> info, @PathVariable String column){
		Map<String,Object> map = new HashMap<>();
		logger.info("value: {}",info.get("value"));
		logger.info("column: {}",column);
		IGetService selectService = null;
		cmd.setSearch(info.get("value"));
		cmd.setColumn(column);
		selectService=(x)->{
			return JYmapper.selectOne(cmd);
		};
		member = (Member)selectService.execute(cmd);
		
		switch(column) {
		case "id":
			if(selectService.execute(cmd)==null){
				map.put("msg", "성공");
			}else {
				map.put("msg", "실패");
			}
			break;
		case "email":
			if(selectService.execute(cmd)!=null){
				map.put("msg", "성공");
			}else {
				map.put("msg", "실패");
			}
			break;
		}
		map.put("member", member);
		return map;
	}
	@RequestMapping(value="/sendMail",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Map<?,?> sendMail(@RequestBody Map<String,String> mail) {
		Map<String,Object> map = new HashMap<>();
		int randomCode = new Random().nextInt(1000000)+1000;
		String joinCode = String.valueOf(randomCode);
		map.put("joinCode", joinCode);
		String subject = "메가박스 승인 번호 입니다.";
		StringBuilder sb = new StringBuilder();
		sb.append("메가박스 승인번호는").append(joinCode).append("입니다.");
		mailService.send(subject, sb.toString(),"gyun831@gmail.com", mail.get("email"));
		return map;
		
	}
	@RequestMapping(value="/join",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Map<?,?> join(@RequestBody Member mem) {
		Map<String,Object> map =new HashMap<>();
		IPutService joinService = null;
		
		joinService =(x)->{
			JYmapper.insert(mem);
		};
		joinService.execute(mem);
		
		return map;
	}
	@RequestMapping(value="/update",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Map<?,?> update(@RequestBody Map<String,String> upinfo) {
		Map<String,Object> map =new HashMap<>();
		IPostService updateService = null;
		cmd.setColumn(upinfo.get("phone"));
		cmd.setSearch(upinfo.get("email"));
		cmd.setCondition(upinfo.get("id"));;
		
		updateService=(x)->{
			JYmapper.update(cmd);
		};
		updateService.execute(cmd);
		return map;
	}
	@RequestMapping(value="/get/pwupdate",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Map<?,?> pwupdate(@RequestBody Map<String,String> pwupdate){
		System.out.println("비번변경 => 넘어온 아이디 :"+pwupdate.get("id")+", 비번 : "+pwupdate.get("oldpass"));
		Map<String,Object> map=new HashMap<>();
		IPutService pwUpdateService = null;
		member.setPassword(pwupdate.get("newpass"));
		member.setId(pwupdate.get("id"));
		pwUpdateService=(x)->{
			JYmapper.passUpdate(member);
		};
		pwUpdateService.execute(cmd);
		map.put("msg", "성공");
						
		return map;	
	}
	@RequestMapping(value="/delete",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody Map<?,?> delete(@RequestBody Map<String,String> mem){
		Map<String,Object> map=new HashMap<>();
		IDeleteService deleteService = null;
		cmd.setSearch(mem.get("id"));
		deleteService=(x)->{
			JYmapper.delete(cmd);
		};
		deleteService.execute(cmd);
		map.put("msg", "성공");
						
		return map;	
	}
	
	

}
