package com.spring.bearbom.service.admin.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.dto.InquiryDTO;
import com.spring.bearbom.mapper.InquiryMapper;
import com.spring.bearbom.repository.InquiryRepository;
import com.spring.bearbom.service.admin.AdminService;

@Service
public class AdminServiceImpl implements AdminService{
	@Autowired
	private InquiryRepository inquiryRepository;

	@Autowired
	private InquiryMapper inquiryMapper;

	@Override
	public List<InquiryDTO> inquiryInfoReference(InquiryDTO inquiryDTO) {
		// TODO Auto-generated method stub
		List<InquiryDTO> inquiryInfoReferenceList = inquiryMapper.inquiryInfoReference(inquiryDTO);
		return inquiryInfoReferenceList;
	}
	
//	@Override
//	public List<Inquiry> inquiryInfoReference(Inquiry inquiry) {
//		// TODO Auto-generated method stub
////		List<Inquiry> inquiryInfoReferenceList = inquiryRepository.findAll();
////		return inquiryInfoReferenceList;
//		List<Inquiry> inquiryInfoReferenceList = inquiryMapper.inquiryInfoReference(inquiry);
//		return inquiryInfoReferenceList;
//	}

}
