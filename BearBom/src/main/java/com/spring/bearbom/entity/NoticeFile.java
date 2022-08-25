package com.spring.bearbom.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Data
@Table(name="T_NOTICE_FILE")
@DynamicInsert
@DynamicUpdate
@IdClass(NoticeFileId.class)
public class NoticeFile {
	@Id
	private int noticeFileIdx;
	
	@Column(nullable = false)
	private String noticeFileOrgNm;
	
	@Column(nullable = false)
	private String noticeFileNewNm;
	
	@Column(nullable = false)
	private String noticeFilePath;
	
	@Id
	@ManyToOne
	@JoinColumn(name="NOTICE_IDX")
	private Notice notice;
}
