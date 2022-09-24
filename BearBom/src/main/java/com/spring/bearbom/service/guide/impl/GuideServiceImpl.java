package com.spring.bearbom.service.guide.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.dto.GuideDTO;
import com.spring.bearbom.entity.Guide;
import com.spring.bearbom.mapper.FaqMapper;
import com.spring.bearbom.repository.GuideRepository;
import com.spring.bearbom.service.guide.GuideService;

@Service
public class GuideServiceImpl implements GuideService{

	@Autowired
	private GuideRepository guideRepository;
	
	@Autowired
	private FaqMapper faqMApper;
	
	
	//Guide컨트롤러
	@Override
	public List<Guide> operation(Guide guide) {
		// TODO Auto-generated method stub
		
		List<Guide> oprationList = guideRepository.findAll();
		return oprationList;
	}

	
	//Faq컨트롤러
	@Override
	public Guide insertFaq(Guide guide) {
		int guideIdx = guideRepository.selectNextGuideIdx();
		guide.setGuideIdx(guideIdx);
		return guideRepository.save(guide);
	}

	
	// 업데이트

	@Override
	public void updateFaq(GuideDTO guideDTO) {
		faqMApper.updateFaq(guideDTO);
	}


	@Override
	public void mdfFaq(GuideDTO guideDTO) {
		faqMApper.mdfFaq(guideDTO);
		// TODO Auto-generated method stub
		
	}

	

	

	
}
