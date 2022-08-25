package com.spring.bearbom.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name="T_COURSEQ")
@IdClass(CourseqId.class)
@DynamicInsert
@DynamicUpdate
public class Courseq {
	@Id
	private int courseqIdx;
	
	@Column(nullable = false)
	private String courseqNm;
	
	@Column(nullable = false)
	private LocalDateTime courseqRegdate = LocalDateTime.now();

	@Column(nullable = false)
	private LocalDateTime courseqMdfdate = LocalDateTime.now();

	@Column(nullable = false, columnDefinition = "varchar(2000)")
	private String courseqContent;
	
	@Column(nullable = false,columnDefinition = "char(1)")
	private char courseqYn ='N';


	@Column(nullable = false,columnDefinition = "char(1)")
	private char courseqUseYn ='N';

	@ManyToOne
	@JoinColumn(name="USER_ID")
	private User user;

	@Id
	@ManyToOne
	@JoinColumn(name="COURSE_IDX")
	private Course course;
}
