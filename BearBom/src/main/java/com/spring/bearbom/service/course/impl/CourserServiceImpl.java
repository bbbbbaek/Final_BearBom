package com.spring.bearbom.service.course.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.entity.Course;
import com.spring.bearbom.entity.Courser;
import com.spring.bearbom.mapper.CourserMapper;
import com.spring.bearbom.repository.CourserRepository;
import com.spring.bearbom.service.course.CourserService;

@Service
public class CourserServiceImpl implements CourserService {

    @Autowired
    private CourserRepository courserRepository;

    @Autowired
    private CourserMapper courserMapper;

    @Override
    public List<Courser> Review(Courser courser) {
        List<Courser> reviewList  = courserRepository.findByCourse(courser.getCourse());

        return reviewList;
    }

    @Override
    public Courser WriteReview(Courser courser) {
        int courserIdx = courserRepository.selectNextCourserIdx(courser.getCourse().getCourseIdx());
        courser.setCourserIdx(courserIdx);
        return courserRepository.save(courser);
    }


	@Override
	public double updateRating(Courser courser) {
		// TODO Auto-generated method stub
		return courserMapper.updateRating(courser.getCourserRate());
	}
	
	@Override
    public List<Course> getCourseList(Course course) {
//        List<Course> courseList = courseRepository.findAll();
        List<Course> courseList = courserMapper.getCourseList(course);
        return courseList;
    }
}