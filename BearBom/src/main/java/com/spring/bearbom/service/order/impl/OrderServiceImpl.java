package com.spring.bearbom.service.order.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.mapper.OrderMapper;
import com.spring.bearbom.repository.OrderRepository;
import com.spring.bearbom.service.order.OrderService;

@Service
public class OrderServiceImpl implements OrderService {
	
	@Autowired
	OrderRepository orderRepository;
	
	@Autowired
	private OrderMapper orderMapper;

}
