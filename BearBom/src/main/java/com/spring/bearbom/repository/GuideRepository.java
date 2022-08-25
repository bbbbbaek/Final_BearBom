package com.spring.bearbom.repository;

import com.spring.bearbom.entity.Guide;
import org.springframework.data.jpa.repository.JpaRepository;



public interface GuideRepository extends JpaRepository<Guide, Integer> {
	
}
