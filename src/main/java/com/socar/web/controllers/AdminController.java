package com.socar.web.controllers;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Untainted;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.socar.web.contants.Values;
import com.socar.web.domains.AdminDTO;
import com.socar.web.domains.CarDTO;
import com.socar.web.domains.Command;
import com.socar.web.domains.CustomerDTO;
import com.socar.web.domains.Retval;
import com.socar.web.service.CouponService;
import com.socar.web.service.impl.AdminServiceImpl;
import com.socar.web.service.impl.CarServiceImpl;
import com.socar.web.service.impl.CouponServiceImpl;
import com.socar.web.service.impl.CustomerServiceImpl;
import com.socar.web.util.Pagination;

@Controller // has a 관계 
@Lazy
@SessionAttributes({"admin","context","js","css","img"})
@RequestMapping("/admin")
public class AdminController {
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	@Autowired AdminServiceImpl service;
	@Autowired CustomerServiceImpl cus_service;
	@Autowired Command command;
	@Autowired Retval retval;
	@Autowired CarServiceImpl car_service;
	@Autowired CouponServiceImpl coupon_service;
	@RequestMapping("/notice_list/{pgNum}")
	public @ResponseBody HashMap<String,Object> notice_list(@PathVariable String pgNum) {
		int[] rows = new int[2];
		int[] pages = new int[3];
		HashMap<String,Object> map = new HashMap<String,Object>();
		
		Retval r = service.notice_count();
		int totCount = r.getCount();
		pages = Pagination.getPages(totCount, Integer.parseInt(pgNum));
		rows = Pagination.getRows(totCount, Integer.parseInt(pgNum), Values.PG_SIZE);
		command.setStart(rows[0]);
		command.setEnd(rows[1]);
		map.put("list", service.notice_list(command));
		map.put("pgSize",Values.PG_SIZE);
		map.put("totCount",totCount);
		map.put("totPg",pages[2]);
		map.put("startPg",pages[0]);
		map.put("pgNum",Integer.parseInt(pgNum));
		map.put("lastPg",pages[1]);
		map.put("groupSize", Values.GROUP_SIZE);
		
		return map;
	}
	@Untainted
	@RequestMapping("/notice_search/{keyField}/{keyword}/{pgNum}")
	public @ResponseBody HashMap<String,Object> notice_search(@PathVariable("keyField") String keyField,
			@PathVariable("keyword")String keyword,
			@PathVariable("pgNum")String pgNum
			) {
		int[] rows = new int[2];
		int[] pages = new int[3];
		HashMap<String,Object> map = new HashMap<String,Object>();
		command.setKeyField(keyField);
		command.setKeyword(keyword);
		Retval r = service.find_count(command);
		int totCount = r.getCount();
		pages = Pagination.getPages(totCount, Integer.parseInt(pgNum));
		rows = Pagination.getRows(totCount, Integer.parseInt(pgNum), Values.PG_SIZE);
		command.setStart(rows[0]);
		command.setEnd(rows[1]);
		map.put("list", service.notice_find(command));
		map.put("pgSize",Values.PG_SIZE);
		map.put("totCount",totCount);
		map.put("totPg",pages[2]);
		map.put("startPg",pages[0]);
		map.put("pgNum",Integer.parseInt(pgNum));
		map.put("lastPg",pages[1]);
		map.put("groupSize", Values.GROUP_SIZE);
		return map;
	}
	@RequestMapping("/noticeContent/{keyField}/{keyword}")
	public @ResponseBody  AdminDTO notice_content(@PathVariable("keyField") String keyField,
			@PathVariable("keyword")String keyword) {
		logger.info("NOTICE CONTENT IS KEYFIELD {}",keyField);
		logger.info("NOTICE CONTENT IS KEYWORD {}",keyword);
		command.setKeyField(keyField);
		command.setKeyword(keyword);
		return (AdminDTO) service.notice_find_by_seq(command);
	}
	@RequestMapping(value="/notice_write",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody  Retval notice_write(@RequestBody AdminDTO param) {		
		logger.info("NOTICE WRITE {}","EXEUTE");
		logger.info("NOTICE WRITE TITLE = {}",param.getTitle());
		logger.info("NOTICE WRITE CONTENT = {}",param.getContent());
		String regDate =new SimpleDateFormat("yyyy-MM-dd").format(new Date(System.currentTimeMillis()));
		param.setRegDate(regDate);
		logger.info("NOTICE WRITE REGDATE = {}",param.getRegDate());
		service.regist(param);
		retval.setMessage("success");
		return retval;
	}
	@RequestMapping("/customer_list/{pgNum}")
	public @ResponseBody HashMap<String,Object> customer_list(@PathVariable String pgNum) {
		int[] rows = new int[2];
		int[] pages = new int[3];
		HashMap<String,Object> map = new HashMap<String,Object>();		
		Retval r = cus_service.count();
		int totCount = r.getCount();
		pages = Pagination.getPages(totCount, Integer.parseInt(pgNum));
		rows = Pagination.getRows(totCount, Integer.parseInt(pgNum), Values.PG_SIZE);
		command.setStart(rows[0]);
		command.setEnd(rows[1]);
		map.put("list", cus_service.list(command));
		map.put("pgSize",Values.PG_SIZE);
		map.put("totCount",totCount);
		map.put("totPg",pages[2]);
		map.put("startPg",pages[0]);
		map.put("pgNum",Integer.parseInt(pgNum));
		map.put("lastPg",pages[1]);
		map.put("groupSize", Values.GROUP_SIZE);
		
		return map;
	}
	@Untainted
	@RequestMapping("/customer_search/{keyField}/{keyword}/{pgNum}")
	public @ResponseBody HashMap<String,Object> customer_search(@PathVariable("keyField") String keyField,
			@PathVariable("keyword")String keyword,
			@PathVariable("pgNum")String pgNum
			) {
		int[] rows = new int[2];
		int[] pages = new int[3];
		HashMap<String,Object> map = new HashMap<String,Object>();
		command.setKeyField(keyField);
		command.setKeyword(keyword);
        Retval r = cus_service.find_count(command);
        int totCount = r.getCount();        
		pages = Pagination.getPages(totCount, Integer.parseInt(pgNum));
		rows = Pagination.getRows(totCount, Integer.parseInt(pgNum), Values.PG_SIZE);
		command.setStart(rows[0]);
		command.setEnd(rows[1]);
		map.put("list", cus_service.find(command));
		map.put("pgSize",Values.PG_SIZE);
		map.put("totCount",totCount);
		map.put("totPg",pages[2]);
		map.put("startPg",pages[0]);
		map.put("pgNum",Integer.parseInt(pgNum));
		map.put("lastPg",pages[1]);
		map.put("groupSize", Values.GROUP_SIZE);
		return map;
	}
	@RequestMapping("/customerAnswer/{keyField}/{keyword}")
	public @ResponseBody  CustomerDTO customer_answer(@PathVariable("keyField") String keyField,
			@PathVariable("keyword")String keyword) {
		command.setKeyField(keyField);
		command.setKeyword(keyword);
		return (CustomerDTO) cus_service.customer_find_by_seq(command);
	}
	@RequestMapping(value="/customer_answer",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody  Retval customer_answer(@RequestBody CustomerDTO param) {		
		logger.info("CUSTOMER ANSWER {}","EXEUTE");
		logger.info("CUSTOMER ANSWER CUSTOMERSEQ = {}",param.getCustomerSeq());
		logger.info("CUSTOMER ANSWER ANSWER = {}",param.getAnswer());
		cus_service.update(param);
		retval.setMessage("success");
		return retval;
	}
	@RequestMapping("/car_list/{pgNum}")
	public @ResponseBody HashMap<String,Object> car_list(@PathVariable String pgNum) {
		int[] rows = new int[2];
		int[] pages = new int[3];
		HashMap<String,Object> map = new HashMap<String,Object>();		
		Retval r = car_service.count();
		int totCount = r.getCount();
		pages = Pagination.getPages(totCount, Integer.parseInt(pgNum));
		rows = Pagination.getRows(totCount, Integer.parseInt(pgNum), Values.PG_SIZE);
		command.setStart(rows[0]);
		command.setEnd(rows[1]);
		map.put("list", car_service.list(command));
		map.put("pgSize",Values.PG_SIZE);
		map.put("totCount",totCount);
		map.put("totPg",pages[2]);
		map.put("startPg",pages[0]);
		map.put("pgNum",Integer.parseInt(pgNum));
		map.put("lastPg",pages[1]);
		map.put("groupSize", Values.GROUP_SIZE);		
		return map;
	}
	@Untainted
	@RequestMapping("/car_search/{keyField}/{keyword}/{pgNum}")
	public @ResponseBody HashMap<String,Object> car_search(@PathVariable("keyField") String keyField,
			@PathVariable("keyword")String keyword,
			@PathVariable("pgNum")String pgNum
			) {
		int[] rows = new int[2];
		int[] pages = new int[3];
		HashMap<String,Object> map = new HashMap<String,Object>();
		command.setKeyField(keyField);
		command.setKeyword(keyword);
        Retval r = car_service.find_count(command);
        int totCount = r.getCount();	
		pages = Pagination.getPages(totCount, Integer.parseInt(pgNum));
		rows = Pagination.getRows(totCount, Integer.parseInt(pgNum), Values.PG_SIZE);
		command.setStart(rows[0]);
		command.setEnd(rows[1]);
		map.put("list", car_service.find(command));
		map.put("pgSize",Values.PG_SIZE);
		map.put("totCount",totCount);
		map.put("totPg",pages[2]);
		map.put("startPg",pages[0]);
		map.put("pgNum",Integer.parseInt(pgNum));
		map.put("lastPg",pages[1]);
		map.put("groupSize", Values.GROUP_SIZE);
		return map;
	}
	@RequestMapping("/carUpdate/{keyField}/{keyword}")
	public @ResponseBody  CarDTO car_update(@PathVariable("keyField") String keyField,
			@PathVariable("keyword")String keyword) {
		command.setKeyField(keyField);
		command.setKeyword(keyword);
		return (CarDTO) car_service.car_find_by_num(command);
	}
	@RequestMapping("/coupon_list/{pgNum}")
	public @ResponseBody HashMap<String,Object> coupon_list(@PathVariable String pgNum) {
		logger.info("COUPON LIST IS START ");
		logger.info("COUPON LIST PGNUM IS {}",pgNum);
		int[] rows = new int[2];
		int[] pages = new int[3];
		HashMap<String,Object> map = new HashMap<String,Object>();		
		Retval r = coupon_service.count();
		int totCount = r.getCount();
		pages = Pagination.getPages(totCount, Integer.parseInt(pgNum));
		rows = Pagination.getRows(totCount, Integer.parseInt(pgNum), Values.PG_SIZE);
		command.setStart(rows[0]);
		command.setEnd(rows[1]);
		logger.info("pgSize IS {}",Values.PG_SIZE);
		logger.info("totCount IS {}",totCount);
		logger.info("totPg IS {}",pages[2]);
		logger.info("startPg IS {}",pages[0]);
		logger.info("pgNum IS {}",Integer.parseInt(pgNum));
		logger.info("lastPg IS {}",pages[1]);
		logger.info("groupSize IS {}",Values.GROUP_SIZE);
		map.put("list", coupon_service.list(command));
		map.put("pgSize",Values.PG_SIZE);
		map.put("totCount",totCount);
		map.put("totPg",pages[2]);
		map.put("startPg",pages[0]);
		map.put("pgNum",Integer.parseInt(pgNum));
		map.put("lastPg",pages[1]);
		map.put("groupSize", Values.GROUP_SIZE);		
		return map;
	}
	@Untainted
	@RequestMapping("/coupon_search/{keyField}/{keyword}/{pgNum}")
	public @ResponseBody HashMap<String,Object> coupon_search(@PathVariable("keyField") String keyField,
			@PathVariable("keyword")String keyword,
			@PathVariable("pgNum")String pgNum
			) {
		int[] rows = new int[2];
		int[] pages = new int[3];
		HashMap<String,Object> map = new HashMap<String,Object>();
		command.setKeyField(keyField);
		command.setKeyword(keyword);
        Retval r = coupon_service.find_count(command);
        int totCount = r.getCount();	
		pages = Pagination.getPages(totCount, Integer.parseInt(pgNum));
		rows = Pagination.getRows(totCount, Integer.parseInt(pgNum), Values.PG_SIZE);
		command.setStart(rows[0]);
		command.setEnd(rows[1]);
		map.put("list", coupon_service.find(command));
		map.put("pgSize",Values.PG_SIZE);
		map.put("totCount",totCount);
		map.put("totPg",pages[2]);
		map.put("startPg",pages[0]);
		map.put("pgNum",Integer.parseInt(pgNum));
		map.put("lastPg",pages[1]);
		map.put("groupSize", Values.GROUP_SIZE);
		return map;
	}
	
}
