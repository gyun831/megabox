package com.megabox.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.megabox.web.command.Command;

@Repository
public interface SWMapper {
	public void insert(Object o);
	public List<?> selectList(Command cmd);
	public Object selectOne(Command cmd);
	public String count(Command cmd);
	public void update(Object o);
	public void delete(Command cmd);

}
