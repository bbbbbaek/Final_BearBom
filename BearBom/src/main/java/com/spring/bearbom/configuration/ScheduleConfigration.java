package com.spring.bearbom.configuration;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.spring.bearbom.service.course.CourseService;

@Component
public class ScheduleConfigration {
	
	@Autowired
	CourseService courseService;
    
	@Scheduled(cron = "0 0 * * * *")
    public void updateCourseUseYn() {
		courseService.setSqlSafe();
        courseService.updateCourseUseYnByDay();
        System.out.println("update useyn by date");
    }
    
//    @Scheduled(cron = "0 * * * * *")
//    public void test() {
//    	courseService.setSqlSafe();
//        courseService.updateCourseUseYnByDay();
//        System.out.println("update useyn by date");
//    	Date date = new Date();
//        System.out.println("test seconds");
//        System.out.println(date);
//    }
}