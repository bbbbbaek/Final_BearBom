package com.spring.bearbom.repository;

import com.spring.bearbom.entity.CourseContentFile;
import com.spring.bearbom.entity.CourseContentFileId;
import org.springframework.data.jpa.repository.JpaRepository;



public interface CourseContentFileRepository extends JpaRepository<CourseContentFile, CourseContentFileId> {
	
}
