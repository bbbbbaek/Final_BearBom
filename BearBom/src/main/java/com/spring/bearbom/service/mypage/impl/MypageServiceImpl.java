package com.spring.bearbom.service.mypage.impl;

import java.util.List;
import java.util.Map;

import com.spring.bearbom.service.mypage.MypageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.entity.User;
import com.spring.bearbom.repository.UserRepository;

import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.mapper.MypageMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.dto.CourseDTO;
import com.spring.bearbom.mapper.MypageMapper;
import com.spring.bearbom.service.mypage.MypageService;

@Service
public class MypageServiceImpl implements MypageService{

	@Autowired
	MypageMapper mypageMapper;
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public List<CourseDTO> getWishList(CourseDTO courseDTO) {
		// TODO Auto-generated method stub
		return mypageMapper.getWishList(courseDTO);
	}
	
	@Override
	public List<CourseDTO> getWishCnt(CourseDTO courseDTO) {
		// TODO Auto-generated method stub
		return mypageMapper.getWishCnt(courseDTO);
	}
	
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
