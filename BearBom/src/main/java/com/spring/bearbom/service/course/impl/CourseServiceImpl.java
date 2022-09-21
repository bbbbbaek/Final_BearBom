package com.spring.bearbom.service.course.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.dto.LikeDto;
import com.spring.bearbom.entity.Course;
import com.spring.bearbom.entity.CourseFile;
import com.spring.bearbom.entity.Notice;
import com.spring.bearbom.mapper.CourseMapper;
import com.spring.bearbom.repository.CourseFileRepository;
import com.spring.bearbom.repository.CourseRepository;
import com.spring.bearbom.service.course.CourseService;

@Service
public class CourseServiceImpl implements CourseService {
	
	@Autowired
	CourseRepository courseRepository;
	
	@Autowired
	CourseFileRepository courseFileRepository;
	
	@Autowired
	private CourseMapper courseMapper;

	@Override
	public void courseRegistration(Course course) {
		courseRepository.save(course);
	}

	@Override
	public void courseFileSave(List<CourseFile> fileList) {
		for(CourseFile courseFile : fileList) {
			int fileIdx = courseMapper.getNextFileIdx(courseFile.getCourse().getCourseIdx());
			courseFile.setCourseFileIdx(fileIdx);
			courseFileRepository.save(courseFile);
		}
	}

	@Override
	public int findCourseIdx(int i) {
		int newCourseIdx = courseRepository.findNextCourseIdx(i);
		return newCourseIdx;
	}

	@Override
	public List<Map<String, Object>> getLocationCodeList() {
		return courseMapper.getLocationCodeList();
		
	}
	
	@Override
	public List<Map<String, Object>> getCategoryCodeList() {
		return courseMapper.getCategoryCodeList();
	}

	@Override
	public List<Map<String, Object>> getCourseList() {
		return courseMapper.getCourseList();
	}

	@Override
	public List<Map<String, Object>> getSearchProducts(Map<String, Object> paramMap) {
		Map<String, Object> pMap = new HashMap<>();
		pMap.put("searchProduct", paramMap);
//		{courseSearch=aaa, courseLocation=201, courseCategory=all,
//		courseLevel=중급, courseStTime=00:00,
//		courseEndTime=24:00, courseStCost=0, courseEndCost=1000000}

		return courseMapper.getSearchProducts(pMap);
	}

	
	@Override
    public List<Map<String, Object>> getMyOpenedClassList(String userId){
		return courseMapper.getMyOpenedClassList(userId);
	}

	@Override
	public int findCourseFileIdxByCourseIdx(int i) {
		int newCourseFileIdx = i+1;
		return newCourseFileIdx;
	}

}
