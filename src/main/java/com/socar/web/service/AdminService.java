package com.socar.web.service;

import java.util.List;

import com.socar.web.domains.Command;
import com.socar.web.domains.AdminDTO;
import com.socar.web.domains.Retval;

public interface AdminService {
	public Retval notice_count();
	public List<AdminDTO> notice_list(Command command);
	public List<?> notice_find(Command command);
}
