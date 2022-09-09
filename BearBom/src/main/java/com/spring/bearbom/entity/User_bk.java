package com.spring.bearbom.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name="T_USER_BK")
@DynamicInsert
@DynamicUpdate
public class User_bk {

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
	private String userZipcode;
	
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
