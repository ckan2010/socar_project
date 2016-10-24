package com.socar.web.domains;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Component
@Data
@Lazy
public class BookingDTO {
	@Getter @Setter private int rentAmt, driveAmt;
	@Getter @Setter private String carNum, carType, oilType, carOption, socarZone, carImg;
}
