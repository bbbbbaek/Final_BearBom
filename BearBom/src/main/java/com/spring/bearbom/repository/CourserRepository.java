package com.spring.bearbom.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.bearbom.entity.Course;
import com.spring.bearbom.entity.Courser;
import com.spring.bearbom.entity.CourserId;



public interface CourserRepository extends JpaRepository<Courser, CourserId> {
	List<Courser> findByCourse(Course course);
}
