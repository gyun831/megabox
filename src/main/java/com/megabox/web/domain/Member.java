package com.megabox.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
public class Member {
	private String id,password,name,birth,address,email,phone,regdate;

}
