package com.spring.bearbom.controller.order;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.bearbom.dto.OrderDTO;
import com.spring.bearbom.entity.Course;
import com.spring.bearbom.entity.Order;
import com.spring.bearbom.entity.User;
import com.spring.bearbom.service.order.OrderService;

@RestController
@RequestMapping("/api/order")
public class OrderController {
	@Autowired
	OrderService orderService;
	
	@PostMapping("/orderRegistration")
	public void courseRegistration(HttpServletRequest request, @RequestParam Map<String, Object> paramMap,
			@AuthenticationPrincipal String userId) {
		Order order = new Order();
		User user = new User();
		Course course = new Course();
		course.setCourseIdx(Integer.parseInt(String.valueOf(paramMap.get("courseIdx"))));
		order.setCourse(course);
		user.setUserId(userId);
		order.setUser(user);
		LocalDateTime regDate = LocalDateTime.now().plusHours(9);
		order.setOrderRegdate(regDate);
		int orderIdx = orderService.findOrderIdx(0);
		order.setOrderIdx(orderIdx);
		
		orderService.orderRegistration(order);
		
	}
	
	@GetMapping("/getOrderList")
	public Map<String, Object> getOrderList(@AuthenticationPrincipal String userId){
		
		try {
          Map<String, Object> resultMap = new HashMap<String, Object>();
          List<Course> getOrderedCourseList = orderService.getOrderedCourseListByUser(userId);
          resultMap.put("getOrderedCourseList", getOrderedCourseList);
          System.out.println(resultMap);
          return resultMap;
          
      } catch (Exception e) {
          Map<String, Object> errorMap = new HashMap<String, Object>();
          errorMap.put("error",e.getMessage());
          return errorMap;
          
      }
	}
	
	@PostMapping("/updateOrderYn")
	public void updateOrderYn(HttpServletRequest request, @RequestParam Map<String, Object> paramMap,
			@AuthenticationPrincipal String userId) {
		int courseIdx = (Integer.parseInt(String.valueOf(paramMap.get("courseIdx"))));
		OrderDTO orderDto = new OrderDTO();
		orderDto.setCourseIdx(courseIdx);
		orderDto.setUserId(userId);
		Order order = orderService.getOrder(orderDto);
		
		order.setOrderNm(String.valueOf(paramMap.get("orderNm")));
		order.setPgNm(String.valueOf(paramMap.get("pgNm")));
		order.setPaymentMethod(String.valueOf(paramMap.get("paymentMethod")));
		LocalDateTime payDate = LocalDateTime.now().plusHours(9);
		order.setPaymentDate(payDate);
		
	}
}