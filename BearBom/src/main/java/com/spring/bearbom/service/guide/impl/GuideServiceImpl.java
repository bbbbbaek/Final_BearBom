package com.spring.bearbom.service.guide.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.entity.Guide;
import com.spring.bearbom.repository.GuideRepository;
import com.spring.bearbom.service.guide.GuideService;

@Service
public class GuideServiceImpl implements GuideService{

	@Autowired
	private GuideRepository guideRepository;

	@Override
	public List<Guide> operation(Guide guide) {
		// TODO Auto-generated method stub
		
		List<Guide> oprationList = guideRepository.findAll();
		return oprationList;
	}

	
}
