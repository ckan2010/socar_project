package com.socar.web.domains;

import java.io.Serializable;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Component
@Data
@Lazy
public class CouponDTO implements Serializable{

    private static final long serialVersionUID = 1L;
    @Getter @Setter private String optionHeader,optionDetail,imgName,dcOption,couponName,openDateStart,openDateEnd,epDate;
    @Getter @Setter private int couponMasterSeq,couponCount,couponSeq,couponMember,dc;
}
