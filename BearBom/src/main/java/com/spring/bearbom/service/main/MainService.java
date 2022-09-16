package com.spring.bearbom.service.main;

import com.spring.bearbom.entity.Course;

import java.util.List;

public interface MainService {
    List<Course> getCourseList(Course course);

    List<Course> getCourseEndDateList(Course course);
}
