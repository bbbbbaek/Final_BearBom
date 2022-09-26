package com.spring.bearbom.service.order;

import java.util.List;

import com.spring.bearbom.dto.OrderDTO;
import com.spring.bearbom.entity.Course;
import com.spring.bearbom.entity.Order;

public interface OrderService {

	int findOrderIdx(int i);

	void orderRegistration(Order order);

	List<Course> getOrderedCourseListByUser(String userId);

	Order getOrder(OrderDTO orderDto);

	void updateOrderYn(Order order);


}
