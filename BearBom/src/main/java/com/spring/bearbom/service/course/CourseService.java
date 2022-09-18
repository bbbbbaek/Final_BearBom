package com.spring.bearbom.service.course;

import java.util.List;
import java.util.Map;

import com.spring.bearbom.entity.Course;
import com.spring.bearbom.entity.CourseFile;

public interface CourseService {

	void courseRegistration(Course course);

	void courseFileSave(List<CourseFile> fileList);

	int findCourseIdx(int i);
	
	List<Map<String, Object>> getLocationCodeList();
	
	List<Map<String, Object>> getCategoryCodeList();

    List<Map<String, Object>> getCourseList();
}
