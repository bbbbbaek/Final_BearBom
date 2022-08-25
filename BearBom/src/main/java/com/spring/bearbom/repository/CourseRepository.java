package com.spring.bearbom.repository;

import com.spring.bearbom.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;

public interface CourseRepository extends JpaRepository<Course, Integer> {

}

