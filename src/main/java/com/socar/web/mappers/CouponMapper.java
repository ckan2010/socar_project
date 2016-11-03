package com.socar.web.mappers;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.socar.web.domains.CarDTO;
import com.socar.web.domains.Command;
import com.socar.web.domains.CouponDTO;
import com.socar.web.domains.Retval;

@Repository
@Lazy
public interface CouponMapper {
	public Retval count(Retval ret);
	public List<CouponDTO> list(Command command);
	public Retval find_count(Command command);
	public List<?> find(Command command);
	public CouponDTO coupon_find_by_seq(Command command);
	public int update(CouponDTO param);
	public int regist(CouponDTO param);
}
