package com.spring.bearbom.controller.course;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.dto.CourserDTO;
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

//    @GetMapping("aaa")
//    public ResponseEntity<> ttt (@RequestParam String userId)

    
    @PostMapping("/getReviewList")
    public Map<String, Object> getReviewList(@RequestBody Course course) {
    	System.out.println(course.getCourseIdx());
    	
    	Courser courser = new Courser();
    	courser.setCourse(course);
    	
    	List<Courser> reviewList = courseRService.Review(courser);
    	
//    	List<Double> updateRating = courseRService.updateRating(courser);
    	
    	double averageRating = courseRService.updateRating(courser);
    	
    	System.out.println(averageRating);
    	Map<String, Object> resultMap = new HashMap<String, Object>();
    	
    	resultMap.put("reviewList", reviewList);
    	resultMap.put("averageRating", averageRating);
    	
    	return resultMap;


//    @PostMapping("/getReviewList")
//    public Map<String, Object> getReviewList(@RequestBody Course course) {
//        System.out.println(course.getCourseIdx());
//
//        Courser courser = new Courser();
//        courser.setCourse(course);
//
//        List<Courser> reviewList = courseRService.Review(courser);
//
////    	List<Double> updateRating = courseRService.updateRating(courser);
//
//        double averageRating = courseRService.updateRating(courser);
//
//        System.out.println(averageRating);
//        Map<String, Object> resultMap = new HashMap<String, Object>();
//
//        resultMap.put("reviewList", reviewList);
//        resultMap.put("averageRating", averageRating);
//
//        return resultMap;

    }

    @PostMapping("/writeReview")
    public ResponseEntity<?> writeReview(@RequestBody Map<String, String> paramMap) {
        System.out.println(paramMap.get("courseIdx"));
        System.out.println(paramMap.get("courserRate"));
        System.out.println(paramMap.get("courserContent"));

        Course course = new Course();
        Courser courser = new Courser();

        course.setCourseIdx(Integer.parseInt(paramMap.get("courseIdx")));

        courser.setCourse(course);
        courser.setCourserContent(paramMap.get("courserContent"));
        courser.setCourserRate(paramMap.get("courserRate"));

        //System.out.println(courser.getCourse().getCourseIdx());
        Courser review = courseRService.WriteReview(courser);
        CourserDTO courserDTO = new CourserDTO();

        courserDTO.setCourserIdx(review.getCourserIdx());
        courserDTO.setCourserContent(review.getCourserContent());
        courserDTO.setCourserRate(review.getCourserRate());
        courserDTO.setCourserMdfdate(review.getCourserMdfdate());
        courserDTO.setCourserRegdate(review.getCourserRegdate());
        courserDTO.setCourserUseYn(review.getCourserUseYn());

        return ResponseEntity.ok().body(courserDTO);
    }
}