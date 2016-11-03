package com.socar.web.mappers;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.socar.web.domains.AdminDTO;
import com.socar.web.domains.CarDTO;
import com.socar.web.domains.Command;
import com.socar.web.domains.CustomerDTO;
import com.socar.web.domains.Retval;

@Repository
@Lazy
public interface CarMapper {
	public Retval count(Retval ret);
	public List<CarDTO> list(Command command);
	public Retval find_count(Command command);
	public List<?> find(Command command);
	public CarDTO car_find_by_num(Command command);
	public int update(CarDTO param);
	public int existId(String carNum);
	public int regist(CarDTO param);
}
