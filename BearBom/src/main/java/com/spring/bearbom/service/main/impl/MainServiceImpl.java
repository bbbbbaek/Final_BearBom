package com.spring.bearbom.service.main.impl;

import com.spring.bearbom.entity.Course;
import com.spring.bearbom.mapper.CourseMapper;
import com.spring.bearbom.mapper.MainMapper;
import com.spring.bearbom.repository.CourseRepository;
import com.spring.bearbom.service.main.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MainServiceImpl implements MainService {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private MainMapper mainMapper;

    @Override
    public List<Course> getCourseList(Course course) {
//        List<Course> courseList = courseRepository.findAll();
        List<Course> courseList = mainMapper.getCourseList(course);
        return courseList;
    }
}
