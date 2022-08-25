package com.spring.bearbom.dto;

import lombok.Data;

import java.time.LocalDateTime;


@Data
public class ItemqDto {

	private int itemqNo;
	private String itemqNm;
	private LocalDateTime itemqRegdate;
	private String itemqContent;
	private char itemqYn;
	private int itemNo;
	private String userId;
}
