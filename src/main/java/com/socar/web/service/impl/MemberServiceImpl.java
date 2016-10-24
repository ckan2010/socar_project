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
import com.socar.web.domains.Command;
import com.socar.web.domains.MemberDTO;
import com.socar.web.domains.Retval;
import com.socar.web.service.BookingService;
import com.socar.web.service.MemberService;

@Service@Lazy
@Transactional
public class MemberServiceImpl implements MemberService{
	private static final Logger logger = LoggerFactory.getLogger(BookingController.class);
	@Autowired private SqlSession sqlSession;
	@Override
	public Retval regist(MemberDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval update(MemberDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval delete(MemberDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval count() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<MemberDTO> list(Command command) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<?> find(Command command) {
		// TODO Auto-generated method stub
		return null;
	}

}
