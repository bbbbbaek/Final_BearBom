package com.spring.bearbom.dto;

import lombok.Data;

@Data
public class UserDTO {
	private String userId;
	private String userEmail;
	private String userNm;
	private String userNickname;
	private String userPw;
	private String userRePw;
	private String userAddress;
	private String userAddressDef;
	private String userTel;
	private String role;
	private String useryn;
	private String token;
}