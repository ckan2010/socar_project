package com.socar.web.domains;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Component
@Data
@Lazy
public class CarDTO {
	@Getter @Setter private int rentAmt, driveAmt,seq;
	@Getter @Setter private String carNum, carType, oilType, carOption, socarZone, carImg;
}
