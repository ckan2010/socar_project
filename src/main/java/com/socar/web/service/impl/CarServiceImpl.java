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
import com.socar.web.domains.CarDTO;
import com.socar.web.domains.Command;
import com.socar.web.domains.MemberDTO;
import com.socar.web.domains.Retval;
import com.socar.web.mappers.CarMapper;
import com.socar.web.mappers.CustomerMapper;
import com.socar.web.service.BookingService;
import com.socar.web.service.CarService;
import com.socar.web.service.MemberService;

@Service@Lazy
@Transactional
public class CarServiceImpl implements CarService{
	private static final Logger logger = LoggerFactory.getLogger(BookingController.class);
	@Autowired private SqlSession sqlSession;
	@Autowired Retval ret;
	@Override
	public Retval regist(CarDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval update(CarDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval delete(CarDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval count() {
		CarMapper mapper = sqlSession.getMapper(CarMapper.class);
		Retval retval = mapper.count(ret);
		return retval;
	}
	@Override
	public List<CarDTO> list(Command command) {
		CarMapper mapper = sqlSession.getMapper(CarMapper.class);
		return mapper.list(command);
	}
	@Override
	public List<?> find(Command command) {
		CarMapper mapper = sqlSession.getMapper(CarMapper.class);
		return mapper.find(command);
	}
	@Override
	public Retval find_count(Command command) {
		CarMapper mapper = sqlSession.getMapper(CarMapper.class);
		Retval retval = mapper.find_count(command);
		return retval;
	}
	@Override
	public CarDTO car_find_by_num(Command command) {
		CarMapper mapper = sqlSession.getMapper(CarMapper.class);
		return mapper.car_find_by_num(command);
	}

}
