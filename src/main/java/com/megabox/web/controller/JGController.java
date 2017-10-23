package com.megabox.web.controller;

import java.util.List;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.megabox.web.command.Command;
import com.megabox.web.complex.PathFactory;

@Controller
public class JGController {
	private static final Logger logger = LoggerFactory.getLogger(JGController.class);
	@Autowired Command cmd;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		model.addAttribute("path",PathFactory.create());
		
		return "index";
	}
	
}
