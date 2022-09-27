package com.spring.bearbom.service.order.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.bearbom.dto.OrderDTO;
import com.spring.bearbom.entity.Course;
import com.spring.bearbom.entity.Order;
import com.spring.bearbom.mapper.OrderMapper;
import com.spring.bearbom.repository.OrderRepository;
import com.spring.bearbom.service.order.OrderService;

@Service
public class OrderServiceImpl implements OrderService {
	
	@Autowired
	OrderRepository orderRepository;
	
	@Autowired
	OrderMapper orderMapper;

	@Override
	public int findOrderIdx(int i) {
		int newOrderIdx = orderRepository.findNextOrderIdx(i);
		return newOrderIdx;
	}

	@Override
	public void orderRegistration(Order order) {
		orderRepository.save(order);
		
	}

	@Override
	public List<Course> getOrderedCourseListByUser(String userId) {
		List<Course> orderedCourseList = orderMapper.getOrderedCourseListByUser(userId);
		return orderedCourseList;
	}

	@Override
	public Order getOrder(OrderDTO orderDto) {
		Order selectOrder = orderMapper.getOrder(orderDto);
		return selectOrder;
	}

	@Override
	public void updateOrderYn(Order order) {
		orderRepository.save(order);
	}

	@Override
	public Order findByOrderIdx(int orderIdx) {
		Order orderTemp = orderMapper.findByOrderIdx(orderIdx);
		return orderTemp;
	}

	@Override
	public List<Course> getAllOrderList() {
		List<Course> allOrder = orderMapper.getAllOrder();
		return allOrder;
	}

}
