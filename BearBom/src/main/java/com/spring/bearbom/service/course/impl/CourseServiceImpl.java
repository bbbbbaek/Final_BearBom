package com.spring.bearbom.service.course.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.repository.CourseRepository;
import com.spring.bearbom.service.course.CourseService;

@Service
public class CourseServiceImpl implements CourseService {
	
	@Autowired
	CourseRepository courseRepository;

	@Override
	public void courseReg(Object object) {
		//courseRepository.save
		
	}

}
