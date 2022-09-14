package com.spring.bearbom.controller.course;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.spring.bearbom.service.course.CourseService;

@RestController
@RequestMapping("/api/course")
public class CourseController {
	
	@Autowired
	CourseService courseService;
	

	@PostMapping("/courseRegistration")
	public void courseRegistration(MultipartHttpServletRequest multiPartHttpServletRequest, HttpServletRequest request,
			@RequestParam Map<String, Object> paramMap) throws IOException {
//		userService.updatePhoneNum(paramMap.get("phoneNum"));
//		
//		Course course
//		courseService.saveCourse()
//		
//		courseService.saveCourseFile(paramMap)
		//courseService.courseRegistration();
		//CourseDTO courseDTO = new CourseDTO();
		
		System.out.println(paramMap);
		Iterator<String> iterator = multiPartHttpServletRequest.getFileNames();
		
		while(iterator.hasNext()) {
			List<MultipartFile> list = multiPartHttpServletRequest.getFiles(iterator.next());
			
			for(MultipartFile m : list) {
				System.out.println(m.getOriginalFilename());
			}
		}
		//MultipartFile m = (MultipartFile) paramMap.get("selectedImage");
		System.out.println("---------------------------");
		//courseService.courseReg(paramMap.get(course));
		System.out.println(paramMap.get("courseNm"));
		//course.setCourseNm(paramMap.get(className));
		//System.out.println(m.getOriginalFilename());
		
	
	}
}
