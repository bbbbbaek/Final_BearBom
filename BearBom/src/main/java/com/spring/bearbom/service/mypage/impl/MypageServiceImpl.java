package com.spring.bearbom.service.mypage.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.entity.User;
import com.spring.bearbom.repository.UserRepository;
import com.spring.bearbom.service.mypage.MypageService;

@Service
public class MypageServiceImpl implements MypageService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User getUser(String userId) {
//		User getUser = userrepository.findbyUserId(userId);
		
		return userRepository.findByUserId(userId);
	}
}
