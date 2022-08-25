package com.spring.bearbom.repository;

import com.spring.bearbom.entity.Helpdesk;
import org.springframework.data.jpa.repository.JpaRepository;



public interface HelpdeskRepository extends JpaRepository<Helpdesk, Integer> {
	
}
