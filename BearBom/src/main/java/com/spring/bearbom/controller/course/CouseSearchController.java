package com.spring.bearbom.controller.course;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.service.course.CourseService;

@RestController
@RequestMapping("/api/course")
public class CouseSearchController {
	@Autowired
	private CourseService courseService;
	
	@PostMapping("/searchCourse")
	public void searchCourse(@RequestBody Map<String, Object> paramMap) {
		System.out.println(paramMap.toString());
	}
	
	@GetMapping("/getCommonCodeList")
	public Map<String, Object> getCommonCodeList() {
		try {
			List<Map<String, Object>> locationCodeList = courseService.getLocationCodeList();
			List<Map<String, Object>> categoryCodeList = courseService.getCategoryCodeList();
			
			Map<String, Object> resultMap = new HashMap<String, Object>();
			
			resultMap.put("locationCodeList", locationCodeList);
			resultMap.put("categoryCodeList", categoryCodeList);
			
			return resultMap;
		} catch(Exception e) {
			Map<String, Object> errorMap = new HashMap<String, Object>();
			errorMap.put("error", e.getMessage());
			return errorMap;
		}
	}

	@GetMapping("/getCourseList")
	public Map<String, Object> getCourseList() {
		try{
			List<Map<String, Object>> getCourseList = courseService.getCourseList();

			Map<String, Object> resultMap = new HashMap<>();

			resultMap.put("getCourseList",getCourseList);

			return resultMap;
		} catch (Exception e) {
			Map<String, Object> errorMap = new HashMap<String, Object>();
			errorMap.put("error", e.getMessage());
			return errorMap;
		}
	}
}
