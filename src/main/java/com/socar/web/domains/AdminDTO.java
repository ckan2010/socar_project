package com.socar.web.domains;

import java.io.Serializable;

import org.springframework.stereotype.Component;

import com.socar.web.domains.AdminDTO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Component
@ToString
@Data
public class AdminDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	@Getter @Setter private String title,content,name,regDate;
	@Getter @Setter private int    seq,customerSeq;
}
