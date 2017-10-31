package com.megabox.web.complex;

public interface MailService {
	void send(String subject,String text, String from, String to);
}
