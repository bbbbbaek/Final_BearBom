package com.spring.bearbom.repository;

import com.spring.bearbom.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OrderRepository extends JpaRepository<Order, Integer> {
	
}
