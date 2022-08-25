package com.spring.bearbom.repository;

import com.spring.bearbom.entity.Like;
import com.spring.bearbom.entity.LikeId;
import org.springframework.data.jpa.repository.JpaRepository;



public interface LikeRepository extends JpaRepository<Like, LikeId> {
	
}
