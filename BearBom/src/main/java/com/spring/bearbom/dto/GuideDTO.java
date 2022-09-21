package com.spring.bearbom.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class GuideDTO {

	private int guideIdx;
	private String guideTitle;
	private String guideContent;
	private LocalDateTime guideRegdate;
	private LocalDateTime guideMdfdate;
	private char guideUseYn;
	private String userId;
}
