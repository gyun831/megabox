package com.megabox.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
public class Reply {
	private String replyNum,movieTitle,id,content,date;
}
