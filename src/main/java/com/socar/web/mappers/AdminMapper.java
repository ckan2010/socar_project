package com.socar.web.mappers;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.socar.web.domains.AdminDTO;
import com.socar.web.domains.Command;
import com.socar.web.domains.Retval;

@Repository
public interface AdminMapper {
	public Retval notice_count(Retval ret);
	public List<AdminDTO> notice_list(Command command);
	public List<?> notice_find(Command command);
}
