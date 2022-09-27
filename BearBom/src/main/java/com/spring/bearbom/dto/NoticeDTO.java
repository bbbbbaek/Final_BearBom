package com.spring.bearbom.dto;

import java.sql.Date;
import java.time.LocalDateTime;

import com.spring.bearbom.entity.User;

import lombok.Data;

@Data
public class NoticeDTO {
	private int noticeIdx;
	private String noticeTitle;
	private String noticeContent;
	private String noticeRegdate;
	private String noticeMdfdate;
	private char noticeUseYn;
	private String userId;

}
