package com.spring.bearbom.service.course;

import java.util.List;
import java.util.Map;

import com.spring.bearbom.dto.LikeDto;
import com.spring.bearbom.entity.Course;
import com.spring.bearbom.entity.CourseFile;
import com.spring.bearbom.entity.Notice;

public interface CourseService {

	void courseRegistration(Course course);

	void courseFileSave(List<CourseFile> fileList);

	int findCourseIdx(int i);
	
	List<Map<String, Object>> getLocationCodeList();
	
	List<Map<String, Object>> getCategoryCodeList();

    List<Map<String, Object>> getCourseList();

	List<Map<String, Object>> getSearchProducts(Map<String, Object> paramMap);
<<<<<<< HEAD
	
	List<Map<String, Object>> getMyOpenedClassList(String userId);
=======

	int findCourseFileIdxByCourseIdx(int i);
>>>>>>> ec7b70143b7dc4eae761a6532313d1098f40a221
}
