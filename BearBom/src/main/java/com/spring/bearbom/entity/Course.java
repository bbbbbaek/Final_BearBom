package com.spring.bearbom.entity;

import java.sql.Time;
import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;

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
	private String courseOnOff;

	@Column(nullable = false)
	private char courseUseYn = 'D';

	@Column(nullable = false)
	private int courseCnt = 0;
	
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
	private LocalDateTime courseRegdate = LocalDateTime.now().plusHours(9);
	
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

	@Column(nullable= false)
	private String courseLocation;
	
	@Column(nullable= false)
	private String courseCategory;

	@Column(nullable = false)
	private String courseLevelContent;
	
	@Column(nullable = false)
	private String courseZipcode;
	
	@Column(nullable = false)
	private String courseAddress;
	
	@Column(nullable = false)
	private String courseAddressDef;
	
	@Column
	private String courseAddressEx;

}
