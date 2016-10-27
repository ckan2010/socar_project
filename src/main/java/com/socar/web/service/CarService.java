package com.socar.web.service;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.socar.web.domains.CarDTO;
import com.socar.web.domains.Command;
import com.socar.web.domains.CustomerDTO;
import com.socar.web.domains.MemberDTO;
import com.socar.web.domains.Retval;

@Component
@Lazy
public interface CarService {
	// CREATE, UPDATE, DELETE
	public Retval regist(CarDTO param);
	public Retval update(CarDTO param);
	public Retval delete(CarDTO param);
	// SELECT
	public Retval count();
	public List<CarDTO> list(Command command);
	public Retval find_count(Command command);
	public List<?> find(Command command);
	public CarDTO car_find_by_num(Command command);
	public int existId(String carNum);
}
