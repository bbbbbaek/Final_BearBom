package com.spring.bearbom.dto;

import lombok.Data;

@Data
public class UserDTO {
	private String userId;
	private String userPw;
	private int userPwFailCnt;
	private String userNm;
	private String userNickname;
	private String userTel;
	private String userAddress;
	private String userAddressDef;

	private int userZipcode;
	private String userEmail;
	private char userYn;

	private String userPhotoOrgNm;
	private String userPhotoNewNm;
	private String userPhotoPath;
	private int userPoint;
	private String role;
	private String lecturerInfo;
	private String token;
	

	
	
}