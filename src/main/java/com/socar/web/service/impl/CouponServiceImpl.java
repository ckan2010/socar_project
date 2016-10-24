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
import com.socar.web.domains.CouponDTO;
import com.socar.web.domains.Retval;
import com.socar.web.mappers.CarMapper;
import com.socar.web.mappers.CouponMapper;
import com.socar.web.service.BookingService;
import com.socar.web.service.CouponService;

@Service@Lazy
@Transactional
public class CouponServiceImpl implements CouponService{
	private static final Logger logger = LoggerFactory.getLogger(BookingController.class);
	@Autowired private SqlSession sqlSession;
	@Autowired Retval ret;
	@Override
	public Retval regist(CouponDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval update(CouponDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval delete(CouponDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval count() {
		CouponMapper mapper = sqlSession.getMapper(CouponMapper.class);
		Retval retval = mapper.count(ret);
		return retval;
	}
	@Override
	public List<CouponDTO> list(Command command) {
		CouponMapper mapper = sqlSession.getMapper(CouponMapper.class);
		return mapper.list(command);
	}
	@Override
	public List<?> find(Command command) {
		CouponMapper mapper = sqlSession.getMapper(CouponMapper.class);
		return mapper.find(command);
	}
	@Override
	public Retval find_count(Command command) {
		CouponMapper mapper = sqlSession.getMapper(CouponMapper.class);
		Retval retval = mapper.find_count(command);
		return retval;
	}

}
