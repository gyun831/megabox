package com.megabox.web.complex;

import java.util.HashMap;
import java.util.Map;

public class CommentPagingFactory {
	public static Map<?,?> create(String cntStr, String pageNum) {
		Map<String,Object> map=new HashMap<>();

	    int pageSize = 3;      //   한 페이지당 출력한 글 개수
	    int pageBlock = 5;      //   출력할 페이지 개수

	    int cnt = Integer.parseInt(cntStr);        
	    int start = 0;      
	    int end   = 0;         
	    int number = 0;        
	    int currentPage = 0;  

	    int pageCount = 0;      // 페이지 개수
	    int startPage = 0;    
	    int endPage = 0;     
	     
	    if(pageNum == null) {
	    	pageNum = "1";
	    }
	    
	    currentPage = Integer.parseInt(pageNum);
	    pageCount = ( cnt / pageSize ) + (cnt % pageSize > 0 ? 1 : 0);

	    start = (currentPage -1) * pageSize;

	    number = cnt - (currentPage -1) * pageSize;
	    
	    startPage = (currentPage / pageBlock) * pageBlock + 1; 
	    if(currentPage % pageBlock == 0) startPage -= pageBlock;

	    endPage = startPage + pageBlock - 1;
	    if(endPage > pageCount) endPage = pageCount;

	    map.put("cnt", cnt);
	    map.put("number", number);
	    map.put("pageNum", pageNum);
	    map.put("pageSize", pageSize);
	    map.put("start", start);
	    map.put("end", end);
	    
	    if(cnt > 0) {
	       map.put("currentPage", currentPage);
	       map.put("startPage", startPage);
	       map.put("endPage", endPage);
	       map.put("pageCount", pageCount);
	       map.put("pageBlock", pageBlock);
	    }
	    return map;
	}
}