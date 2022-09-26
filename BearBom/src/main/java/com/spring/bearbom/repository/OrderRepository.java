package com.spring.bearbom.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.spring.bearbom.entity.Order;


public interface OrderRepository extends JpaRepository<Order, Integer> {
	
	@Query(value="SELECT IFNULL(MAX(ORDER_IDX), 0) + 1 FROM T_ORDER", nativeQuery = true)
	int findNextOrderIdx(@Param("orderIdx") int orderIdx);
	
}
