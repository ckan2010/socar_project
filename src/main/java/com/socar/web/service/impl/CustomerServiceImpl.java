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
import com.socar.web.domains.CustomerDTO;
import com.socar.web.domains.Retval;
import com.socar.web.mappers.AdminMapper;
import com.socar.web.mappers.CustomerMapper;
import com.socar.web.service.BookingService;
import com.socar.web.service.CustomerService;

@Service@Lazy
@Transactional
public class CustomerServiceImpl implements CustomerService{
	private static final Logger logger = LoggerFactory.getLogger(BookingController.class);
	@Autowired private SqlSession sqlSession;
	@Autowired Retval ret;
	@Override
	public Retval regist(CustomerDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval update(CustomerDTO param) {
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		int result = mapper.update(param);
		if(result==0){
			ret.setMessage("fail");
		}else{
			ret.setMessage("success");
		}
		return ret;
	}
	@Override
	public Retval delete(CustomerDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval count() {
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		Retval retval = mapper.count(ret);
		return retval;
	}
	@Override
	public List<CustomerDTO> list(Command command) {
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		return mapper.list(command);
	}
	@Override
	public List<?> find(Command command) {
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		return mapper.find(command);
	}
	@Override
	public Retval find_count(Command command) {
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		Retval retval = mapper.find_count(command);
		return retval;
	}
	@Override
	public CustomerDTO customer_find_by_seq(Command command) {
		CustomerMapper mapper = sqlSession.getMapper(CustomerMapper.class);
		return mapper.customer_find_by_seq(command);
	}

}
