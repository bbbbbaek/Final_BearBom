package com.spring.bearbom.repository;

import com.spring.bearbom.entity.CourseFile;
import com.spring.bearbom.entity.CourseFileId;
import org.springframework.data.jpa.repository.JpaRepository;



public interface CourseFileRepository extends JpaRepository<CourseFile, CourseFileId> {
	
}
