package com.spring.bearbom.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class InquiryDTO {

	private int inquiryIdx;
//	private String inquiryEmail;
	private String inquirySort;
	private String inquiryTitle;
	private String inquiryContetnt;
	private char inquiryUseYn;
	private char inquiryYn;
	private LocalDateTime inquiryRegdate;
	private LocalDateTime replyRegdate;
	private char replyYn;
	private String replyTitle;
	private String replyContent;
	private String userId;
	

}
