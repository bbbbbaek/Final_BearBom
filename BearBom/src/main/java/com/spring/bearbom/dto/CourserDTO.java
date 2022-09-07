package com.spring.bearbom.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class CourserDTO {
	private int courseIdx;
	private int courserIdx;
	private String courserContent;
	private String courserRate;
	private LocalDateTime courserMdfdate;
	private LocalDateTime courserRegdate;
	private char courserUseYn;
	private String userId;
}
