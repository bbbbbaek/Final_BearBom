package com.spring.bearbom.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;

@Entity
@Table(name="T_COURSE")
@Data
@DynamicInsert
@DynamicUpdate
public class Course {
	@Id
	private int courseIdx;
	
	@Column(nullable = false)
	private String courseNm;
	
	@Column(nullable = false)
	private String courseType;
	
	@Column(nullable = false)
	private String courseOnOff;
	
//	@Column(nullable = false)
//	private String courseOneSeason;

	@Column(nullable = false)
	private char courseUseYn;

	@Column(nullable = false)
	private int courseCnt;
	
	@Column(nullable = false)
	private String courseLevel;
	
	@Column(nullable = false)
	private Time courseStTime;
	
	@Column(nullable = false)
	private Time courseEndTime;

	@Column(nullable = false)
	private String courseRuntime;

	@Column(nullable = false)
	private Date courseStDate;
	
	@Column(nullable = false)
	private Date courseEndDate;
	
	@Column(nullable = false)
	private int courseCost;
	
	@Column(nullable = false, columnDefinition = "int default 0")
	private int courseCurCnt;

	@Column(nullable = false)
	private int courseMin;
	
	@Column(nullable = false)
	private int courseMax;

	@Column(nullable = false,columnDefinition = "char(1)")
	private char courseLimitYn = 'N';

	@Column(nullable = false)
	private String courseContents;

	@Column(nullable = false)
	private String courseThumbnailOrgNm;
	
	@Column(nullable = false)
	private String courseThumbnailNm;
	
	@Column(nullable = false)
	private String courseThumbnailPath;

	@ManyToOne
	@JoinColumn(name="USER_ID")
	private User user;

	@ManyToOne
	@JoinColumn(name="CMMN_CODE_IDX")
	private CmmnCode cmmnCode;


}
