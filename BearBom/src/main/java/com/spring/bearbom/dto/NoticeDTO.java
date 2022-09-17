package com.spring.bearbom.dto;

import java.sql.Date;
import java.time.LocalDateTime;

import com.spring.bearbom.entity.User;

import lombok.Data;

@Data
public class NoticeDTO {
	private int noticeIdx;
	private String noticeNm;
	private String noticeContent;
	private LocalDateTime noticeRegdate;
	private LocalDateTime noticeMdfdate;
	private char noticeUseYn;
	private User user;

}
