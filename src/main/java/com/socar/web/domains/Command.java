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
public class Command implements Serializable{
	private static final long serialVersionUID = 1L;
	@Getter @Setter private String keyword,keyField;
	@Getter @Setter private int start,end;
}
