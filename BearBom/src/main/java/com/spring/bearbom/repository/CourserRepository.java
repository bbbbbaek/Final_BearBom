package com.spring.bearbom.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.spring.bearbom.entity.Course;
import com.spring.bearbom.entity.Courser;
import com.spring.bearbom.entity.CourserId;



public interface CourserRepository extends JpaRepository<Courser, CourserId> {
	List<Courser> findByCourse(Course course);
	
	@Query(value="select ifnull(max(a.courser_idx), 0) + 1 from t_courser a where a.course_idx = :courseIdx", nativeQuery = true)
	int selectNextCourserIdx(@Param("courseIdx") int courseIdx);


}
