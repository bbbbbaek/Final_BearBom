package com.spring.bearbom.repository;

import com.spring.bearbom.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, String> {
	Boolean existsByUserId(String userId);
	
	User findByUserId(String userId);
}







