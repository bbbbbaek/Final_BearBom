package com.spring.bearbom.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.spring.bearbom.dto.OrderDTO;
import com.spring.bearbom.entity.Course;
import com.spring.bearbom.entity.Order;

@Mapper
public interface OrderMapper {

	List<Course> getOrderedCourseListByUser(String userId);

	Order getOrder(OrderDTO orderDto);

}
