package com.spring.bearbom.service.mypage2.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.mapper.Mypage2Mapper;
import com.spring.bearbom.service.mypage2.Mypage2Service;

@Service
public class Mypage2ServiceImpl implements Mypage2Service{

	@Autowired
	private Mypage2Mapper mypage2Mapper;
	
	
	@Override
	public List<Map<String, Object>> getInquiryReference(InquiryDTO inquiryDTO) {
		// TODO Auto-generated method stub
		return mypage2Mapper.getInquiryReference(inquiryDTO);
	}


	@Override
	public void updateInquiryReference(InquiryDTO inquiryDTO) {
		// TODO Auto-generated method stub
		mypage2Mapper.updateInquiryReference(inquiryDTO);
	}


//	@Override
//	public List<Map<String, Object>> updateInquiryReference(InquiryDTO inquiryDTO) {
//		// TODO Auto-generated method stub
//		return mypage2Mapper.updateInquiryReference(inquiryDTO);
//	}






}
