package com.spring.bearbom.service.mypage.impl;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.entity.User;
import com.spring.bearbom.mapper.MypageMapper;
import com.spring.bearbom.mapper.UserMapper;
import com.spring.bearbom.repository.UserRepository;
import com.spring.bearbom.service.mypage.MypageService;


@Service
public class MypageServiceImpl implements MypageService {
	
	@Autowired
	private UserMapper userMapper;


	@Autowired
	private UserRepository userRepository;
  
  @Autowired
  private MypageMapper mypageMapper;

	
	@Override
	public User getUser(String userId) {
//		User getUser = userrepository.findbyUserId(userId);
		
		return userRepository.findByUserId(userId);
	}

	//===========================================================//
	// 유저 정보 수정
	@Override
	public void updateUser(User user) {
		// TODO Auto-generated method stub
		userMapper.updateUser(user);
	}
	
	// 유저 정보 수정
	// @Override
//		public void updateUser(User user) {
//		 return updateUser;
//		userRepository.save(user);
//	}
	
	// 유저 탈퇴
//	@Override
//	public void deleteUser(User user) {
//		userMapper.deleteUser(user);
//	}
	
	// 유저 탈퇴 0922
	@Override
    public String deleteUserInfo(String userId) {
		try {
			mypageMapper.deleteUserInfo(userId);
			
			return "sussecc";
		} catch(Exception e) {
			return "fail : " + e.getMessage();
		}
    }
	//===========================================================//


    @Override
    public List<Map<String, Object>> getInquiryReference(String userId) {
        return mypageMapper.getInquiryReference(userId);
    }

//    @Override
//    public List<Map<String, Object>> getInquiryReference(String userId) {
//        return mypageMapper.getInquiryReference(userId);
//    }

}

