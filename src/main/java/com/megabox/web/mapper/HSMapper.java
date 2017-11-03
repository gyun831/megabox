package com.megabox.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface HSMapper {
	public void insert(Object o);
	public List<?> selectMovieList(Object o);
	public List<?> selectOfficeList(Object o);
	public Object selectUser(Object o);
	public String count(Object o);
	public void update(Object o);
	public void delete(Object o);
}