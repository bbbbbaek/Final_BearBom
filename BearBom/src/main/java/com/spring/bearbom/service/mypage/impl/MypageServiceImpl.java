package com.spring.bearbom.service.mypage.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.dto.CourseDTO;
import com.spring.bearbom.mapper.MypageMapper;
import com.spring.bearbom.service.mypage.MypageService;

@Service
public class MypageServiceImpl implements MypageService{

	@Autowired
	MypageMapper mypageMapper;
	
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

}
