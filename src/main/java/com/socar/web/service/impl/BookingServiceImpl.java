package com.socar.web.service.impl;


import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.socar.web.controllers.BookingController;
import com.socar.web.domains.BookingDTO;
import com.socar.web.domains.Command;
import com.socar.web.domains.Retval;
import com.socar.web.service.BookingService;

@Service
@Lazy
@Transactional
public class BookingServiceImpl implements BookingService{
	private static final Logger logger = LoggerFactory.getLogger(BookingController.class);
	@Autowired private SqlSession sqlSession;
	@Override
	public Retval regist(BookingDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval update(BookingDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval delete(BookingDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval count() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<BookingDTO> list(Command command) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<?> find(Command command) {
		// TODO Auto-generated method stub
		return null;
	}

}
