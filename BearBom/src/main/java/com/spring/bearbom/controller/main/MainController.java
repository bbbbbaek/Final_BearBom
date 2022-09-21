package com.spring.bearbom.controller.main;

import com.spring.bearbom.entity.Course;
import com.spring.bearbom.entity.Courser;
import com.spring.bearbom.service.course.CourserService;
import com.spring.bearbom.service.main.MainService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/main")
@Slf4j
public class MainController {

    @Autowired
    private MainService mainService;

    @Autowired
    private CourserService courserService;

//    @GetMapping("/getCourseList")
//    public ResponseEntity<?> getCourseList(Course course) {
//        List<Course> getCourseList = mainService.getCourseList(course);
//        return ResponseEntity.ok().body(getCourseList);
//    }

    @GetMapping("/getCourseList")
    public Map<String, Object> getCourseList(Course course, @AuthenticationPrincipal String userId) {
//        System.out.println("/////////"+course);


		System.out.println("/////////////////////////"+userId);

        System.out.println("///////////"+userId);


        try {
//            Courser courser = new Courser();
//            courser.setCourse(course);
            Map<String, Object> resultMap = new HashMap<String, Object>();
            List<Course> getCourseList = mainService.getCourseList(course);

//            List<Courser> averageRating = courserService.updateRating1(courser);

//            System.out.println(averageRating);
            resultMap.put("getCourseList", getCourseList);
//            resultMap.put("averageRating", averageRating);
            return resultMap;
        } catch (Exception e) {
            Map<String, Object> errorMap = new HashMap<String, Object>();
            errorMap.put("error",e.getMessage());
            return errorMap;
        }
    }

//    @GetMapping("/getCourseEndDateList")
//    public ResponseEntity<?> getCourseEndDateList(Course course) {
//        List<Course> getCourseEndDateList = mainService.getCourseEndDateList(course);
//        return ResponseEntity.ok().body(getCourseEndDateList);
//    }


    @GetMapping("/getCourseEndDateList")
    public Map<String, Object> getCourseEndDateList(Course course) {
//        System.out.println("/////////"+course);
        try {
//            Courser courser = new Courser();
//            courser.setCourse(course);
            Map<String, Object> resultMap = new HashMap<String, Object>();
            List<Course> getCourseEndDateList = mainService.getCourseEndDateList(course);

//            List<Courser> averageRating = courserService.updateRating1(courser);

//            System.out.println(averageRating);
            resultMap.put("getCourseEndDateList", getCourseEndDateList);
//            resultMap.put("averageRating", averageRating);
            return resultMap;
        } catch (Exception e) {
            Map<String, Object> errorMap = new HashMap<String, Object>();
            errorMap.put("error",e.getMessage());
            return errorMap;
        }
    }
}
