package com.spring.bearbom.service.helpdesk.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.entity.Guide;
import com.spring.bearbom.repository.GuideRepository;
import com.spring.bearbom.repository.HelpdeskRepository;
import com.spring.bearbom.service.helpdesk.FaqService;
@Service
public class FaqServiceImpl implements FaqService{

	@Autowired
	private GuideRepository guideRepository;

	@Override
	public List<Guide> faq(Guide guide) {
		// TODO Auto-generated method stub

		List<Guide> faqList = guideRepository.findAll();
		return faqList;
	}

	


	
}
