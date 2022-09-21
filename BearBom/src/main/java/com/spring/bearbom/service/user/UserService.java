package com.spring.bearbom.service.user;

import com.spring.bearbom.entity.User;
import com.spring.bearbom.repository.UserRepository;
import org.springframework.transaction.annotation.Transactional;

public interface UserService {
	User join(User user);
	
	User login(String userId, String userPw);

	User idCheck(String userId);

	int idDuplicate(String userId);
	
	// 비밀번호 찾기
//	User pwFind(String userId, String userEmail);
	
//	User findByUserId(String userId);
}