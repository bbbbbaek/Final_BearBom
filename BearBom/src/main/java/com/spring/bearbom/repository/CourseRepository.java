package com.spring.bearbom.repository;

import com.spring.bearbom.entity.CmmnCode;
import com.spring.bearbom.entity.Course;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CourseRepository extends JpaRepository<Course, Integer> {
	
	@Query(value="SELECT IFNULL(MAX(COURSE_IDX), 0) + 1 FROM T_COURSE", nativeQuery = true)
	int findNextCourseIdx(@Param("courseIdx") int courseIdx);
}

