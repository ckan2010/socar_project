package com.socar.web.controllers;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.socar.web.domains.CustomerDTO;
import com.socar.web.domains.Retval;

@Controller
@Lazy
@RequestMapping("/customer")
public class CustomerController {
	private static final Logger logger = LoggerFactory.getLogger(CustomerController.class);
	@Autowired Retval retval;
	@Autowired CustomerDTO customer;
	
	@RequestMapping("/notice")
	public @ResponseBody CustomerDTO goNotice(){
		logger.info("GO TO {}", "notice");
		return customer;
	}
	
	@RequestMapping("/inquiry")
	public @ResponseBody Retval goInquiry(){
		logger.info("GO TO {}", "inquiry");
		return retval;
	}
	
	@RequestMapping("/send") //1대1문의 전송
	public @ResponseBody CustomerDTO sendInquiry(){
		logger.info("GO TO {}", "sendInquiry");
		return customer;
	}
	
	@RequestMapping("/faq")
	public @ResponseBody Retval goFaq(){
		logger.info("GO TO {}", "faq");
		return retval;
	}
	
	@RequestMapping("/voc")
	public @ResponseBody Retval goVoc(){
		logger.info("GO TO {}", "voc");
		return retval;
	}
	
	@RequestMapping("/search")
	public @ResponseBody CustomerDTO goSearch(){
		logger.info("GO TO {}", "serach" );
		return customer;
	}
	
	@RequestMapping("/article")
	public @ResponseBody CustomerDTO goArticle(){
		logger.info("CustomerController GO TO {}", "article");
		return customer;
	}
}