package com.megabox.web.complex;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class MailServiceImpl implements MailService {
	private JavaMailSender javaMailsender;

	@Autowired
	public MailServiceImpl(JavaMailSender javaMailSender) {
		this.javaMailsender = javaMailSender;
	}
	@Override
	public void send(String subject, String text, String from, String to) {
		MimeMessage message = javaMailsender.createMimeMessage();
		
		try {
			MimeMessageHelper helper = new MimeMessageHelper(message,true,"UTF-8");
			helper.setSubject(subject);
			helper.setText(text);
			helper.setFrom(from);
			helper.setTo(to);
			javaMailsender.send(message);
		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}
	

}
