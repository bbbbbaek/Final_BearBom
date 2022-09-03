package com.spring.bearbom.controller.Course;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.dto.ResponseDTO;
import com.spring.bearbom.entity.Course;
import com.spring.bearbom.entity.Courser;
import com.spring.bearbom.jwt.JwtTokenProvider;
import com.spring.bearbom.service.courseR.CourseRService;

@RestController
@RequestMapping("/api/course")
public class CourseRController {

    @Autowired
    private CourseRService courseRService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @PostMapping("/getReviewList")
    public ResponseDTO<Courser> getReviewList(@RequestBody Course course) {
    	System.out.println(course.getCourseIdx());
    	Courser courser = new Courser();
    	courser.setCourse(course);
    	List<Courser> reviewList = courseRService.Review(courser);
    	ResponseDTO<Courser> response = new ResponseDTO<Courser>();
    	response.setData(reviewList);
    	return response;
    }
}
