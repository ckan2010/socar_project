package com.socar.web.mappers;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.socar.web.domains.Command;
import com.socar.web.domains.MemberDTO;
import com.socar.web.domains.Retval;

@Repository
@Lazy
public interface MemberMapper {
	public Retval count();
	public List<MemberDTO> list(Command command);
	public List<?> find(Command command);
}
