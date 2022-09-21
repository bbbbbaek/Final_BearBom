package com.spring.bearbom.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class CourseDTO {
	private int courseIdx;
	private String courseNm;
	private String courseContents;
	private String courseLevel;
	private String courseLevelContent;
	private int courseMax;
	private int courseMin;
	private String courseOnOff;
	private String courseRuntime;
	private String courseZipcode;
	private String courseAddress;
	private String courseAddressDef;
	private String courseAddressEx;
	
	//썸네일 3종
	private String courseThumbnailNm;
	private String courseThumbnailOrgNm;
	private String courseThumbnailPath;
	
	private String userId;
	
	
	
	
	
	
}
