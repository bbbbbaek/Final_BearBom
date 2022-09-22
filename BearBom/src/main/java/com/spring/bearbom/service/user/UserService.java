package com.spring.bearbom.service.user;

import java.util.List;

import com.spring.bearbom.entity.User;

public interface UserService {
	User join(User user);
	
	User login(String userId, String userPw);

	User idCheck(String userId);

	int idDuplicate(String userId);
	
	// admin 유저 정보 불러오기 0922
	List<User> getUserList();
	
	// 비밀번호 찾기
//	User pwFind(String userId, String userEmail);
//	User findByUserId(String userId);
}