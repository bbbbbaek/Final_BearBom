package com.spring.bearbom.service.user;

import java.util.List;
import java.util.Map;

import com.spring.bearbom.dto.UserDTO;
import com.spring.bearbom.entity.User;

public interface UserService {
	User join(User user);
	
	User login(String userId, String userPw);

	User idCheck(String userId);

	int idDuplicate(String userId);
	
	// admin 유저 정보 불러오기 0922
	List<User> getUserList();

	
	// admin 유저 탈퇴 시키기
//	void adminDeleteUser(String userId);
//	void adminDeleteUser(UserDTO userDTO);
	
	// admin 유저 탈퇴 시키기
	void adminDeleteUser(Map<String, Object> paramMap);

	void updateUserPhoto(User user);
	
	// 0926 비밀번호 수정 저장
//	void updateUserInfo(User user);

	
	// 비밀번호 찾기
//	User pwFind(String userId, String userEmail);
//	User findByUserId(String userId);
}