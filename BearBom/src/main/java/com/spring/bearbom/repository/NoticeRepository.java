package com.spring.bearbom.repository;

import com.spring.bearbom.entity.Notice;
import org.springframework.data.jpa.repository.JpaRepository;


public interface NoticeRepository extends JpaRepository<Notice, Integer> {
	
}
