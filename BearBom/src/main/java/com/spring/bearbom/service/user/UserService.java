package com.spring.bearbom.service.user;

import com.spring.bearbom.entity.User;

public interface UserService {
	User join(User user);
	
	User login(String userid, String userpw);

	User idCheck(String userId);

	
}











