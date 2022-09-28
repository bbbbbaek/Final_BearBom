package com.spring.bearbom.entity;

import javax.persistence.*;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.boot.context.properties.bind.DefaultValue;

import lombok.Data;

import java.util.List;

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

	@Column(nullable = false)
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
	private String role = "ROLE_USER";
	
	@Column
	private String lecturerInfo;
	
	@Transient
	private String loginFailMessage;

	@OneToMany(
			cascade = CascadeType.ALL,
			orphanRemoval = true,
			fetch = FetchType.LAZY)
	private List<Like> like;

}
