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
	private String userId;
//	private String inquiryReplyContent;
//	private char inquiryReplyYn;
//	private LocalDateTime inquiryReplyDate;

}
