package com.spring.bearbom.service.mypage.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.entity.User;
import com.spring.bearbom.mapper.UserMapper;
import com.spring.bearbom.repository.UserRepository;
import com.spring.bearbom.service.mypage.MypageService;

@Service
public class MypageServiceImpl implements MypageService {
	
	@Autowired
	private UserMapper userMapper;

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User getUser(String userId) {
//		User getUser = userrepository.findbyUserId(userId);
		
		return userRepository.findByUserId(userId);
	}

	@Override
	public void updateUser(User user) {
		// TODO Auto-generated method stub
		userMapper.updateUser(user);
	}
	
	// 유저 정보 수정
	// mapper로 바꿀 것
//	 @Override
//	public void updateUser(User user) {
//		 return updateUser;
////		userRepository.save(user);
//	}
}