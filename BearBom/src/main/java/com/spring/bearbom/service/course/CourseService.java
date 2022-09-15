package com.spring.bearbom.service.course;

import java.util.List;

import com.spring.bearbom.entity.Course;
import com.spring.bearbom.entity.CourseFile;

public interface CourseService {

	void courseRegistration(Course course);

	void courseFileSave(List<CourseFile> fileList);

	int findCourseIdx(int i);

}
