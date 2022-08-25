package com.spring.bearbom.dto;

import lombok.Data;

@Data
public class MemberDTO {
	private String id;
	private String username;
	private String password;
	private String role;
	private String token;
}
