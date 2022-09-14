package com.spring.bearbom.service.courseR;

import java.util.List;

import com.spring.bearbom.entity.Courser;

public interface CourseRService {

    List<Courser> Review(Courser courser);
    
    Courser WriteReview(Courser courser);

//	List<Double> updateRating(Courser courser);

	

	double updateRating(Courser courser);
    
}
