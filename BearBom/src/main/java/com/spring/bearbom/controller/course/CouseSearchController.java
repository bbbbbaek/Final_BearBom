package com.spring.bearbom.controller.course;

import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/course")
public class CouseSearchController {
	@PostMapping("/searchCourse")
	public void searchCourse(@RequestBody Map<String, Object> paramMap) {
		System.out.println(paramMap.toString());
	}
}
