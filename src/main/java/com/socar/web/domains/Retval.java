package com.socar.web.domains;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Component
@Lazy
public class Retval {
	@Getter @Setter private int count;
	@Getter @Setter private String message,flag,carNum;
}
