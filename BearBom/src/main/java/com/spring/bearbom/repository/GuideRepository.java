package com.spring.bearbom.repository;

import com.spring.bearbom.entity.Guide;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;



public interface GuideRepository extends JpaRepository<Guide, Integer> {
	@Query(value="select ifnull(max(a.guide_idx), 0) + 1 from t_guide a", nativeQuery = true)
	int selectNextGuideIdx();
	
	
}
