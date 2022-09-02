package com.spring.bearbom.service.user.impl;

import com.spring.bearbom.mapper.UserMapper;
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

	@Autowired
	private UserMapper userMapper;
	
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


	@Override
	public User idCheck(String userId) {
		User checkIdUser = userRepository.findByUserId(userId);
		System.out.println(checkIdUser);
		if(checkIdUser != null) {
			return checkIdUser;
		} else {
			return null;
		}

	}


	@Override
	public int idDuplicate(String userId) {
		return userMapper.idDuplicate(userId);
	}

	public String test() {
		return "aaa";
	}




}




