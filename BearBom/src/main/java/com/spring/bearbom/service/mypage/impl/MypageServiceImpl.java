package com.spring.bearbom.service.mypage.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.entity.User;
import com.spring.bearbom.repository.UserRepository;

import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.mapper.MypageMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Service
public class MypageServiceImpl implements MypageService {


	@Autowired
	private UserRepository userRepository;
  
  @Autowired
  private MypageMapper mypageMapper;

	
	@Override
	public User getUser(String userId) {
//		User getUser = userrepository.findbyUserId(userId);
		
		return userRepository.findByUserId(userId);
	}


    @Override
    public List<Map<String, Object>> getInquiryReference(String userId) {
        return mypageMapper.getInquiryReference(userId);
    }

//    @Override
//    public List<Map<String, Object>> getInquiryReference(String userId) {
//        return mypageMapper.getInquiryReference(userId);
//    }

}
