package com.spring.bearbom.service.guide.impl;

import java.util.List;
import java.util.Map;

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
	private FaqMapper faqMapper;
	
	
	//백단에 저장하는것
	@Override
	public void insertFaq(GuideDTO guideDTO) {
		// TODO Auto-generated method stub
		faqMapper.insertFaq(guideDTO);
		
	}
	
	//Guide컨트롤러
	@Override
	public List<Guide> operation(Guide guide) {
		// TODO Auto-generated method stub
		
		List<Guide> oprationList = guideRepository.findAll();
		return oprationList;
	}

	
	// 업데이트

//	@Override
//	public void updateFaq(GuideDTO guideDTO) {
//		faqMapper.updateFaq(guideDTO);
//	}


	@Override
	public void mdfFaq(GuideDTO guideDTO) {
		faqMapper.mdfFaq(guideDTO);
		// TODO Auto-generated method stub
		
	}

//	@Override
//	public void updateFaq(Map<String, Object> paramMap) {
//		// TODO Auto-generated method stub
//		faqMapper.updateFaq(paramMap);
//	}

	@Override
	public void updateFaq(Integer id) {
		// TODO Auto-generated method stub
		faqMapper.updateFaq(id);
	}


	


	

	

	

	

	
}
