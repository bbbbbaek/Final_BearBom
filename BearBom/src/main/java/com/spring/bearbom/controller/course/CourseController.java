package com.spring.bearbom.controller.course;

import java.io.IOException;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.spring.bearbom.entity.Course;
import com.spring.bearbom.service.course.CourseService;

@RestController
@RequestMapping("/api/course")
public class CourseController {
	
	@Autowired
	CourseService courseService;
	

	@PostMapping(value = "/courseRegistration")
	public void courseRegistration(@RequestBody Map<String, Object> paramMap, MultipartHttpServletRequest multiPartHttpServletRequest, HttpServletRequest request) throws IOException {
//		userService.updatePhoneNum(paramMap.get("phoneNum"));
//		
//		Course cou
//		courseService.saveCourse()
//		
//		courseService.saveCourseFile(param)
		//courseService.courseRegistration();
		//Course course = new Course();
	
	}
}
