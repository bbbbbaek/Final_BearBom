package com.spring.bearbom.service.user.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.spring.bearbom.entity.User;
import com.spring.bearbom.repository.UserRepository;
import com.spring.bearbom.service.user.UserService;

@Service
public class UserServiceimpl implements UserService {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public User join(User user) {
		//Member 유효성 검사
		if(user == null || user.getUserId() == null) {
			throw new RuntimeException("Invalid Argument");
		}
		
//		//userid 중복 체크
//		if(userRepository.existsByUserId(user.getUserId())) {
//			throw new RuntimeException("userid already exists");
//		}
		
		return userRepository.save(user);
	}
	
	@Override
	public User login(String userId, String userPw) {
		//return memberRepository.findByUseridAndPassword(userid, password);
		
		User loginUser = userRepository.findByUserId(userId);
		
		if(loginUser != null && passwordEncoder.matches(userPw, loginUser.getUserPw())) {
			return loginUser;
		}
	
	return null;
	}
	
	public String test() {
		return "aaa";
	}

	@Override
	public User idCheck(String userId) {
		User checkIdUser = userRepository.findByUserId(userId);
		if(checkIdUser != null) {
			return checkIdUser;
		} else {
			return null;
		}
	
	}
}




