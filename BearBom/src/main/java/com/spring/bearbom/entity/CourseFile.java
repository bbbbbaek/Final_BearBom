package com.spring.bearbom.entity;

import javax.persistence.*;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Data
@Table(name="T_COURSE_FILE")
@DynamicInsert
@DynamicUpdate
@IdClass(CourseFileId.class)
public class CourseFile {
	@Id
	private int courseFileIdx;
	
	@Column(nullable = false)
	private String courseFileOrgNm;
	
	@Column(nullable = false)
	private String courseFileNewNm;
	
	@Column(nullable = false)
	private String courseFilePath;
	
	@Id
	@ManyToOne
	@JoinColumn(name="COURSE_IDX")
	private Course course;
}
