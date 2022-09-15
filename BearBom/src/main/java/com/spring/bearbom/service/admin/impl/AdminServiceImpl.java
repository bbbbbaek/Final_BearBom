package com.spring.bearbom.service.admin.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.entity.Guide;
import com.spring.bearbom.entity.Inquiry;
import com.spring.bearbom.repository.InquiryRepository;
import com.spring.bearbom.service.admin.AdminService;

@Service
public class AdminServiceImpl implements AdminService{
	@Autowired
	private InquiryRepository inquiryRepository;

	@Override
	public List<Inquiry> inquiryInfoReference(Inquiry inquiry) {
		// TODO Auto-generated method stub
		List<Inquiry> inquiryInfoReferenceList = inquiryRepository.findAll();
		return inquiryInfoReferenceList;
	}

}
