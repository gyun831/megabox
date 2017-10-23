package com.megabox.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
public class Reservation {
	private String reservationNumber,id,screeningNumber,seatSeq,cancel;
}
