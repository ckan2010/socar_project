package com.socar.web.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Untainted;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.socar.web.contants.Values;
import com.socar.web.domains.Retval;
import com.socar.web.domains.AdminDTO;
import com.socar.web.domains.Command;
import com.socar.web.util.Pagination;
import com.socar.web.service.impl.AdminServiceImpl;

@Controller // has a 관계 
@SessionAttributes({"admin","context","js","css","img"})
@RequestMapping("/admin")
public class AdminController {
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	@Autowired AdminServiceImpl service;
	@Autowired Command command;
	@Autowired Retval retval;
	@RequestMapping("/notice_list/{pgNum}")
	public @ResponseBody HashMap<String,Object> notice_list(@PathVariable String pgNum) {
		int[] rows = new int[2];
		int[] pages = new int[3];
		HashMap<String,Object> map = new HashMap<String,Object>();
		Retval r = service.notice_count();
		int totCount = r.getCount();
		pages = Pagination.getPages(totCount, Integer.parseInt(pgNum));
		rows = Pagination.getRows(totCount, Integer.parseInt(pgNum), Values.PG_SIZE);
		logger.info("start IS {}",rows[0]);
		logger.info("end IS {}",rows[1]);
		command.setStart(rows[0]);
		command.setEnd(rows[1]);
		logger.info("pgSize IS {}",Values.PG_SIZE);
		logger.info("totCount IS {}",totCount);
		logger.info("totPg IS {}",pages[2]);
		logger.info("startPg IS {}",pages[0]);
		logger.info("pgNum IS {}",Integer.parseInt(pgNum));
		logger.info("lastPg IS {}",pages[1]);
		logger.info("groupSize IS {}",Values.GROUP_SIZE);
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
	@RequestMapping("/notice_search/{keyField}/{keyword}")
	public @ResponseBody HashMap<String,Object> notice_search(@PathVariable("keyField") String keyField,
			@PathVariable("keyword")String keyword) {
		logger.info("SEARCH keyField {}",keyField);		
		logger.info("SEARCH keyword {}",keyword);	
		int[] rows = new int[2];
		int[] pages = new int[3];
		HashMap<String,Object> map = new HashMap<String,Object>();
		List<AdminDTO> list = new ArrayList<AdminDTO>();
		command.setKeyField(keyField);
		command.setKeyword(keyword);
		list = (List<AdminDTO>) service.notice_find(command);
		int totCount = list.size();
		pages = Pagination.getPages(totCount, 1);
		rows = Pagination.getRows(totCount, 1, Values.PG_SIZE);
		command.setStart(rows[0]);
		command.setEnd(rows[1]);
		map.put("list", list);
		map.put("pgSize",Values.PG_SIZE);
		map.put("totCount",totCount);
		map.put("totPg",pages[2]);
		map.put("startPg",pages[0]);
		map.put("pgNum",1);
		map.put("lastPg",pages[1]);
		map.put("groupSize", Values.GROUP_SIZE);
		return map;
	}
	@RequestMapping("/main")
	public String goMain(){
		logger.info("AdminController ! goMain()");
		return "admin:admin/notice.tiles";
	}
	
	@RequestMapping("/logined/header")
	public String loginedHeader(){
		return "admin/header.jsp";
	}	
}
