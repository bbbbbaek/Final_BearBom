package com.spring.bearbom.repository;

import com.spring.bearbom.entity.Reply;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ReplyRepository extends JpaRepository<Reply, Integer> {
	
}
