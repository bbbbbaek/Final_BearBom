package com.spring.bearbom.controller.course;

import com.spring.bearbom.entity.Course;
import com.spring.bearbom.service.course.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Time;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/course")
public class CourseSearchController {
	@Autowired
	private CourseService courseService;

	@PostMapping("/searchCourse")
	public Map<String, Object> searchCourse(@RequestBody Map<String, Object> paramMap) {
//		public void searchCourse(@RequestBody Map<String, Object> paramMap) {

		System.out.println(paramMap.toString());
		Course course = new Course();
		try{

//			course.setCourseLocation((String) paramMap.get("courseLocation"));
//			course.setCourseCategory(String.valueOf(paramMap.get("courseCategory")));
//			course.setCourseLevel((String) paramMap.get("courseLevel"));
//			course.setCourseNm((String) paramMap.get("courseSearch"));
//			course.setCourseStTime((Time) paramMap.get("courseStTime"));
//			course.setCourseEndTime((Time) paramMap.get("courseEndTime"));
//			course.setCourseStCost((Integer) paramMap.get("courseStCost"));
//			course.setCourseEndCost((Integer) paramMap.get("courseEndCost"));

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

//	@GetMapping("/search")
//	public Map<String, Object> getSearchProducts (@RequestParam String courseSearch){
//		try{
//			List<Map<String,Object>> getSearchProducts = courseService.getSearchProducts();
//
//			Map<String, Object> resultMap = new HashMap<>();
//
//			resultMap.put("getSearchProducts", getSearchProducts);
//
//			return resultMap;
//
//
//		} catch (Exception e) {
//			Map<String, Object> errorMap = new HashMap<>();
//			errorMap.put("error", e.getMessage());
//			return errorMap;
//		}
//	}
}
