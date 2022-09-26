package com.spring.bearbom.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;

@Entity
@Data
@Table(name="T_ORDER")
@DynamicInsert
@DynamicUpdate
public class Order {
	@Id
	private int orderIdx;

	@Column//(nullable = false)
	private int orderPri;

	@Column(nullable = false)
	private LocalDateTime orderRegdate = LocalDateTime.now().plusHours(9);

	@Column//(nullable = false)
	private LocalDateTime orderCandate; // = LocalDateTime.now();

	@Column(nullable = false,columnDefinition = "char(1)")
	private char orderYn = 'N';

	@Column(nullable = false,columnDefinition = "char(1)")
	private char orderUseYn = 'Y';
	
	@Column
	private String orderNm;
	
	@Column
	private String paymentMethod;
	
	@Column
	private LocalDateTime paymentDate;
	
	@Column
	private String PgNm;

	@ManyToOne
	@JoinColumn(name="USER_ID")
	private User user;

	@ManyToOne
	@JoinColumn(name="COURSE_IDX")
	private Course course;

}
