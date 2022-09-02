package com.spring.bearbom.service.user;

import com.spring.bearbom.entity.User;
import com.spring.bearbom.repository.UserRepository;
import org.springframework.transaction.annotation.Transactional;

public interface UserService {
	User join(User user);
	
	User login(String userid, String userpw);

	User idCheck(String userId);

	int idDuplicate(String userId);
}











