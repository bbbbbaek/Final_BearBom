package com.spring.bearbom.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.boot.context.properties.bind.DefaultValue;

import lombok.Data;

@Entity
@Data
@Table(name="T_USER")
@DynamicInsert
@DynamicUpdate
public class User {

	@Id
	private String userId;
	
	@Column(nullable = false)
	private String userPw;

	private int userPwFailCnt = 0;
	
	@Column(nullable = false)
	private String userNm;
	
	@Column(nullable = false)
	private String userNickName;
	
	@Column(nullable = false)
	private String userTel;
	
	@Column(nullable = false, columnDefinition = "varchar(1000)")
	private String userAddress;
	
	@Column(columnDefinition = "varchar(1000)")
	private String userAddressDef;
	
	@Column(nullable = false)
	private int userZipcode;
	
	@Column(nullable = false)
	private String userEmail;
	
	@Column(nullable = false ,columnDefinition = "char(1)")
	private char userYn = 'Y';

	
	@Column
	private String userPhotoOrgNm;
	
	@Column
	private String userPhotoNewNm;
	

	@Column
	private String userPhotoPath;
	
	@Column(nullable = false)
	private int userPoint = 0;
	
	@Column(columnDefinition = "varchar(45) default 'ROLE_USER'")
	private String role;
	
	@Column(nullable = true)
	private String lecturerInfo;

	
	
	
}
