package com.socar.web.service.impl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.socar.web.controllers.AdminController;
import com.socar.web.domains.AdminDTO;
import com.socar.web.domains.Retval;
import com.socar.web.mappers.AdminMapper;
import com.socar.web.service.AdminService;
import com.socar.web.domains.Command;

@Service
public class AdminServiceImpl implements AdminService{
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	@Autowired private SqlSession sqlSession;
	@Autowired Retval ret;
	@Override
	public Retval notice_count() {
		AdminMapper mapper = sqlSession.getMapper(AdminMapper.class);
		Retval retval = mapper.notice_count(ret);
		return retval;
	}
	@Override
	public List<AdminDTO> notice_list(Command command) {
		AdminMapper mapper = sqlSession.getMapper(AdminMapper.class);
		return mapper.notice_list(command);
	}
	@Override
	public List<?> notice_find(Command command) {
		AdminMapper mapper = sqlSession.getMapper(AdminMapper.class);
		return mapper.notice_find(command);
	}
}
