package com.megabox.web.complex;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class PathDTO {
	private String ctx,img,js,css;
}
