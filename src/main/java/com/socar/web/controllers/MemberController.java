package com.socar.web.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.socar.web.domains.MemberDTO;
import com.socar.web.domains.Retval;

@Controller
@Lazy
@RequestMapping("/member")
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired Retval retval;
	@Autowired MemberDTO member;
	
	@RequestMapping("/regist")
	public @ResponseBody Retval goRegist() {
		logger.info("MemberController  GO TO {}", "regist");
		retval.setMessage("success");
		return retval;
	}

	@RequestMapping("/license")
	public @ResponseBody Retval goLicense() {
		logger.info("MemberController  GO TO {}", "license");
		retval.setMessage("success");
		return retval;
	}

	@RequestMapping("/signin")
	public @ResponseBody Retval moveCard(){
		logger.info("MemberController GO TO {}", "signin");
		retval.setMessage("success");
		return retval;
	}
	
	@RequestMapping("/myinfo")
	public @ResponseBody Retval goMyInfo(){
		logger.info("MemberController GO TO {}", "myinfo");
		return retval;
	}
	
	@RequestMapping("/goMain")
	public @ResponseBody Retval goMain(){
		logger.info("MemberController GO TO{}", "goMain");
		return retval;
	}
	
	@RequestMapping("/card")
	public @ResponseBody Retval goCard() {
		logger.info("MemberController  GO TO {}", "card");
		retval.setMessage("success");
		return retval;
	}

	@RequestMapping("/myPage")
	public @ResponseBody Retval goMyPage(){
		logger.info("MemberController GO TO {}","myPage");
		retval.setMessage("success");
		return retval;
	}
	
	@RequestMapping("/myHistory")
	public @ResponseBody Retval goMyHistory(){
		logger.info("MemberController GO TO {}","myHistory");
		return retval;
	}
	
	@RequestMapping("/myCoupon")
	public @ResponseBody Retval goMyCoupon(){
		logger.info("MemberController GO TO {}","myCoupon");
		return retval;
	}
	
	@RequestMapping("/myPay")
	public @ResponseBody Retval goMyPay(){
		logger.info("MemberController GO TO {}","myPay");
		return retval;
	}
}