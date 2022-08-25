package com.spring.bearbom.entity;

import javax.persistence.*;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name="T_ORDER")
@DynamicInsert
@DynamicUpdate
public class Order {
	@Id
	private int orderIdx;

	@Column(nullable = false)
	private int orderPri;

	@Column(nullable = false)
	private LocalDateTime orderRegdate = LocalDateTime.now();

	@Column(nullable = false)
	private LocalDateTime orderCandate = LocalDateTime.now();

	@Column(nullable = false,columnDefinition = "char(1)")
	private char orderYn = 'N';

	@Column(nullable = false,columnDefinition = "char(1)")
	private char orderUseYn = 'N';

	@ManyToOne
	@JoinColumn(name="USER_ID")
	private User user;

	@ManyToOne
	@JoinColumn(name="COURSE_IDX")
	private Course course;

}
