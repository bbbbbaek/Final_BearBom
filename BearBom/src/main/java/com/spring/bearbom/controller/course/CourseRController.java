package com.spring.bearbom.controller.course;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.dto.CourserDTO;
import com.spring.bearbom.entity.Course;
import com.spring.bearbom.entity.Courser;
import com.spring.bearbom.entity.User;
import com.spring.bearbom.jwt.JwtTokenProvider;
import com.spring.bearbom.service.course.CourserService;

@RestController
@RequestMapping("/api/course")
public class CourseRController {

    @Autowired
    private CourserService courserService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

//    @GetMapping("aaa")
//    public ResponseEntity<> ttt (@RequestParam String userId)

    
    @PostMapping("/getReviewList")
    public Map<String, Object> getReviewList(@RequestBody Course course) {

    	
    	Courser courser = new Courser();
    	courser.setCourse(course);

        System.out.println("/////////" + courser);
    	List<Courser> reviewList = courserService.Review(courser);
    	
    	
//    	List<Double> updateRating = courseRService.updateRating(courser);
    	
    	double averageRating = courserService.updateRating(course.getCourseIdx());
    	
    	System.out.println(averageRating);
    	Map<String, Object> resultMap = new HashMap<String, Object>();
    	
    	resultMap.put("reviewList", reviewList);
    	resultMap.put("averageRating", averageRating);
    	
    	return resultMap;

    }

    @PostMapping("/writeReview")
    public Map<String, Object> writeReview(@RequestBody Map<String, String> paramMap, @AuthenticationPrincipal String userId) {
        System.out.println(paramMap.get("courseIdx"));
        System.out.println(paramMap.get("courserRate"));
        System.out.println(paramMap.get("courserContent"));


        Course course = new Course();
        Courser courser = new Courser();
        User user = new User();
        
        user.setUserId(userId);
        
        course.setCourseIdx(Integer.parseInt(paramMap.get("courseIdx")));
        
        courser.setCourse(course);
        courser.setUser(user);
        courser.setCourserContent(paramMap.get("courserContent"));
        courser.setCourserRate(paramMap.get("courserRate"));

        //System.out.println(courser.getCourse().getCourseIdx());
        Courser review = courserService.WriteReview(courser);
        
        List<Courser> reviewList = courserService.Review(courser);
    	
    	
//    	List<Double> updateRating = courseRService.updateRating(courser);

    	
    	//double averageRating = courserService.updateRating1(courser);


    	double averageRating = courserService.updateRating(course.getCourseIdx());

    	
    	System.out.println(averageRating);
    	Map<String, Object> resultMap = new HashMap<String, Object>();
    	
    	resultMap.put("reviewList", reviewList);
    	resultMap.put("averageRating", averageRating);
    	
    	return resultMap;
    }
    
    @GetMapping("/getCourse")
    public Map<String, Object> getCourse(@RequestParam("courseIdx") int courseIdx) {
    
        Course getCourse = courserService.getCourse(courseIdx);
        
        Map<String, Object> resultMap = new HashMap<String, Object>();
        
        resultMap.put("getCourse", getCourse);
        return resultMap;
    }
}