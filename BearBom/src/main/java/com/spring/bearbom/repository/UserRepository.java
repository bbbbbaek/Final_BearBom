package com.spring.bearbom.repository;

import com.spring.bearbom.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User, String> {

	/* 유효성 검사 - 중복 체크
	 * 중복 : true
	 * 중복이 아닌 경우 : false
	 */
	boolean existsByUserId(String userId);
	
	User findByUserId(String userId);
//	User findByUserEmail(String userEmail);
	Optional<User> findByUserEmail(String userEmail);
}







