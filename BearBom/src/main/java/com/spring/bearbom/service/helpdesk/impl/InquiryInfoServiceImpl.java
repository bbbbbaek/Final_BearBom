package com.spring.bearbom.service.helpdesk.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.entity.Inquiry;
import com.spring.bearbom.repository.InquiryRepository;
import com.spring.bearbom.service.helpdesk.InquiryInfoService;

@Service
public class InquiryInfoServiceImpl implements InquiryInfoService{

	@Autowired
	private InquiryRepository inquiryRepository;
	
	
	@Override
	public Inquiry insertInquiry(Inquiry inquiry) {
		// TODO Auto-generated method stub
		int inquiryIdx = inquiryRepository.selectNextinquiryIdx();
		inquiry.setInquiryIdx(inquiryIdx);
		return inquiryRepository.save(inquiry);
	}

//	@Autowired
//	private HelpdeskRepository helpdeskRepository;
//	
//	@Override
//	public List<Helpdesk> inquiryInfo(Helpdesk helpdesk){
//	
//	List<Helpdesk> inquiryInfoList = helpdeskRepository.findAll();
//	return inquiryInfoList;
//}

}
