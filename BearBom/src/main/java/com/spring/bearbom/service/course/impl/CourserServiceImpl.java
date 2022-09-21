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
        List<Courser> reviewList  = courserRepository.findByCourseOrderByCourserIdxDesc(courser.getCourse());
        for(Courser courser1 : reviewList) {
    		System.out.println(courser1.toString());
    	}
        return reviewList;
    }

    @Override
    public Courser WriteReview(Courser courser) {
        int courserIdx = courserRepository.selectNextCourserIdx(courser.getCourse().getCourseIdx());
        courser.setCourserIdx(courserIdx);
        return courserRepository.save(courser);
    }

    @Override
	public double updateRating(int courseIdx) {
		// TODO Auto-generated method stub
		return courserMapper.updateRating(courseIdx);
	}

	@Override
	public double updateRating1(Courser courser) {
		// TODO Auto-generated method stub
		return courserMapper.updateRating1(courser);
	}

//	@Override
//	public double updateRating(Courser courser) {
//		// TODO Auto-generated method stub
//		return courserMapper.updateRating(courser);
//	}



	@Override
    public Course getCourse(int courseIdx) {
//        List<Course> courseList = courseRepository.findAll();
        Course course = courserMapper.getCourse(courseIdx);
        return course;
    }

	@Override
	public void updateCourseCnt(int courseIdx) {
		// TODO Auto-generated method stub
		courserMapper.updateCourseCnt(courseIdx);
	}
	

}