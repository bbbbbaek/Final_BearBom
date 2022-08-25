package com.spring.bearbom.repository;

import com.spring.bearbom.entity.Courser;
import com.spring.bearbom.entity.CourserId;
import org.springframework.data.jpa.repository.JpaRepository;



public interface CourserRepository extends JpaRepository<Courser, CourserId> {
	
}
