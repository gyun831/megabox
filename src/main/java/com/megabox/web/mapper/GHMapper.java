package com.megabox.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.megabox.web.command.Command;
import com.megabox.web.domain.Movie;

@Repository
public interface GHMapper {
	public void insert(Object o);
	public List<?> selectList(Command cmd);
	public List<?> timeList(Object o);
	public List<?> seatList(Command cmd);
	public String count(Command cmd);
	public void update(Object o);
	public void delete(Command cmd);
}