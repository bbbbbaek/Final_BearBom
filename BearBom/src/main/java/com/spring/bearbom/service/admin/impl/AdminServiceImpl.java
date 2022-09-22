package com.spring.bearbom.service.admin.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.mapper.AdminInquiryMapper;
import com.spring.bearbom.repository.InquiryRepository;
import com.spring.bearbom.service.admin.AdminService;

@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminInquiryMapper adminInquiryMapper;

	@Override
	public List<InquiryDTO> inquiryInfoReference() {
		// TODO Auto-generated method stub
		return adminInquiryMapper.adminInquiryMapper();
	}

	@Override
	public void updateInquiry(InquiryDTO inquiryDTO) {
		// TODO Auto-generated method stub
		adminInquiryMapper.updateInquiry(inquiryDTO);
	}

	
	


}
