package com.spring.bearbom.service.course;

import java.util.List;

import com.spring.bearbom.entity.Course;
import com.spring.bearbom.entity.Courser;

public interface CourserService {

    List<Courser> Review(Courser courser);

    Courser WriteReview(Courser courser);

//	List<Double> updateRating(Courser courser);

	

	double updateRating(Courser courser);
	
	List<Course> getCourseList(Course course);
    

}
