package com.spring.bearbom.controller.course;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.entity.Course;
import com.spring.bearbom.service.course.CourseService;

@RestController
@RequestMapping("/api/course")
public class CourseSearchController {
	@Autowired
	private CourseService courseService;


	@PostMapping("/searchCourse")
	public Map<String, Object> searchCourse(@RequestBody Map<String, Object> paramMap) {

		System.out.println(paramMap.toString());
		Course course = new Course();
		try{

			List<Map<String,Object>> getSearchProducts = courseService.getSearchProducts(paramMap);
			Map<String, Object> resultMap = new HashMap<>();
			resultMap.put("getSearchProducts", getSearchProducts);
			return resultMap;


		} catch (Exception e) {
			Map<String, Object> errorMap = new HashMap<>();
			errorMap.put("error", e.getMessage());
			return errorMap;
		}

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

	// 개설 클래스 조회
	@GetMapping("/getMyOpenedClassList")
	public Map<String, Object> getMyOpenedClassList(@AuthenticationPrincipal String userId/*, @RequestBody Map<String, Object> paramMap*/){
		try {
			Map<String, Object> returnMap = new HashMap<String, Object>();
	
			//paramMap.put("userId", userId);
			//넘겨줄 데이터가 있을경우 courseService.getMyOpenedClassList(paramMap.put("userId", userId);
			List<Map<String, Object>> myOpenedClassList = courseService.getMyOpenedClassList(userId);
	
			returnMap.put("myOpenedClassList", myOpenedClassList);
	
			return returnMap;
		} catch(Exception e) {
			Map<String, Object> errorMap = new HashMap<String, Object>();
	
			errorMap.put("error", e.getMessage());
			return errorMap;
		}
	}

	//수강 클래스 조회
	@GetMapping("/getTakenClassList")
	public Map<String, Object> getTakenClassList(@AuthenticationPrincipal String userId){
		try {
			Map<String, Object> returnMap = new HashMap<String, Object>();

			List<Map<String, Object>> takenClassList = courseService.getTakenClassList(userId);

			returnMap.put("takenClassList", takenClassList);

			return returnMap;

		} catch (Exception e) {
			Map<String, Object> errorMap = new HashMap<String, Object>();

			errorMap.put("error", e.getMessage());
			return errorMap;
		}
	}
}
