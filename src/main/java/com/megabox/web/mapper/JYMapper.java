package com.megabox.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.megabox.web.command.Command;
import com.megabox.web.domain.Member;

@Repository
public interface JYMapper {
	public void insert(Object o);
	public List<?> selectList(Command cmd);
	public Member selectOne(Command cmd);
	public String count(Command cmd);
	public void update(Object o);
	public void delete(Command cmd);
	public void passUpdate(Member member);
}
