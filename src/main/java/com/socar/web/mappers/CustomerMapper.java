package com.socar.web.mappers;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.socar.web.domains.AdminDTO;
import com.socar.web.domains.Command;
import com.socar.web.domains.CustomerDTO;
import com.socar.web.domains.Retval;

@Repository
@Lazy
public interface CustomerMapper {
	public Retval count(Retval ret);
	public List<CustomerDTO> list(Command command);
	public Retval find_count(Command command);
	public List<?> find(Command command);
	public CustomerDTO customer_find_by_seq(Command command);
	public int update(CustomerDTO param);
}
