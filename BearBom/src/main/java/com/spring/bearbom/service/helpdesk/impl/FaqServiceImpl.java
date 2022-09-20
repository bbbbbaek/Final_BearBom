package com.spring.bearbom.service.helpdesk.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.entity.Guide;
import com.spring.bearbom.entity.Inquiry;
import com.spring.bearbom.mapper.FaqMapper;
import com.spring.bearbom.repository.GuideRepository;
import com.spring.bearbom.service.helpdesk.FaqService;
@Service
public class FaqServiceImpl implements FaqService{

	@Autowired
	private GuideRepository guideRepository;
@Autowired
private FaqMapper faqMapper;
	@Override
	public List<Guide> faq(Guide guide) {
		// TODO Auto-generated method stub

	List<Guide> faqList = faqMapper.faq(guide);
	return faqList;
//		List<Guide> faqList = guideRepository.findAll();
//		return faqList;
	}

	


	
}
