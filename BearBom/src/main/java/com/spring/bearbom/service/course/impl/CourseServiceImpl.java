package com.spring.bearbom.service.course.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.entity.Course;
import com.spring.bearbom.entity.CourseFile;
import com.spring.bearbom.repository.CourseFileRepository;
import com.spring.bearbom.repository.CourseRepository;
import com.spring.bearbom.service.course.CourseService;

@Service
public class CourseServiceImpl implements CourseService {
	
	@Autowired
	CourseRepository courseRepository;
	
	@Autowired
	CourseFileRepository courseFileRepository;

	@Override
	public void courseRegistration(Course course) {
		courseRepository.save(course);
	}

	@Override
	public void courseFileSave(List<CourseFile> fileList) {
		courseFileRepository.saveAll(fileList);
	}

	@Override
	public int findCourseIdx(int i) {
		int newCourseIdx = courseRepository.findNextCourseIdx(i);
		return newCourseIdx;
	}


}
