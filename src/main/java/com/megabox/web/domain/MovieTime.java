package com.megabox.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
public class MovieTime {
	private String timeSeq,startTime,endTime,screenSeq;

}
